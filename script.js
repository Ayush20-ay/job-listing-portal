function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Sample fixed username & password (for demo)
    let correctUser = "admin";
    let correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        message.style.color = "green";
        message.innerHTML = "Login Successful ✅";
        localStorage.setItem("isLoggedIn", "true");

        // Redirect after 1 second
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        message.innerHTML = "Invalid Username or Password ❌";
    }
}