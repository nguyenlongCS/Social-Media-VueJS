<template>
  <div>
    <NavRight />
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavRight from './components/NavRight.vue'
import { useTheme } from '@/composables/useTheme.js'

const { initializeTheme } = useTheme()

onMounted(() => {
  // Khởi tạo theme khi ứng dụng bắt đầu
  initializeTheme()
})
</script>