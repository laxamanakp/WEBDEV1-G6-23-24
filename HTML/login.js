document.addEventListener('DOMContentLoaded', function() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    sign_up_btn.addEventListener('click', () =>{
        container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener('click', () =>{
        container.classList.remove("sign-up-mode");
    });

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform login validation here
        const username = signInForm.querySelector('input[type="text"]').value;
        const password = signInForm.querySelector('input[type="password"]').value;
        // Example validation
        if (username.trim() === '') {
            alert('Please enter your username.');
            return;
        }
        if (password.trim() === '') {
            alert('Please enter your password.');
            return;
        }
        // Check if the entered username exists in localStorage
        const storedPassword = localStorage.getItem(username);
        if (storedPassword) {
            // If the username exists, check if the entered password matches the stored password
            if (storedPassword === password) {
                // Perform login authentication using the entered username and password
                console.log('Logging in with username:', username, 'and password:', password);
                // Redirect to index.html after successful login
                window.location.href = 'index.html';
                // Show alert for successful login
                alert('Successfully signed in!');
            } else {
                // Display error message if password doesn't match
                alert('Username / Password is Incorrect');
            }
        } else {
            // Display error message if username doesn't exist
            alert('Username or Password is Incorrect');
        }
    });
    

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform registration validation here
        const username = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;
        // Example validation
        if (username.trim() === '') {
            alert('Please enter a username.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (password.trim() === '') {
            alert('Please enter a password.');
            return;
        }
        // Here you can perform registration process with the entered username, email, and password
        console.log('Registering with username:', username, ', email:', email, 'and password:', password);
        // Redirect to sign in form after successful registration
        container.classList.remove("sign-up-mode");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
