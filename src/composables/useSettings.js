// composables/useSettings.js - Hợp nhất useTheme + useLanguage + useStorage
import { ref, computed, watch, onMounted } from 'vue'

// Storage keys constants - từ useStorage.js
export const STORAGE_KEYS = {
  LANGUAGE: 'selectedLanguage',
  THEME: 'selectedTheme',
  THEME_RGB: 'selectedThemeRgb',
  REMEMBERED_EMAIL: 'rememberedEmail',
  REMEMBERED_PASSWORD: 'rememberedPassword'
}

// Default values - từ useStorage.js
const DEFAULTS = {
  [STORAGE_KEYS.LANGUAGE]: 'EN',
  [STORAGE_KEYS.THEME]: '#ffeb7c',
  [STORAGE_KEYS.THEME_RGB]: '255, 235, 124'
}

// Translations - từ useLanguage.js
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
    me: "Me"
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
    me: "Tôi"
  }
}

// Global state - will be initialized when first used
let currentLanguage = null
let currentTheme = null
let currentThemeRgb = null
let isInitialized = false

export const useSettings = () => {
  // Generic storage operations - từ useStorage.js
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

  // Initialize global state only once - hợp nhất từ useLanguage.js + useTheme.js
  if (!isInitialized) {
    // Language state
    currentLanguage = ref(getItem(STORAGE_KEYS.LANGUAGE, DEFAULTS[STORAGE_KEYS.LANGUAGE]))
    
    // Theme state
    const savedTheme = {
      color: getItem(STORAGE_KEYS.THEME, DEFAULTS[STORAGE_KEYS.THEME]),
      rgb: getItem(STORAGE_KEYS.THEME_RGB, DEFAULTS[STORAGE_KEYS.THEME_RGB])
    }
    currentTheme = ref(savedTheme.color)
    currentThemeRgb = ref(savedTheme.rgb)
    
    isInitialized = true
  }

  // Language methods - từ useLanguage.js
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'EN' ? 'VN' : 'EN'
    setItem(STORAGE_KEYS.LANGUAGE, currentLanguage.value)
  }

  const t = computed(() => {
    return translations[currentLanguage.value]
  })

  const translate = (key) => {
    const keys = key.split('.')
    let result = t.value
    
    for (const k of keys) {
      result = result?.[k]
      if (!result) break
    }
    
    return result || key
  }

  // Theme methods - từ useTheme.js
  const initializeTheme = () => {
    // Áp dụng theme đã lưu khi khởi tạo
    document.documentElement.style.setProperty('--theme-color', currentTheme.value)
    document.documentElement.style.setProperty('--theme-color-rgb', currentThemeRgb.value)
  }

  const changeThemeColor = (color, rgb) => {
    document.documentElement.style.setProperty('--theme-color', color)
    document.documentElement.style.setProperty('--theme-color-rgb', rgb)
    currentTheme.value = color
    currentThemeRgb.value = rgb
    
    // Lưu theme đã chọn
    setItem(STORAGE_KEYS.THEME, color)
    setItem(STORAGE_KEYS.THEME_RGB, rgb)
  }

  // Auth storage methods - sử dụng generic storage operations
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

  // Batch operations - từ useStorage.js
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

  // Tự động khởi tạo theme khi composable được sử dụng - từ useTheme.js
  onMounted(() => {
    initializeTheme()
  })

  return {
    // Language state and methods
    currentLanguage,
    toggleLanguage,
    t,
    translate,
    
    // Theme state and methods
    currentTheme,
    currentThemeRgb,
    changeThemeColor,
    initializeTheme,
    
    // Storage methods
    getItem,
    setItem,
    removeItem,
    
    // Auth storage methods
    getRememberedAuth,
    setRememberedAuth,
    clearRememberedAuth,
    
    // Utility methods
    clear,
    backup,
    restore,
    
    // Constants
    STORAGE_KEYS,
    DEFAULTS
  }
}