// composables/useFirestore.js - Fixed to preserve posts and show messages
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
import { useMessageStore } from '@/stores/messageStore.js'

// Local state
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

const loadingMessages = {
  EN: {
    'uploading': 'Uploading file...',
    'creating-post': 'Creating post...',
    'loading-posts': 'Loading posts...',
    'deleting-post': 'Deleting post...'
  },
  VN: {
    'uploading': 'Đang tải file lên...',
    'creating-post': 'Đang tạo bài viết...',
    'loading-posts': 'Đang tải bài viết...',
    'deleting-post': 'Đang xóa bài viết...'
  }
}

const successMessages = {
  EN: {
    'post-created': 'Post created successfully!',
    'post-deleted': 'Post deleted successfully!'
  },
  VN: {
    'post-created': 'Tạo bài viết thành công!',
    'post-deleted': 'Xóa bài viết thành công!'
  }
}

export function useFirestore() {
  const { user } = useAuthStore()
  const { currentLanguage } = useSettings()
  const { setError, setSuccess, setLoading, clearMessages, setSuccessWithDelay } = useMessageStore()

  // Error utilities - both local and global
  const setErrorMessage = (errorKey) => {
    const message = errorMessages[currentLanguage.value][errorKey] || errorKey
    error.value = message
    setError(message)
  }

  const clearError = () => {
    error.value = ''
  }

  const handleSuccess = (successKey, withDelay = true) => {
    const message = successMessages[currentLanguage.value][successKey] || ''
    if (withDelay) {
      setSuccessWithDelay(message)
    } else {
      setSuccess(message)
    }
  }

  const handleLoading = (loadingKey) => {
    const message = loadingMessages[currentLanguage.value][loadingKey] || ''
    setLoading(message)
  }

  // File validation
  const validateFile = (file) => {
    const MAX_SIZE = 10 * 1024 * 1024 // 10MB
    const ALLOWED_TYPES = ['image/', 'video/', 'audio/']
    
    if (file.size > MAX_SIZE) {
      setErrorMessage('file-too-large')
      return false
    }

    if (!ALLOWED_TYPES.some(type => file.type.startsWith(type))) {
      setErrorMessage('invalid-file-type')
      return false
    }

    return true
  }

  // Upload file to Firebase Storage
  const uploadFile = async (file) => {
    if (!user.value) {
      setErrorMessage('unauthorized')
      throw new Error('User not authenticated')
    }

    if (!validateFile(file)) {
      throw new Error('File validation failed')
    }

    try {
      handleLoading('uploading')
      
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
      setErrorMessage('upload-failed')
      throw uploadError
    }
  }

  // Create new post
  const createPost = async (postData) => {
    if (!user.value) {
      setErrorMessage('unauthorized')
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
      setErrorMessage('post-failed')
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
      clearMessages()
      handleLoading('creating-post')

      const fileData = await uploadFile(file)
      
      const postData = {
        caption,
        mediaUrl: fileData.url,
        mediaType: fileData.fileType,
        fileName: fileData.fileName,
        storagePath: fileData.storagePath
      }

      const post = await createPost(postData)
      
      // Show success message
      console.log('Post created, showing success message') // Debug log
      handleSuccess('post-created')
      
      return post
    } catch (error) {
      console.error('Create post with file error:', error)
      throw error
    } finally {
      isLoading.value = false
      setLoading('')
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
      setErrorMessage('fetch-failed')
      throw fetchError
    } finally {
      isLoading.value = false
    }
  }

  // Delete post and associated file
  const deletePost = async (postId, storagePath = null) => {
    if (!user.value) {
      setErrorMessage('unauthorized')
      throw new Error('User not authenticated')
    }

    try {
      isLoading.value = true
      clearError()
      clearMessages()
      handleLoading('deleting-post')

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
      handleSuccess('post-deleted')
      
      return true
    } catch (deleteError) {
      console.error('Delete post error:', deleteError)
      setErrorMessage('delete-failed')
      throw deleteError
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  // Update post
  const updatePost = async (postId, updates) => {
    if (!user.value) {
      setErrorMessage('unauthorized')
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
      setErrorMessage('post-failed')
      throw updateError
    } finally {
      isLoading.value = false
    }
  }

  return {
    // State - keep both local and global compatibility
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