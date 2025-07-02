<template>
    <div id="container-home-feed" @wheel="handleScroll" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
            <div class="loading-spinner">⏳</div>
            <div class="loading-text">{{ t.loading || 'Loading...' }}</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
            <div class="error-text">{{ error }}</div>
            <button class="retry-button" @click="loadPosts">{{ t.retry || 'Retry' }}</button>
        </div>

        <!-- Empty State -->
        <div v-else-if="posts.length === 0" class="empty-state">
            <img src="/src/components/icons/empty.png" alt="No posts" class="empty-icon">
            <div class="empty-text">{{ t.noPosts || 'No posts yet' }}</div>
        </div>

        <!-- Single Post Display -->
        <div v-else-if="currentPost" class="single-post-container">
            <!-- User Info -->
            <div class="user-info">
                <div class="user-avatar"></div>
                <span class="username">{{ displayUsername(currentPost) }}</span>
            </div>
            
            <!-- Post Media Area -->
            <div class="post-media-area">
                <!-- Image -->
                <img v-if="currentPost.mediaType?.startsWith('image/')" 
                     :src="currentPost.mediaUrl" 
                     :alt="currentPost.caption"
                     class="preview-media">
                
                <!-- Video -->
                <video v-else-if="currentPost.mediaType?.startsWith('video/')" 
                       :src="currentPost.mediaUrl" 
                       class="preview-media"
                       controls></video>
                
                <!-- Audio -->
                <div v-else-if="currentPost.mediaType?.startsWith('audio/')" class="audio-preview">
                    <div class="audio-waveform">
                        <img src="/src/components/icons/sound.gif" alt="Sound" class="voice-icon">
                    </div>
                    <div class="audio-controls">
                        <audio :src="currentPost.mediaUrl" class="audio-player" controls></audio>
                    </div>
                </div>
                
                <!-- Other Files -->
                <div v-else-if="currentPost.mediaUrl" class="file-info">
                    <div class="file-icon">📄</div>
                    <div class="file-name">{{ currentPost.fileName || 'File' }}</div>
                </div>
            </div>
            
            <!-- Controls -->
            <div class="controls">
                <!-- Delete Button for own posts / Like Button for others -->
                <button v-if="isOwnPost(currentPost)" 
                        class="control-btn delete-btn" 
                        @click="handleDeletePost(currentPost)" 
                        :disabled="deletingPost === currentPost.id">
                    <img v-if="deletingPost === currentPost.id" 
                         src="/src/components/icons/loading.png" 
                         alt="Loading" 
                         class="control-icon loading">
                    <img v-else 
                         src="/src/components/icons/delete.png" 
                         alt="Delete" 
                         class="control-icon">
                </button>
                <button v-else 
                        class="control-btn like-btn" 
                        @click="handleLikePost(currentPost)">
                    <img src="/src/components/icons/heart.png" 
                         alt="Like" 
                         class="control-icon">
                </button>
                
                <!-- Caption Display - Always show wrapper -->
                <div class="input-wrapper">
                    <div class="caption-display" :class="{ 'no-caption': !currentPost.caption?.trim() }">
                        {{ currentPost.caption?.trim() || (currentLanguage === 'EN' ? 'No Caption' : 'Không có chú thích') }}
                    </div>
                </div>
                
                <!-- Options Button -->
                <button class="control-btn option-btn">
                    <img src="/src/components/icons/options.png" alt="Options" class="control-icon">
                </button>
            </div>
        </div>

        <!-- Scroll Hint -->
        <div v-if="posts.length > 1" class="scroll-hint">
            <div class="scroll-arrow" :class="{ visible: showScrollHint }">
                {{ currentIndex < posts.length - 1 ? '↓' : '↑' }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useFirestore } from '@/composables/useFirestore.js'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'

const { getPosts, deletePost, loading, error, clearError } = useFirestore()
const { user } = useAuthStore()
const { t, currentLanguage } = useSettings()

// Reactive state
const posts = ref([])
const deletingPost = ref(null)
const currentIndex = ref(0)
const showScrollHint = ref(true)
const touchStartY = ref(0)
const isScrolling = ref(false)

// Computed properties
const currentPost = computed(() => posts.value[currentIndex.value] || null)

// Scroll handling
let scrollTimeout = null
let hintTimeout = null

const handleScroll = (event) => {
    if (isScrolling.value || posts.value.length <= 1) return
    
    event.preventDefault()
    isScrolling.value = true
    
    if (scrollTimeout) clearTimeout(scrollTimeout)
    
    const delta = event.deltaY
    
    if (delta > 0 && currentIndex.value < posts.value.length - 1) {
        currentIndex.value++
    } else if (delta < 0 && currentIndex.value > 0) {
        currentIndex.value--
    }
    
    hideScrollHint()
    
    scrollTimeout = setTimeout(() => {
        isScrolling.value = false
    }, 500)
}

// Touch handling for mobile
const handleTouchStart = (event) => {
    touchStartY.value = event.touches[0].clientY
}

const handleTouchEnd = (event) => {
    if (posts.value.length <= 1) return
    
    const touchEndY = event.changedTouches[0].clientY
    const deltaY = touchStartY.value - touchEndY
    
    if (Math.abs(deltaY) < 50) return
    
    if (deltaY > 0 && currentIndex.value < posts.value.length - 1) {
        currentIndex.value++
    } else if (deltaY < 0 && currentIndex.value > 0) {
        currentIndex.value--
    }
    
    hideScrollHint()
}

const hideScrollHint = () => {
    showScrollHint.value = false
    
    if (hintTimeout) clearTimeout(hintTimeout)
    hintTimeout = setTimeout(() => {
        showScrollHint.value = true
    }, 3000)
}

// Methods
const loadPosts = async () => {
    try {
        clearError()
        const fetchedPosts = await getPosts(20)
        posts.value = fetchedPosts
        currentIndex.value = 0
    } catch (loadError) {
        console.error('Failed to load posts:', loadError)
    }
}

const handleDeletePost = async (post) => {
    if (!isOwnPost(post) || deletingPost.value) return

    const confirmMessage = currentLanguage.value === 'EN'
        ? 'Are you sure you want to delete this post?'
        : 'Bạn có chắc chắn muốn xóa bài viết này?'

    if (!confirm(confirmMessage)) return

    try {
        deletingPost.value = post.id
        await deletePost(post.id, post.storagePath)

        posts.value = posts.value.filter(p => p.id !== post.id)

        if (currentIndex.value >= posts.value.length && posts.value.length > 0) {
            currentIndex.value = posts.value.length - 1
        }
    } catch (deleteError) {
        console.error('Failed to delete post:', deleteError)
    } finally {
        deletingPost.value = null
    }
}

const isOwnPost = (post) => {
    return user.value && post && post.userId === user.value.uid
}

// Display username with @gmail.com removed, show "Me/Tôi" for own posts
const displayUsername = (post) => {
    if (!post?.userEmail) return ''
    
    if (isOwnPost(post)) {
        return currentLanguage.value === 'EN' ? 'Me' : 'Tôi'
    }
    
    return post.userEmail.replace('@gmail.com', '')
}

// Handle like action (placeholder for future implementation)
const handleLikePost = (post) => {
    console.log('Like post:', post.id)
    // TODO: Implement like functionality
}

// Load posts on component mount
onMounted(() => {
    loadPosts()
    
    setTimeout(() => {
        showScrollHint.value = true
    }, 1000)
})

// Cleanup
onUnmounted(() => {
    if (scrollTimeout) clearTimeout(scrollTimeout)
    if (hintTimeout) clearTimeout(hintTimeout)
})
</script>

<style scoped>
#container-home-feed {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    overflow: hidden;
    position: relative;
    user-select: none;
}

/* Loading State */
.loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 15px;
}

.loading-spinner {
    font-size: 24px;
    animation: spin 1s linear infinite;
}

.loading-text {
    color: var(--theme-color);
    font-size: 14px;
    font-weight: 500;
}

/* Error State */
.error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 15px;
}

.error-text {
    color: #ff0000;
    font-size: 14px;
    text-align: center;
}

.retry-button {
    padding: 10px 20px;
    border: none;
    border-radius: var(--border-radius);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

/* Empty State */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 15px;
}

.empty-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
    opacity: 0.5;
}

.empty-text {
    color: var(--text-secondary);
    font-size: 16px;
    text-align: center;
}

/* Single Post Container */
.single-post-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    gap: 20px;
}

/* User Info */
.user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-shrink: 0;
}

.user-avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
}

.username {
    color: var(--theme-color);
    font-weight: 600;
    font-size: 14px;
}

/* Post Media Area */
.post-media-area {
    flex: 1;
    border-radius: var(--border-radius);
    background: linear-gradient(135deg, var(--theme-color));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    min-height: 300px;
}

/* Media Preview */
.preview-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
}

/* Audio Preview */
.audio-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 30px 20px 20px 20px;
}

.audio-waveform {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.voice-icon {
    width: 120px;
    height: 120px;
    object-fit: contain;
}

.audio-controls {
    width: 100%;
    display: flex;
    justify-content: center;
}

.audio-player {
    width: 85%;
    height: 35px;
}

/* File Info */
.file-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    text-align: center;
}

.file-icon {
    font-size: 40px;
}

.file-name {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 14px;
    word-break: break-word;
}

/* Controls */
.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
}

.control-btn {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    font-weight: bold;
    flex-shrink: 0;
}

.control-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
}

.control-icon.loading {
    animation: spin 1s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.control-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.like-btn {
    background: linear-gradient(135deg, var(--theme-color));
}

.like-btn:hover {
    transform: scale(1.1);
}

/* Caption */
.input-wrapper {
    flex: 1;
    max-width: 200px;
    display: flex;
    justify-content: center;
}

.caption-display {
    width: 100%;
    padding: 12px 20px;
    border-radius: var(--border-radius-large);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 14px;
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.caption-display.no-caption {
    opacity: 0.5;
}

/* Scroll Hint */
.scroll-hint {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.scroll-arrow {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--theme-color);
    font-size: 16px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.scroll-arrow.visible {
    opacity: 0.8;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
    60% { transform: translateY(-3px); }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    #container-home-feed {
        padding: 12px;
    }

    .single-post-container {
        padding: 0 20px;
    }

    .scroll-arrow {
        width: 28px;
        height: 28px;
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    #container-home-feed {
        padding: 10px;
    }

    .single-post-container {
        padding: 0 15px;
    }

    .username {
        font-size: 13px;
    }

    .caption-display {
        font-size: 13px;
        padding: 10px 15px;
    }

    .scroll-hint {
        bottom: 20px;
    }
}
</style>