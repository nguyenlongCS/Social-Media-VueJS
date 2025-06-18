// composables/useSocialLogin.js
import { loginWithGoogle, loginWithFacebook } from '@/components/firebase.js'
import { useRouter } from 'vue-router'
import { useError } from '@/composables/useError.js'

export function useSocialLogin() {
  const router = useRouter()
  const { withErrorHandling } = useError()

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

  return {
    handleGoogleLogin,
    handleFacebookLogin
  }
}