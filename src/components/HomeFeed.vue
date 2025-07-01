<template>
    <div id="container-home-feed">
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

        <!-- Posts Feed -->
        <div v-else class="posts-container">
            <div v-for="post in displayedPosts" :key="post.id" class="post-item">
                <!-- Post Header -->
                <div class="post-header">
                    <div class="user-info">
                        <div class="user-avatar"></div>
                        <div class="user-details">
                            <div class="user-email">{{ post.userEmail }}</div>
                            <div class="post-date">{{ formatDate(post.createdAt) }}</div>
                        </div>
                    </div>
                    <div class="post-actions" v-if="isOwnPost(post)">
                        <button class="action-btn delete-btn" @click="handleDeletePost(post)"
                            :disabled="deletingPost === post.id">
                            {{ deletingPost === post.id ? '⏳' : '🗑️' }}
                        </button>
                    </div>
                </div>

                <!-- Post Media -->
                <div v-if="post.mediaUrl" class="post-media">
                    <img v-if="post.mediaType.startsWith('image/')" :src="post.mediaUrl" :alt="post.caption"
                        class="media-image">
                    <video v-else-if="post.mediaType.startsWith('video/')" :src="post.mediaUrl" class="media-video"
                        controls></video>
                </div>

                <!-- Post Caption -->
                <div v-if="post.caption" class="post-caption">
                    {{ post.caption }}
                </div>

                <!-- Post Footer -->
                <div class="post-footer">
                    <div class="post-stats">
                        <span class="stat-item">❤️ {{ post.likes || 0 }}</span>
                        <span class="stat-item">💬 {{ post.comments || 0 }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Controls for Mobile -->
        <div v-if="posts.length > maxDisplayedPosts" class="mobile-nav-controls">
            <button class="nav-control-btn" @click="previousPage" :disabled="currentPage === 0">
                ◀
            </button>
            <span class="page-indicator">{{ currentPage + 1 }} / {{ totalPages }}</span>
            <button class="nav-control-btn" @click="nextPage" :disabled="currentPage >= totalPages - 1">
                ▶
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useFirestore } from '@/composables/useFirestore.js'
import { useAuthStore } from '@/stores/authStore'
import { useSettings } from '@/composables/useSettings.js'

const { getPosts, deletePost, loading, error, clearError } = useFirestore()
const { user } = useAuthStore()
const { t, currentLanguage } = useSettings()

// Reactive state
const posts = ref([])
const deletingPost = ref(null)
const currentPage = ref(0)
const maxDisplayedPosts = ref(3) // Show only 3 posts at a time for mobile

// Computed properties
const totalPages = computed(() => Math.ceil(posts.value.length / maxDisplayedPosts.value))
const displayedPosts = computed(() => {
    const start = currentPage.value * maxDisplayedPosts.value
    const end = start + maxDisplayedPosts.value
    return posts.value.slice(start, end)
})

// Methods
const loadPosts = async () => {
    try {
        clearError()
        const fetchedPosts = await getPosts(20) // Load more posts but show limited
        posts.value = fetchedPosts
        currentPage.value = 0 // Reset to first page
        console.log('Posts loaded:', fetchedPosts)
    } catch (loadError) {
        console.error('Failed to load posts:', loadError)
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++
    }
}

const previousPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--
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

        // Adjust current page if needed
        if (displayedPosts.value.length === 0 && currentPage.value > 0) {
            currentPage.value--
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
        // Handle Firestore Timestamp
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
    return user.value && post.userId === user.value.uid
}

// Load posts on component mount
onMounted(() => {
    loadPosts()
})
</script>

<style scoped>
#container-home-feed {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    overflow: hidden;
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

/* Posts Container - Fixed height, no scroll */
.posts-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    overflow: hidden;
    min-height: 0;
}

/* Post Item */
.post-item {
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    padding: 12px;
    transition: var(--transition);
    flex-shrink: 0;
}

/* Post Header */
.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.user-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.user-email {
    color: var(--theme-color);
    font-size: 13px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.post-date {
    color: var(--text-secondary);
    font-size: 10px;
}

.post-actions {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
}

.action-btn {
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    transition: var(--transition);
}

.action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Post Media - Compact for mobile */
.post-media {
    margin-bottom: 10px;
    border-radius: var(--border-radius-small);
    overflow: hidden;
}

.media-image,
.media-video {
    width: 100%;
    height: auto;
    max-height: 180px;
    object-fit: cover;
    display: block;
}

.media-video {
    background: #000;
}

/* Post Caption */
.post-caption {
    color: var(--text-light);
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

/* Post Footer */
.post-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 8px;
}

.post-stats {
    display: flex;
    gap: 12px;
}

.stat-item {
    color: var(--text-secondary);
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 3px;
}

/* Mobile Navigation Controls */
.mobile-nav-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 12px 0;
    flex-shrink: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 10px;
}

.nav-control-btn {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    transition: var(--transition);
}

.nav-control-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.page-indicator {
    color: var(--theme-color);
    font-size: 12px;
    font-weight: 600;
    min-width: 60px;
    text-align: center;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    #container-home-feed {
        padding: 12px;
    }

    .post-item {
        padding: 10px;
    }

    .media-image,
    .media-video {
        max-height: 160px;
    }
}

@media screen and (max-width: 480px) {
    #container-home-feed {
        padding: 10px;
    }

    .post-item {
        padding: 8px;
    }

    .user-email {
        font-size: 12px;
    }

    .post-caption {
        font-size: 12px;
    }

    .media-image,
    .media-video {
        max-height: 140px;
    }

    .mobile-nav-controls {
        gap: 12px;
        padding: 10px 0;
    }

    .nav-control-btn {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }

    .page-indicator {
        font-size: 11px;
        min-width: 50px;
    }
}
</style>