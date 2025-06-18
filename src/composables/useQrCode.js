// composables/useQrCode.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useQrCode() {
  const qrCodeElement = ref(null)
  
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
  
  // Tạo QR code thực sự
  const generateQrCode = async () => {
    const qrElement = document.getElementById('qrcode')
    if (!qrElement) return

    try {
      await loadQRCodeLibrary()
      
      // Clear existing content
      qrElement.innerHTML = ''
      
      // Tạo data cho QR code (có thể customize)
      const qrData = {
        action: 'login',
        timestamp: Date.now(),
        url: `${window.location.origin}/qr-login`
      }
      
      // Tạo QR code với thư viện
      new window.QRCode(qrElement, {
        text: JSON.stringify(qrData),
        width: 180,
        height: 180,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: window.QRCode.CorrectLevel.M
      })
      
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

  // Khởi tạo QR code
  const initQrCode = () => {
    // Delay nhỏ để đảm bảo DOM đã render
    setTimeout(() => {
      generateQrCode()
    }, 100)
  }

  onMounted(() => {
    initQrCode()
  })

  return {
    qrCodeElement,
    initQrCode
  }
}