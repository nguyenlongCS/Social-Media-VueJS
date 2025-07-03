<template>
    <div class="footer-container">
        <!-- Scroll Arrow for HomeFeed -->
        <div v-if="showScrollArrow" class="scroll-section">
            <div class="scroll-arrow" :class="{ visible: isScrollArrowVisible }">
                {{ scrollDirection === 'down' ? '↓' : '↑' }}
            </div>
            <div class="scroll-text">{{ scrollText }}</div>
        </div>

        <!-- Success Messages -->
        <div v-if="successMessage" class="message-section">
            <div class="success-message">{{ successMessage }}</div>
        </div>

        <!-- Error Messages -->
        <div v-if="errorMessage" class="message-section">
            <div class="error-message">{{ errorMessage }}</div>
        </div>

        <!-- Loading Messages -->
        <div v-if="loadingMessage" class="message-section">
            <div class="loading-message">
                <div class="loading-spinner">⏳</div>
                <span>{{ loadingMessage }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSettings } from '@/composables/useSettings.js'

const props = defineProps({
    // Scroll arrow props
    showScrollArrow: {
        type: Boolean,
        default: false
    },
    isScrollArrowVisible: {
        type: Boolean,
        default: false
    },
    scrollDirection: {
        type: String,
        default: 'down',
        validator: (value) => ['up', 'down'].includes(value)
    },
    currentIndex: {
        type: Number,
        default: 0
    },
    totalPosts: {
        type: Number,
        default: 0
    },
    
    // Message props
    successMessage: {
        type: String,
        default: ''
    },
    errorMessage: {
        type: String,
        default: ''
    },
    loadingMessage: {
        type: String,
        default: ''
    }
})

const { currentLanguage } = useSettings()

// Computed scroll text
const scrollText = computed(() => {
    if (props.totalPosts <= 1) return ''
    
    const current = props.currentIndex + 1
    const total = props.totalPosts
    
    if (currentLanguage.value === 'EN') {
        return `${current} of ${total} posts`
    } else {
        return `${current} / ${total} bài viết`
    }
})
</script>

<style scoped>
.footer-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
    padding: 1vh 2vw;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
    backdrop-filter: blur(10px);
    pointer-events: none;
}

/* Scroll Section */
.scroll-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5vh;
    pointer-events: auto;
}

.scroll-arrow {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(15px);
    border-radius: 50%;
    width: 2.5vw;
    height: 2.5vw;
    min-width: 32px;
    min-height: 32px;
    max-width: 40px;
    max-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--theme-color);
    font-size: 1.2vw;
    min-font-size: 16px;
    max-font-size: 20px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
}

.scroll-arrow.visible {
    opacity: 0.9;
    animation: bounce 2s infinite;
}

.scroll-text {
    color: var(--theme-color);
    font-size: 0.8vw;
    min-font-size: 12px;
    max-font-size: 14px;
    font-weight: 500;
    text-align: center;
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.3vh 1vw;
    border-radius: var(--border-radius-small);
    backdrop-filter: blur(10px);
}

/* Message Section */
.message-section {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 30vw;
    min-width: 300px;
    pointer-events: auto;
}

.success-message,
.error-message,
.loading-message {
    padding: 1vh 2vw;
    border-radius: var(--border-radius);
    font-size: 0.9vw;
    min-font-size: 14px;
    max-font-size: 16px;
    font-weight: 500;
    text-align: center;
    backdrop-filter: blur(15px);
    box-shadow: 0 0.5vh 1.5vh rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
}

.success-message {
    background: rgba(0, 255, 0, 0.15);
    border: 1px solid rgba(0, 255, 0, 0.4);
    color: #00ff00;
}

.error-message {
    background: rgba(255, 0, 0, 0.15);
    border: 1px solid rgba(255, 0, 0, 0.4);
    color: #ff4444;
}

.loading-message {
    background: rgba(255, 235, 124, 0.15);
    border: 1px solid rgba(255, 235, 124, 0.4);
    color: var(--theme-color);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
}

.loading-spinner {
    font-size: 1.2em;
    animation: spin 1s linear infinite;
}

/* Animations */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { 
        transform: translateY(0); 
    }
    40% { 
        transform: translateY(-0.5vh); 
    }
    60% { 
        transform: translateY(-0.2vh); 
    }
}

@keyframes spin {
    from { 
        transform: rotate(0deg); 
    }
    to { 
        transform: rotate(360deg); 
    }
}

@keyframes slideUp {
    from {
        transform: translateY(2vh);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Mobile Responsive */
@media screen and (max-width: 480px) {
    .footer-container {
        padding: 2vh 4vw;
        gap: 1.5vh;
    }
    
    .scroll-arrow {
        width: 8vw;
        height: 8vw;
        min-width: 40px;
        min-height: 40px;
        max-width: 50px;
        max-height: 50px;
        font-size: 5vw;
        min-font-size: 20px;
        max-font-size: 24px;
    }
    
    .scroll-text {
        font-size: 3.5vw;
        min-font-size: 14px;
        max-font-size: 16px;
        padding: 1vh 3vw;
    }
    
    .message-section {
        max-width: 85vw;
        min-width: unset;
    }
    
    .success-message,
    .error-message,
    .loading-message {
        padding: 1.5vh 4vw;
        font-size: 4vw;
        min-font-size: 16px;
        max-font-size: 18px;
    }
    
    .loading-message {
        gap: 3vw;
    }
}
</style>