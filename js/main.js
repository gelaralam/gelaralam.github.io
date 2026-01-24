// Main Application Entry Point
import Navigation from './modules/navigation.js';
import Gallery from './modules/gallery.js';
import Timeline from './modules/timeline.js';
import ContactForm from './modules/contactForm.js';
import ScrollAnimation from './modules/scrollAnimation.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
        } else {
            this.initializeModules();
        }
    }

    initializeModules() {
        new Navigation();
        new Gallery();
        // Initialize Timeline with a callback to sync Budaya section
        new Timeline((data) => this.syncBudayaWithTimeline(data));
        new ContactForm();
        new ScrollAnimation();

        // Setup additional interactions
        this.setupLearnMoreButton();
        this.setupParallaxEffect();

        console.log('Kasepuhan Gelaralam website initialized successfully!');
    }

    syncBudayaWithTimeline(data) {
        const slider = document.querySelector('.ngaseuk__slider');
        if (!slider || !data || data.length === 0) return;

        slider.innerHTML = '';
        const bgs = [
            'assets/budaya-bg.png',
            'assets/mipit-bg.jpg',
            'assets/tradisi-3.png',
            'assets/tradisi-4.png',
            'assets/tradisi-5.png'
        ];

        data.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `ngaseuk__slide ${index === 0 ? 'active' : ''}`;
            slide.setAttribute('data-bg', bgs[index % bgs.length]);

            slide.innerHTML = `
                <header class="ngaseuk__header">
                    <span class="hero__subtitle" style="display: block; margin-bottom: 5px; color: var(--color-accent); text-transform: uppercase;">UPACARA ADAT</span>
                    <h2 class="ngaseuk__title" style="text-transform: uppercase;">${item.title}</h2>
                </header>
                <div class="ngaseuk__date-info" style="color: var(--color-accent); font-weight: 600; margin-bottom: 1rem; letter-spacing: 1px;">
                    ${item.date}
                </div>
                <p class="ngaseuk__description">${item.description}</p>
                <a href="#galeri" class="btn btn--primary" style="margin-top: 2rem;">READ MORE</a>
            `;
            slider.appendChild(slide);
        });

        const section = document.querySelector('.ngaseuk');
        if (section && data[0]) {
            section.style.backgroundImage = `url('${bgs[0]}')`;
        }

        // Reset global slide counter when new data arrives
        window.currentBudayaSlide = 0;
    }

    setupLearnMoreButton() {
        const learnMoreBtn = document.getElementById('learn-more');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', () => {
                const sejarahSection = document.getElementById('sejarah');
                if (sejarahSection) {
                    const offsetTop = sejarahSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    setupParallaxEffect() {
        const heroBackground = document.querySelector('.hero__background');
        if (heroBackground) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            });
        }
    }
}

new App();
