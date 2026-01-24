/**
 * Sejarah Section Text Carousel
 * Handles switching between text slides when navigation dots are clicked.
 */
function initSejarahCarousel() {
    const dots = document.querySelectorAll('.sejarah__dot');
    const slides = document.querySelectorAll('.sejarah__slide');

    if (!dots.length || !slides.length) {
        console.warn('Sejarah Carousel: Dots or slides not found.');
        return;
    }

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

                // UX Improvement: Scroll to the top of the Sejarah section 
                // so the user starts reading the new paragraph from the beginning.
                const sejarahSection = document.getElementById('sejarah');
                if (sejarahSection) {
                    const offsetTop = sejarahSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                console.error('Sejarah Carousel: Slide not found at index', slideIndex);
            }
        });
    });
}

// Global initialization check
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSejarahCarousel);
} else {
    initSejarahCarousel();
}
