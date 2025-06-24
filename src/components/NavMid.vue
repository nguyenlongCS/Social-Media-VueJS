<template>
    <div class="container-mid-nav">
        <button class="nav-item" :class="{ active: activeNavItem === 'profile' }" @click="setActiveNav('profile')"
            data-tooltip="Profile">
            <span class="nav-icon icon-profile"></span>
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'friend' }" @click="setActiveNav('friend')"
            data-tooltip="Friends">
            <span class="nav-icon icon-friend"></span>
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'home' }" @click="setActiveNav('home')"
            data-tooltip="Home">
            <span class="nav-icon icon-home"></span>
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'mess' }" @click="setActiveNav('mess')"
            data-tooltip="Messages">
            <span class="nav-icon icon-mess"></span>
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'notification' }"
            @click="setActiveNav('notification')" data-tooltip="Notifications">
            <span class="nav-icon icon-notification"></span>
        </button>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme.js'
import { useStorage } from '@/composables/useStorage.js'

const router = useRouter()
const route = useRoute()
const { getItem, setItem } = useStorage()

// Storage key cho active nav item
const NAV_ACTIVE_KEY = 'activeNavItem'

// Reactive state cho active nav item
const activeNavItem = ref('home')

// Mapping giữa nav item và route path
const navRoutes = {
    home: '/',
    profile: '/profile',
    friend: '/friend',
    mess: '/mess',
    notification: '/notification'
}

// Reverse mapping để xác định active nav từ current route
const routeToNav = {
    '/': 'home',
    '/profile': 'profile',
    '/friend': 'friend',
    '/mess': 'mess',
    '/notification': 'notification'
}

// Function để set active nav và chuyển trang
const setActiveNav = (navItem) => {
    activeNavItem.value = navItem

    // Chuyển trang tương ứng
    const targetRoute = navRoutes[navItem]
    if (targetRoute && route.path !== targetRoute) {
        router.push(targetRoute)
    }
}

// Khởi tạo active nav từ localStorage hoặc current route
onMounted(() => {
    // Ưu tiên lấy từ current route
    const currentNav = routeToNav[route.path]
    if (currentNav) {
        activeNavItem.value = currentNav
    } else {
        // Nếu không match route, lấy từ localStorage
        const savedNav = getItem(NAV_ACTIVE_KEY, 'home')
        activeNavItem.value = savedNav
    }
})

// Watch activeNavItem để lưu vào localStorage
watch(activeNavItem, (newValue) => {
    setItem(NAV_ACTIVE_KEY, newValue)
}, { immediate: true })

// Watch route changes để update active nav
watch(() => route.path, (newPath) => {
    const navItem = routeToNav[newPath]
    if (navItem && navItem !== activeNavItem.value) {
        activeNavItem.value = navItem
    }
})
</script>
<style scoped>
.container-mid-nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 60px;
    background: linear-gradient(135deg, var(--theme-color));
    border-radius: 30px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    backdrop-filter: blur(5px);
}

.nav-item.active {
    background: rgba(0, 0, 0, 0.25);
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.nav-item::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    pointer-events: none;
    z-index: 10;
}

.nav-icon {
    font-size: 20px;
    color: var(--text-primary);
    transition: var(--transition);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    display: inline-block;
}

/* Icon Definitions */
.icon-home::before {
    content: "🏠";
}

.icon-friend::before {
    content: "👥";
}

.icon-profile::before {
    content: "👤";
}

.icon-mess::before {
    content: "💬";
}

.icon-notification::before {
    content: "🔔";
}
</style>