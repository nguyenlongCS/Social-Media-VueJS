import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAr4nGRhlqXyoHG7dZtqcbj-IN2Xcr0LqM",
  authDomain: "fir-auth-cozy.firebaseapp.com",
  projectId: "fir-auth-cozy",
  storageBucket: "fir-auth-cozy.firebasestorage.app",
  messagingSenderId: "306302302026",
  appId: "1:306302302026:web:63ffe859d4cbbeda6073b3",
  measurementId: "G-SSWWQ42BLN"
}

const app = initializeApp(firebaseConfig)
 
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Initialize providers
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

// Cấu hình Facebook provider để sử dụng session hiện tại
facebookProvider.setCustomParameters({
  'display': 'popup'
})

// Google Login
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error) {
    console.error('Google login error:', error)
    throw error
  }
}

// Facebook Login - Cải thiện UX và sử dụng session hiện tại
export const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider)
    return result.user
  } catch (error) {
    console.error('Facebook login error:', error)
    throw error
  }
}

export default app