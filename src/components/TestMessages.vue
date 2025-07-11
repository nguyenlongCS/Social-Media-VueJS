<template>
  <div class="test-messages">
    <h3>Test Messages</h3>
    <div class="test-buttons">
      <button @click="testSuccess" class="test-btn success">Test Success</button>
      <button @click="testError" class="test-btn error">Test Error</button>
      <button @click="testLoading" class="test-btn loading">Test Loading</button>
      <button @click="clearAll" class="test-btn clear">Clear All</button>
    </div>
    
    <!-- Debug info -->
    <div class="debug-info">
      <p><strong>Current Messages:</strong></p>
      <p>Success: {{ successMessage || 'none' }}</p>
      <p>Error: {{ errorMessage || 'none' }}</p>
      <p>Loading: {{ loadingMessage || 'none' }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMessageStore } from '@/stores/messageStore.js'

const { setSuccess, setError, setLoading, clearMessages, successMessage, errorMessage, loadingMessage } = useMessageStore()

const testSuccess = () => {
  setSuccess('✅ Test success message - this should appear in footer!')
}

const testError = () => {
  setError('❌ Test error message - check footer for display!')
}

const testLoading = () => {
  setLoading('⏳ Test loading message - should show in footer...')
  // Auto clear after 3 seconds
  setTimeout(() => {
    setLoading('')
  }, 3000)
}

const clearAll = () => {
  clearMessages()
}
</script>

<style scoped>
.test-messages {
  padding: 15px;
  background: rgba(var(--theme-color-rgb), 0.1);
  border-radius: var(--border-radius);
  margin: 10px 0;
  border: 1px solid rgba(var(--theme-color-rgb), 0.3);
}

.test-messages h3 {
  color: var(--theme-color);
  margin-bottom: 12px;
  font-size: 14px;
  text-align: center;
}

.test-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.test-btn {
  padding: 6px 10px;
  border: none;
  border-radius: var(--border-radius-small);
  cursor: pointer;
  font-size: 11px;
  font-weight: 500;
  transition: var(--transition);
}

.test-btn.success {
  background: rgba(0, 255, 0, 0.2);
  color: #00ff00;
  border: 1px solid rgba(0, 255, 0, 0.5);
}

.test-btn.error {
  background: rgba(255, 0, 0, 0.2);
  color: #ff4444;
  border: 1px solid rgba(255, 0, 0, 0.5);
}

.test-btn.loading {
  background: rgba(255, 235, 124, 0.2);
  color: var(--theme-color);
  border: 1px solid rgba(255, 235, 124, 0.5);
}

.test-btn.clear {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--text-secondary);
}

.test-btn:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.debug-info {
  font-size: 9px;
  color: var(--text-secondary);
  text-align: left;
}

.debug-info p {
  margin: 1px 0;
  word-break: break-word;
}

.debug-info strong {
  color: var(--theme-color);
}
</style>