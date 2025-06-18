import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth, loginWithGoogle, loginWithFacebook } from '@/components/firebase.js'
import { useAuthStore } from '@/stores/authStore'
import { useError } from '@/composables/useError.js'
import { useStorage } from '@/composables/useStorage.js'

export function useAuth() {
  const router = useRouter()
  const { isLoggedIn, logout } = useAuthStore()
  const storage = useStorage()
  const { 
    error, 
    successMessage, 
    loading, 
    setError, 
    setSuccess, 
    clearMessages, 
    withErrorHandling,
    getLoadingMessage 
  } = useError()

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
          storage.auth.setRemembered(loginForm.email, encryptPassword(loginForm.password))
        } else {
          storage.auth.clearRemembered()
        }
        
        router.push('/home')
      },
      'logging-in',
      null,
      'login-failed'
    )
  }

  // Google Login
  const handleGoogleLogin = async () => {
    return withErrorHandling(
      async () => {
        const user = await loginWithGoogle()
        console.log('Google login successful:', user)
        router.push('/home')
        return user
      },
      'logging-in',
      null,
      'login-failed'
    )
  }

  // Facebook Login
  const handleFacebookLogin = async () => {
    return withErrorHandling(
      async () => {
        const user = await loginWithFacebook()
        console.log('Facebook login successful:', user)
        router.push('/home')
        return user
      },
      'logging-in',
      null,
      'login-failed'
    )
  }

  // Signup
  const handleSignup = async (signupForm, validate = true) => {
    // Allow bypassing validation if already validated externally
    if (validate && signupForm.password !== signupForm.confirmPassword) {
      setError('password-mismatch')
      return Promise.reject(new Error('Password mismatch'))
    }

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
  const handleForgotPassword = async (email, validate = true) => {
    // Allow bypassing validation if already validated externally
    if (validate && !email) {
      setError('email-required')
      return Promise.reject(new Error('Email required'))
    }

    return withErrorHandling(
      async () => {
        await sendPasswordResetEmail(auth, email)
      },
      'sending-reset',
      'password-reset-sent',
      'password-reset-failed'
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
    loading,
    error,
    successMessage,
    isLoggedIn,
    encryptPassword,
    decryptPassword,
    handleLogin,
    handleGoogleLogin,
    handleFacebookLogin,
    handleSignup,
    handleForgotPassword,
    handleLogout,
    clearMessages,
    getLoadingMessage
  }
}