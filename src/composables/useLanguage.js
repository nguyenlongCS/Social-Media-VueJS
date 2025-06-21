// composables/useLanguage.js
import { ref, computed } from 'vue'
import { useStorage } from '@/composables/useStorage.js'

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

// Global state for language - will be initialized when first used
let currentLanguage = null

export const useLanguage = () => {
  const storage = useStorage()
  
  // Initialize global state only once
  if (currentLanguage === null) {
    currentLanguage = ref(storage.language.get())
  }

  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'EN' ? 'VN' : 'EN'
    storage.language.set(currentLanguage.value)
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

  return {
    currentLanguage,
    toggleLanguage,
    t,
    translate
  }
}