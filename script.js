
/* Registration Validation */
const form = document.getElementById("registerForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        if (!name || !email || password.length < 6) {
            message.style.color = "red";
            message.textContent = "Please fill all fields correctly.";
        } else {
            message.style.color = "green";
            message.textContent = "Registration successful!✅";
        }
    });
}

/* Cookie */
if (!document.cookie.includes("visited=true")) {
    document.cookie = "visited=true; max-age=86400";
}