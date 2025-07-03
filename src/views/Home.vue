<template>
  <div>
    <NavLeft />
    <NavMid />
    
    <div class="home-page" :class="getContainerClass()">
      <div class="container-left">
        <HomeMenu />
      </div>
      <div class="container-main">
        <HomeFeed />
      </div>
      <div class="container-right">
        <!-- <HomeInteraction /> -->
        <!-- Like, Emotion, Share, Comment -->
      </div>
    </div>
    
    <!-- Global Footer for all messages -->
    <Footer 
      :success-message="globalSuccessMessage"
      :error-message="globalErrorMessage"
      :loading-message="globalLoadingMessage"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NavLeft from '@/components/NavLeft.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import HomeFeed from '@/components/HomeFeed.vue'
import Footer from '@/components/Footer.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'
import { useAuth } from '@/composables/useAuth.js'
import { useFirestore } from '@/composables/useFirestore.js'

const { getContainerClass } = useMobileSwipe()
const { error: authError, successMessage: authSuccess, loading: authLoading } = useAuth()
const { error: firestoreError, loading: firestoreLoading } = useFirestore()

// Global message handling
const globalSuccessMessage = computed(() => authSuccess.value)
const globalErrorMessage = computed(() => authError.value || firestoreError.value)
const globalLoadingMessage = computed(() => {
  if (authLoading.value) return 'Authenticating...'
  if (firestoreLoading.value) return 'Loading posts...'
  return ''
})
</script>