function initBudayaSlider() {
    const section = document.querySelector('.ngaseuk');
    const slides = document.querySelectorAll('.ngaseuk__slide');
    const prevBtn = document.querySelector('.ngaseuk__nav--prev');
    const nextBtn = document.querySelector('.ngaseuk__nav--next');
    let currentSlide = 0;

    if (!section || slides.length === 0) return;

    function updateSection(index) {
        // Update active slide
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');

        // Update section background
        const bgUrl = slides[index].getAttribute('data-bg');
        if (bgUrl) {
            section.style.backgroundImage = `url('${bgUrl}')`;
        }

        currentSlide = index;
    }

    prevBtn?.addEventListener('click', () => {
        let index = currentSlide - 1;
        if (index < 0) index = slides.length - 1;
        updateSection(index);
    });

    nextBtn?.addEventListener('click', () => {
        let index = currentSlide + 1;
        if (index >= slides.length) index = 0;
        updateSection(index);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBudayaSlider);
} else {
    initBudayaSlider();
}
