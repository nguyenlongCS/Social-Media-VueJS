<template>
  <div>
    <div class="container-mid-nav">
        <NavMid />
      </div>
    <div class="home-page">
      <div class="container-left">
        <HomeFeatures />
      </div>
      <div class="container-main">
        <!-- <HomeFeed /> -->
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
import HomeFeatures from '@/components/HomeMenu.vue'
// import HomeFeed from '@/components/HomeFeed.vue'
// import HomeInteraction from '@/components/HomeInteraction.vue'
</script>