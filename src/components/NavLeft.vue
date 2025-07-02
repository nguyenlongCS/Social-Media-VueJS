<template>
    <div class="container-left-nav">
        <div v-if="user" class="user-profile">
            <div class="user-avatar"></div>
            <div class="username">{{ displayUsername }}</div>
        </div>
        <div v-else class="guest-profile">
            <div class="guest-text">{{ t.guest || 'Guest' }}</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'

const { user } = useAuthStore()
const { t } = useSettings()

// Remove @gmail.com from email display
const displayUsername = computed(() => {
    if (!user.value?.email) return ''
    return user.value.email.replace('@gmail.com', '')
})
</script>

<style scoped>
.container-left-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 15px 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 8px;
}

.user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--theme-color));
    border: 2px solid rgba(var(--theme-color-rgb), 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.user-avatar::before {
    content: '👤';
    font-size: 16px;
    opacity: 0.8;
}

.username {
    color: var(--theme-color);
    font-weight: 600;
    font-size: 14px;
    white-space: nowrap;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.guest-profile {
    display: flex;
    align-items: center;
}

.guest-text {
    color: var(--text-secondary);
    font-size: 14px;
    opacity: 0.7;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .container-left-nav {
        padding: 12px 15px;
    }

    .user-avatar {
        width: 30px;
        height: 30px;
    }

    .user-avatar::before {
        font-size: 14px;
    }

    .username {
        font-size: 13px;
        max-width: 100px;
    }

    .guest-text {
        font-size: 13px;
    }
}

@media screen and (max-width: 480px) {
    .container-left-nav {
        padding: 10px 12px;
    }

    .user-avatar {
        width: 28px;
        height: 28px;
    }

    .user-avatar::before {
        font-size: 12px;
    }

    .username {
        font-size: 12px;
        max-width: 80px;
    }

    .guest-text {
        font-size: 12px;
    }
}
</style>