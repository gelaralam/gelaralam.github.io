// Gallery Module
export class Gallery {
    constructor() {
        this.galleryGrid = document.getElementById('gallery-grid');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.lightbox = document.getElementById('lightbox');
        this.currentCategory = 'all';
        this.currentIndex = 0;

        this.galleryItems = [
            { id: 1, category: 'adat', title: 'Upacara Adat Seren Taun', image: 'assets/gallery/seren-taun.jpg' },
            { id: 2, category: 'life', title: 'Leuit Si Jimat', image: 'assets/gallery/rumah-adat.jpg' },
            { id: 3, category: 'life', title: 'Aktivitas Masyarakat', image: 'assets/gallery/masyarakat.jpg' },
            { id: 4, category: 'adat', title: 'Tari Tradisional', image: 'assets/gallery/tari.jpg' },
            { id: 5, category: 'craft', title: 'Kerajinan Tangan', image: 'assets/gallery/kerajinan.jpg' },
            { id: 6, category: 'life', title: 'Sistem Pertanian Huma', image: 'assets/gallery/pertanian.jpg' }
        ];

        this.init();
    }

    init() {
        this.render();
        this.setupFilters();
        this.setupLightbox();
        this.setupAnimation();
    }

    setupFilters() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                if (this.currentCategory === filter) return;

                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCategory = filter;

                this.render();
                this.setupAnimation();
            });
        });
    }

    render() {
        if (!this.galleryGrid) return;
        this.galleryGrid.innerHTML = '';

        const filteredItems = this.currentCategory === 'all'
            ? this.galleryItems
            : this.galleryItems.filter(item => item.category === this.currentCategory);

        filteredItems.forEach((item, index) => {
            const galleryItem = this.createGalleryItem(item, index, filteredItems);
            this.galleryGrid.appendChild(galleryItem);
        });
    }

    createGalleryItem(item, index, list) {
        const div = document.createElement('div');
        div.className = 'gallery__item';
        div.style.animationDelay = `${index * 0.1}s`;

        div.innerHTML = `
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/600x400/2d2d2d/d4af37?text=Image+Unavailable'">
            <div class="gallery__item-overlay">
                <h3 class="gallery__item-title">${item.title}</h3>
            </div>
        `;

        div.addEventListener('click', () => {
            this.openLightbox(item, list);
        });

        return div;
    }

    setupLightbox() {
        const closeBtn = this.lightbox.querySelector('.lightbox__close');
        const prevBtn = this.lightbox.querySelector('.lightbox__nav--prev');
        const nextBtn = this.lightbox.querySelector('.lightbox__nav--next');

        closeBtn.addEventListener('click', () => this.closeLightbox());
        prevBtn.addEventListener('click', () => this.navigateLightbox(-1));
        nextBtn.addEventListener('click', () => this.navigateLightbox(1));

        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
            if (e.key === 'ArrowRight') this.navigateLightbox(1);
        });
    }

    openLightbox(item, list) {
        this.currentList = list;
        this.currentIndex = list.indexOf(item);
        this.updateLightboxContent();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    navigateLightbox(step) {
        this.currentIndex = (this.currentIndex + step + this.currentList.length) % this.currentList.length;
        this.updateLightboxContent();
    }

    updateLightboxContent() {
        const item = this.currentList[this.currentIndex];
        const img = this.lightbox.querySelector('.lightbox__image');
        const title = this.lightbox.querySelector('.lightbox__title');

        img.src = item.image;
        img.alt = item.title;
        title.textContent = item.title;
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    setupAnimation() {
        const items = this.galleryGrid.querySelectorAll('.gallery__item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        items.forEach(item => observer.observe(item));
    }
}

export default Gallery;
