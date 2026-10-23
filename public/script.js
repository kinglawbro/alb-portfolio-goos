// Portfolio site interactions. Loaded with `defer`, so the DOM is ready.
(() => {
    'use strict';

    // Mobile navigation toggle (button markup lives in each page's <nav>)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        const setMenuOpen = (open) => {
            navLinks.classList.toggle('active', open);
            menuToggle.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', String(open));
        };

        menuToggle.addEventListener('click', () => {
            setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
        });

        // Close the menu when returning to desktop width
        window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
            if (e.matches) setMenuOpen(false);
        });

        // Close the menu with Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
                menuToggle.focus();
            }
        });
    }

    // Fade-in on scroll, skipped for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll(
        '.timeline-item, .project-card, .cert-card, .skill-category, .principle'
    );

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealItems.forEach((el) => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
})();
