# 📰 PANDUAN UPDATE BLOG

Panduan ini menjelaskan cara mengelola konten Blog di website Kasepuhan Gelaralam.

---

## 📍 Lokasi Data Blog

Data blog tersimpan di file `index.html` pada bagian `blogData` (sekitar baris 377-403).

Contoh struktur data:
```javascript
const blogData = [
    {
        title: 'Judul Artikel Blog',
        description: 'Deskripsi singkat artikel...',
        day: 15,
        month: 'Desember',
        year: 2025,
        image: 'assets/blog/nama-gambar.jpg'
    },
    // ... artikel lainnya
];
```

---

## 📝 Struktur Data Blog

Setiap artikel blog memiliki 6 bagian (properti):

| Properti | Penjelasan | Contoh |
|----------|------------|--------|
| `title` | Judul artikel | `'Perayaan Seren Taun 2025'` |
| `description` | Deskripsi/ringkasan artikel | `'Upacara Seren Taun tahun ini...'` |
| `day` | Tanggal (angka 1-31) | `15` |
| `month` | Bulan (teks bahasa Indonesia) | `'Desember'` |
| `year` | Tahun (angka) | `2025` |
| `image` | Path ke gambar | `'assets/blog/foto.jpg'` |

---

## 📸 Menambahkan Foto Blog

### Langkah 1: Siapkan Folder
Buat folder `blog` di dalam folder `assets` jika belum ada:
```
gelaralam.github.io/
└── assets/
    └── blog/       ← Taruh foto blog di sini
```

### Langkah 2: Tambahkan Foto
- Simpan foto dengan nama yang jelas (tanpa spasi), contoh: `seren-taun-2025.jpg`
- Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`
- Ukuran ideal: 800x500 pixel (rasio 16:10)

### Langkah 3: Gunakan Path yang Benar
```javascript
image: 'assets/blog/seren-taun-2025.jpg'
```

> **Tips:** Anda juga bisa menggunakan foto dari folder `assets/gallery/` yang sudah ada.

---

## ✏️ Cara Mengedit Blog

### Langkah 1: Buka File
Buka file `index.html` menggunakan:
- **Notepad** (klik kanan → Open with → Notepad)
- **Visual Studio Code** (disarankan)

### Langkah 2: Cari Bagian `blogData`
Tekan `Ctrl + F` (Find), lalu ketik: `blogData`

---

## 🔄 Contoh-Contoh Perubahan

### ➕ Menambah Artikel Blog Baru

Tambahkan item baru di **awal array** agar artikel terbaru tampil pertama:

```javascript
const blogData = [
    // 👇 ARTIKEL BARU (taruh di paling atas)
    {
        title: 'Judul Artikel Baru',
        description: 'Deskripsi artikel baru di sini. Tuliskan ringkasan singkat tentang isi artikel.',
        day: 25,
        month: 'Januari',
        year: 2026,
        image: 'assets/blog/foto-baru.jpg'
    },
    // Artikel lama di bawahnya...
    {
        title: 'Perayaan Seren Taun 2025',
        ...
    }
];
```

⚠️ **PENTING:**
- Pastikan ada **koma** (`,`) setelah setiap objek artikel, KECUALI artikel terakhir
- Gunakan **kutip tunggal** (`'...'`) untuk teks
- `day` dan `year` adalah **angka** (tanpa kutip)

---

### ✏️ Mengubah Artikel yang Sudah Ada

Cari artikel yang ingin diubah, lalu edit:

**Contoh mengubah judul dan tanggal:**
```javascript
{
    title: 'Judul Lama',        // ← Ganti ini
    description: '...',
    day: 10,                     // ← Ganti ini
    month: 'Januari',
    year: 2026,
    image: 'assets/blog/foto.jpg'
},
```

Menjadi:
```javascript
{
    title: 'Judul Baru yang Diperbarui',
    description: '...',
    day: 28,
    month: 'Januari',
    year: 2026,
    image: 'assets/blog/foto.jpg'
},
```

---

### ❌ Menghapus Artikel

Hapus seluruh objek artikel yang tidak diinginkan (termasuk kurung kurawal `{}`):

**Sebelum:**
```javascript
const blogData = [
    { title: 'Artikel A', ... },
    { title: 'Artikel B (HAPUS)', ... },  // ← Hapus baris ini
    { title: 'Artikel C', ... }
];
```

**Sesudah:**
```javascript
const blogData = [
    { title: 'Artikel A', ... },
    { title: 'Artikel C', ... }
];
```

---

## 📅 Daftar Nama Bulan

Gunakan nama bulan berikut untuk properti `month`:

| Bulan | Nama |
|-------|------|
| 1 | `'Januari'` |
| 2 | `'Februari'` |
| 3 | `'Maret'` |
| 4 | `'April'` |
| 5 | `'Mei'` |
| 6 | `'Juni'` |
| 7 | `'Juli'` |
| 8 | `'Agustus'` |
| 9 | `'September'` |
| 10 | `'Oktober'` |
| 11 | `'November'` |
| 12 | `'Desember'` |

---

## 📋 Template Artikel Baru (Copy-Paste)

Gunakan template ini untuk menambah artikel baru:

```javascript
{
    title: 'JUDUL ARTIKEL',
    description: 'DESKRIPSI SINGKAT ARTIKEL',
    day: TANGGAL,
    month: 'NAMA_BULAN',
    year: TAHUN,
    image: 'assets/blog/NAMA_FILE.jpg'
},
```

**Contoh terisi:**
```javascript
{
    title: 'Kunjungan Delegasi Budaya dari Jepang',
    description: 'Delegasi dari Prefektur Nara Jepang mengunjungi Kasepuhan Gelaralam untuk mempelajari kearifan lokal dalam pelestarian lingkungan dan pertanian tradisional.',
    day: 5,
    month: 'Februari',
    year: 2026,
    image: 'assets/blog/kunjungan-jepang.jpg'
},
```

---

## ⚠️ Kesalahan yang Harus Dihindari

| ❌ Salah | ✅ Benar |
|----------|----------|
| `title: Judul Tanpa Kutip` | `title: 'Judul Dengan Kutip'` |
| `day: '15'` (pakai kutip) | `day: 15` (angka saja) |
| `month: Januari` (tanpa kutip) | `month: 'Januari'` |
| Lupa koma: `} {` | Ada koma: `}, {` |

---

## 💾 Simpan dan Test

Setelah selesai mengedit:
1. Tekan `Ctrl + S` untuk menyimpan
2. Buka/refresh `index.html` di browser
3. Scroll ke section **BLOG** untuk melihat perubahan

---

## 🆘 Troubleshooting

Jika blog tidak muncul setelah diedit:
1. Buka browser, tekan `F12` untuk membuka Developer Tools
2. Lihat tab **Console**
3. Jika ada error merah, periksa:
   - Apakah semua kutip sudah benar?
   - Apakah ada koma yang hilang atau berlebih?
   - Apakah path gambar benar?

---

*Panduan dibuat: 25 Januari 2026*
