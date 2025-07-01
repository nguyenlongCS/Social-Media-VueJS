// composables/useMobileSwipe.js - Mobile swipe navigation (single container view)
import { ref, onMounted, onUnmounted } from 'vue'

export function useMobileSwipe() {
  const currentView = ref(1) // 0: left, 1: main, 2: right
  const startX = ref(0)
  const startY = ref(0)
  const isDragging = ref(false)
  const isMobile = ref(false)

  // Check if device is mobile
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 480
  }

  // Get container class based on current view
  const getContainerClass = () => {
    if (!isMobile.value) return ''
    
    switch (currentView.value) {
      case 0: return 'show-left'
      case 1: return '' // Default - show main
      case 2: return 'show-right'
      default: return ''
    }
  }

  // Touch event handlers
  const handleTouchStart = (event) => {
    if (!isMobile.value) return
    
    const touch = event.touches[0]
    startX.value = touch.clientX
    startY.value = touch.clientY
    isDragging.value = true
  }

  const handleTouchMove = (event) => {
    if (!isMobile.value || !isDragging.value) return
    
    // Prevent default scroll behavior during horizontal swipe
    const touch = event.touches[0]
    const deltaX = Math.abs(touch.clientX - startX.value)
    const deltaY = Math.abs(touch.clientY - startY.value)
    
    if (deltaX > deltaY && deltaX > 30) {
      event.preventDefault()
    }
  }

  const handleTouchEnd = (event) => {
    if (!isMobile.value || !isDragging.value) return
    
    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - startX.value
    const deltaY = touch.clientY - startY.value
    
    // Only process horizontal swipes (ignore vertical scrolls)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe right - go to previous view
        swipeToPrevious()
      } else {
        // Swipe left - go to next view  
        swipeToNext()
      }
    }
    
    isDragging.value = false
  }

  // Navigation methods
  const swipeToPrevious = () => {
    currentView.value = currentView.value > 0 ? currentView.value - 1 : 2 // Wrap around
  }

  const swipeToNext = () => {
    currentView.value = currentView.value < 2 ? currentView.value + 1 : 0 // Wrap around
  }

  const swipeToView = (viewIndex) => {
    if (viewIndex >= 0 && viewIndex <= 2) {
      currentView.value = viewIndex
    }
  }

  // Reset to main view (useful for navigation)
  const resetToMain = () => {
    currentView.value = 1
  }

  // Setup event listeners
  const setupSwipeListeners = () => {
    if (!isMobile.value) return

    const container = document.querySelector('.home-page, .login-page')
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false })
      container.addEventListener('touchmove', handleTouchMove, { passive: false })
      container.addEventListener('touchend', handleTouchEnd, { passive: true })
    }
  }

  const removeSwipeListeners = () => {
    const container = document.querySelector('.home-page, .login-page')
    if (container) {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }

  // Resize handler
  const handleResize = () => {
    const wasMobile = isMobile.value
    checkMobile()
    
    // Reset to main view when switching to/from mobile
    if (wasMobile !== isMobile.value) {
      currentView.value = 1
      if (isMobile.value) {
        setupSwipeListeners()
      } else {
        removeSwipeListeners()
      }
    }
  }

  // Lifecycle
  onMounted(() => {
    checkMobile()
    if (isMobile.value) {
      setupSwipeListeners()
    }
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    removeSwipeListeners()
    window.removeEventListener('resize', handleResize)
  })

  return {
    currentView,
    isMobile,
    getContainerClass,
    swipeToPrevious,
    swipeToNext,
    swipeToView,
    resetToMain
  }
}