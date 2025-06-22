// composables/useQrCode.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useQrCode() {
  const qrCodeElement = ref(null)
  const qrSessionId = ref(null)
  const pollingInterval = ref(null)
  
  // Load QRCode library nếu chưa có
  const loadQRCodeLibrary = () => {
    return new Promise((resolve, reject) => {
      if (window.QRCode) {
        resolve()
        return
      }
      
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }
  
  // Generate unique session ID
  const generateSessionId = () => {
    return 'qr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
  }
  
  // Tạo QR code thực sự
  const generateQrCode = async () => {
    const qrElement = document.getElementById('qrcode')
    if (!qrElement) return

    try {
      await loadQRCodeLibrary()
      
      // Clear existing content
      qrElement.innerHTML = ''
      
      // Generate session ID
      qrSessionId.value = generateSessionId()
      
      // Tạo URL trực tiếp cho QR code thay vì JSON
      const qrUrl = `${window.location.origin}/qr-login/${qrSessionId.value}`
      
      // Tạo QR code với URL trực tiếp
      new window.QRCode(qrElement, {
        text: qrUrl,
        width: 180,
        height: 180,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: window.QRCode.CorrectLevel.M
      })
      
      // Start polling for QR scan status
      startPolling()
      
    } catch (error) {
      console.error('Error generating QR code:', error)
      // Fallback: hiển thị text thông báo
      qrElement.innerHTML = `
        <div style="
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f5;
          font-size: 12px;
          text-align: center;
          color: #666;
        ">
          QR Code<br>Loading...
        </div>
      `
    }
  }

  // Polling to check QR scan status
  const startPolling = () => {
    if (pollingInterval.value) {
      clearInterval(pollingInterval.value)
    }
    
    pollingInterval.value = setInterval(async () => {
      if (!qrSessionId.value) return
      
      try {
        await checkQrScanStatus()
      } catch (error) {
        console.error('Error checking QR scan status:', error)
      }
    }, 2000) // Check every 2 seconds
    
    // Auto stop polling after 5 minutes
    setTimeout(() => {
      stopPolling()
      // Regenerate QR if expired
      generateQrCode()
    }, 5 * 60 * 1000)
  }
  
  // Stop polling
  const stopPolling = () => {
    if (pollingInterval.value) {
      clearInterval(pollingInterval.value)
      pollingInterval.value = null
    }
  }
  
  // Check QR scan status from backend
  const checkQrScanStatus = async () => {
    try {
      const response = await fetch(`/api/qr-login/status/${qrSessionId.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error('Failed to check QR status')
      }
      
      const data = await response.json()
      
      // Handle different QR scan states
      switch (data.status) {
        case 'scanned':
          handleQrScanned(data)
          break
        case 'confirmed':
          handleQrConfirmed(data)
          break
        case 'cancelled':
          handleQrCancelled(data)
          break
        case 'expired':
          handleQrExpired(data)
          break
        default:
          // Still waiting for scan
          break
      }
      
    } catch (error) {
      console.error('QR status check failed:', error)
      // Continue polling on error
    }
  }
  
  // Handle QR code scanned (user opened mobile app)
  const handleQrScanned = (data) => {
    console.log('QR Code scanned:', data)
    // Update UI to show "Scanned, waiting for confirmation"
    updateQrStatus('scanned')
  }
  
  // Handle QR login confirmed (user approved login)
  const handleQrConfirmed = (data) => {
    console.log('QR Login confirmed:', data)
    stopPolling()
    
    // Process login data
    if (data.token) {
      // Store auth token
      localStorage.setItem('authToken', data.token)
      
      // Store user data if available
      if (data.user) {
        localStorage.setItem('userData', JSON.stringify(data.user))
      }
      
      // Redirect or emit login success event
      handleLoginSuccess(data)
    }
    
    updateQrStatus('confirmed')
  }
  
  // Handle QR login cancelled
  const handleQrCancelled = (data) => {
    console.log('QR Login cancelled:', data)
    updateQrStatus('cancelled')
    
    // Regenerate QR after delay
    setTimeout(() => {
      generateQrCode()
    }, 3000)
  }
  
  // Handle QR code expired
  const handleQrExpired = (data) => {
    console.log('QR Code expired:', data)
    updateQrStatus('expired')
    
    // Auto regenerate
    setTimeout(() => {
      generateQrCode()
    }, 1000)
  }
  
  // Update QR visual status
  const updateQrStatus = (status) => {
    const qrElement = document.getElementById('qrcode')
    if (!qrElement) return
    
    const statusMessages = {
      scanned: 'QR đã được quét<br>Chờ xác nhận...',
      confirmed: 'Đăng nhập thành công!<br>Đang chuyển hướng...',
      cancelled: 'Đăng nhập bị hủy<br>Đang tạo mã mới...',
      expired: 'QR đã hết hạn<br>Đang tạo mã mới...'
    }
    
    const statusColors = {
      scanned: '#FFA500',
      confirmed: '#4CAF50', 
      cancelled: '#FF6B6B',
      expired: '#999999'
    }
    
    qrElement.innerHTML = `
      <div style="
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;
        font-size: 14px;
        text-align: center;
        color: ${statusColors[status]};
        font-weight: 500;
      ">
        ${statusMessages[status]}
      </div>
    `
  }
  
  // Handle successful login
  const handleLoginSuccess = (data) => {
    // Emit custom event for parent components to handle
    const loginEvent = new CustomEvent('qr-login-success', {
      detail: {
        user: data.user,
        token: data.token,
        sessionId: qrSessionId.value
      }
    })
    
    window.dispatchEvent(loginEvent)
    
    // Optional: redirect to dashboard
    setTimeout(() => {
      window.location.href = data.redirectUrl || '/dashboard'
    }, 1500)
  }

  // Khởi tạo QR code
  const initQrCode = () => {
    // Delay nhỏ để đảm bảo DOM đã render
    setTimeout(() => {
      generateQrCode()
    }, 100)
  }
  
  // Cleanup on unmount
  onUnmounted(() => {
    stopPolling()
  })

  onMounted(() => {
    initQrCode()
  })

  return {
    qrCodeElement,
    qrSessionId,
    initQrCode,
    generateQrCode,
    stopPolling
  }
}