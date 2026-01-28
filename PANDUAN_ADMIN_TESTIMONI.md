# 💬 PANDUAN MENGELOLA TESTIMONI

Sekarang Anda dapat mengelola testimoni pengunjung secara langsung melalui Dashboard Admin. Sistem akan otomatis mensinkronkan data ke website.

## 🚀 Cara Mengelola Testimoni

1.  **Buka Dashboard Admin**
    *   Buka file `admin.html` di browser Anda.
    *   Pastikan Anda sudah login (jika diperlukan).
    *   Klik menu **"Testimoni"** di sidebar kiri.

2.  **Meninjau Testimoni Masuk (Pending)**
    *   Testimoni yang dikirim pengunjung melalui website akan muncul dengan status **"PENDING"**.
    *   Gunakan tombol **Mata/Check** di kolom Aksi untuk **menampilkan** (Approve) atau **menyembunyikan** testimoni tersebut dari website.
    *   Testimoni yang disetujui akan berubah status menjadi **"AKTIF"**.

3.  **Menambah Testimoni Manual**
    *   Klik tombol **"+ Tambah Testimoni"**.
    *   Isi data Pengunjung (Nama, Asal, Foto, Rating, dan Komentar).
    *   Klik **Simpan**. Testimoni ini akan langsung berstatus **AKTIF**.

4.  **Mengedit atau Menghapus**
    *   Gunakan ikon **Pensil** untuk mengedit isi testimoni.
    *   Gunakan ikon **Tempat Sampah** untuk menghapus testimoni secara permanen.

## 🔄 Sinkronisasi Otomatis
Setiap kali Anda menekan tombol **Simpan**, **Approve**, atau **Hapus**, sistem akan mengirimkan data ke server. Server kemudian akan otomatis memperbarui file di GitHub agar perubahan tampil di website `gelaralam.id`. 
> [!NOTE]
> Perubahan biasanya membutuhkan waktu sekitar 1-2 menit untuk muncul di website publik karena proses sinkronisasi GitHub.

---

## 🛠️ Cadangan (Backup Manual)
Jika sinkronisasi otomatis mengalami gangguan, Anda tetap bisa memperbarui secara manual:
1.  Scroll ke bawah di halaman Admin ke bagian **"Backup Data"**.
2.  Klik tombol **"Testimoni"**.
3.  Salin kode yang muncul.
4.  Buka file `js/testimonial-data.js` dan ganti isinya dengan kode yang baru saja disalin.
