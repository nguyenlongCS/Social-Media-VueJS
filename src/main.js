import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/responsive.css'

// Import message store to ensure it's initialized
import '@/stores/messageStore.js'

createApp(App).use(router).mount('#app')