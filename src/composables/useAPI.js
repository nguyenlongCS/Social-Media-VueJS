// composables/useAPI.js - Xử lý các API calls
export function useAPI() {
  
  // Check QR scan status from backend
  const checkQrScanStatus = async (sessionId) => {
    try {
      const response = await fetch(`/api/qr-login/status/${sessionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error('Failed to check QR status')
      }
      
      const data = await response.json()
      return data
      
    } catch (error) {
      console.error('QR status check failed:', error)
      throw error
    }
  }

  // Generic API call wrapper
  const apiCall = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      })
      
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API call failed:', error)
      throw error
    }
  }

  return {
    checkQrScanStatus,
    apiCall
  }
}