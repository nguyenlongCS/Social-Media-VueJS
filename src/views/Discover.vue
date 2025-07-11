<template>
  <div>
    <NavLeft />
    <NavMid />
    
    <div class="home-page" :class="getContainerClass()">
      <div class="container-left">
        <HomeMenu />
      </div>
      <div class="container-main">
        <DiscoverFeed />
      </div>
      <div class="container-right">
        <!-- Right sidebar content for discover page -->
      </div>
    </div>

    <!-- Global Footer -->
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
import DiscoverFeed from '@/components/DiscoverFeed.vue'
import Footer from '@/components/Footer.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'
import { useMessageStore } from '@/stores/messageStore.js'

const { getContainerClass } = useMobileSwipe()
const { successMessage, errorMessage, loadingMessage } = useMessageStore()

// Global message handling
const globalSuccessMessage = computed(() => successMessage.value)
const globalErrorMessage = computed(() => errorMessage.value)
const globalLoadingMessage = computed(() => loadingMessage.value)
</script>