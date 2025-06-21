// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { watch } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'

const routes = [
  { 
    path: '/', 
    component: Login,
    meta: { requiresGuest: true }
  },
  { 
    path: '/home', 
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guard để bảo vệ trang
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  
  const { isLoggedIn, isInitialized } = useAuthStore()
  
  // Wait for auth to be initialized
  if (!isInitialized.value) {
    // Wait for auth state to be determined
    await new Promise(resolve => {
      const unwatch = watch(isInitialized, (initialized) => {
        if (initialized) {
          unwatch()
          resolve()
        }
      })
    })
  }
  
  if (requiresAuth && !isLoggedIn.value) {
    // Cần đăng nhập nhưng chưa đăng nhập -> chuyển về trang login
    next('/')
  } else if (requiresGuest && isLoggedIn.value) {
    // Đã đăng nhập nhưng đang ở trang login -> chuyển về home
    next('/home')
  } else {
    // Cho phép truy cập
    next()
  }
})

export default router