# Panduan Ganti Foto - Website Kasepuhan Gelaralam

## 📸 Foto yang Perlu Diganti

Berikut adalah daftar foto yang perlu diganti dan lokasinya:

### 1. **Logo** 
- **Lokasi file**: `G:\web_GA\assets\logo.svg`
- **Ukuran yang disarankan**: 500x500 pixel
- **Format**: PNG atau SVG (dengan background transparan lebih bagus)

### 2. **Foto Abah (Ketua Adat)**
- **Lokasi file**: `G:\web_GA\assets\abah.jpg`
- **Ukuran yang disarankan**: 800x1000 pixel (portrait/vertikal)
- **Format**: JPG atau PNG

### 3. **Foto Rumah Adat**
- **Lokasi file**: `G:\web_GA\assets\rumah-adat.jpg`
- **Ukuran yang disarankan**: 1200x800 pixel (landscape/horizontal)
- **Format**: JPG atau PNG

### 4. **Foto Upacara Ngaseuk**
- **Lokasi file**: `G:\web_GA\assets\ngaseuk.jpg`
- **Ukuran yang disarankan**: 1200x800 pixel (landscape/horizontal)
- **Format**: JPG atau PNG

---

## 🔧 Cara Mengganti Foto

### Metode 1: Ganti File Langsung (Paling Mudah)

1. **Siapkan foto pengganti** dengan nama yang sama
2. **Copy (salin)** foto baru Anda
3. **Paste (tempel)** ke folder yang sesuai, contoh:
   - Logo baru → paste ke `G:\web_GA\assets\` dengan nama `logo.svg` atau `logo.png`
   - Foto Abah baru → paste ke `G:\web_GA\assets\` dengan nama `abah.jpg`
4. **Pilih "Replace" (Ganti)** jika ditanya apakah ingin mengganti file yang sudah ada
5. **Refresh browser** (tekan F5) untuk melihat perubahan

### Metode 2: Ganti dengan Nama File Berbeda

Jika foto Anda memiliki nama yang berbeda:

1. **Taruh foto** di folder `G:\web_GA\assets\`
2. **Buka file** `G:\web_GA\index.html` dengan Notepad atau text editor
3. **Cari dan ganti** nama file lama dengan nama file baru:

**Untuk Logo:**
- Cari: `<img src="assets/logo.svg"`
- Ganti dengan: `<img src="assets/NAMA_FILE_LOGO_BARU.png"`

**Untuk Foto Abah:**
- Cari: `<img src="assets/abah.jpg"`
- Ganti dengan: `<img src="assets/NAMA_FILE_ABAH_BARU.jpg"`

**Untuk Rumah Adat:**
- Cari: `<img src="assets/rumah-adat.jpg"`
- Ganti dengan: `<img src="assets/NAMA_FILE_RUMAH_BARU.jpg"`

**Untuk Upacara Ngaseuk:**
- Cari: `<img src="assets/ngaseuk.jpg"`
- Ganti dengan: `<img src="assets/NAMA_FILE_NGASEUK_BARU.jpg"`

4. **Save** file index.html
5. **Refresh browser** untuk melihat perubahan

---

## 💡 Tips Foto yang Bagus

- **Resolusi**: Gunakan foto resolusi tinggi untuk hasil yang tajam
- **Pencahayaan**: Pilih foto dengan pencahayaan yang baik
- **Komposisi**: Untuk foto Abah, pastikan wajah terlihat jelas
- **Ukuran File**: Compress foto jika ukurannya terlalu besar (maks 2MB per foto)

---

## ❓ Pertanyaan?

Kirimkan foto pengganti kepada saya, dan saya akan membantu memasukkannya ke website!
