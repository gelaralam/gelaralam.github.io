/**
 * Main JavaScript Entry Point
 * Initializes all modules for Kasepuhan Gelar Alam landing page
 */

import Navigation from './modules/navigation.js';
import Gallery from './modules/gallery.js';
import Animations from './modules/animations.js';

/**
 * Initialize application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌿 Kasepuhan Gelar Alam - Landing Page Initialized');

    // Initialize Navigation
    new Navigation();

    // Initialize Gallery
    new Gallery();

    // Initialize Animations
    new Animations();

    // Setup Parallax Effect
    Animations.setupParallax();

    // Add loading complete class
    document.body.classList.add('loaded');
});

/**
 * Handle page load events
 */
window.addEventListener('load', () => {
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }

    // Log performance metrics (optional)
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    }
});

/**
 * Handle scroll to top functionality
 */
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.id = 'scroll-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Scroll to top');
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, hsl(155, 65%, 45%) 0%, hsl(180, 70%, 50%) 100%);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        box-shadow: 0 4px 16px hsla(230, 25%, 18%, 0.2);
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        border: none;
    `;

    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-4px)';
        button.style.boxShadow = '0 8px 32px hsla(230, 25%, 18%, 0.3)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 16px hsla(230, 25%, 18%, 0.2)';
    });
};

// Create scroll to top button
createScrollToTopButton();

/**
 * Add smooth reveal animation for images
 */
const setupLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.transition = 'opacity 0.5s ease';

                    // Check if image is already loaded (e.g., from cache)
                    if (img.complete && img.naturalWidth > 0) {
                        // Image already loaded, show it immediately
                        img.style.opacity = '1';
                    } else {
                        // Image not loaded yet, set to invisible and wait for load event
                        img.style.opacity = '0';
                        img.addEventListener('load', () => {
                            img.style.opacity = '1';
                        });
                    }

                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
};

setupLazyLoading();

export default {
    Navigation,
    Gallery,
    Animations
};
