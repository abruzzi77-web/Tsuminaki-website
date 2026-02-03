// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect with class toggle
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe menu cards with stagger effect
document.querySelectorAll('.menu-card').forEach((card, index) => {
    card.classList.add('fade-in-element');
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe sections
document.querySelectorAll('.section-header, .about-text, .about-image, .special-info, .special-image, .story-image-wrapper, .story-text, .visit-info, .visit-map').forEach(element => {
    element.classList.add('fade-in-element');
    observer.observe(element);
});

// Observe award cards
document.querySelectorAll('.award-card').forEach((card, index) => {
    card.classList.add('fade-in-element');
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
});

// Observe side items
document.querySelectorAll('.side-item').forEach((item, index) => {
    item.classList.add('fade-in-element');
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Observe review cards
document.querySelectorAll('.review-card').forEach((card, index) => {
    card.classList.add('fade-in-element');
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe rating stats
document.querySelectorAll('.rating-stats, .google-map-section, .google-reviews-link').forEach(element => {
    element.classList.add('fade-in-element');
    observer.observe(element);
});

// Menu card hover effect - add extra visual feedback
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-image');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Smooth scroll parallax effect for hero (optional enhancement)
// Note: Main parallax is handled by CSS background-attachment: fixed

// Easter egg: Click on hexagon logo 5 times for special message
let clickCount = 0;
const hexagonLogo = document.querySelector('.hexagon-logo');

hexagonLogo.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🌱 徳川綱吉も喜ぶビーガン麻婆豆腐！\n生類憐みの令、万歳！🎉');
        clickCount = 0;
    }
});

// Scroll reveal animation for side menu items
const sideItems = document.querySelectorAll('.side-item');
sideItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(item);
});

// Add current year to footer if needed
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText && footerText.textContent.includes('2026')) {
    footerText.textContent = footerText.textContent.replace('2026', currentYear);
}
