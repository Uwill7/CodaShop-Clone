document.addEventListener("DOMContentLoaded", function() {
    // Variabel untuk menyimpan indeks slide saat ini
    let currentSlideIndex = 0;

    // Fungsi untuk mengubah slide secara otomatis
    function autoSlide() {
        // Mencari elemen radio button yang sesuai dengan slide saat ini
        let currentRadioButton = document.getElementById("radio" + (currentSlideIndex + 1));

        // Mengklik radio button untuk mengubah slide
        currentRadioButton.checked = true;

        // Memperbarui indeks slide untuk slide berikutnya
        currentSlideIndex++;

        // Jika sudah mencapai slide terakhir, kembali ke slide pertama
        if (currentSlideIndex === 6) {
            currentSlideIndex = 0;
        }
    }

    // Menjalankan fungsi autoSlide setiap 5 detik
    let slideInterval = setInterval(autoSlide, 5000);

    // Event listener untuk menghentikan interval saat pengguna berinteraksi dengan slider
    document.querySelectorAll(".slider input[type='radio']").forEach(function(radioBtn) {
        radioBtn.addEventListener("click", function() {
            clearInterval(slideInterval); // Menghentikan interval
            currentSlideIndex = parseInt(this.id.replace("radio", "")) - 1; // Memperbarui indeks slide saat ini
            slideInterval = setInterval(autoSlide, 5000); // Mulai interval kembali
        });
    });
});
