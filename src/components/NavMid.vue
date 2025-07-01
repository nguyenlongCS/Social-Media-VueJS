<template>
    <div class="container-mid-nav">
        <button class="nav-item" :class="{ active: activeNavItem === 'profile' }" @click="setActiveNav('profile')"
            data-tooltip="Profile">
            <img src="/src/components/icons/profile.png" alt="Profile" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'friend' }" @click="setActiveNav('friend')"
            data-tooltip="Friends">
            <img src="/src/components/icons/friend.png" alt="Friends" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'home' }" @click="setActiveNav('home')"
            data-tooltip="Home">
            <img src="/src/components/icons/home.png" alt="Home" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'mess' }" @click="setActiveNav('mess')"
            data-tooltip="Messages">
            <img src="/src/components/icons/mess.png" alt="Messages" class="nav-icon">
        </button>
        <button class="nav-item" :class="{ active: activeNavItem === 'notification' }"
            @click="setActiveNav('notification')" data-tooltip="Notifications">
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

const setActiveNav = (navItem) => {
    activeNavItem.value = navItem
    const targetRoute = navRoutes[navItem]
    if (targetRoute && route.path !== targetRoute) {
        router.push(targetRoute)
    }
}

onMounted(() => {
    const currentNav = routeToNav[route.path]
    if (currentNav) {
        activeNavItem.value = currentNav
    } else {
        const savedNav = getItem(NAV_ACTIVE_KEY, 'home')
        activeNavItem.value = savedNav
    }
})

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
    top: 10px; /* Adjusted back to reasonable position */
    left: 50%;
    transform: translateX(-50%);
    /* Desktop/Laptop: Match container-main width */
    width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
    max-width: calc(1100px * 1.14 / 3.14); /* Match main CSS max-width */
    min-width: 280px;
    height: 40px; /* Reduced height */
    background: linear-gradient(135deg, var(--theme-color));
    border-radius: 20px; /* Reduced radius to match height */
    padding: 6px; /* Reduced padding */
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
    width: 32px; /* Reduced size */
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
    width: 16px; /* Reduced size */
    height: 16px;
    object-fit: contain;
    transition: var(--transition);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Tablet Styles */
@media screen and (max-width: 1024px) {
    .container-mid-nav {
        width: calc(1.4 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3);
        max-width: calc(850px * 1.4 / 3);
        min-width: 260px;
        height: 38px;
        top: 5px; /* Better tablet position */
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

/* Mobile Landscape */
@media screen and (max-width: 768px) {
    .container-mid-nav {
        width: calc(1.4 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3);
        max-width: calc(700px * 1.4 / 3);
        min-width: 240px;
        height: 36px;
        top: 3px; /* Better mobile landscape position */
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

/* Mobile Portrait - COMPLETELY DIFFERENT LAYOUT */
@media screen and (max-width: 480px) {
    .container-mid-nav {
        /* OVERRIDE ALL DESKTOP STYLES FOR MOBILE */
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
    
    /* Hide NavMid on login page for mobile */
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

/* iPhone 14 Pro Max, Galaxy Z Fold open */
@media screen and (max-width: 430px) and (min-height: 850px) {
    .container-mid-nav {
        height: calc(var(--nav-mid-height) + 5px);
        max-width: 350px;
    }
    
    .nav-item {
        width: 38px;
        height: 38px;
    }
    
    .nav-icon {
        width: 18px;
        height: 18px;
    }
}

/* Extra Small Devices */
@media screen and (max-width: 375px) {
    .container-mid-nav {
        width: calc(100vw - 30px);
        max-width: 300px;
        height: var(--nav-mid-height);
    }
    
    .nav-item {
        width: 33px;
        height: 33px;
    }
    
    .nav-icon {
        width: 15px;
        height: 15px;
    }
}

/* Ultra small devices */
@media screen and (max-width: 320px) {
    .container-mid-nav {
        width: calc(100vw - 20px);
        max-width: 280px;
        height: var(--nav-mid-height);
        padding: 6px;
    }
    
    .nav-item {
        width: 30px;
        height: 30px;
    }
    
    .nav-icon {
        width: 14px;
        height: 14px;
    }
}

/* Desktop responsive breakpoints */
@media screen and (min-width: 1024px) and (max-width: 1399px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(1000px * 1.14 / 3.14);
        height: 38px;
        top: 8px; /* Better positioning */
    }
}

@media screen and (min-width: 1400px) and (max-width: 1599px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(1200px * 1.14 / 3.14);
        height: 42px;
        top: 12px; /* Better positioning */
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

@media screen and (min-width: 1600px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(1300px * 1.14 / 3.14);
        height: 45px;
        top: 15px; /* Better positioning */
    }
    
    .nav-item {
        width: 36px;
        height: 36px;
    }
    
    .nav-icon {
        width: 18px;
        height: 18px;
    }
}
</style>