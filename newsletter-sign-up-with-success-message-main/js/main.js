/* ========================================
   Newsletter Sign-up Form - JavaScript
   ======================================== */

// --- DOM Elements ---
// TODO: Select the form, email input, and other elements

// --- State ---
// TODO: Decide how to track if form was submitted successfully

// --- Functions ---

/**
 * Validates the email address
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateEmail(email) {
  // TODO: Implement email validation
  // Hint: Use a regular expression or HTML5 validation API
}

/**
 * Shows the success message
 * @param {string} email - The email that was submitted
 */
function showSuccessMessage(email) {
  // TODO: Hide the form, show the success message
  // TODO: Display the submitted email in the success message
}

/**
 * Shows an error message
 * @param {string} message - The error message to display
 */
function showError(message) {
  // TODO: Display error message to the user
  // TODO: Add error styling to the input field
}

/**
 * Clears any error state
 */
function clearError() {
  // TODO: Remove error message
  // TODO: Remove error styling from input
}

/**
 * Handles form submission
 * @param {Event} event - The submit event
 */
function handleSubmit(event) {
  // TODO: Prevent default form submission
  // TODO: Get the email value
  // TODO: Validate email
  // TODO: If valid, show success message
  // TODO: If invalid, show error
}

// --- Event Listeners ---
// TODO: Add submit event listener to the form

// --- Initialization ---
// TODO: Any initial setup needed when page loads

console.log('Newsletter form JS loaded!');
