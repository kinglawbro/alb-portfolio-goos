// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items, project cards, cert cards, etc.
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .cert-card, .skill-category, .principle'
    );
    
    animatedElements.forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add active state to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect for hero visual cards
    const visualCards = document.querySelectorAll('.visual-card');
    if (visualCards.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            visualCards.forEach((card, index) => {
                const speed = 0.1 + (index * 0.05);
                card.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Add hover effect to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1.3)';
                marker.style.transition = 'transform 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1)';
            }
        });
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && heroTitle.textContent) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let charIndex = 0;
        const typeSpeed = 50;
        
        function typeWriter() {
            if (charIndex < text.length) {
                heroTitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typeSpeed);
            }
        }
        
        // Uncomment to enable typing effect
        // setTimeout(typeWriter, 500);
    }

    // Counter animation for numbers
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Add loading state
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        const nav = document.querySelector('.main-nav');
        const navLinks = document.querySelector('.nav-links');

        if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.classList.add('menu-toggle');
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'Toggle menu');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });

            nav.querySelector('.nav-container').insertBefore(menuToggle, navLinks);
        }
    };

    // Use debounce to prevent memory leak from resize listener
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createMobileMenu, 150);
    };

    createMobileMenu();
    window.addEventListener('resize', handleResize);

    // Enhanced tag hover effects
    const tags = document.querySelectorAll('.tag, .tech-tag, .skill-pill, .interest-tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add cursor trail effect (subtle)
    const createCursorTrail = () => {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        document.body.appendChild(trail);

        document.addEventListener('mousemove', (e) => {
            trail.style.left = e.pageX + 'px';
            trail.style.top = e.pageY + 'px';
        });
    };

    // Uncomment to enable cursor trail
    // createCursorTrail();

    // Log page view (for analytics placeholder)
    console.log('Portfolio page loaded:', window.location.pathname);
});

// Add CSS for mobile menu toggle if it doesn't exist
const addMobileMenuStyles = () => {
    if (!document.querySelector('#mobile-menu-styles')) {
        const style = document.createElement('style');
        style.id = 'mobile-menu-styles';
        style.textContent = `
            .menu-toggle {
                display: none;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--color-text);
                padding: 0.5rem;
            }

            @media (max-width: 768px) {
                .menu-toggle {
                    display: block;
                }

                .nav-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: var(--color-bg);
                    flex-direction: column;
                    padding: var(--spacing-sm);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(-10px);
                    transition: all 0.3s ease;
                }

                .nav-links.active {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .nav-links li {
                    margin: 0;
                }

                .nav-links a {
                    display: block;
                    padding: var(--spacing-sm);
                }
            }

            .cursor-trail {
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: rgba(212, 81, 30, 0.3);
                pointer-events: none;
                transform: translate(-50%, -50%);
                transition: all 0.1s ease;
                z-index: 9999;
            }
        `;
        document.head.appendChild(style);
    }
};

addMobileMenuStyles();
