# 📅 PANDUAN UPDATE JADWAL ACARA ADAT

Panduan ini menjelaskan cara mengedit jadwal acara adat yang tampil di website Kasepuhan Gelaralam (section "JADWAL ACARA KEGIATAN ADAT").

---

## 📍 Lokasi Data Jadwal

Data jadwal tersimpan di file `index.html` pada bagian `timelineData` (sekitar baris 289-299).

Contoh data saat ini:
```javascript
const timelineData = [
    { id: 1, date: '1 PEBRUARI', title: 'PANGANGGOAN 14 NA RUAH', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
    { id: 2, date: '4 PEBRUARI', title: 'SIDKAH RUAH REBO 16 RUAH', description: 'Upacara adat yang berkaitan dengan aspek keagamaan' },
    // ... dst
];
```

---

## 📝 Struktur Data Jadwal

Setiap item jadwal memiliki 4 bagian (properti):

| Properti | Penjelasan | Contoh |
|----------|------------|--------|
| `id` | Nomor urut (harus unik, tidak boleh sama) | `1`, `2`, `3` |
| `date` | Tanggal acara (format bebas) | `'15 MARET'`, `'20 APRIL 2026'` |
| `title` | Nama/judul acara adat | `'PANGANGGOAN 14 NA RUAH'` |
| `description` | Penjelasan singkat tentang acara | `'Kegiatan yang dilakukan sebulan sekali.'` |

---

## ✏️ Cara Mengedit Jadwal

### Langkah 1: Buka File
Buka file `index.html` menggunakan:
- **Notepad** (klik kanan → Open with → Notepad)
- **Visual Studio Code** (disarankan)
- **Notepad++**

### Langkah 2: Cari Bagian `timelineData`
Tekan `Ctrl + F` (Find), lalu ketik: `timelineData`

Anda akan menemukan kode seperti ini:
```javascript
const timelineData = [
    { id: 1, date: '...', title: '...', description: '...' },
    ...
];
```

### Langkah 3: Edit Sesuai Kebutuhan

---

## 🔄 Contoh-Contoh Perubahan

### ➕ Menambah Jadwal Baru

Tambahkan item baru **di dalam kurung siku `[ ]`**, dipisahkan dengan koma:

```javascript
const timelineData = [
    { id: 1, date: '1 PEBRUARI', title: 'PANGANGGOAN 14 NA RUAH', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
    { id: 2, date: '4 PEBRUARI', title: 'SIDKAH RUAH REBO 16 RUAH', description: 'Upacara adat yang berkaitan dengan aspek keagamaan' },
    
    // 👇 JADWAL BARU DITAMBAHKAN DI SINI
    { id: 10, date: '25 DESEMBER', title: 'ACARA BARU', description: 'Deskripsi acara baru di sini.' }
];
```

⚠️ **PENTING:**
- Pastikan ada **koma** (`,`) setelah setiap item, KECUALI item terakhir
- Gunakan **id yang unik** (belum dipakai)
- Text harus diapit tanda **kutip tunggal** (`'...'`)

---

### ✏️ Mengubah Jadwal yang Sudah Ada

Cari item yang ingin diubah, lalu edit:

**Sebelum:**
```javascript
{ id: 5, date: '2 MARET', title: 'PANGANGGOAN 14 NA PUASA', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
```

**Sesudah (tanggal diubah):**
```javascript
{ id: 5, date: '5 MARET', title: 'PANGANGGOAN 14 NA PUASA', description: 'Opat belasna merupakan kegiatan yang dilakukan sebulan sekali.' },
```

---

### ❌ Menghapus Jadwal

Hapus seluruh baris item yang tidak diinginkan.

**Sebelum:**
```javascript
const timelineData = [
    { id: 1, date: '1 PEBRUARI', title: 'ACARA A', description: '...' },
    { id: 2, date: '4 PEBRUARI', title: 'ACARA B', description: '...' },  // ← Mau dihapus
    { id: 3, date: '11 PEBRUARI', title: 'ACARA C', description: '...' }
];
```

**Sesudah:**
```javascript
const timelineData = [
    { id: 1, date: '1 PEBRUARI', title: 'ACARA A', description: '...' },
    { id: 3, date: '11 PEBRUARI', title: 'ACARA C', description: '...' }
];
```

---

### 📅 Mengubah Tahun di Judul Section

Untuk mengubah tahun (misal dari 2026 ke 2027), cari baris ini di `index.html`:

```html
<h2 class="timeline__section-title">JADWAL ACARA KEGIATAN ADAT 2026</h2>
```

Ubah menjadi:
```html
<h2 class="timeline__section-title">JADWAL ACARA KEGIATAN ADAT 2027</h2>
```

---

## ⚠️ Kesalahan yang Harus Dihindari

| ❌ Salah | ✅ Benar |
|----------|----------|
| `date: 1 PEBRUARI` (tanpa kutip) | `date: '1 PEBRUARI'` |
| Lupa koma antara item: `} {` | Ada koma: `}, {` |
| Kutip ganda di dalam kutip: `'Acara "besar"'` | Gunakan escape: `'Acara \"besar\"'` atau kutip tunggal luar ganda dalam: `"Acara 'besar'"` |

---

## 💾 Langkah 4: Simpan File

Setelah selesai mengedit:
1. Tekan `Ctrl + S` untuk menyimpan
2. Buka/refresh `index.html` di browser untuk melihat perubahan

---

## 📋 Template Jadwal Kosong (Copy-Paste)

Gunakan template ini untuk menambah jadwal baru:

```javascript
{ id: NOMOR, date: 'TANGGAL', title: 'NAMA ACARA', description: 'DESKRIPSI ACARA' },
```

**Contoh terisi:**
```javascript
{ id: 15, date: '20 JUNI', title: 'HAJAT LEMBUR', description: 'Syukuran tahunan kampung adat.' },
```

---

## 🆘 Butuh Bantuan?

Jika website tidak tampil setelah diedit, kemungkinan ada kesalahan penulisan kode. Periksa:
1. Apakah semua tanda kutip sudah benar?
2. Apakah ada koma yang hilang atau berlebih?
3. Coba buka Console browser (tekan F12 → tab Console) untuk melihat pesan error

---

*Panduan dibuat: 25 Januari 2026*
