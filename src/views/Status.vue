<template>
  <div>
    <NavLeft />
    <NavMid />
    
    <div class="home-page" :class="getContainerClass()">
      <div class="container-left">
        <HomeMenu />
      </div>
      <div class="container-main">
        <StatusCreation @success="handleSuccess" @error="handleError" @loading="handleLoading" />
      </div>
      <div class="container-right">
        <!-- <StatusCustom/> -->
         <!-- Chỉnh sửa đối tượng, tag bạn bè, vị trí,...-->
      </div>
    </div>

    <!-- Footer with Status Creation Messages -->
    <Footer 
      :success-message="statusSuccessMessage"
      :error-message="statusErrorMessage"
      :loading-message="statusLoadingMessage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavLeft from '@/components/NavLeft.vue'
import NavMid from '@/components/NavMid.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import StatusCreation from '@/components/StatusCreation.vue'
import Footer from '@/components/Footer.vue'
import { useMobileSwipe } from '@/composables/useMobileSwipe.js'

const { getContainerClass } = useMobileSwipe()

// Status messages state
const statusSuccessMessage = ref('')
const statusErrorMessage = ref('')
const statusLoadingMessage = ref('')

// Event handlers from StatusCreation
const handleSuccess = (message) => {
  statusSuccessMessage.value = message
  statusErrorMessage.value = ''
  statusLoadingMessage.value = ''
}

const handleError = (message) => {
  statusErrorMessage.value = message
  statusSuccessMessage.value = ''
  statusLoadingMessage.value = ''
}

const handleLoading = (message) => {
  statusLoadingMessage.value = message
  statusSuccessMessage.value = ''
  statusErrorMessage.value = ''
}
</script>