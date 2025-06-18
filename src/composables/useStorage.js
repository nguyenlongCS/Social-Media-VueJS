// composables/useStorage.js
import { ref, watch } from 'vue'

// Storage keys constants
export const STORAGE_KEYS = {
  LANGUAGE: 'selectedLanguage',
  THEME: 'selectedTheme',
  THEME_RGB: 'selectedThemeRgb',
  REMEMBERED_EMAIL: 'rememberedEmail',
  REMEMBERED_PASSWORD: 'rememberedPassword'
}

// Default values
const DEFAULTS = {
  [STORAGE_KEYS.LANGUAGE]: 'EN',
  [STORAGE_KEYS.THEME]: '#ffeb7c',
  [STORAGE_KEYS.THEME_RGB]: '255, 235, 124',
  [STORAGE_KEYS.REMEMBERED_EMAIL]: null,
  [STORAGE_KEYS.REMEMBERED_PASSWORD]: null
}

export function useStorage() {
  // Generic storage operations
  const getItem = (key, defaultValue = null) => {
    try {
      const value = localStorage.getItem(key)
      return value !== null ? value : defaultValue
    } catch (error) {
      console.warn(`Failed to get localStorage item "${key}":`, error)
      return defaultValue
    }
  }

  const setItem = (key, value) => {
    try {
      if (value === null || value === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, value)
      }
    } catch (error) {
      console.warn(`Failed to set localStorage item "${key}":`, error)
    }
  }

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.warn(`Failed to remove localStorage item "${key}":`, error)
    }
  }

  // Create reactive storage for a specific key
  const createReactiveStorage = (key, defaultValue = null) => {
    const storedValue = getItem(key, defaultValue || DEFAULTS[key])
    const reactiveRef = ref(storedValue)

    // Watch for changes and sync to localStorage
    watch(reactiveRef, (newValue) => {
      setItem(key, newValue)
    }, { immediate: false })

    return reactiveRef
  }

  // Specific storage methods for different features
  const language = {
    get: () => getItem(STORAGE_KEYS.LANGUAGE, DEFAULTS[STORAGE_KEYS.LANGUAGE]),
    set: (value) => setItem(STORAGE_KEYS.LANGUAGE, value),
    createReactive: () => createReactiveStorage(STORAGE_KEYS.LANGUAGE)
  }

  const theme = {
    get: () => ({
      color: getItem(STORAGE_KEYS.THEME, DEFAULTS[STORAGE_KEYS.THEME]),
      rgb: getItem(STORAGE_KEYS.THEME_RGB, DEFAULTS[STORAGE_KEYS.THEME_RGB])
    }),
    set: (color, rgb) => {
      setItem(STORAGE_KEYS.THEME, color)
      setItem(STORAGE_KEYS.THEME_RGB, rgb)
    },
    createReactive: () => ({
      color: createReactiveStorage(STORAGE_KEYS.THEME),
      rgb: createReactiveStorage(STORAGE_KEYS.THEME_RGB)
    })
  }

  const auth = {
    getRemembered: () => ({
      email: getItem(STORAGE_KEYS.REMEMBERED_EMAIL),
      password: getItem(STORAGE_KEYS.REMEMBERED_PASSWORD)
    }),
    setRemembered: (email, password) => {
      setItem(STORAGE_KEYS.REMEMBERED_EMAIL, email)
      setItem(STORAGE_KEYS.REMEMBERED_PASSWORD, password)
    },
    clearRemembered: () => {
      removeItem(STORAGE_KEYS.REMEMBERED_EMAIL)
      removeItem(STORAGE_KEYS.REMEMBERED_PASSWORD)
    }
  }

  // Batch operations
  const clear = (keys = null) => {
    try {
      if (keys) {
        keys.forEach(key => removeItem(key))
      } else {
        // Clear all app-specific keys
        Object.values(STORAGE_KEYS).forEach(key => removeItem(key))
      }
    } catch (error) {
      console.warn('Failed to clear localStorage:', error)
    }
  }

  const backup = () => {
    try {
      const data = {}
      Object.values(STORAGE_KEYS).forEach(key => {
        const value = getItem(key)
        if (value !== null) {
          data[key] = value
        }
      })
      return data
    } catch (error) {
      console.warn('Failed to backup localStorage:', error)
      return {}
    }
  }

  const restore = (data) => {
    try {
      Object.entries(data).forEach(([key, value]) => {
        if (Object.values(STORAGE_KEYS).includes(key)) {
          setItem(key, value)
        }
      })
    } catch (error) {
      console.warn('Failed to restore localStorage:', error)
    }
  }

  return {
    // Generic methods
    getItem,
    setItem,
    removeItem,
    createReactiveStorage,
    
    // Feature-specific methods
    language,
    theme,
    auth,
    
    // Utility methods
    clear,
    backup,
    restore,
    
    // Constants
    STORAGE_KEYS,
    DEFAULTS
  }
}