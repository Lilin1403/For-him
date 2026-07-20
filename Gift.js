let currentPassword = "";
// TUKAR PASSWORD KAU KAT SINI (Contoh: '1234' atau '2006')
const SECRET_PASSWORD = "0706"; 

const display = document.getElementById("password-display");

// Fungsi bila nombor ditekan
function pressKey(num) {
    if (currentPassword.length < 6) { // Hadkan maksimum 6 digit
        currentPassword += num;
        display.value = currentPassword;
    }
}

// Fungsi padam semua (Butang C)
function clearPass() {
    currentPassword = "";
    display.value = currentPassword;
}

// Fungsi check password bila tekan butang Love ❤️
function checkPass() {
    if (currentPassword === SECRET_PASSWORD) {
        alert("Password Betul! Halu baby (˶˃ ᵕ ˂˶)");
        window.location.href = "Flower.html"; // Tukar ke nama fail utama kau nanti
    } else {
        alert("Password Salah! Cuba lagi sayang.");
        clearPass(); // Auto padam kalau salah
    }
}