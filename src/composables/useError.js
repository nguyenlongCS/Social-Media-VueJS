// composables/useError.js - Quản lý lỗi, loading, thông báo
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage.js'

// Global error state
const globalError = ref('')
const globalSuccessMessage = ref('')
const isLoading = ref(false)

export function useError() {
  const { currentLanguage } = useLanguage()

  // Centralized message configuration
  const messages = {
    EN: {
      errors: {
        // Auth errors
        'auth/user-not-found': 'No user found with this email address.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/invalid-email': 'Invalid email address.',
        'auth/user-disabled': 'This account has been disabled.',
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/weak-password': 'Password should be at least 6 characters.',
        'auth/invalid-credential': 'Invalid credentials. Please check your email and password.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        
        // Generic errors
        'login-failed': 'Login failed. Please try again.',
        'signup-failed': 'Signup failed. Please try again.',
        'password-reset-failed': 'Failed to send password reset email. Please try again.',
        'password-mismatch': 'Passwords do not match.',
        'email-required': 'Please enter your email address first.',
        'network-error': 'Network error. Please check your connection.',
        'unknown-error': 'An unexpected error occurred. Please try again.'
      },
      success: {
        'password-reset-sent': 'Password reset email sent! Check your inbox.',
        'login-success': 'Login successful!',
        'signup-success': 'Account created successfully!'
      },
      loading: {
        'logging-in': 'Logging in...',
        'signing-up': 'Signing up...',
        'sending-reset': 'Sending reset email...'
      }
    },
    VN: {
      errors: {
        // Auth errors
        'auth/user-not-found': 'Không tìm thấy người dùng với email này.',
        'auth/wrong-password': 'Mật khẩu không đúng.',
        'auth/invalid-email': 'Địa chỉ email không hợp lệ.',
        'auth/user-disabled': 'Tài khoản này đã bị vô hiệu hóa.',
        'auth/email-already-in-use': 'Tài khoản với email này đã tồn tại.',
        'auth/weak-password': 'Mật khẩu phải có ít nhất 6 ký tự.',
        'auth/invalid-credential': 'Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra email và mật khẩu.',
        'auth/too-many-requests': 'Quá nhiều lần thử không thành công. Vui lòng thử lại sau.',
        
        // Generic errors
        'login-failed': 'Đăng nhập thất bại. Vui lòng thử lại.',
        'signup-failed': 'Đăng ký thất bại. Vui lòng thử lại.',
        'password-reset-failed': 'Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.',
        'password-mismatch': 'Mật khẩu không khớp.',
        'email-required': 'Vui lòng nhập địa chỉ email trước.',
        'network-error': 'Lỗi mạng. Vui lòng kiểm tra kết nối.',
        'unknown-error': 'Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.'
      },
      success: {
        'password-reset-sent': 'Email đặt lại mật khẩu đã được gửi! Kiểm tra hộp thư của bạn.',
        'login-success': 'Đăng nhập thành công!',
        'signup-success': 'Tài khoản đã được tạo thành công!'
      },
      loading: {
        'logging-in': 'Đang đăng nhập...',
        'signing-up': 'Đang đăng ký...',
        'sending-reset': 'Đang gửi email đặt lại...'
      }
    }
  }

  const setError = (errorCode, fallbackKey = 'unknown-error') => {
    const errorMessages = messages[currentLanguage.value].errors
    globalError.value = errorMessages[errorCode] || errorMessages[fallbackKey]
    globalSuccessMessage.value = ''
  }

  const setSuccess = (successKey) => {
    const successMessages = messages[currentLanguage.value].success
    globalSuccessMessage.value = successMessages[successKey] || ''
    globalError.value = ''
  }

  const clearMessages = () => {
    globalError.value = ''
    globalSuccessMessage.value = ''
  }

  const setLoading = (loadingKey = null) => {
    isLoading.value = true
    if (loadingKey) {
      clearMessages()
    }
  }

  const clearLoading = () => {
    isLoading.value = false
  }

  // Handle Firebase auth errors specifically
  const handleAuthError = (error, fallbackKey) => {
    if (error.code) {
      setError(error.code, fallbackKey)
    } else if (error.message) {
      // Handle network errors or other non-Firebase errors
      if (error.message.includes('network')) {
        setError('network-error')
      } else {
        setError(fallbackKey)
      }
    } else {
      setError(fallbackKey)
    }
  }

  // Async wrapper for operations with consistent error handling
  const withErrorHandling = async (operation, loadingKey, successKey, fallbackErrorKey) => {
    try {
      setLoading(loadingKey)
      clearMessages()
      
      const result = await operation()
      
      if (successKey) {
        setSuccess(successKey)
      }
      
      return result
    } catch (error) {
      console.error('Operation failed:', error)
      handleAuthError(error, fallbackErrorKey)
      throw error // Re-throw to allow component-level handling if needed
    } finally {
      clearLoading()
    }
  }

  const getLoadingMessage = (key) => {
    return messages[currentLanguage.value].loading[key] || ''
  }

  return {
    // State
    error: computed(() => globalError.value),
    successMessage: computed(() => globalSuccessMessage.value),
    loading: computed(() => isLoading.value),
    
    // Methods
    setError,
    setSuccess,
    clearMessages,
    setLoading,
    clearLoading,
    handleAuthError,
    withErrorHandling,
    getLoadingMessage
  }
}