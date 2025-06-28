<template>
    <div id="container-menu-home">
        <button class="menu-button">create status</button>
        <button class="menu-button">discover</button>
        <button class="menu-button">settings</button>
    </div>
</template>
<script setup>
import { useSettings } from '@/composables/useSettings.js';
</script>
<style scoped>
.menu-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
}
.menu-button {
    padding: 15px 20px;
    border: none;
    border-radius: var(--border-radius-large);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    font-size: 14px;
    text-transform: lowercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}
</style>