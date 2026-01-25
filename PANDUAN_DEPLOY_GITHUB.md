# PANDUAN DEPLOY KE GITHUB PAGES

Website Anda akan di-hosting **GRATIS** di GitHub Pages dengan alamat: **https://gelaralam.github.io**

## LANGKAH 1: Pastikan Git Terinstall

Buka **Command Prompt** atau **PowerShell**, lalu ketik:
```
git --version
```

✅ Jika muncul versi Git (contoh: `git version 2.40.0`) → Lanjut ke Langkah 2  
❌ Jika muncul error → Download dan install Git dari: https://git-scm.com/download/win

---

## LANGKAH 2: Buka Terminal di Folder Website

1. Buka folder: `C:\Users\NEDI\Desktop\gelaralam.github.io`
2. Klik kanan di area kosong folder
3. Pilih **"Open in Terminal"** atau **"Git Bash Here"**

---

## LANGKAH 3: Setup Git (Pertama Kali Saja)

Jalankan perintah ini di terminal (ganti dengan info Anda):
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

---

## LANGKAH 4: Cek Status Repository

```bash
git status
```

Jika belum ada repository, jalankan:
```bash
git init
git remote add origin https://github.com/gelaralam/gelaralam.github.io.git
```

---

## LANGKAH 5: Commit & Push ke GitHub

Jalankan perintah berikut **satu per satu**:

```bash
git add .
git commit -m "Update website dengan fitur testimoni auto-upload"
git branch -M main
git push -u origin main
```

**Catatan:** Jika diminta login GitHub di CMD:
- Username: **gelaralam** (atau username GitHub Anda)
- Password: Gunakan **Personal Access Token** (bukan password biasa)
  - Buat token di: https://github.com/settings/tokens
  - Pilih scope: `repo` (full control)

---

## LANGKAH 6: Aktifkan GitHub Pages

1. Buka browser, masuk ke: https://github.com/gelaralam/gelaralam.github.io
2. Klik tab **"Settings"**
3. Di menu kiri, klik **"Pages"**
4. Di bagian **"Source"**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
5. Klik **"Save"**
6. Tunggu 1-2 menit, lalu website Anda live di: **https://gelaralam.github.io**

---

## LANGKAH 7: (Opsional) Custom Domain

Jika Anda punya domain sendiri (misal: `gelaralam.id`):

1. Di file `CNAME` (sudah ada di folder), isi dengan domain Anda
2. Di pengaturan domain (registrar), tambahkan CNAME record:
   ```
   www → gelaralam.github.io
   ```
3. Di GitHub Settings > Pages, masukkan custom domain

---

## UPDATE WEBSITE DI KEMUDIAN HARI

Setiap kali ada perubahan file (`index.html`, `css/style.css`, dll):

```bash
git add .
git commit -m "Deskripsi perubahan"
git push
```

Website otomatis update dalam 1-2 menit!

---

## TROUBLESHOOTING

**Error: "fatal: not a git repository"**
→ Jalankan: `git init` lalu ulang dari Langkah 4

**Error: "failed to push"**
→ Pastikan sudah login dengan token (bukan password)

**Website tidak update**
→ Tunggu 2-3 menit, lalu clear cache browser (Ctrl+F5)

---

Jika ada kendala, screenshot error yang muncul dan tanyakan kepada saya!
