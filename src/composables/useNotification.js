// composables/useNotification.js - Xử lý thông báo và events
export function useNotification() {
  
  // Handle successful login
  const handleLoginSuccess = (data) => {
    // Emit custom event for parent components to handle
    const loginEvent = new CustomEvent('qr-login-success', {
      detail: {
        user: data.user,
        token: data.token,
        sessionId: data.sessionId
      }
    })
    
    window.dispatchEvent(loginEvent)
    
    // Optional: redirect to dashboard
    setTimeout(() => {
      window.location.href = data.redirectUrl || '/dashboard'
    }, 1500)
  }

  // Emit custom event
  const emitEvent = (eventName, detail) => {
    const customEvent = new CustomEvent(eventName, { detail })
    window.dispatchEvent(customEvent)
  }

  // Listen to custom event
  const addEventListener = (eventName, handler) => {
    window.addEventListener(eventName, handler)
    return () => window.removeEventListener(eventName, handler)
  }

  return {
    handleLoginSuccess,
    emitEvent,
    addEventListener
  }
}