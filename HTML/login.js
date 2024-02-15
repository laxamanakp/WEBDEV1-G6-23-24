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
    const username = signInForm.querySelector('input[type="text"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    if (username.trim() === '') {
        alert('Please enter your username.');
        return;
    }
    if (password.trim() === '') {
        alert('Please enter your password.');
        return;
    }
    const storedPassword = localStorage.getItem(username);
    console.log('Stored Password:', storedPassword); // Debugging statement
    console.log('Entered Password:', password); // Debugging statement
    if (storedPassword) {
        if (storedPassword === password) {
            console.log('Logging in with username:', username, 'and password:', password);
            alert('Successfully signed in!');
            window.location.href = 'index.html';
        } else {
            alert('Username / Password is Incorrect');
        }
    } else {
        alert('Username or Password is Incorrect');
    }
});

    

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = signUpForm.querySelector('input[type="text"]').value;
        const email = signUpForm.querySelector('input[type="email"]').value;
        const password = signUpForm.querySelector('input[type="password"]').value;
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
        console.log('Registering with username:', username, ', email:', email, 'and password:', password);
        container.classList.remove("sign-up-mode");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
