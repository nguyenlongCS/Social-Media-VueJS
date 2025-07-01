// stores/authStore.js
import { ref, computed, readonly } from 'vue'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase.js'

// Global state
const user = ref(null)
const isInitialized = ref(false)
let unsubscribe = null

// Initialize auth listener once
const initializeAuth = () => {
  if (unsubscribe) return // Already initialized
  
  unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    isInitialized.value = true
  })
}

// Cleanup function
const cleanupAuth = () => {
  if (unsubscribe) {
    unsubscribe()
    unsubscribe = null
  }
}

// Centralized logout function
const logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    console.error('Logout error:', error)
    throw error
  }
}

export function useAuthStore() {
  // Initialize on first use
  if (!unsubscribe) {
    initializeAuth()
  }

  const isLoggedIn = computed(() => !!user.value)
  
  return {
    user: readonly(user),
    isLoggedIn,
    isInitialized: readonly(isInitialized),
    logout,
    cleanupAuth
  }
}