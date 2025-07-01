<template>
    <div id="container-social-login">
        <div class="qr-section">
            <div class="qr-title">{{ t.qrTitle }}</div>
            <div class="qr-code">
                <div class="qr-pattern" id="qrcode">
                    <!-- QR Code placeholder - chức năng tạm thời bị disable -->
                    <div class="qr-placeholder">
                        <br>
                        QR Login<br>
                        Coming Soon
                    </div>
                </div>
            </div>
        </div>
        <div class="social-login">
            <div class="social-title">{{ t.socialTitle }}</div>
            <div class="social-buttons">
                <button class="social-button facebook-btn" @click="handleFacebookLogin">
                    <img src="/src/components/icons/facebook-logo.png" alt="Facebook" class="social-icon">
                </button>
                <button class="social-button google-btn" @click="handleGoogleLogin">
                    <img src="/src/components/icons/google-logo.png" alt="Google" class="social-icon">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSettings } from '@/composables/useSettings.js'
import { useAuth } from '@/composables/useAuth.js'

const { t } = useSettings()
const { handleGoogleLogin, handleFacebookLogin } = useAuth()
</script>

<style scoped>
#container-social-login {
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.qr-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.qr-title {
    color: var(--theme-color);
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
}

.qr-code {
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: var(--border-radius-small);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.qr-pattern {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* QR placeholder styling */
.qr-placeholder {
    text-align: center;
    color: #999;
    font-size: 14px;
    line-height: 1.4;
    font-weight: 500;
}

/* Social Login */
.social-login {
    flex-shrink: 0;
    text-align: center;
}

.social-title {
    color: var(--theme-color);
    font-size: 14px;
    margin-bottom: 15px;
}

.social-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.social-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    background: linear-gradient(135deg, var(--theme-color));
    border: 2px solid rgba(var(--theme-color-rgb), 0.3);
}

.social-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: brightness(0) saturate(100%);
}

</style>