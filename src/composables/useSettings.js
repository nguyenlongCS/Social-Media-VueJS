// composables/useSettings.js - Optimized for better organization
import { ref, computed, onMounted } from 'vue'

// Storage keys
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
  [STORAGE_KEYS.THEME_RGB]: '255, 235, 124'
}

// Translations
const translations = {
  EN: {
    languageBtn: "EN",
    logoutBtn: "Log Out",
    brandTagline: "Welcome to ...",
    loginTab: "Login",
    signupTab: "Signup",
    loginBtn: "Login",
    signupBtn: "Signup",
    forgotPassword: "forgot password?",
    rememberMe: "Remember me",
    qrTitle: "Log In with QR Code",
    socialTitle: "Or continue with",
    emailPlaceholder: "email",
    passwordPlaceholder: "password",
    confirmPasswordPlaceholder: "confirm password",
    homeTabs: {
      community: "Community",
      friend: "Friend"
    },
    actionButtons: {
      upload: "create status",
      discover: "discover",
      settings: "settings"
    },
    statusPlaceholder: "What's on your mind?",
    me: "Me",
    loading: "Loading...",
    retry: "Retry",
    noPosts: "No posts yet"
  },
  VN: {
    languageBtn: "VN",
    logoutBtn: "Đăng Xuất",
    brandTagline: "Chào mừng bạn đến với ...",
    loginTab: "Đăng Nhập",
    signupTab: "Đăng Ký",
    loginBtn: "Đăng Nhập",
    signupBtn: "Đăng Ký",
    forgotPassword: "quên mật khẩu?",
    rememberMe: "Ghi nhớ tôi",
    qrTitle: "Đăng Nhập bằng Mã QR",
    socialTitle: "Hoặc tiếp tục với",
    emailPlaceholder: "email",
    passwordPlaceholder: "mật khẩu",
    confirmPasswordPlaceholder: "xác nhận mật khẩu",
    homeTabs: {
      community: "Cộng đồng",
      friend: "Bạn bè"
    },
    actionButtons: {
      upload: "tạo trạng thái",
      discover: "khám phá",
      settings: "cài đặt"
    },
    statusPlaceholder: "Bạn đang nghĩ gì?",
    me: "Tôi",
    loading: "Đang tải...",
    retry: "Thử lại",
    noPosts: "Chưa có bài viết"
  }
}

// Global state (initialized once)
let currentLanguage = null
let currentTheme = null
let currentThemeRgb = null
let isInitialized = false

export const useSettings = () => {
  // Storage utilities
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

  // Initialize global state once
  if (!isInitialized) {
    currentLanguage = ref(getItem(STORAGE_KEYS.LANGUAGE, DEFAULTS[STORAGE_KEYS.LANGUAGE]))
    currentTheme = ref(getItem(STORAGE_KEYS.THEME, DEFAULTS[STORAGE_KEYS.THEME]))
    currentThemeRgb = ref(getItem(STORAGE_KEYS.THEME_RGB, DEFAULTS[STORAGE_KEYS.THEME_RGB]))
    isInitialized = true
  }

  // Language methods
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'EN' ? 'VN' : 'EN'
    setItem(STORAGE_KEYS.LANGUAGE, currentLanguage.value)
  }

  const t = computed(() => translations[currentLanguage.value])

  const translate = (key) => {
    const keys = key.split('.')
    let result = t.value
    
    for (const k of keys) {
      result = result?.[k]
      if (!result) break
    }
    
    return result || key
  }

  // Theme methods
  const initializeTheme = () => {
    document.documentElement.style.setProperty('--theme-color', currentTheme.value)
    document.documentElement.style.setProperty('--theme-color-rgb', currentThemeRgb.value)
  }

  const changeThemeColor = (color, rgb) => {
    document.documentElement.style.setProperty('--theme-color', color)
    document.documentElement.style.setProperty('--theme-color-rgb', rgb)
    currentTheme.value = color
    currentThemeRgb.value = rgb
    
    setItem(STORAGE_KEYS.THEME, color)
    setItem(STORAGE_KEYS.THEME_RGB, rgb)
  }

  // Auth storage methods
  const getRememberedAuth = () => ({
    email: getItem(STORAGE_KEYS.REMEMBERED_EMAIL),
    password: getItem(STORAGE_KEYS.REMEMBERED_PASSWORD)
  })

  const setRememberedAuth = (email, password) => {
    setItem(STORAGE_KEYS.REMEMBERED_EMAIL, email)
    setItem(STORAGE_KEYS.REMEMBERED_PASSWORD, password)
  }

  const clearRememberedAuth = () => {
    removeItem(STORAGE_KEYS.REMEMBERED_EMAIL)
    removeItem(STORAGE_KEYS.REMEMBERED_PASSWORD)
  }

  // Batch operations
  const clear = (keys = null) => {
    try {
      if (keys) {
        keys.forEach(key => removeItem(key))
      } else {
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

  // Initialize theme on mount
  onMounted(() => {
    initializeTheme()
  })

  return {
    // Language
    currentLanguage,
    toggleLanguage,
    t,
    translate,
    
    // Theme
    currentTheme,
    currentThemeRgb,
    changeThemeColor,
    initializeTheme,
    
    // Storage
    getItem,
    setItem,
    removeItem,
    
    // Auth storage
    getRememberedAuth,
    setRememberedAuth,
    clearRememberedAuth,
    
    // Utilities
    clear,
    backup,
    restore,
    
    // Constants
    STORAGE_KEYS,
    DEFAULTS
  }
}