// router/index.js
import { createRouter, createWebHistory } from 'vue-router' //vue-router: dùng để tạo hệ thống định tuyến cho SPA (single-page app).
import { watch } from 'vue' //watch: để theo dõi trạng thái reactive
import { useAuthStore } from '@/stores/authStore.js' //truy cập vào store quản lý trạng thái đăng nhập
import Login from '@/views/Login.vue' //component trang
import Home from '@/views/Home.vue'   //component trang
import Status from '@/views/Status.vue' //component trang status
import Profile from '@/views/Profile.vue' //component trang profile
import Friend from '@/views/Friend.vue' //component trang friend
import Mess from '@/views/Mess.vue' //component trang mess
import Notification from '@/views/Notification.vue' //component trang mess

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
  },
  {
    path: '/status',
    component: Status,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/friend',
    component: Friend,
    meta: { requiresAuth: true }
  },
  {
    path: '/mess',
    component: Mess,
    meta: { requiresAuth: true }
  },
  {
    path: '/notification',
    component: Notification,
    meta: { requiresAuth: true }
  }
  //meta: dùng để gắn cờ tùy chỉnh nhằm kiểm tra quyền truy cập sau này (cái này rất hữu dụng khi dùng middleware như beforeEach).
]

const router = createRouter({
  history: createWebHistory(),
  //Dùng createWebHistory() để sử dụng HTML5 History API (URL đẹp, không có #)
  routes
})

// Route guard để bảo vệ trang
// Hàm này chạy trước mỗi lần chuyển trang, để kiểm tra xem người dùng có quyền truy cập hay không.
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest)
  //Kiểm tra xem route sắp vào có yêu cầu người dùng đã đăng nhập hoặc chưa.
  const { isLoggedIn, isInitialized } = useAuthStore() //Lấy trạng thái từ auth store
  // isLoggedIn.value: true/false tùy theo đã đăng nhập chưa
  // isInitialized.value: cho biết trạng thái xác thực đã được kiểm tra chưa (tránh trường hợp check khi auth chưa load xong)
  if (!isInitialized.value) {
    // Đợi cho đến khi auth được khởi tạo xong (isInitialized thành true) trước khi check quyền.
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

export default router // Xuất (export) đối tượng router mặc định để file khác có thể import và sử dụng