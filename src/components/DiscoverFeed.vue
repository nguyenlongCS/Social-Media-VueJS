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
    gap: 1.5vh;
}

.loading-spinner {
    font-size: 1.5vw;
    min-font-size: 24px;
    animation: spin 1s linear infinite;
}

.loading-text {
    color: var(--theme-color);
    font-size: 1vw;
    min-font-size: 14px;
    font-weight: 500;
}

.error-text {
    color: #ff0000;
    font-size: 1vw;
    min-font-size: 14px;
    text-align: center;
}

.retry-button {
    padding: 1vh 2vw;
    border: none;
    border-radius: var(--border-radius);
    background: linear-gradient(135deg, var(--theme-color));
    color: var(--text-primary);
    font-size: 1vw;
    min-font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.empty-icon {
    width: 3vw;
    height: 3vw;
    min-width: 48px;
    min-height: 48px;
    object-fit: contain;
    opacity: 0.5;
}

.empty-text {
    color: var(--text-secondary);
    font-size: 1.2vw;
    min-font-size: 16px;
    text-align: center;
}

/* Media Grid - Hidden Scrollbar */
.media-grid {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1.5vh 1.5vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1vw;
    align-content: start;
    justify-items: center;
    
    /* Hide scrollbar completely */
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.media-grid::-webkit-scrollbar {
    display: none;
}

/* Media Items - Responsive Grid */
.media-item {
    width: 100%;
    aspect-ratio: 1;
    max-width: 8vw;
    min-width: 120px;
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
    box-shadow: 0 0.3vh 1vh rgba(0, 0, 0, 0.2);
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
    font-size: 1.5vw;
    min-font-size: 24px;
    text-shadow: 0 0.2vh 0.4vh rgba(0, 0, 0, 0.5);
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
    font-size: 2.5vw;
    min-font-size: 40px;
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
    font-size: 2.5vw;
    min-font-size: 40px;
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
    font-size: 2.5vw;
    min-font-size: 40px;
    opacity: 0.8;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Mobile Responsive */
@media screen and (max-width: 480px) {
    .media-grid {
        padding: 2vh 3vw;
        gap: 2vw;
    }

    .media-item {
        max-width: 35vw;
        min-width: 100px;
    }

    .play-icon {
        font-size: 5vw;
        min-font-size: 18px;
    }

    .audio-icon,
    .file-icon,
    .text-icon {
        font-size: 8vw;
        min-font-size: 28px;
    }
}
</style>