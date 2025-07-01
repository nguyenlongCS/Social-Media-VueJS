// composables/useValidation.js
export function useValidation() {
  const validateEmail = (email) => {
    if (!email) return 'email-required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'email-invalid'
    return null
  }

  const validatePassword = (password) => {
    if (!password) return 'password-required'
    return null
  }

  const validatePasswordConfirmation = (password, confirmPassword) => {
    if (!confirmPassword) return 'confirm-password-required'
    if (password !== confirmPassword) return 'password-mismatch'
    return null
  }

  const validateLoginForm = (form) => {
    const emailError = validateEmail(form.email)
    if (emailError) return emailError
    
    const passwordError = validatePassword(form.password)
    if (passwordError) return passwordError
    
    return null
  }

  const validateSignupForm = (form) => {
    const emailError = validateEmail(form.email)
    if (emailError) return emailError
    
    const passwordError = validatePassword(form.password)
    if (passwordError) return passwordError
    
    const confirmPasswordError = validatePasswordConfirmation(form.password, form.confirmPassword)
    if (confirmPasswordError) return confirmPasswordError
    
    return null
  }

  const validateForgotPasswordForm = (email) => {
    return validateEmail(email)
  }

  return {
    validateEmail,
    validatePassword,
    validatePasswordConfirmation,
    validateLoginForm,
    validateSignupForm,
    validateForgotPasswordForm
  }
}