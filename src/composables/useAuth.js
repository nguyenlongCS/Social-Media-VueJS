// composables/useAuth.js - Fixed to actually use global messages
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { loginWithGoogle, loginWithFacebook } from '../../firebase.js'
import { auth } from '../../firebase.js'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'
import { useMessageStore } from '@/stores/messageStore.js'

// Local loading state only
const isLoading = ref(false)

// Error and success messages
const messages = {
  EN: {
    errors: {
      'auth/user-not-found': 'No user found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-credential': 'Invalid credentials. Please check your email and password.',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
      'login-failed': 'Login failed. Please try again.',
      'signup-failed': 'Signup failed. Please try again.',
      'password-reset-failed': 'Failed to send password reset email. Please try again.',
      'password-mismatch': 'Passwords do not match.',
      'email-required': 'Please enter your email address first.',
      'password-required': 'Please enter your password.',
      'confirm-password-required': 'Please confirm your password.',
      'email-invalid': 'Please enter a valid email address.',
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
      'auth/user-not-found': 'Không tìm thấy người dùng với email này.',
      'auth/wrong-password': 'Mật khẩu không đúng.',
      'auth/invalid-email': 'Địa chỉ email không hợp lệ.',
      'auth/user-disabled': 'Tài khoản này đã bị vô hiệu hóa.',
      'auth/email-already-in-use': 'Tài khoản với email này đã tồn tại.',
      'auth/weak-password': 'Mật khẩu phải có ít nhất 6 ký tự.',
      'auth/invalid-credential': 'Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra email và mật khẩu.',
      'auth/too-many-requests': 'Quá nhiều lần thử không thành công. Vui lòng thử lại sau.',
      'login-failed': 'Đăng nhập thất bại. Vui lòng thử lại.',
      'signup-failed': 'Đăng ký thất bại. Vui lòng thử lại.',
      'password-reset-failed': 'Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.',
      'password-mismatch': 'Mật khẩu không khớp.',
      'email-required': 'Vui lòng nhập địa chỉ email trước.',
      'password-required': 'Vui lòng nhập mật khẩu.',
      'confirm-password-required': 'Vui lòng xác nhận mật khẩu.',
      'email-invalid': 'Vui lòng nhập địa chỉ email hợp lệ.',
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

export function useAuth() {
  const router = useRouter()
  const { isLoggedIn, logout } = useAuthStore()
  const { currentLanguage } = useSettings()
  const { setError, setSuccess, setLoading, clearMessages, setSuccessWithDelay } = useMessageStore()

  // Message utilities - ALWAYS use global store
  const handleError = (error, fallbackKey = 'unknown-error') => {
    const errorMessages = messages[currentLanguage.value].errors
    
    let errorMessage = ''
    if (error.code) {
      errorMessage = errorMessages[error.code] || errorMessages[fallbackKey]
    } else if (error.message?.includes('network')) {
      errorMessage = errorMessages['network-error']
    } else if (typeof error === 'string') {
      errorMessage = errorMessages[error] || errorMessages[fallbackKey]
    } else {
      errorMessage = errorMessages[fallbackKey]
    }
    
    console.log('Auth Error:', errorMessage) // Debug log
    setError(errorMessage)
  }

  // Message utilities for validation errors
  const handleValidationError = (errorKey) => {
    const errorMessages = messages[currentLanguage.value].errors
    const message = errorMessages[errorKey] || errorMessages['unknown-error']
    console.log('Validation Error:', message) // Debug log
    setError(message)
  }

  const setSuccessMessage = (successKey) => {
    const successMessages = messages[currentLanguage.value].success
    const message = successMessages[successKey] || ''
    console.log('Auth Success:', message) // Debug log
    setSuccessWithDelay(message, 2000)
  }

  const setLoadingMessage = (loadingKey) => {
    const loadingMessages = messages[currentLanguage.value].loading
    const message = loadingMessages[loadingKey] || ''
    console.log('Auth Loading:', message) // Debug log
    setLoading(message)
  }

  // Password encryption utilities
  const encryptPassword = (password) => btoa(password)
  
  const decryptPassword = (encryptedPassword) => {
    try {
      return atob(encryptedPassword)
    } catch (e) {
      return ''
    }
  }

  // Authentication methods - Fixed to use global messages
  const handleLogin = async (loginForm, rememberMe) => {
    try {
      isLoading.value = true
      clearMessages()
      setLoadingMessage('logging-in')
      
      await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      
      if (rememberMe) {
        const { setRememberedAuth } = useSettings()
        setRememberedAuth(loginForm.email, encryptPassword(loginForm.password))
      } else {
        const { clearRememberedAuth } = useSettings()
        clearRememberedAuth()
      }
      
      setSuccessMessage('login-success')
      
      // Navigate after showing success message
      setTimeout(() => {
        router.push('/home')
      }, 1000)
      
    } catch (error) {
      console.error('Login failed:', error)
      handleError(error, 'login-failed')
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  const handleSignup = async (signupForm) => {
    try {
      isLoading.value = true
      clearMessages()
      setLoadingMessage('signing-up')
      
      await createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password)
      
      setSuccessMessage('signup-success')
      
      // Navigate after showing success message
      setTimeout(() => {
        router.push('/home')
      }, 1000)
      
    } catch (error) {
      console.error('Signup failed:', error)
      handleError(error, 'signup-failed')
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  const handleForgotPassword = async (email) => {
    try {
      isLoading.value = true
      clearMessages()
      setLoadingMessage('sending-reset')
      
      await sendPasswordResetEmail(auth, email)
      setSuccessMessage('password-reset-sent')
      
    } catch (error) {
      console.error('Password reset failed:', error)
      handleError(error, 'password-reset-failed')
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  const handleGoogleLogin = async () => {
    try {
      isLoading.value = true
      clearMessages()
      setLoadingMessage('logging-in')
      
      const user = await loginWithGoogle()
      console.log('Google login successful:', user)
      
      setSuccessMessage('login-success')
      
      setTimeout(() => {
        router.push('/home')
      }, 1000)
      
      return user
    } catch (error) {
      console.error('Google login failed:', error)
      handleError(error, 'login-failed')
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  const handleFacebookLogin = async () => {
    try {
      isLoading.value = true
      clearMessages()
      setLoadingMessage('logging-in')
      
      const user = await loginWithFacebook()
      console.log('Facebook login successful:', user)
      
      setSuccessMessage('login-success')
      
      setTimeout(() => {
        router.push('/home')
      }, 1000)
      
      return user
    } catch (error) {
      console.error('Facebook login failed:', error)
      handleError(error, 'login-failed')
    } finally {
      isLoading.value = false
      setLoading('')
    }
  }

  const handleLogout = async () => {
    if (!isLoggedIn.value) return
    
    try {
      await logout()
      clearMessages()
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
      handleError(error)
    }
  }

  return {
    // State
    loading: computed(() => isLoading.value),
    isLoggedIn,
    
    // Auth methods
    encryptPassword,
    decryptPassword,
    handleLogin,
    handleSignup,
    handleForgotPassword,
    handleLogout,
    handleGoogleLogin,
    handleFacebookLogin,
    
    // Utility methods
    handleError,
    handleValidationError
  }
}