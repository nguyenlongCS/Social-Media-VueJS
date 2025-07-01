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
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    /* Scale theo tỉ lệ container-main: 1.14fr trong grid 1fr 1.14fr 1fr */
    width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
    max-width: calc(1200px * 1.14 / 3.14); /* Responsive với max-width */
    min-width: 320px; /* Minimum width để đảm bảo nav items không quá chật */
    height: 60px;
    background: linear-gradient(135deg, var(--theme-color));
    border-radius: 30px;
    padding: 10px;
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
    /* Flexible spacing - nav items sẽ tự điều chỉnh khoảng cách */
    flex-shrink: 0;
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
    width: 20px;
    height: 20px;
    object-fit: contain;
    transition: var(--transition);
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

/* Tablet Styles */
@media screen and (max-width: 1024px) {
    .container-mid-nav {
        width: calc(1.14 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3.14);
        max-width: calc(900px * 1.14 / 3.14);
        min-width: 280px;
    }
}

/* Mobile Landscape */
@media screen and (max-width: 768px) {
    .container-mid-nav {
        width: calc(1.4 * (100vw - 2 * var(--container-gap) - 2 * var(--container-padding)) / 3);
        max-width: calc(700px * 1.4 / 3);
        min-width: 260px;
        height: 50px;
    }
    
    .nav-item {
        width: 40px;
        height: 40px;
    }
    
    .nav-icon {
        width: 18px;
        height: 18px;
    }
}

/* Mobile Portrait */
@media screen and (max-width: 480px) {
    .container-mid-nav {
        width: calc(100vw - 2 * var(--container-gap) - 2 * var(--container-padding));
        max-width: calc(100vw - 32px);
        min-width: 240px;
        height: 45px;
        top: 15px;
    }
    
    .nav-item {
        width: 35px;
        height: 35px;
    }
    
    .nav-icon {
        width: 16px;
        height: 16px;
    }
}

/* Extra Small Devices */
@media screen and (max-width: 320px) {
    .container-mid-nav {
        min-width: 200px;
        height: 40px;
        padding: 8px;
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
</style>