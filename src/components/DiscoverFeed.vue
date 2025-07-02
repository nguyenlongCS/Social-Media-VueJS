<template>
    <div id="container-discover-feed">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
            <div class="loading-spinner">⏳</div>
            <div class="loading-text">{{ t.loading || 'Loading...' }}</div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
            <div class="error-text">{{ error }}</div>
            <button class="retry-button" @click="loadAllPosts">{{ t.retry || 'Retry' }}</button>
        </div>

        <!-- Empty State -->
        <div v-else-if="posts.length === 0" class="empty-state">
            <img src="/src/components/icons/empty.png" alt="No posts" class="empty-icon">
            <div class="empty-text">{{ t.noPosts || 'No posts yet' }}</div>
        </div>

        <!-- Media Grid -->
        <div v-else class="media-grid">
            <div v-for="post in posts" :key="post.id" class="media-item" @click="openPost(post)">
                <!-- Image Thumbnail -->
                <img v-if="post.mediaType?.startsWith('image/')" 
                     :src="post.mediaUrl" 
                     :alt="post.caption"
                     class="media-thumbnail">
                
                <!-- Video Thumbnail -->
                <div v-else-if="post.mediaType?.startsWith('video/')" class="video-thumbnail">
                    <video :src="post.mediaUrl" class="media-thumbnail" muted></video>
                    <div class="video-overlay">
                        <div class="play-icon">▶</div>
                    </div>
                </div>
                
                <!-- Audio Thumbnail -->
                <div v-else-if="post.mediaType?.startsWith('audio/')" class="audio-thumbnail">
                    <div class="audio-icon">🎵</div>
                </div>
                
                <!-- File Thumbnail -->
                <div v-else-if="post.mediaUrl" class="file-thumbnail">
                    <div class="file-icon">📄</div>
                </div>
                
                <!-- No Media Thumbnail -->
                <div v-else class="text-thumbnail">
                    <div class="text-icon">💬</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFirestore } from '@/composables/useFirestore.js'
import { useSettings } from '@/composables/useSettings.js'

const { getPosts, loading, error, clearError } = useFirestore()
const { t } = useSettings()

// Reactive state
const posts = ref([])

// Methods
const loadAllPosts = async () => {
    try {
        clearError()
        const fetchedPosts = await getPosts(50)
        posts.value = fetchedPosts
    } catch (loadError) {
        console.error('Failed to load posts:', loadError)
    }
}

const openPost = (post) => {
    console.log('Open post:', post.id)
    // TODO: Implement post detail view or navigation
}

// Load posts on component mount
onMounted(() => {
    loadAllPosts()
})
</script>

<style scoped>
#container-discover-feed {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* Loading, Error, Empty States */
.loading-state,
.error-state,
.empty-state {
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

/* Media Grid - Fixed 2 columns */
.media-grid {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-content: start;
    justify-items: center;
}

/* Custom Scrollbar - Vertical only */
.media-grid::-webkit-scrollbar {
    width: 6px;
}

.media-grid::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.media-grid::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--theme-color));
    border-radius: 8px;
}

.media-grid::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
}

.media-grid::-webkit-scrollbar-horizontal {
    display: none;
}

/* Firefox scrollbar - Vertical only */
.media-grid {
    scrollbar-width: thin;
    scrollbar-color: var(--theme-color) rgba(0, 0, 0, 0.1);
}

/* Media Items - Fixed size */
.media-item {
    width: 120px;
    height: 120px;
    border-radius: var(--border-radius-small);
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
    background: linear-gradient(135deg, var(--theme-color));
    position: relative;
    flex-shrink: 0;
}

.media-item:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Media Thumbnails */
.media-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Video Thumbnail */
.video-thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.video-thumbnail:hover .video-overlay {
    opacity: 1;
}

.play-icon {
    color: white;
    font-size: 24px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Audio Thumbnail */
.audio-thumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--theme-color));
}

.audio-icon {
    font-size: 40px;
    opacity: 0.8;
}

/* File Thumbnail */
.file-thumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--theme-color));
}

.file-icon {
    font-size: 40px;
    opacity: 0.8;
}

/* Text Thumbnail */
.text-thumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--theme-color));
}

.text-icon {
    font-size: 40px;
    opacity: 0.8;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Responsive Design */
@media screen and (max-width: 768px) {
    .media-grid {
        padding: 15px;
        gap: 12px;
    }

    .media-item {
        width: 100px;
        height: 100px;
    }

    .play-icon {
        font-size: 18px;
    }

    .audio-icon,
    .file-icon,
    .text-icon {
        font-size: 28px;
    }
}

@media screen and (max-width: 480px) {
    .media-grid {
        padding: 12px;
        gap: 10px;
    }

    .media-item {
        width: 80px;
        height: 80px;
    }

    .play-icon {
        font-size: 16px;
    }

    .audio-icon,
    .file-icon,
    .text-icon {
        font-size: 24px;
    }
}

/* Large screens */
@media screen and (min-width: 1200px) {
    .media-grid {
        padding: 25px;
        gap: 18px;
    }

    .media-item {
        width: 140px;
        height: 140px;
    }

    .play-icon {
        font-size: 28px;
    }

    .audio-icon,
    .file-icon,
    .text-icon {
        font-size: 45px;
    }
}
</style>