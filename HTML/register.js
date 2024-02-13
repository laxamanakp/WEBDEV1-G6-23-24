document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registrationError = document.getElementById('registrationError');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const registerUsername = document.getElementById('registerUsername').value;
        const registerPassword = document.getElementById('registerPassword').value;

        // Perform email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(registerUsername)) {
            registrationError.textContent = 'Please enter a valid email address.';
            return;
        }

        // Perform password length validation
        if (registerPassword.length < 10) {
            registrationError.textContent = 'Password must be at least 10 characters long.';
            return;
        }

        // Check if the username is already registered
        if (localStorage.getItem(registerUsername)) {
            registrationError.textContent = 'Username already exists. Please choose a different one.';
            return;
        }

        // Store the registration data in localStorage
        localStorage.setItem(registerUsername, registerPassword);
        alert('Registration successful!');

        // Redirect to login page after successful registration
        window.location.href = 'login.html';
    });
});
