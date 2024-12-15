document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Bersihkan error sebelumnya
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.textContent = "");

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("invalid", "valid"));

    // Ambil nilai input
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const berangkat = document.getElementById("berangkat").value.trim();
    const tujuan = document.getElementById("tujuan").value.trim();
    const tiketCount = document.getElementById("tiketCount").value.trim();

    // Flag validasi
    let isValid = true;

    // Validasi Nama Pelanggan
    if (!nama || nama.length > 30) {
        isValid = false;
        document.getElementById("namaError").textContent = "Nama harus diisi maks. 30 karakter.";
        document.getElementById("nama").classList.add("invalid");
    } else {
        document.getElementById("nama").classList.add("valid");
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Email tidak valid.";
        document.getElementById("email").classList.add("invalid");
    } else {
        document.getElementById("email").classList.add("valid");
    }

    // Validasi Jam Keberangkatan
    const berangkatRegex = /^([01]\d|2[0-3])\.[0-5]\d$/; // Format HH.MM
    if (!berangkat || !berangkatRegex.test(berangkat)) {
        isValid = false;
        document.getElementById("berangkatError").textContent = "Jam harus dalam format HH.MM (00.00 - 23.59).";
        document.getElementById("berangkat").classList.add("invalid");
    } else {
        document.getElementById("berangkat").classList.add("valid");
    }

    // Validasi Tujuan Keberangkatan
    if (!tujuan) {
        isValid = false;
        document.getElementById("tujuanError").textContent = "Tujuan harus diisi.";
        document.getElementById("tujuan").classList.add("invalid");
    } else {
        document.getElementById("tujuan").classList.add("valid");
    }

    // Validasi Jumlah Tiket
    const tiket = parseInt(tiketCount, 10);
    if (!tiketCount || isNaN(tiket) || tiket < 1 || tiket > 10) {
        isValid = false;
        document.getElementById("tiketError").textContent = "Jumlah tiket harus antara 1 dan 10.";
        document.getElementById("tiketCount").classList.add("invalid");
    } else {
        document.getElementById("tiketCount").classList.add("valid");
    }

    // Jika semua valid, tampilkan hasil
    if (isValid) {
        const result = `
            <p><strong>Nama Pelanggan:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Jam Keberangkatan:</strong> ${berangkat}</p>
            <p><strong>Tujuan Keberangkatan:</strong> ${tujuan}</p>
            <p><strong>Jumlah Tiket:</strong> ${tiket}</p>
        `;
        document.getElementById("result").innerHTML = result;
    }
});
