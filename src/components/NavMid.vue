<template>
    <div class="container-mid-nav">
        <button class="nav-item" :class="{ active: activeNavItem === 'profile' }" @click="setActiveNav('profile')">
            <img src="/src/components/icons/profile.png" alt="Profile" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'friend' }" @click="setActiveNav('friend')">
            <img src="/src/components/icons/friend.png" alt="Friends" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'home' }" @click="setActiveNav('home')">
            <img src="/src/components/icons/home.png" alt="Home" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'mess' }" @click="setActiveNav('mess')">
            <img src="/src/components/icons/mess.png" alt="Messages" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'notification' }" @click="setActiveNav('notification')">
            <img src="/src/components/icons/notification.png" alt="Notifications" class="nav-icon">
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'

const router = useRouter()
const route = useRoute()
const { getItem, setItem } = useSettings()

const NAV_ACTIVE_KEY = 'activeNavItem'
const activeNavItem = ref('home')

// Route mappings
const navRoutes = {
    home: '/',
    profile: '/profile',
    friend: '/friend',
    mess: '/mess',
    notification: '/notification'
}

const routeToNav = {
    '/': 'home',
    '/profile': 'profile',
    '/friend': 'friend',
    '/mess': 'mess',
    '/notification': 'notification'
}

// Navigation handler
const setActiveNav = (navItem) => {
    activeNavItem.value = navItem
    const targetRoute = navRoutes[navItem]
    if (targetRoute && route.path !== targetRoute) {
        router.push(targetRoute)
    }
}

// Initialize and sync with route
onMounted(() => {
    const currentNav = routeToNav[route.path]
    if (currentNav) {
        activeNavItem.value = currentNav
    } else {
        const savedNav = getItem(NAV_ACTIVE_KEY, 'home')
        activeNavItem.value = savedNav
    }
})

// Watch for changes
watch(activeNavItem, (newValue) => {
    setItem(NAV_ACTIVE_KEY, newValue)
}, { immediate: true })

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
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
    max-width: calc(1100px * 1.14 / 3.14);
    min-width: 280px;
    height: 40px;
    background: linear-gradient(135deg, var(--theme-color));
    border-radius: 20px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    backdrop-filter: blur(10px);
}

.nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    backdrop-filter: blur(5px);
    flex-shrink: 0;
}

.nav-item.active {
    background: rgba(0, 0, 0, 0.25);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.nav-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
    transition: var(--transition);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
    .container-mid-nav {
        width: calc(1.4 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3);
        max-width: calc(850px * 1.4 / 3);
        min-width: 260px;
        height: 38px;
        top: 5px;
    }
    
    .nav-item {
        width: 30px;
        height: 30px;
    }
    
    .nav-icon {
        width: 15px;
        height: 15px;
    }
}

@media screen and (max-width: 768px) {
    .container-mid-nav {
        width: calc(1.4 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3);
        max-width: calc(700px * 1.4 / 3);
        min-width: 240px;
        height: 36px;
        top: 3px;
    }
    
    .nav-item {
        width: 28px;
        height: 28px;
    }
    
    .nav-icon {
        width: 14px;
        height: 14px;
    }
}

/* Mobile Portrait - Complete Override */
@media screen and (max-width: 480px) {
    .container-mid-nav {
        position: fixed !important;
        top: var(--nav-height) !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        z-index: 1500 !important;
        width: calc(100vw - 40px) !important;
        max-width: 320px !important;
        height: var(--nav-mid-height) !important;
        background: linear-gradient(135deg, var(--theme-color)) !important;
        border-radius: 22px !important;
        padding: 8px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
    }
    
    /* Hide on login page for mobile */
    .login-page .container-mid-nav {
        display: none !important;
    }
    
    .nav-item {
        width: 35px !important;
        height: 35px !important;
    }
    
    .nav-icon {
        width: 16px !important;
        height: 16px !important;
    }
}

@media screen and (max-width: 375px) {
    .container-mid-nav {
        width: calc(100vw - 30px) !important;
        max-width: 300px !important;
    }
    
    .nav-item {
        width: 33px !important;
        height: 33px !important;
    }
    
    .nav-icon {
        width: 15px !important;
        height: 15px !important;
    }
}

@media screen and (max-width: 320px) {
    .container-mid-nav {
        width: calc(100vw - 20px) !important;
        max-width: 280px !important;
        padding: 6px !important;
    }
    
    .nav-item {
        width: 30px !important;
        height: 30px !important;
    }
    
    .nav-icon {
        width: 14px !important;
        height: 14px !important;
    }
}

/* Desktop Breakpoints */
@media screen and (min-width: 1024px) and (max-width: 1399px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(1000px * 1.14 / 3.14);
        height: 38px;
        top: 8px;
    }
}

@media screen and (min-width: 1400px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(1200px * 1.14 / 3.14);
        height: 42px;
        top: 12px;
    }
    
    .nav-item {
        width: 34px;
        height: 34px;
    }
    
    .nav-icon {
        width: 17px;
        height: 17px;
    }
}
</style>