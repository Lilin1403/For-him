// TULIS LIRIK / LUAHAN HATI KAU KAT SINI.
// Guna simbol \n kalau nak buat barisan baru (enter)
const myText = "Ayg minta maaf baby. ❤️\n\nAyg tak tahu sama ada website ni cukup ke tak untuk tunjukkan betapa bermaknanya baby dalam hidup ayg, tapi setiap baris kod ni ditulis dengan penuh rasa cinta, keikhlasan, dan ingatan tulus buat baby.\n\nTerima kasih sebab sudi jadi sebahagian daripada keindahan dalam hidup ayg.Ayg harap, website yang kecil ini mampu memberi senyuman di wajah awak, sama macam mana awak sentiasa bawa kebahagiaan dalam hidup saya selama ni.\n\nSemoga tahun ni dipenuhi dengan kegembiraan yang tak putus-putus, kesihatan yang baik, kenangan manis yang takkan dilupakan, dan segala kasih sayang yang sememangnya layak awak terima. \n\nAwak selayaknya menerima setiap perkara yang indah dalam dunia ni. Maafkan ayg kalau gagal jadi yang terbaik sebelum ni... \n\nI promise to be better for us. 🌹";

overflowBox = document.getElementById("typing-box");
let index = 0;

function typeWriter() {
    if (index < myText.length) {
        // Tambah satu huruf demi satu huruf
        overflowBox.innerHTML += myText.charAt(index);
        index++;
        
        // CANGGIH: Skrin automatik scroll ke bawah sendiri ikut tulisan baru yang keluar!
        overflowBox.scrollTop = overflowBox.scrollHeight;
        
        // KELAJUAN MENAIP: 50ms (0.05 saat) setiap huruf. 
        // Kalau nak lagi lambat, besarkan nombor (contoh: 80). Kalau nak laju, kecilkan (contoh: 30).
        setTimeout(typeWriter, 50); 
    }
}

// Jalankan fungsi taip sebaik sahaja page selesai dipaparkan
window.onload = typeWriter;