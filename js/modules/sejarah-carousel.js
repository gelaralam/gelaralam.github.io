/**
 * Generic Text Carousel
 * Handles switching between text slides when navigation dots are clicked.
 */
function initTextCarousel(dotSelector, slideSelector, sectionId) {
    const dots = document.querySelectorAll(dotSelector);
    const slides = document.querySelectorAll(slideSelector);

    if (!dots.length || !slides.length) return;

    dots.forEach((dot) => {
        dot.addEventListener('click', function () {
            const slideIndex = parseInt(this.getAttribute('data-slide'), 10);

            if (isNaN(slideIndex)) return;

            // Remove active class from all dots and slides
            dots.forEach(d => d.classList.remove('active'));
            slides.forEach(s => s.classList.remove('active'));

            // Add active class to current dot
            this.classList.add('active');

            // Add active class to corresponding slide
            if (slides[slideIndex]) {
                slides[slideIndex].classList.add('active');

                // UX Improvement: Scroll to the top of the section (optional)
                if (sectionId) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offsetTop = section.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    });
}

function initializeAllCarousels() {
    // Sejarah Slider
    initTextCarousel('.sejarah__dot', '.sejarah__slide', 'sejarah');

    // Hero Slider
    initTextCarousel('.hero__dot', '.hero__slide', 'beranda');
}

// Global initialization check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAllCarousels);
} else {
    initializeAllCarousels();
}
