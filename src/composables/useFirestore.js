// composables/useFirestore.js - Optimized for better error handling
import { ref, computed } from 'vue'
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import { 
  ref as storageRef, 
  uploadBytes, 
  getDownloadURL,
  deleteObject
} from 'firebase/storage'
import { db, storage } from '../../firebase.js'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'

// Global state
const isLoading = ref(false)
const error = ref('')

// Error messages
const errorMessages = {
  EN: {
    'upload-failed': 'Failed to upload file. Please try again.',
    'post-failed': 'Failed to create post. Please try again.',
    'fetch-failed': 'Failed to load posts. Please try again.',
    'delete-failed': 'Failed to delete post. Please try again.',
    'unauthorized': 'You must be logged in to perform this action.',
    'file-too-large': 'File size must be less than 10MB.',
    'invalid-file-type': 'Invalid file type. Only images, videos, and audio files are allowed.'
  },
  VN: {
    'upload-failed': 'Tải file lên thất bại. Vui lòng thử lại.',
    'post-failed': 'Tạo bài viết thất bại. Vui lòng thử lại.',
    'fetch-failed': 'Tải bài viết thất bại. Vui lòng thử lại.',
    'delete-failed': 'Xóa bài viết thất bại. Vui lòng thử lại.',
    'unauthorized': 'Bạn phải đăng nhập để thực hiện hành động này.',
    'file-too-large': 'Kích thước file phải nhỏ hơn 10MB.',
    'invalid-file-type': 'Loại file không hợp lệ. Chỉ cho phép ảnh, video và âm thanh.'
  }
}

export function useFirestore() {
  const { user } = useAuthStore()
  const { currentLanguage } = useSettings()

  // Error utilities
  const setError = (errorKey) => {
    error.value = errorMessages[currentLanguage.value][errorKey] || errorKey
  }

  const clearError = () => {
    error.value = ''
  }

  // File validation
  const validateFile = (file) => {
    const MAX_SIZE = 10 * 1024 * 1024 // 10MB
    const ALLOWED_TYPES = ['image/', 'video/', 'audio/']
    
    if (file.size > MAX_SIZE) {
      setError('file-too-large')
      return false
    }

    if (!ALLOWED_TYPES.some(type => file.type.startsWith(type))) {
      setError('invalid-file-type')
      return false
    }

    return true
  }

  // Upload file to Firebase Storage
  const uploadFile = async (file) => {
    if (!user.value) {
      setError('unauthorized')
      throw new Error('User not authenticated')
    }

    if (!validateFile(file)) {
      throw new Error('File validation failed')
    }

    try {
      const fileName = `${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `uploads/${user.value.uid}/${fileName}`)
      
      const uploadResult = await uploadBytes(fileRef, file)
      const downloadURL = await getDownloadURL(uploadResult.ref)
      
      return {
        url: downloadURL,
        fileName,
        fileType: file.type,
        fileSize: file.size,
        storagePath: uploadResult.ref.fullPath
      }
    } catch (uploadError) {
      console.error('File upload error:', uploadError)
      setError('upload-failed')
      throw uploadError
    }
  }

  // Create new post
  const createPost = async (postData) => {
    if (!user.value) {
      setError('unauthorized')
      throw new Error('User not authenticated')
    }

    try {
      isLoading.value = true
      clearError()

      const docData = {
        userId: user.value.uid,
        userEmail: user.value.email,
        caption: postData.caption || '',
        mediaUrl: postData.mediaUrl || '',
        mediaType: postData.mediaType || '',
        fileName: postData.fileName || '',
        storagePath: postData.storagePath || '',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        likes: 0,
        comments: 0
      }

      const docRef = await addDoc(collection(db, 'posts'), docData)
      
      return {
        id: docRef.id,
        ...docData
      }
    } catch (createError) {
      console.error('Create post error:', createError)
      setError('post-failed')
      throw createError
    } finally {
      isLoading.value = false
    }
  }

  // Create post with file upload
  const createPostWithFile = async (file, caption = '') => {
    try {
      isLoading.value = true
      clearError()

      const fileData = await uploadFile(file)
      
      const postData = {
        caption,
        mediaUrl: fileData.url,
        mediaType: fileData.fileType,
        fileName: fileData.fileName,
        storagePath: fileData.storagePath
      }

      const post = await createPost(postData)
      return post
    } catch (error) {
      console.error('Create post with file error:', error)
      throw error
    }
  }

  // Get posts with pagination
  const getPosts = async (limitCount = 10) => {
    try {
      isLoading.value = true
      clearError()

      const q = query(
        collection(db, 'posts'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      )

      const querySnapshot = await getDocs(q)
      const posts = []

      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data()
        })
      })

      return posts
    } catch (fetchError) {
      console.error('Get posts error:', fetchError)
      setError('fetch-failed')
      throw fetchError
    } finally {
      isLoading.value = false
    }
  }

  // Delete post and associated file
  const deletePost = async (postId, storagePath = null) => {
    if (!user.value) {
      setError('unauthorized')
      throw new Error('User not authenticated')
    }

    try {
      isLoading.value = true
      clearError()

      // Delete file from storage if exists
      if (storagePath) {
        try {
          const fileRef = storageRef(storage, storagePath)
          await deleteObject(fileRef)
        } catch (storageError) {
          console.warn('Failed to delete file from storage:', storageError)
          // Continue with post deletion even if file deletion fails
        }
      }

      // Delete post document
      await deleteDoc(doc(db, 'posts', postId))
      
      return true
    } catch (deleteError) {
      console.error('Delete post error:', deleteError)
      setError('delete-failed')
      throw deleteError
    } finally {
      isLoading.value = false
    }
  }

  // Update post
  const updatePost = async (postId, updates) => {
    if (!user.value) {
      setError('unauthorized')
      throw new Error('User not authenticated')
    }

    try {
      isLoading.value = true
      clearError()

      const postRef = doc(db, 'posts', postId)
      const updateData = {
        ...updates,
        updatedAt: serverTimestamp()
      }

      await updateDoc(postRef, updateData)
      
      return true
    } catch (updateError) {
      console.error('Update post error:', updateError)
      setError('post-failed')
      throw updateError
    } finally {
      isLoading.value = false
    }
  }

  return {
    // State
    loading: computed(() => isLoading.value),
    error: computed(() => error.value),
    
    // Methods
    uploadFile,
    createPost,
    createPostWithFile,
    getPosts,
    deletePost,
    updatePost,
    
    // Utilities
    clearError,
    validateFile
  }
}