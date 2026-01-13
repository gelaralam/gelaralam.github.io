/**
 * Gallery Module
 * Handles image gallery with lightbox functionality
 */

export class Gallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxCaption = document.getElementById('lightbox-caption');
        this.lightboxClose = document.getElementById('lightbox-close');
        this.lightboxPrev = document.getElementById('lightbox-prev');
        this.lightboxNext = document.getElementById('lightbox-next');

        this.currentIndex = 0;
        this.images = [];

        this.init();
    }

    init() {
        this.setupGalleryData();
        this.setupGalleryClick();
        this.setupLightboxControls();
        this.setupKeyboardNavigation();
    }

    /**
     * Collect gallery data
     */
    setupGalleryData() {
        this.galleryItems.forEach(item => {
            const img = item.querySelector('img');
            const caption = item.querySelector('.gallery-caption');

            this.images.push({
                src: img.src,
                alt: img.alt,
                caption: caption ? caption.textContent : img.alt
            });
        });
    }

    /**
     * Setup click event on gallery items
     */
    setupGalleryClick() {
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.openLightbox(index);
            });
        });
    }

    /**
     * Open lightbox with specific image
     */
    openLightbox(index) {
        this.currentIndex = index;
        this.updateLightboxImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close lightbox
     */
    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Update lightbox image
     */
    updateLightboxImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;
        this.lightboxCaption.textContent = image.caption;
    }

    /**
     * Navigate to previous image
     */
    previousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateLightboxImage();
    }

    /**
     * Navigate to next image
     */
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateLightboxImage();
    }

    /**
     * Setup lightbox controls (close, prev, next)
     */
    setupLightboxControls() {
        this.lightboxClose.addEventListener('click', () => {
            this.closeLightbox();
        });

        this.lightboxPrev.addEventListener('click', () => {
            this.previousImage();
        });

        this.lightboxNext.addEventListener('click', () => {
            this.nextImage();
        });

        // Close when clicking on backdrop
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
    }

    /**
     * Setup keyboard navigation (ESC, Arrow keys)
     */
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.previousImage();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
            }
        });
    }
}

export default Gallery;
