<!-- Example: How to implement mobile swipe in Home.vue or other views -->
<template>
  <div>
    <!-- NavRight - Always visible on top center for mobile -->
    <NavRight />
    
    <!-- NavMid - Below NavRight, only when logged in -->
    <div class="container-mid-nav">
      <NavMid />
    </div>
    
    <!-- Main container with mobile single-view support -->
    <div class="home-page" :class="getContainerClass()">
      <!-- Left container - hidden by default on mobile -->
      <div class="container-left">
        <HomeMenu />
      </div>
      
      <!-- Main container - visible by default on mobile -->
      <div class="container-main">
        <HomeFeed />
      </div>
      
      <!-- Right container - hidden by default on mobile -->
      <div class="container-right">
        <!-- Right content -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'
import NavRight from '@/components/NavRight.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import HomeFeed from '@/components/HomeFeed.vue'

// Use mobile swipe functionality
const { getContainerClass } = useMobileSwipe()
</script>

<style scoped>
/* Component-specific styles if needed */
</style>