/**
 * Shivam Sharma Portfolio - Interactive JavaScript
 * Modern, optimized, and accessible interactions
 */

// DOM Elements
const elements = {
    toggleBtn: document.querySelector('.toggle_btn'),
    toggleBtnIcon: document.querySelector('.toggle_btn i'),
    dropdownMenu: document.querySelector('.dropdown_menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    navbar: document.getElementById('navbar'),
    tabLinks: document.querySelectorAll('.tablink'),
    tabContents: document.querySelectorAll('.tabcontent'),
    portfolioButtons: document.querySelectorAll('.learnmore'),
    serviceButtons: document.querySelectorAll('.learn-more'),
    contactForm: document.querySelector('form[name="contact-form"]')
};

// Initialize AOS with optimized settings
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    mirror: false
});

// ========================
// MOBILE MENU TOGGLE
// ========================
if (elements.toggleBtn) {
    elements.toggleBtn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
    elements.dropdownMenu.classList.toggle('open');
    const isOpen = elements.dropdownMenu.classList.contains('open');
    
    // Update icon
    elements.toggleBtnIcon.classList.toggle('bx-menu', !isOpen);
    elements.toggleBtnIcon.classList.toggle('bx-x', isOpen);
    
    // Prevent body scroll when menu open
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Close mobile menu when clicking a link
elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        elements.dropdownMenu.classList.remove('open');
        document.body.style.overflow = '';
        elements.toggleBtnIcon.classList.remove('bx-x');
        elements.toggleBtnIcon.classList.add('bx-menu');
    });
});

// ========================
// PORTFOLIO EXPAND/COLLAPSE
// ========================
elements.portfolioButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const layer = button.closest('.layer');
        const moreInfo = layer.querySelector('.more-info');
        const isExpanded = moreInfo.style.display === 'block';
        
        // Toggle visibility with smooth animation
        moreInfo.style.display = isExpanded ? 'none' : 'block';
        moreInfo.style.opacity = isExpanded ? '0' : '1';
        moreInfo.style.transition = 'opacity 0.3s ease';
        
        button.textContent = isExpanded ? 'View Project' : 'Show Less';
    });
});

// ========================
// SERVICES EXPAND/COLLAPSE
// ========================
elements.serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const card = button.closest('.card');
        const moreText = card.querySelector('.more-text');
        const isExpanded = moreText.style.display === 'inline';
        
        moreText.style.display = isExpanded ? 'none' : 'inline';
        button.textContent = isExpanded ? 'Learn More' : 'Show Less';
    });
});

// ========================
// TAB FUNCTIONALITY
// ========================
function opentab(tabName) {
    // Remove active classes
    elements.tabLinks.forEach(link => link.classList.remove('actlink'));
    elements.tabContents.forEach(content => content.classList.remove('activecontent'));
    
    // Add active to clicked tab
    event.currentTarget.classList.add('actlink');
    document.getElementById(tabName).classList.add('activecontent');
}

// ========================
// NAVBAR SCROLL EFFECTS
// ========================
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    // Navbar background
    if (window.scrollY > 100) {
        elements.navbar.style.background = 'rgba(8, 8, 8, 0.98)';
        elements.navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        elements.navbar.style.background = 'rgba(8, 8, 8, 0.95)';
        elements.navbar.style.boxShadow = 'none';
    }
    
    // Active nav link highlighting
    updateActiveNavLink();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ========================
// SMOOTH SCROLLING FOR NAV LINKS
// ========================
elements.navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================
// CONTACT FORM HANDLING
// ========================
if (elements.contactForm) {
    elements.contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Add loading state
    const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (Formspree handles actual submission)
    setTimeout(() => {
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        elements.contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// ========================
// NOTIFICATION SYSTEM
// ========================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 400);
    }, 4000);
}

// ========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================
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

// Observe portfolio cards
document.querySelectorAll('.work').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ========================
// WINDOW RESIZE HANDLER
// ========================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate layout if needed
        AOS.refresh();
    }, 250);
});

// ========================
// PAGE LOAD ANIMATIONS
// ========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    showNotification('Welcome to my portfolio!', 'success');
    
    // Initial scroll position
    updateActiveNavLink();
});

// ========================
// ERROR HANDLING
// ========================
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    showNotification('Something went wrong. Please refresh the page.', 'error');
});

