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
            <div class="empty-icon">📋</div>
            <div class="empty-text">{{ t.noPosts || 'No posts yet' }}</div>
        </div>

        <!-- Posts Feed -->
        <div v-else class="posts-container">
            <div v-for="post in posts" :key="post.id" class="post-item">
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

        <!-- Load More Button -->
        <div v-if="posts.length > 0 && posts.length >= postsLimit" class="load-more-container">
            <button class="load-more-btn" @click="loadMorePosts" :disabled="loading">
                {{ loading ? (t.loading || 'Loading...') : (t.loadMore || 'Load More') }}
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
const postsLimit = ref(10)

// Methods
const loadPosts = async () => {
    try {
        clearError()
        const fetchedPosts = await getPosts(postsLimit.value)
        posts.value = fetchedPosts
        console.log('Posts loaded:', fetchedPosts)
    } catch (loadError) {
        console.error('Failed to load posts:', loadError)
    }
}

const loadMorePosts = async () => {
    try {
        postsLimit.value += 10
        await loadPosts()
    } catch (loadError) {
        console.error('Failed to load more posts:', loadError)
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
    padding: 20px;
    overflow-y: auto;
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
    font-size: 48px;
    opacity: 0.5;
}

.empty-text {
    color: var(--text-secondary);
    font-size: 16px;
    text-align: center;
}

/* Posts Container */
.posts-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Post Item */
.post-item {
    background: rgba(0, 0, 0, 0.1);
    border-radius: var(--border-radius);
    padding: 15px;
    transition: var(--transition);
}


/* Post Header */
.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
}

.user-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.user-email {
    color: var(--theme-color);
    font-size: 14px;
    font-weight: 600;
}

.post-date {
    color: var(--text-secondary);
    font-size: 11px;
}

.post-actions {
    display: flex;
    gap: 5px;
}

.action-btn {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    transition: var(--transition);
}

.action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Post Media */
.post-media {
    margin-bottom: 12px;
    border-radius: var(--border-radius-small);
    overflow: hidden;
}

.media-image,
.media-video {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    display: block;
}

.media-video {
    background: #000;
}

/* Post Caption */
.post-caption {
    color: var(--text-light);
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 12px;
    word-wrap: break-word;
}

/* Post Footer */
.post-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 10px;
}

.post-stats {
    display: flex;
    gap: 15px;
}

.stat-item {
    color: var(--text-secondary);
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Load More */
.load-more-container {
    display: flex;
    justify-content: center;
    padding: 20px 0;
}

.load-more-btn {
    padding: 12px 24px;
    border: none;
    border-radius: var(--border-radius-large);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}


.load-more-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    #container-home-feed {
        padding: 15px;
    }

    .post-item {
        padding: 12px;
    }

    .media-image,
    .media-video {
        max-height: 250px;
    }
}

@media screen and (max-width: 480px) {
    #container-home-feed {
        padding: 10px;
    }

    .post-item {
        padding: 10px;
    }

    .user-email {
        font-size: 13px;
    }

    .post-caption {
        font-size: 13px;
    }

    .media-image,
    .media-video {
        max-height: 200px;
    }
}
</style>
