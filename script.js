// A helpful function to get a reference to an element by its ID
const $ = (id) => document.getElementById(id);

/* ========================================================================= */
/* 🎉 Part 1: JavaScript Event Handling and Interactive Elements             */
/* ========================================================================= */

// Get the button and message elements
const eventButton = $('eventButton');
const messageArea = $('messageArea');

// Add a 'click' event listener to the button.
eventButton.addEventListener('click', function() {
    messageArea.textContent = 'Button was clicked! The page is now interactive.';
});

/* ========================================================================= */
/* 🎮 Part 2: Building Interactive Elements                                  */
/* ========================================================================= */

// --- Feature 1: Simple Counter ---
const counterElement = $('counter');
const incrementBtn = $('incrementBtn');
let count = 0;

incrementBtn.addEventListener('click', function() {
    count++; // Increment the counter variable
    counterElement.textContent = count; // Update the text on the page
});

// --- Feature 2: Light/Dark Mode Toggle ---
const themeToggleBtn = $('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    // The classList.toggle() method is an easy way to add or remove a class.
    body.classList.toggle('dark-mode');
    
    // Optional: Change the button text based on the theme.
    if (body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});

/* ========================================================================= */
/* 📋✅ Part 3: Form Validation with JavaScript                                */
/* ========================================================================= */

const form = $('registrationForm');
const nameInput = $('name');
const emailInput = $('email');
const passwordInput = $('password');
const nameError = $('nameError');
const emailError = $('emailError');
const passwordError = $('passwordError');
const formSuccessMessage = $('formSuccessMessage');

// Hide all error messages initially
const clearErrors = () => {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccessMessage.textContent = '';
};

// Listen for the 'submit' event on the form.
form.addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (page reload)
    event.preventDefault(); 
    
    // Clear previous errors
    clearErrors();

    // 2. Perform custom validation checks
    let isValid = true;

    // Validate Name: Must not be empty.
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate Email: Must not be empty and must be a valid format.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Password: Must be at least 8 characters long.
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // 3. Provide feedback based on validation result
    if (isValid) {
        // If all fields are valid, show a success message.
        formSuccessMessage.textContent = 'Form submitted successfully!';
        // In a real application, you would send the form data to a server here.
        form.reset(); // Clear the form fields for a new entry.
    }
});
