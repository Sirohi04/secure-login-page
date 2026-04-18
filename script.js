const form = document.getElementById("loginForm");
const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", () => {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordField.type = "password";
        togglePassword.textContent = "👁️";
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = passwordField.value;
    const error = document.getElementById("error");

    // Strong Password Pattern
    const strongPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&]).{6,}$/;

    if (username === "" || password === "") {
        error.textContent = "All fields are required!";
        return;
    }

    if (!strongPassword.test(password)) {
        error.textContent = "Password must contain: 1 uppercase, 1 number, 1 special character!";
        return;
    }

    // Dummy login
    if (username === "admin" && password === "Admin@123") {
        alert("Login Successful!");
        error.textContent = "";
    } else {
        error.textContent = "Invalid username or password!";
    }
});