document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Mobile Menu Toggle
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Header shadow on scroll
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }
        });
    }

    // Contact Form Submission (Demo)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (formFeedback) {
                formFeedback.innerHTML = '<p class="text-green-600">Thank you for your message! I will get back to you soon.</p>';
                contactForm.reset();
                setTimeout(() => {
                    formFeedback.innerHTML = '';
                }, 5000);
            }
        });
    }

    // Scroll-to-top button visibility
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        });

        // Scroll-to-top functionality
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animate sections on scroll
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});
