// composables/useAuth.js - Hợp nhất useAuth + useError + useSocialLogin
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { loginWithGoogle, loginWithFacebook } from '../../firebase.js'
import { auth } from '../../firebase.js'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'

// Global error state - hợp nhất từ useError.js
const globalError = ref('')
const globalSuccessMessage = ref('')
const isLoading = ref(false)

export function useAuth() {
  const router = useRouter()
  const { isLoggedIn, logout } = useAuthStore()
  const { currentLanguage } = useSettings()

  // Centralized message configuration - từ useError.js
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

  // Unified error handling method - merge setError và handleAuthError
  const handleError = (error, fallbackKey = 'unknown-error') => {
    const errorMessages = messages[currentLanguage.value].errors
    
    // Handle Firebase auth errors
    if (error.code) {
      globalError.value = errorMessages[error.code] || errorMessages[fallbackKey]
    } else if (error.message) {
      // Handle network errors or other non-Firebase errors
      if (error.message.includes('network')) {
        globalError.value = errorMessages['network-error']
      } else {
        globalError.value = errorMessages[fallbackKey]
      }
    } else if (typeof error === 'string') {
      // Handle validation errors
      globalError.value = errorMessages[error] || errorMessages[fallbackKey]
    } else {
      globalError.value = errorMessages[fallbackKey]
    }
    
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
      handleError(error, fallbackErrorKey)
      throw error // Re-throw to allow component-level handling if needed
    } finally {
      clearLoading()
    }
  }

  const getLoadingMessage = (key) => {
    return messages[currentLanguage.value].loading[key] || ''
  }

  // Hàm mã hóa mật khẩu đơn giản (Base64)
  const encryptPassword = (password) => {
    return btoa(password)
  }

  // Hàm giải mã mật khẩu
  const decryptPassword = (encryptedPassword) => {
    try {
      return atob(encryptedPassword)
    } catch (e) {
      return ''
    }
  }

  // Email/Password Login
  const handleLogin = async (loginForm, rememberMe) => {
    return withErrorHandling(
      async () => {
        await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        
        if (rememberMe) {
          const { setRememberedAuth } = useSettings()
          setRememberedAuth(loginForm.email, encryptPassword(loginForm.password))
        } else {
          const { clearRememberedAuth } = useSettings()
          clearRememberedAuth()
        }
        
        router.push('/home')
      },
      'logging-in',
      null,
      'login-failed'
    )
  }

  // Signup
  const handleSignup = async (signupForm) => {
    return withErrorHandling(
      async () => {
        await createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password)
        router.push('/home')
      },
      'signing-up',
      null,
      'signup-failed'
    )
  }

  // Forgot Password
  const handleForgotPassword = async (email) => {
    return withErrorHandling(
      async () => {
        await sendPasswordResetEmail(auth, email)
      },
      'sending-reset',
      'password-reset-sent',
      'password-reset-failed'
    )
  }

  // Social Login - hợp nhất từ useSocialLogin.js
  const handleGoogleLogin = async () => {
    return withErrorHandling(
      async () => {
        const user = await loginWithGoogle()
        console.log('Google login successful:', user)
        router.push('/home')
        return user
      },
      'logging-in',
      null, // No success message needed since we're redirecting
      'login-failed'
    )
  }

  const handleFacebookLogin = async () => {
    return withErrorHandling(
      async () => {
        const user = await loginWithFacebook()
        console.log('Facebook login successful:', user)
        router.push('/home')
        return user
      },
      'logging-in',
      null, // No success message needed since we're redirecting
      'login-failed'
    )
  }

  // Logout
  const handleLogout = async () => {
    if (!isLoggedIn.value) return
    
    try {
      await logout()
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return {
    // State
    loading: computed(() => isLoading.value),
    error: computed(() => globalError.value),
    successMessage: computed(() => globalSuccessMessage.value),
    isLoggedIn,
    
    // Auth methods
    encryptPassword,
    decryptPassword,
    handleLogin,
    handleSignup,
    handleForgotPassword,
    handleLogout,
    
    // Social login methods
    handleGoogleLogin,
    handleFacebookLogin,
    
    // Utility methods
    clearMessages,
    getLoadingMessage,
    handleError // Export unified error handler for external use
  }
}