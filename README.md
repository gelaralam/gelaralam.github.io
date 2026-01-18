# Kasepuhan Gelaralam - Landing Page

Sebuah landing page modern dan menarik untuk mempromosikan Kasepuhan Gelaralam sebagai destinasi wisata budaya Indonesia.

## 🌟 Features

- **Modern Design**: Premium aesthetics dengan gradien warna-warni, glassmorphism, dan animasi halus
- **Responsive**: Mobile-first design yang optimal untuk semua perangkat
- **Interactive Gallery**: Lightbox gallery dengan keyboard navigation
- **Smooth Animations**: Scroll-triggered animations menggunakan Intersection Observer API
- **SEO Optimized**: Meta tags lengkap dan semantic HTML
- **ES6+ Modules**: Arsitektur JavaScript modular yang clean dan maintainable

## 📁 Project Structure

```
gelaralam.github.io/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Styling dengan design system
├── js/
│   ├── main.js            # Main entry point
│   └── modules/
│       ├── navigation.js  # Navigation & menu
│       ├── gallery.js     # Gallery & lightbox
│       └── animations.js  # Scroll animations
└── images/
    ├── hero.png           # Hero background
    ├── house.png          # Traditional house
    ├── ceremony.png       # Cultural ceremony
    ├── crafts.png         # Traditional crafts
    └── terraces.png       # Rice terraces
```

## 🚀 Getting Started

### Prerequisites

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Python 3 (untuk local development server) atau web server lainnya

### Running Locally

1. Clone repository ini:
```bash
git clone https://github.com/gelaralam/gelaralam.github.io.git
cd gelaralam.github.io
```

2. Start local server:

**Menggunakan Python:**
```bash
python -m http.server 8000
```

**Atau menggunakan Node.js:**
```bash
npx http-server -p 8000
```

3. Buka browser dan akses:
```
http://localhost:8000
```

## 🎨 Design System

### Colors
- Primary: `hsl(155, 65%, 45%)` - Green
- Secondary: `hsl(30, 85%, 55%)` - Orange
- Accent: `hsl(340, 75%, 55%)` - Pink

### Typography
- Headings: Playfair Display (Google Fonts)
- Body: Inter (Google Fonts)

### Breakpoints
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 📱 Sections

1. **Hero** - Eye-catching hero section dengan background image dan CTA
2. **Tentang** - Informasi tentang Kasepuhan Gelaralam
3. **Warisan Budaya** - Highlights dari tradisi dan budaya
4. **Galeri** - Photo gallery dengan lightbox
5. **Informasi Kunjungan** - Jam, harga, aktivitas, dan lokasi
6. **Kontak** - Contact information dan form
7. **Footer** - Links dan social media

## ✨ Interactive Features

### Navigation
- Sticky navigation bar dengan blur effect
- Smooth scroll ke sections
- Active section highlighting
- Mobile hamburger menu

### Gallery
- Click gambar untuk buka lightbox
- Keyboard navigation (← → untuk prev/next, ESC untuk close)
- Touch/swipe support (mobile)

### Animations
- Fade-in animations saat scroll
- Parallax effect pada hero
- Hover effects pada cards dan images
- Smooth transitions

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling dengan Custom Properties
- **JavaScript ES6+** - Modular architecture
- **Google Fonts** - Typography
- **Intersection Observer API** - Scroll animations

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Deployment

### GitHub Pages

1. Push code ke GitHub repository
2. Settings → Pages
3. Source: Deploy from branch `main`
4. Website akan tersedia di: `https://gelaralam.github.io`

### Netlify

1. Drag & drop folder project ke Netlify
2. Atau connect dengan GitHub repository

### Vercel

```bash
npm i -g vercel
vercel
```

## 👨‍💻 Development

### File yang Perlu Dimodifikasi

- `index.html` - Untuk mengubah konten
- `css/style.css` - Untuk mengubah styling
- `js/modules/*.js` - Untuk menambah/ubah functionality
- `images/` - Untuk mengganti gambar

### Menambah Section Baru

1. Tambahkan HTML di `index.html`
2. Tambahkan styling di `css/style.css`
3. Update navigation links
4. (Optional) Tambahkan JavaScript jika perlu interactivity

## 📝 Customization Guide

### Mengubah Warna

Edit CSS custom properties di `css/style.css`:
```css
:root {
    --primary-color: hsl(155, 65%, 45%);
    --secondary-color: hsl(30, 85%, 55%);
    /* ... */
}
```

### Mengubah Font

Update Google Fonts link di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Dan update CSS:
```css
:root {
    --font-heading: 'Your Font', serif;
    --font-body: 'Your Font', sans-serif;
}
```

### Mengganti Gambar

Replace file di folder `images/` dengan nama yang sama, atau update path di `index.html`.

## 🤝 Contributing

Contributions, issues, dan feature requests are welcome!

## 📜 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Kasepuhan Gelaralam**

- Website: [gelaralam.github.io](https://gelaralam.github.io)
- Email: info@kasepuhangelaralam.id

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📞 Contact

Untuk informasi lebih lanjut tentang Kasepuhan Gelaralam:

- 📧 Email: info@kasepuhangelaralam.id
- 📱 Phone: +62 812-3456-7890
- 💬 WhatsApp: +62 812-3456-7890
- 🌐 Instagram: @kasepuhangelaralam

---

**Melestarikan warisan budaya untuk generasi mendatang** 🌿