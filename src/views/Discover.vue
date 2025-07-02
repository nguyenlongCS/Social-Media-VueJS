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
  </div>
</template>

<script setup>
import NavLeft from '@/components/NavLeft.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import DiscoverFeed from '@/components/DiscoverFeed.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'

const { getContainerClass } = useMobileSwipe()
</script>