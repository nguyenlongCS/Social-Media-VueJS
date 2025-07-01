<template>
  <div>
    <NavRight />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavRight from './components/NavRight.vue'
import { useSettings } from '@/composables/useSettings.js'

// Updated import - từ useTheme sang useSettings
const { initializeTheme } = useSettings()

onMounted(() => {
  // Khởi tạo theme khi ứng dụng bắt đầu
  initializeTheme()
})
</script>