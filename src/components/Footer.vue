<template>
    <div class="footer-container">
        <!-- Footer Left - Scroll Controls -->
        <div class="footer-left">
            <div v-if="showScrollArrow" class="scroll-section">
                <div class="scroll-arrow" :class="{ visible: isScrollArrowVisible }" @click="$emit('scroll-click')">
                    {{ scrollDirection === 'down' ? '↓' : '↑' }}
                </div>
                <div class="scroll-text">{{ scrollText }}</div>
            </div>
        </div>

        <!-- Footer Mid - Messages -->
        <div class="footer-mid">
            <div class="message-section">
                <!-- Success Messages -->
                <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
                
                <!-- Error Messages -->
                <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
                
                <!-- Loading Messages -->
                <div v-else-if="loadingMessage" class="loading-message">
                    <div class="loading-spinner">⏳</div>
                    <span>{{ loadingMessage }}</span>
                </div>
            </div>
        </div>

        <!-- Footer Right - Additional Info -->
        <div class="footer-right">
            <div class="additional-info">
                <!-- Debug info to check if messages are received -->
                <!-- <small v-if="successMessage || errorMessage || loadingMessage" style="color: var(--text-secondary);">
                    S:{{ !!successMessage }} E:{{ !!errorMessage }} L:{{ !!loadingMessage }}
                </small> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSettings } from '@/composables/useSettings.js'

const emit = defineEmits(['scroll-click'])

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
/* Footer styles are now in main.css */
</style>