<template>
  <div>
    <NavLeft />
    <NavMid />
    
    <div class="home-page" :class="getContainerClass()">
      <div class="container-left">
        <HomeMenu />
      </div>
      <div class="container-main">
        <StatusCreation />
      </div>
      <div class="container-right">
        <!-- <StatusCustom/> -->
         <!-- Chỉnh sửa đối tượng, tag bạn bè, vị trí,...-->
      </div>
    </div>
  </div>
</template>

<script setup>
import NavLeft from '@/components/NavLeft.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import StatusCreation from '@/components/StatusCreation.vue'
// import StatusCustom from '@/components/StatusCustom.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'
import NavLeft from '@/components/NavLeft.vue'

const { getContainerClass } = useMobileSwipe()
</script>