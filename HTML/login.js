document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Check if the entered username exists in localStorage
        const storedPassword = localStorage.getItem(loginUsername);

        if (storedPassword) {
            // If the username exists, check if the entered password matches the stored password
            if (storedPassword === loginPassword) {
                // Redirect to index.html after successful login
                window.location.href = 'index.html';
            } else {
                // Display login error message if password doesn't match
                loginError.textContent = 'Incorrect password.';
            }
        } else {
            // Display login error message if username doesn't exist
            loginError.textContent = 'Username not found.';
        }
    });
});
