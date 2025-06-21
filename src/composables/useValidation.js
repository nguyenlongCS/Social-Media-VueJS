// composables/useValidation.js
import { ref } from 'vue'

export function useValidation() {
  const validationErrors = ref({})

  // Email validation
  const validateEmail = (email) => {
    if (!email) {
      return 'email-required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'email-invalid'
    }
    return null
  }

  // Password validation
  const validatePassword = (password) => {
    if (!password) {
      return 'password-required'
    }
    return null
  }

  // Password confirmation validation
  const validatePasswordConfirmation = (password, confirmPassword) => {
    if (!confirmPassword) {
      return 'confirm-password-required'
    }
    if (password !== confirmPassword) {
      return 'password-mismatch'
    }
    return null
  }

  // Login form validation
  const validateLoginForm = (form) => {
    const errors = {}
    
    const emailError = validateEmail(form.email)
    if (emailError) errors.email = emailError

    const passwordError = validatePassword(form.password)
    if (passwordError) errors.password = passwordError

    validationErrors.value = errors
    return Object.keys(errors).length === 0
  }

  // Signup form validation
  const validateSignupForm = (form) => {
    const errors = {}
    
    const emailError = validateEmail(form.email)
    if (emailError) errors.email = emailError

    const passwordError = validatePassword(form.password)
    if (passwordError) errors.password = passwordError

    const confirmPasswordError = validatePasswordConfirmation(form.password, form.confirmPassword)
    if (confirmPasswordError) errors.confirmPassword = confirmPasswordError

    validationErrors.value = errors
    return Object.keys(errors).length === 0
  }

  // Forgot password form validation
  const validateForgotPasswordForm = (email) => {
    const errors = {}
    
    const emailError = validateEmail(email)
    if (emailError) errors.email = emailError

    validationErrors.value = errors
    return Object.keys(errors).length === 0
  }

  // Clear validation errors
  const clearValidationErrors = () => {
    validationErrors.value = {}
  }

  // Get first validation error (for global error display)
  const getFirstValidationError = () => {
    const errors = Object.values(validationErrors.value)
    return errors.length > 0 ? errors[0] : null
  }

  return {
    validationErrors,
    validateEmail,
    validatePassword,
    validatePasswordConfirmation,
    validateLoginForm,
    validateSignupForm,
    validateForgotPasswordForm,
    clearValidationErrors,
    getFirstValidationError
  }
}