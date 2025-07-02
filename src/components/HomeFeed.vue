.control-spacer {
    width: 35px;
    height: 35px;
    /* Empty spacer to maintain layout when no delete button */
}

.input-spacer {
    flex: 1;
    max-width: 200px;
    /* Empty spacer to maintain layout when no caption */
}<template>
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
                <span class="username">{{ currentPost.userEmail }}</span>
            </div>
            
            <!-- Post Media Area -->
            <div class="post-media-area">
                <!-- Image -->
                <img v-if="currentPost.mediaType.startsWith('image/')" :src="currentPost.mediaUrl" :alt="currentPost.caption"
                    class="preview-media">
                
                <!-- Video -->
                <video v-else-if="currentPost.mediaType.startsWith('video/')" :src="currentPost.mediaUrl" class="preview-media"
                    controls></video>
                
                <!-- Audio -->
                <div v-else-if="currentPost.mediaType.startsWith('audio/')" class="audio-preview">
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
                <button class="control-btn delete-btn" @click="handleDeletePost(currentPost)" 
                    :disabled="deletingPost === currentPost.id" v-if="isOwnPost(currentPost)">
                    <img v-if="deletingPost === currentPost.id" src="/src/components/icons/loading.png" alt="Loading" class="control-icon loading">
                    <img v-else src="/src/components/icons/delete.png" alt="Delete" class="control-icon">
                </button>
                <div v-else class="control-spacer"></div>
                
                <div class="input-wrapper" v-if="currentPost.caption && currentPost.caption.trim()">
                    <div class="caption-display">{{ currentPost.caption }}</div>
                </div>
                <div v-else class="input-spacer"></div>
                
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
    
    // Clear existing timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout)
    }
    
    const delta = event.deltaY
    
    if (delta > 0) {
        // Scroll down - next post
        if (currentIndex.value < posts.value.length - 1) {
            currentIndex.value++
        }
    } else {
        // Scroll up - previous post
        if (currentIndex.value > 0) {
            currentIndex.value--
        }
    }
    
    hideScrollHint()
    
    // Prevent rapid scrolling
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
    
    // Minimum swipe distance
    if (Math.abs(deltaY) < 50) return
    
    if (deltaY > 0) {
        // Swipe up - next post
        if (currentIndex.value < posts.value.length - 1) {
            currentIndex.value++
        }
    } else {
        // Swipe down - previous post
        if (currentIndex.value > 0) {
            currentIndex.value--
        }
    }
    
    hideScrollHint()
}

const hideScrollHint = () => {
    showScrollHint.value = false
    
    // Show hint again after 3 seconds
    if (hintTimeout) {
        clearTimeout(hintTimeout)
    }
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
        console.log('Posts loaded:', fetchedPosts)
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

        // Remove post from local array
        posts.value = posts.value.filter(p => p.id !== post.id)

        // Adjust current index if needed
        if (currentIndex.value >= posts.value.length && posts.value.length > 0) {
            currentIndex.value = posts.value.length - 1
        }

        console.log('Post deleted successfully:', post.id)
    } catch (deleteError) {
        console.error('Failed to delete post:', deleteError)
    } finally {
        deletingPost.value = null
    }
}

const formatDate = (timestamp) => {
    if (!timestamp) return ''

    try {
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
        return date.toLocaleDateString(currentLanguage.value === 'EN' ? 'en-US' : 'vi-VN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    } catch (formatError) {
        console.warn('Date format error:', formatError)
        return ''
    }
}

const isOwnPost = (post) => {
    const result = user.value && post.userId === user.value.uid
    console.log('Debug isOwnPost:', {
        userExists: !!user.value,
        currentUserId: user.value?.uid,
        postUserId: post.userId,
        isOwn: result
    })
    return result
}

// Load posts on component mount
onMounted(() => {
    loadPosts()
    
    // Show hint initially
    setTimeout(() => {
        showScrollHint.value = true
    }, 1000)
})

// Cleanup
onUnmounted(() => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout)
    }
    if (hintTimeout) {
        clearTimeout(hintTimeout)
    }
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

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
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

/* Single Post Container - Match StatusCreation layout */
.single-post-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 25px;
    gap: 20px;
}

/* User Info - Match StatusCreation */
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

/* Post Media Area - Fixed height */
.post-media-area {
    flex: 1;
    border-radius: var(--border-radius);
    background: linear-gradient(135deg, var(--theme-color));
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    min-height: 300px; /* Fixed minimum height */
}

/* Media Preview - Consistent sizing */
.preview-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
}

/* Audio Preview - Match StatusCreation */
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

/* File Info - Match StatusCreation */
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

/* Controls - Match StatusCreation layout */
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
}

.delete-btn {
    /* Position like close-btn in StatusCreation */
}

.option-btn {
    /* Position like post-btn in StatusCreation */
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
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.control-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Input wrapper for caption */
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
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-5px);
    }
    60% {
        transform: translateY(-3px);
    }
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