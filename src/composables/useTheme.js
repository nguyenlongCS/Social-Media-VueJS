// composables/useTheme.js
import { ref, onMounted } from 'vue'
import { useStorage } from '@/composables/useStorage.js'

// Global state for theme - will be initialized when first used
let currentTheme = null
let currentThemeRgb = null
let isInitialized = false

export const useTheme = () => {
  const storage = useStorage()
  
  // Initialize global state only once
  if (!isInitialized) {
    const savedTheme = storage.theme.get()
    currentTheme = ref(savedTheme.color)
    currentThemeRgb = ref(savedTheme.rgb)
    isInitialized = true
  }

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
    
    // Lưu theme đã chọn thông qua centralized storage
    storage.theme.set(color, rgb)
  }

  // Tự động khởi tạo theme khi composable được sử dụng
  onMounted(() => {
    initializeTheme()
  })

  return {
    currentTheme,
    currentThemeRgb,
    changeThemeColor,
    initializeTheme
  }
}