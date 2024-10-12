// JavaScript file for handling user registration and interests

// In-memory storage for registered users
let users = [];

// Event listener for the registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let valid = true; // Flag for form validation

    // Validate username
    const username = document.getElementById('username');
    if (!username.value.trim()) {
        username.classList.add('is-invalid');
        valid = false;
    } else {
        username.classList.remove('is-invalid');
    }

    // Validate email
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!email.value.trim() || !emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate password
    const password = document.getElementById('password');
    if (password.value.length < 8) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validate gender
    const gender = document.getElementById('gender');
    if (!gender.value) {
        gender.classList.add('is-invalid');
        valid = false;
    } else {
        gender.classList.remove('is-invalid');
    }

    // Collect interests
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(interest => interest.value); // Get selected interests

    // Check if at least one interest is selected
    if (interests.length === 0) {
        alert('Please select at least one interest.'); // Alert if no interests are selected
        valid = false;
    }

    if (valid) {
        // Create a user object
        const user = {
            username: username.value,
            email: email.value,
            password: password.value,
            gender: gender.value,
            interests: interests
        };

        // Add user to the in-memory list
        users.push(user);

        // Reset the form
        document.getElementById('registrationForm').reset();
        alert('Registration successful!'); // Notify user of successful registration
    }
});
