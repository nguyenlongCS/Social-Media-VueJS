<template>
  <div class="login-page">
    <div class="container-left"></div>
    <div class="container-main">
      <LoginForm/>
    </div>
    <div class="container-right">
      <SocialLogin/>
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
import SocialLogin from '@/components/SocialLogin.vue'
</script>

<style scoped>

</style>
