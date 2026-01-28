# 📰 PANDUAN UPDATE BLOG

Sekarang pengelolaan Blog sudah lebih mudah melalui Dashboard Admin. Anda tidak perlu lagi mengedit kode secara manual.

## 🚀 Cara Menambah Artikel Baru

1.  **Buka Dashboard Admin**
    *   Buka file `admin.html` di browser.
    *   Klik menu **"Blog / Berita"** di sidebar.

2.  **Tambah Artikel**
    *   Klik tombol **"+ Artikel Baru"**.
    *   Isi formulir:
        *   **Judul**: Judul berita yang akan muncul.
        *   **Kategori**: Pilih Berita, Budaya, atau Ekonomi.
        *   **URL Gambar**: Path gambar (misal: `assets/blog/foto-1.jpg`).
        *   **Tanggal, Bulan, Tahun**: Waktu publikasi.
        *   **Isi Artikel**: Tulis berita lengkap di sini (mendukung tag HTML seperti `<p>` untuk paragraf).
    *   Klik **Simpan Perubahan**.

3.  **Hapus atau Edit**
    *   Gunakan ikon **Pensil** untuk mengoreksi teks atau gambar.
    *   Gunakan ikon **Tempat Sampah** untuk menghapus artikel.

## 🔄 Sinkronisasi
Sistem akan otomatis memperbarui file `js/blog-data.js` di GitHub setiap kali Anda melakukan perubahan di halaman Admin. Perubahan akan terlihat di website dalam 1-2 menit.

---

## 🛠️ Backup Manual
Jika dashboard tidak bisa menyimpan otomatis:
1.  Klik tombol **"Blog"** di bagian **Backup Data** (bawah halaman Admin).
2.  Salin kodenya.
3.  Buka file `js/blog-data.js` dan timpa isinya dengan kode tersebut.

---
*Panduan diperbarui: 28 Januari 2026*
