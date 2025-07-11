<template>
  <div class="login-page">
    <div class="container-left">
      <!-- <LoginBrand /> -->
    </div>
    <div class="container-main">
      <LoginForm />
    </div>
    <div class="container-right">
      <LoginSocial />
    </div>
  </div>

  <!-- Footer with Global Messages -->
  <Footer 
    :success-message="globalSuccessMessage"
    :error-message="globalErrorMessage"
    :loading-message="globalLoadingMessage"
  />

  <!-- Debug Panel for Login -->
  <div style="position: fixed; top: 50%; right: 10px; background: rgba(0,0,0,0.8); color: white; padding: 10px; font-size: 10px; z-index: 9999;">
    <div>Login Debug:</div>
    <div>Success: {{ globalSuccessMessage || 'none' }}</div>
    <div>Error: {{ globalErrorMessage || 'none' }}</div>
    <div>Loading: {{ globalLoadingMessage || 'none' }}</div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import LoginSocial from '@/components/LoginSocial.vue'
import Footer from '@/components/Footer.vue'
import { useMessageStore } from '@/stores/messageStore.js'

const { successMessage, errorMessage, loadingMessage } = useMessageStore()

// Global message handling for login page
const globalSuccessMessage = computed(() => successMessage.value)
const globalErrorMessage = computed(() => errorMessage.value)
const globalLoadingMessage = computed(() => loadingMessage.value)

// Debug watchers
watch(globalSuccessMessage, (newVal) => {
  console.log('Login Success Message:', newVal)
})

watch(globalErrorMessage, (newVal) => {
  console.log('Login Error Message:', newVal)
})

watch(globalLoadingMessage, (newVal) => {
  console.log('Login Loading Message:', newVal)
})
</script>

<style scoped></style>