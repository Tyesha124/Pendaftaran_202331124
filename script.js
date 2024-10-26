function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Validasi Nomor Telepon
    const phonePattern = /^\d{10,12}$/;
    if (!phonePattern.test(phone)) {
        alert("Nomor telepon harus terdiri dari 10-12 digit.");
        return false;
    }

    // Validasi Password
    if (password !== confirmPassword) {
        alert("Password dan Konfirmasi Password harus sama.");
        return false;
    }

    // Validasi Panjang Password
    if (password.length < 8) {
        alert("Password harus memiliki minimal 8 karakter.");
        return false;
    }

    return true;
}
