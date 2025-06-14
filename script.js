function isStrongPassword(password) {
    if (password.length < 8) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[@#$%^&*+\-*/]/.test(password)) return false;
    return true;
}

function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (isStrongPassword(password)) {
        result.textContent = "STRONG PASSWORD";
        result.style.color = "green";
    } else {
        result.textContent = "WEAK PASSWORD";
        result.style.color = "red";
    }
}
