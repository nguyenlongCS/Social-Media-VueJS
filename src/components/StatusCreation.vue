<template>
  <div id="container-create-status">
    <!-- User Info Section -->
    <div class="user-info">
      <div class="avatar"></div>
      <span class="username">{{ t.me }}</span>
    </div>
    
    <!-- Upload Section -->
    <div class="upload-area" @click="triggerFileInput">
      <!-- Empty State -->
      <div v-if="!selectedFile" class="upload-empty">
        <div class="plus-icon">+</div>
      </div>
      
      <!-- File Preview -->
      <div v-else class="file-preview">
        <img v-if="isImage" :src="filePreviewUrl" alt="Preview" class="preview-media">
        <video v-else-if="isVideo" :src="filePreviewUrl" class="preview-media" controls></video>
        <div v-else class="file-info">
          <div class="file-icon">📄</div>
          <div class="file-name">{{ selectedFile.name }}</div>
        </div>
      </div>
      
      <input type="file" ref="fileInput" accept="image/*,video/*" style="display: none;" @change="handleFileSelect">
    </div>
    
    <!-- Controls Section -->
    <div class="controls">
      <button class="control-btn close-btn" @click="cancelStatus">×</button>
      
      <div class="input-wrapper">
        <input 
          type="text" 
          v-model="statusCaption" 
          :placeholder="t.statusPlaceholder" 
          class="caption-input"
        >
      </div>
      
      <button 
        class="control-btn post-btn" 
        @click="postStatus" 
        :disabled="!canPost" 
        :class="{ disabled: !canPost }"
      >
        ➤
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'

const router = useRouter()
const { t } = useSettings()

// Reactive state
const fileInput = ref(null)
const statusCaption = ref('')
const selectedFile = ref(null)
const filePreviewUrl = ref('')

// Methods
const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    
    // Cleanup previous URL
    if (filePreviewUrl.value) {
      URL.revokeObjectURL(filePreviewUrl.value)
    }
    
    // Create new preview URL
    filePreviewUrl.value = URL.createObjectURL(file)
    console.log('Selected file:', file)
  }
}

const cancelStatus = () => {
  cleanupAndNavigate('/home')
}

const postStatus = () => {
  if (!selectedFile.value) return
  
  console.log('Posting status:', statusCaption.value, selectedFile.value)
  cleanupAndNavigate('/home')
}

const cleanupAndNavigate = (route) => {
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
  }
  router.push(route)
}

// Computed properties
const canPost = computed(() => !!selectedFile.value)
const isImage = computed(() => selectedFile.value?.type.startsWith('image/'))
const isVideo = computed(() => selectedFile.value?.type.startsWith('video/'))
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
}

.upload-area:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(var(--theme-color-rgb), 0.3);
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

/* Preview Media */
.preview-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
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

.control-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(var(--theme-color-rgb), 0.3);
}

.close-btn {
  font-size: 20px;
}

.post-btn {
  font-size: 16px;
}

.post-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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

.caption-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(var(--theme-color-rgb), 0.3);
}
</style>