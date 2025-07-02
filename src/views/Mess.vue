<template>
  <div>
    <NavLeft />
    <NavMid />
    
    <div class="home-page" :class="getContainerClass()">
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
import NavLeft from '@/components/NavLeft.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'

const { getContainerClass } = useMobileSwipe()
</script>