/**
 * Animations Module
 * Handles scroll-triggered animations using Intersection Observer API
 */

export class Animations {
    constructor() {
        this.elements = document.querySelectorAll('.section-header, .about-text, .about-image, .heritage-card, .gallery-item, .visit-card, .contact-item');

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupFormAnimation();
    }

    /**
     * Setup Intersection Observer for scroll animations
     */
    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay for elements
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);

                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Set initial state and observe
        this.elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }

    /**
     * Setup form submission animation
     */
    setupFormAnimation() {
        const form = document.getElementById('contact-form');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                // Get form data
                const formData = new FormData(form);
                const data = Object.fromEntries(formData);

                // Show success message (in production, you would send this to a server)
                this.showSuccessMessage();

                // Reset form
                form.reset();
            });
        }
    }

    /**
     * Show success message after form submission
     */
    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 100px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, hsl(155, 65%, 45%) 0%, hsl(180, 70%, 50%) 100%);
                color: white;
                padding: 1.5rem 3rem;
                border-radius: 12px;
                box-shadow: 0 8px 32px hsla(230, 25%, 18%, 0.2);
                z-index: 9999;
                animation: slideDown 0.5s ease;
            ">
                <strong>✓ Pesan Terkirim!</strong><br>
                Terima kasih telah menghubungi kami. Kami akan segera merespons.
            </div>
        `;

        // Add animation keyframes
        if (!document.querySelector('#success-animation')) {
            const style = document.createElement('style');
            style.id = 'success-animation';
            style.textContent = `
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(message);

        // Remove message after 4 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                message.remove();
            }, 500);
        }, 4000);
    }

    /**
     * Add parallax effect to hero section
     */
    static setupParallax() {
        const hero = document.querySelector('.hero');

        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const parallaxSpeed = 0.5;
                hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
            });
        }
    }
}

export default Animations;
