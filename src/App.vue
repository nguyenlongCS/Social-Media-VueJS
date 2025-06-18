<template>
  <div>
    <RightNav />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import RightNav from './components/RightNav.vue'
import { useTheme } from '@/composables/useTheme.js'

const { initializeTheme } = useTheme()

onMounted(() => {
  // Khởi tạo theme khi ứng dụng bắt đầu
  initializeTheme()
})
</script>