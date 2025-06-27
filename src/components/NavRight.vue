<template>
    <div class="container-right-nav">
        <button class="nav-circle orange-circle" @click="changeThemeColor('#ff7b42', '255, 123, 66')"></button>
        <button class="nav-circle green-circle" @click="changeThemeColor('#a4f28d', '164, 242, 141')"></button>
        <button class="nav-circle yellow-circle" @click="changeThemeColor('#ffeb7c', '255, 235, 124')"></button>
        <button class="nav-button language-button" @click="toggleLanguage">{{ t.languageBtn }}</button>
        <button class="nav-button logout-button" :class="{ disabled: !isLoggedIn }" @click="handleLogout"
            :disabled="!isLoggedIn">{{ t.logoutBtn }}</button>
    </div>
</template>

<script setup>
import { useSettings } from '@/composables/useSettings.js'
import { useAuth } from '@/composables/useAuth.js'

// Updated imports - hợp nhất từ useTheme + useLanguage + useAuth
const { changeThemeColor, currentLanguage, toggleLanguage, t, translate } = useSettings()
const { isLoggedIn, handleLogout } = useAuth()
</script>

<style scoped>
.container-right-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    padding: 15px 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.nav-button,
.nav-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    border: none;
    transition: var(--transition);
    cursor: pointer;
}

.nav-button {
    background: linear-gradient(135deg, var(--theme-color));
    height: 20px;
    padding: 0 12px;
    border-radius: 15px;
}

.logout-button {
    width: 100px;
    border-radius: 20px;
}

.language-button {
    width: 80px;
}

.nav-circle {
    height: 20px;
    width: 20px;
    border-radius: 50%;
}

.orange-circle {
    background-color: #ff7b42;
}

.green-circle {
    background-color: #a4f28d;
}

.yellow-circle {
    background-color: #ffeb7c;
}

.logout-button.disabled {
    background: rgba(var(--theme-color-rgb), 0.3);
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}
</style>