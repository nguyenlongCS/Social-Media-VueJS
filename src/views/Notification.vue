<template>
  <div>
    <div class="container-mid-nav">
        <NavMid />
      </div>
    <div class="home-page">
      <div class="container-left">
        <HomeMenu />
      </div>
      <div class="container-main">
      </div>
      <div class="container-right">
      </div>
    </div>
  </div>
</template>
<script setup>
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
</script>