<template>
    <div id="container-menu-home">
        <div class="menu-buttons">
            <button class="menu-button" @click="navigateToStatus">{{ t.actionButtons.upload }}</button>
            <button class="menu-button" @click="navigateToDiscover">{{ t.actionButtons.discover }}</button>
            <button class="menu-button">{{ t.actionButtons.settings }}</button>
        </div>

        <!-- Test Messages Component - for debugging -->
        <TestMessages />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings.js'
import TestMessages from '@/components/TestMessages.vue'

const router = useRouter()
const { t } = useSettings()

const navigateToStatus = () => {
    router.push('/status')
}

const navigateToDiscover = () => {
    router.push('/discover')
}
</script>

<style scoped>
#container-menu-home {
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
}

.menu-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.menu-button {
    padding: 15px 20px;
    border: none;
    border-radius: var(--border-radius-large);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-transform: lowercase;
    letter-spacing: 0.5px;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.menu-button:active {
    transform: translateY(0);
}
</style>