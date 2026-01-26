# 📰 PANDUAN UPDATE BLOG

Panduan ini menjelaskan cara mengelola konten Blog di website Kasepuhan Gelaralam. Sekarang sistem blog sudah mendukung **Halaman Detil**, sehingga pengunjung bisa membaca berita lengkap dengan mengklik judul berita.

---

## 📍 Lokasi Data Blog

Data blog sekarang tersimpan di file terpisah agar bisa diakses oleh halaman utama dan halaman detil:
**`js/blog-data.js`**

Contoh struktur data:
```javascript
const blogData = [
    {
        id: 1,
        title: 'Bantuan Modal Usaha dari Baznas Jabar',
        category: 'EKONOMI',
        description: 'Ringkasan singkat yang muncul di halaman depan...',
        content: `
            <p>Isi berita lengkap di sini...</p>
            <p>Gunakan tag p untuk paragraf dan ul/li untuk daftar.</p>
        `,
        day: 15,
        month: 'Januari',
        year: 2026,
        image: 'assets/blog/blog-1.jpg'
    },
    // ... artikel lainnya
];
```

---

## 📝 Struktur Data Blog

Setiap artikel blog memiliki properti berikut:

| Properti | Penjelasan | Contoh |
|----------|------------|--------|
| `id` | ID Unik (Angka), harus beda setiap artikel | `1`, `2`, `3` |
| `title` | Judul artikel | `'Perayaan Seren Taun 2025'` |
| `category` | Kategori berita (opsional) | `'BUDAYA'`, `'EKONOMI'` |
| `description` | Ringkasan singkat (tampil di kartu blog) | `'Upacara Seren Taun tahun ini...'` |
| `content` | Isi berita lengkap (mendukung HTML) | `'<p>Isi lengkap...</p>'` |
| `day` | Tanggal (angka 1-31) | `15` |
| `month` | Bulan (teks bahasa Indonesia) | `'Januari'` |
| `year` | Tahun (angka) | `2026` |
| `image` | Path ke gambar | `'assets/blog/foto.jpg'` |

---

## ✏️ Cara Mengedit Blog

### Langkah 1: Buka File Data
Buka file **`js/blog-data.js`** menggunakan editor teks (Notepad atau VS Code).

### Langkah 2: Menambah Artikel Baru
Tambahkan item baru di **paling atas** (setelah kurung siku buka `[`):

```javascript
{
    id: 4, // Pastikan ID ini belum dipakai
    title: 'Judul Berita Baru',
    category: 'BERITA',
    description: 'Ringkasan yang akan muncul di halaman depan.',
    content: `
        <p>Tuliskan isi berita lengkap Anda di sini.</p>
        <p>Anda bisa menambahkan beberapa paragraf.</p>
    `,
    day: 26,
    month: 'Januari',
    year: 2026,
    image: 'assets/blog/foto-baru.jpg'
},
```

⚠️ **PENTING:**
- Berikan **ID** baru yang lebih besar dari ID sebelumnya.
- Pastikan ada **koma** (`,`) di akhir setiap blok `{ }`.
- Gunakan **backtick** ( ``` ` ``` ) untuk properti `content` agar bisa menulis banyak baris.

---

## 📸 Panduan Gambar
- Simpan foto di folder `assets/blog/`.
- Ukuran ideal: 800x500 pixel.
- Nama file jangan menggunakan spasi (gunakan tanda hubung `-`).

---

## 📋 Template Artikel Baru (Copy-Paste)

```javascript
{
    id: 99,
    title: 'JUDUL_BARU',
    category: 'KATEGORI',
    description: 'RINGKASAN_SINGKAT',
    content: `
        <p>PARAGRAF_1</p>
        <p>PARAGRAF_2</p>
    `,
    day: 26,
    month: 'Januari',
    year: 2026,
    image: 'assets/blog/NAMA_FILE.jpg'
},
```

---

## 💾 Simpan dan Test
1. Simpan file `js/blog-data.js`.
2. Buka `index.html` di browser.
3. Klik salah satu kartu blog untuk masuk ke halaman detil.

---

*Panduan diperbarui: 26 Januari 2026*
