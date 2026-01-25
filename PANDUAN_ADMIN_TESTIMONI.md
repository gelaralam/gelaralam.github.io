# PANDUAN MENGELOLA TESTIMONI

Berikut adalah langkah-langkah untuk menampilkan testimoni baru ke website setelah Anda menerima email dari pengirim.

## METODE 1: Menggunakan Halaman Admin (Disarankan)

Saya telah membuatkan halaman khusus untuk mempermudah Anda menyusun kode testimoni tanpa harus mengetik manual simbol-simbol koding.

1.  **Buka Halaman Admin**
    *   Buka file `admin.html` di browser Anda (klik ganda file tersebut di folder komputer Anda).

2.  **Tambah Data Baru**
    *   Klik tombol **"+ Tambah Testimoni"**.
    *   Isi formulir berdasarkan data yang Anda terima di email:
        *   **Nama Lengkap**: Salin dari email.
        *   **Asal Kota**: Salin dari email.
        *   **URL Foto**: 
            *   Jika pengirim melampirkan foto, simpan foto tersebut ke folder `assets/`, misalnya `assets/budi.jpg`. Lalu tulis `assets/budi.jpg` di kolom ini.
            *   Jika tidak ada foto, Anda bisa gunakan gambar default atau avatar kosong.
        *   **Rating**: Berikan bintang sesuai penilaian.
        *   **Komentar**: Salin pesan cerita dari email.
    *   Klik **Simpan**.

3.  **Generate Kode**
    *   Setelah data masuk ke tabel, gulir ke bawah ke bagian "Export Data".
    *   Klik tombol **"Generate Code"**.
    *   Kode program akan muncul. Klik **"Copy to Clipboard"**.

4.  **Update Website (`index.html`)**
    *   Buka file `index.html` menggunakan Text Editor (seperti Notepad, VS Code, dll).
    *   Cari bagian kode: `const testimonialData = [ ... ];` (biasanya ada di bagian bawah, dekat `<script>`).
    *   **Hapus** seluruh blok `const testimonialData = [...];` yang lama.
    *   **Tempel (Paste)** kode yang baru saja Anda copy dari Halaman Admin.
    *   **Simpan (Save)** file `index.html`.

5.  Testimoni baru sudah tampil di website!

---

## METODE 2: Edit Manual (Cara Cepat)

Jika Anda terbiasa dengan kode, Anda bisa langsung mengedit `index.html`:

1.  Buka `index.html`.
2.  Cari `const testimonialData`.
3.  Tambahkan data baru di dalam kurung siku `[...]`, formatnya seperti ini:

```javascript
    {
        name: "Nama Pengirim",
        origin: "Asal Kota",
        text: "Isi testimoni dari email...",
        photo: "assets/nama-file-foto.jpg", // Pastikan foto sudah ditaruh di folder assets
        stars: 5
    },
```

4.  Simpan file.
