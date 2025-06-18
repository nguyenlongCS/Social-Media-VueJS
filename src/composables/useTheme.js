import { ref, onMounted } from 'vue'
import { useStorage } from '@/composables/useStorage.js'

// Khôi phục theme từ centralized storage
const storage = useStorage()
const savedTheme = storage.theme.get()

const currentTheme = ref(savedTheme.color)
const currentThemeRgb = ref(savedTheme.rgb)

export const useTheme = () => {
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