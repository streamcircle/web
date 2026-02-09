/**
 * Tweenly - Vanilla JavaScript
 * No jQuery or Bootstrap dependencies
 */

document.addEventListener('DOMContentLoaded', function () {
    // ================================
    // Navbar Toggle (Mobile Menu)
    // ================================
    const menuToggle = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const toggleIcon = menuToggle ? menuToggle.querySelector('.navbar__toggle-icon') : null;

    if (menuToggle && navbarMenu && toggleIcon) {
        menuToggle.addEventListener('click', function () {
            const isOpen = navbarMenu.classList.contains('navbar__menu--open');

            if (isOpen) {
                navbarMenu.classList.remove('navbar__menu--open');
                toggleIcon.classList.remove('navbar__toggle-icon--close');
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                navbarMenu.classList.add('navbar__menu--open');
                toggleIcon.classList.add('navbar__toggle-icon--close');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = navbarMenu.querySelectorAll('.navbar__link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('navbar__menu--open');
                toggleIcon.classList.remove('navbar__toggle-icon--close');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ================================
    // Pricing Toggle (Mobile)
    // ================================
    const pricingToggles = document.querySelectorAll('[data-pricing-toggle]');

    pricingToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const card = toggle.closest('[data-pricing-card]');
            if (!card) return;

            const content = card.querySelector('[data-pricing-content]');
            const img = toggle.querySelector('img');

            if (!content) return;

            const isOpen = content.classList.contains('pricing-mobile__content--open');

            if (isOpen) {
                content.classList.remove('pricing-mobile__content--open');
                toggle.classList.remove('pricing-mobile__toggle--open');
                toggle.innerHTML = '<img src="assets/chevron-down.svg" alt="Down Arrow" width="24" height="24"> Show more';
            } else {
                content.classList.add('pricing-mobile__content--open');
                toggle.classList.add('pricing-mobile__toggle--open');
                toggle.innerHTML = '<img src="assets/chevron-up.svg" alt="Up Arrow" width="24" height="24"> Show less';
            }
        });
    });

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ================================
    // Video Hover Play (for example videos)
    // ================================
    document.querySelectorAll('.video-example').forEach(function(video) {
        video.addEventListener('mouseenter', function() {
            video.play();
        });
        video.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0;
        });
    });
});
