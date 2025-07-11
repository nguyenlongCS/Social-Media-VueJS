// stores/messageStore.js - Global message management
import { ref, computed } from 'vue'

// Global message state
const successMessage = ref('')
const errorMessage = ref('')
const loadingMessage = ref('')

// Message management functions
export function useMessageStore() {
  // Set messages
  const setSuccess = (message) => {
    successMessage.value = message
    errorMessage.value = ''
    loadingMessage.value = ''
  }

  const setError = (message) => {
    errorMessage.value = message
    successMessage.value = ''
    loadingMessage.value = ''
  }

  const setLoading = (message) => {
    loadingMessage.value = message
    successMessage.value = ''
    errorMessage.value = ''
  }

  // Clear all messages
  const clearMessages = () => {
    successMessage.value = ''
    errorMessage.value = ''
    loadingMessage.value = ''
  }

  // Auto-clear success messages after delay
  const setSuccessWithDelay = (message, delay = 3000) => {
    setSuccess(message)
    setTimeout(() => {
      if (successMessage.value === message) {
        successMessage.value = ''
      }
    }, delay)
  }

  return {
    // State (readonly)
    successMessage: computed(() => successMessage.value),
    errorMessage: computed(() => errorMessage.value),
    loadingMessage: computed(() => loadingMessage.value),
    
    // Actions
    setSuccess,
    setError,
    setLoading,
    clearMessages,
    setSuccessWithDelay
  }
}