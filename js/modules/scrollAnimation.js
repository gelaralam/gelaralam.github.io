// Scroll Animation Module
export class ScrollAnimation {
    constructor() {
        this.animatedElements = document.querySelectorAll('section');
        this.init();
    }

    init() {
        this.setupObserver();
    }

    setupObserver() {
        const options = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        this.animatedElements.forEach(element => {
            // Initial state set by JS to ensure visibility if JS is disabled
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });

        // Safety fallback: Show all sections after 2 seconds if observer hasn't triggered
        setTimeout(() => {
            this.animatedElements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 2000);
    }
}

export default ScrollAnimation;
