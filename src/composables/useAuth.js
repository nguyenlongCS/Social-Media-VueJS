// composables/useAuth.js
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '@/components/firebase.js'
import { useAuthStore } from '@/stores/authStore'
import { useError } from '@/composables/useError.js'
import { useStorage } from '@/composables/useStorage.js'
import { useSocialLogin } from '@/composables/useSocialLogin.js'

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
  
  // Import social login handlers from dedicated composable
  const { handleGoogleLogin, handleFacebookLogin } = useSocialLogin()

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
    handleGoogleLogin, // Reuse from useSocialLogin
    handleFacebookLogin, // Reuse from useSocialLogin
    handleSignup,
    handleForgotPassword,
    handleLogout,
    clearMessages,
    getLoadingMessage
  }
}