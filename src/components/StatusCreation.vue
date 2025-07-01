<template>
  <div id="container-create-status">
    <!-- User Info -->
    <div class="user-info">
      <div class="avatar"></div>
      <span class="username">{{ t.me }}</span>
    </div>
    
    <!-- Upload Area -->
    <div class="upload-area" @click="triggerFileInput" :class="{ disabled: loading }">
      <!-- Empty State -->
      <div v-if="!selectedFile" class="upload-empty">
        <div class="plus-icon">+</div>
      </div>
      
      <!-- File Preview -->
      <div v-else class="file-preview">
        <!-- Image -->
        <img v-if="isImage" :src="filePreviewUrl" alt="Preview" class="preview-media">
        
        <!-- Video -->
        <video v-else-if="isVideo" :src="filePreviewUrl" class="preview-media" controls></video>
        
        <!-- Audio -->
        <div v-else-if="isAudio" class="audio-preview">
          <div class="audio-waveform">
            <img src="/src/components/icons/sound.gif" alt="Sound" class="voice-icon">
          </div>
          <div class="audio-controls">
            <audio :src="filePreviewUrl" class="audio-player" controls></audio>
          </div>
        </div>
        
        <!-- Other Files -->
        <div v-else class="file-info">
          <div class="file-icon">📄</div>
          <div class="file-name">{{ selectedFile.name }}</div>
        </div>
      </div>
      
      <input type="file" ref="fileInput" accept="image/*,video/*,audio/*" style="display: none;" @change="handleFileSelect">
    </div>
    
    <!-- Controls -->
    <div class="controls">
      <button class="control-btn close-btn" @click="cancelStatus" :disabled="loading">×</button>
      
      <div class="input-wrapper">
        <input 
          type="text" 
          v-model="statusCaption" 
          :placeholder="t.statusPlaceholder" 
          class="caption-input"
          :disabled="loading"
        >
      </div>
      
      <button 
        class="control-btn post-btn" 
        @click="postStatus" 
        :disabled="!canPost || loading" 
        :class="{ disabled: !canPost || loading }"
      >
        <img v-if="loading" src="/src/components/icons/loading.png" alt="Loading" class="control-icon loading">
        <img v-else src="/src/components/icons/post.png" alt="Post" class="control-icon">
      </button>
    </div>

    <!-- Messages -->
    <div v-if="error" class="error-message">{{ error }}</div>
    <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'
import { useFirestore } from '@/composables/useFirestore.js'

const router = useRouter()
const { t, currentLanguage } = useSettings()
const { createPostWithFile, loading, error, clearError } = useFirestore()

// State
const fileInput = ref(null)
const statusCaption = ref('')
const selectedFile = ref(null)
const filePreviewUrl = ref('')
const successMessage = ref('')

// Computed
const canPost = computed(() => !!selectedFile.value && !loading.value)
const isImage = computed(() => selectedFile.value?.type.startsWith('image/'))
const isVideo = computed(() => selectedFile.value?.type.startsWith('video/'))
const isAudio = computed(() => selectedFile.value?.type.startsWith('audio/'))

// Methods
const triggerFileInput = () => {
  if (loading.value) return
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  selectedFile.value = file
  
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
  }
  
  filePreviewUrl.value = URL.createObjectURL(file)
  clearError()
}

const cancelStatus = () => {
  if (loading.value) return
  cleanupAndNavigate('/home')
}

const postStatus = async () => {
  if (!selectedFile.value || loading.value) return
  
  try {
    clearError()
    successMessage.value = ''
    
    await createPostWithFile(selectedFile.value, statusCaption.value)
    
    successMessage.value = currentLanguage.value === 'EN' 
      ? 'Post created successfully!' 
      : 'Tạo bài viết thành công!'
    
    setTimeout(() => cleanupAndNavigate('/home'), 1500)
  } catch (createError) {
    console.error('Failed to create post:', createError)
  }
}

const cleanupAndNavigate = (route) => {
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
  }
  selectedFile.value = null
  statusCaption.value = ''
  successMessage.value = ''
  clearError()
  router.push(route)
}
</script>

<style scoped>
/* Container */
#container-create-status {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  gap: 20px;
}

/* User Info */
.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
}

.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
}

.username {
  color: var(--theme-color);
  font-weight: 600;
  font-size: 14px;
}

/* Upload Area */
.upload-area {
  flex: 1;
  border-radius: var(--border-radius);
  background: linear-gradient(135deg, var(--theme-color));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  overflow: hidden;
  position: relative;
}

.upload-area.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Upload States */
.upload-empty,
.file-preview {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.plus-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  color: var(--text-primary);
  transition: var(--transition);
}

/* Media Preview */
.preview-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

/* Audio Preview */
.audio-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px 20px 20px 20px;
}

.audio-waveform {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.voice-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.audio-controls {
  width: 100%;
  display: flex;
  justify-content: center;
}

.audio-player {
  width: 85%;
  height: 35px;
}

/* File Info */
.file-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  text-align: center;
}

.file-icon {
  font-size: 40px;
}

.file-name {
  color: var(--text-primary);
  font-weight: 500;
  font-size: 14px;
  word-break: break-word;
}

/* Controls */
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
}

.control-btn {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, var(--theme-color));
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  font-weight: bold;
}

.close-btn {
  font-size: 20px;
}

.control-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.control-icon.loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.control-btn:disabled,
.control-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input */
.input-wrapper {
  flex: 1;
  max-width: 200px;
  display: flex;
  justify-content: center;
}

.caption-input {
  width: 100%;
  padding: 12px 20px;
  border: none;
  border-radius: var(--border-radius-large);
  background: linear-gradient(135deg, var(--theme-color));
  color: var(--text-primary);
  font-size: 14px;
  text-align: center;
  outline: none;
  transition: var(--transition);
}

.caption-input::placeholder {
  color: var(--bg-tertiary);
  font-weight: 400;
}

.caption-input:focus:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(var(--theme-color-rgb), 0.3);
}

.caption-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Messages */
.error-message,
.success-message {
  margin-top: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
  font-size: 12px;
  text-align: center;
  flex-shrink: 0;
}

.error-message {
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff0000;
}

.success-message {
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  color: #00aa00;
}
</style>