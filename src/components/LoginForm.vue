<template>
  <div id="container-form-login">
    <div class="tab-buttons-login">
      <button class="tab-button" :class="{ active: activeTab === 'login' }" @click="switchTab('login')">
        {{ t.loginTab }}
      </button>
      <button class="tab-button" :class="{ active: activeTab === 'signup' }" @click="switchTab('signup')">
        {{ t.signupTab }}
      </button>
    </div>

    <div class="form-container">
      <!-- Login Form -->
      <form v-show="activeTab === 'login'" class="form" @submit.prevent="onLogin">
        <div class="input-group">
          <input type="email" 
                 class="input-field theme-input" 
                 :placeholder="t.emailPlaceholder" 
                 v-model="loginForm.email" 
                 required>
          <div class="password-input-container">
            <input :type="showPassword ? 'text' : 'password'" 
                   class="input-field theme-input" 
                   :placeholder="t.passwordPlaceholder"
                   v-model="loginForm.password" 
                   required>
            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
              <img :src="showPassword ? '/src/components/icons/hide.png' : '/src/components/icons/show.png'" 
                   :alt="showPassword ? 'Hide password' : 'Show password'" 
                   class="password-icon">
            </button>
          </div>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" class="checkbox" v-model="rememberMe">
            <span>{{ t.rememberMe }}</span>
          </label>
          <a href="#" class="forgot-password" @click.prevent="onForgotPassword">{{ t.forgotPassword }}</a>
        </div>

        <button type="submit" class="submit-button" :disabled="loading">
          {{ loading ? getButtonText('login') : t.loginBtn }}
        </button>
      </form>

      <!-- Signup Form -->
      <form v-show="activeTab === 'signup'" class="form" @submit.prevent="onSignup">
        <div class="input-group">
          <input type="email" 
                 class="input-field theme-input" 
                 :placeholder="t.emailPlaceholder" 
                 v-model="signupForm.email" 
                 required>
          <div class="password-input-container">
            <input :type="showPasswordSignup ? 'text' : 'password'" 
                   class="input-field theme-input"
                   :placeholder="t.passwordPlaceholder" 
                   v-model="signupForm.password" 
                   required>
            <button type="button" class="toggle-password" @click="showPasswordSignup = !showPasswordSignup">
              <img :src="showPasswordSignup ? '/src/components/icons/hide.png' : '/src/components/icons/show.png'" 
                   :alt="showPasswordSignup ? 'Hide password' : 'Show password'" 
                   class="password-icon">
            </button>
          </div>
          <div class="password-input-container">
            <input :type="showConfirmPassword ? 'text' : 'password'" 
                   class="input-field theme-input"
                   :placeholder="t.confirmPasswordPlaceholder" 
                   v-model="signupForm.confirmPassword" 
                   required>
            <button type="button" class="toggle-password" @click="showConfirmPassword = !showConfirmPassword">
              <img :src="showConfirmPassword ? '/src/components/icons/hide.png' : '/src/components/icons/show.png'" 
                   :alt="showConfirmPassword ? 'Hide password' : 'Show password'" 
                   class="password-icon">
            </button>
          </div>
        </div>

        <button type="submit" class="submit-button" :disabled="loading">
          {{ loading ? getButtonText('signup') : t.signupBtn }}
        </button>
      </form>

      <!-- Messages -->
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useSettings } from '@/composables/useSettings.js'
import { useAuth } from '@/composables/useAuth.js'
import { useValidation } from '@/composables/useValidation.js'

const { t, currentLanguage, getRememberedAuth } = useSettings()
const {
  loading,
  error,
  successMessage,
  encryptPassword,
  decryptPassword,
  handleLogin,
  handleSignup,
  handleForgotPassword,
  getLoadingMessage,
  clearMessages,
  handleError
} = useAuth()
const {
  validateLoginForm,
  validateSignupForm,
  validateForgotPasswordForm
} = useValidation()

// State
const activeTab = ref('login')
const rememberMe = ref(false)
const showPassword = ref(false)
const showPasswordSignup = ref(false)
const showConfirmPassword = ref(false)

const loginForm = reactive({
  email: '',
  password: ''
})

const signupForm = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

// Methods
const switchTab = (tab) => {
  activeTab.value = tab
  clearMessages()
}

const onLogin = () => {
  clearMessages()

  const validationError = validateLoginForm(loginForm)
  if (validationError) {
    handleError(validationError)
    return
  }

  handleLogin(loginForm, rememberMe.value)
}

const onSignup = () => {
  clearMessages()

  const validationError = validateSignupForm(signupForm)
  if (validationError) {
    handleError(validationError)
    return
  }

  handleSignup(signupForm)
}

const onForgotPassword = () => {
  clearMessages()

  const validationError = validateForgotPasswordForm(loginForm.email)
  if (validationError) {
    handleError(validationError)
    return
  }

  handleForgotPassword(loginForm.email)
}

const getButtonText = (type) => {
  if (!loading.value) {
    return type === 'login' ? t.loginBtn : t.signupBtn
  }
  return getLoadingMessage(type === 'login' ? 'logging-in' : 'signing-up')
}

// Initialize remembered auth
onMounted(() => {
  const remembered = getRememberedAuth()
  if (remembered.email) {
    loginForm.email = remembered.email
    loginForm.password = remembered.password ? decryptPassword(remembered.password) : ''
    rememberMe.value = true
  }
})
</script>

<style scoped>
#container-form-login {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tab-buttons-login {
  display: flex;
  margin-bottom: 25px;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  background-color: var(--bg-tertiary);
  flex-shrink: 0;
}

.tab-button {
  flex: 1;
  padding: 12px 0;
  border: none;
  background-color: #666;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: var(--transition);
}

.tab-button.active {
  background: linear-gradient(135deg, var(--theme-color));
  color: var(--text-primary);
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-field,
.theme-input {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: var(--border-radius-large);
  background: linear-gradient(135deg, var(--theme-color)) !important;
  color: var(--text-primary) !important;
  font-size: 16px;
  outline: none;
}

.input-field::placeholder,
.theme-input::placeholder {
  color: var(--bg-tertiary) !important;
  font-weight: 500;
}

.password-input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.toggle-password {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  opacity: 0.7;
  transition: var(--transition);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 14px;
}

.remember-me {
  color: var(--theme-color);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox {
  width: 18px;
  height: 18px;
  accent-color: var(--theme-color);
}

.forgot-password {
  color: var(--theme-color);
  text-decoration: none;
  transition: var(--transition);
}

.submit-button {
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: var(--border-radius-large);
  background: linear-gradient(135deg, var(--theme-color));
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: auto;
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: var(--border-radius);
  color: #ff0000;
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
}

.success-message {
  margin-top: 15px;
  padding: 12px;
  background-color: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.3);
  border-radius: var(--border-radius);
  color: #00aa00;
  font-size: 14px;
  text-align: center;
  flex-shrink: 0;
}
</style>