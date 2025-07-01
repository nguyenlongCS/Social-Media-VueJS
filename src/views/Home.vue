<template>
  <div>
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
  </div>
</template>

<script setup>
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import HomeFeed from '@/components/HomeFeed.vue'
// import HomeInteraction from '@/components/HomeInteraction.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'

const { getContainerClass } = useMobileSwipe()
</script>