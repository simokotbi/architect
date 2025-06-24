// ==========================================================================
// DOM Elements
// ==========================================================================

const loader = document.getElementById('loader');
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('.contact-form');

// ==========================================================================
// Loading Animation
// ==========================================================================
 
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 1000);
});

// ==========================================================================
// Navigation
// ==========================================================================

// Toggle navigation overlay
navToggle.addEventListener('click', () => {
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close navigation overlay
navClose.addEventListener('click', closeNavigation);

// Close navigation when clicking on overlay background
navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
        closeNavigation();
    }
});

// Close navigation when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNavigation();
        
        // Smooth scroll to section
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 500);
            }
        }
    });
});

// Navigation close function
function closeNavigation() {
    navOverlay.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// Close navigation on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
        closeNavigation();
    }
});

// ==========================================================================
// Header Background on Scroll
// ==========================================================================

let lastScrollTop = 0;
const header = document.querySelector('.header');
const breadcrumb = document.querySelector('.breadcrumb');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add background when scrolled
    if (scrollTop > 100) {
        header.style.backgroundColor = 'rgba(248, 248, 248, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        
        // Show breadcrumb when scrolled down
        if (breadcrumb) {
            breadcrumb.classList.add('visible');
        }
    } else {
        header.style.backgroundColor = 'rgba(248, 248, 248, 0.95)';
        header.style.boxShadow = 'none';
        
        // Hide breadcrumb at top
        if (breadcrumb) {
            breadcrumb.classList.remove('visible');
        }
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================================================
// Parallax Effect for Hero Section
// ==========================================================================

const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// ==========================================================================
// Scroll Animations
// ==========================================================================

// Intersection Observer for fade-in animations
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

// Apply animations to elements
const animatedElements = document.querySelectorAll('.project-card, .service-item, .team-member, .contact-item');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==========================================================================
// Project Cards Hover Effects
// ==========================================================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const image = card.querySelector('.project-image img');
    
    card.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
    
    // Add click functionality for future project detail pages
    card.addEventListener('click', () => {
        const projectTitle = card.querySelector('.project-title').textContent;
        console.log(`Clicked on project: ${projectTitle}`);
        // Here you could navigate to a project detail page
        // window.location.href = `project-${projectTitle.toLowerCase().replace(/\s+/g, '-')}.html`;
    });
});

// ==========================================================================
// Contact Form Handling
// ==========================================================================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Thank you for your message. We\'ll get back to you soon!', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Form validation function
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter your full name.');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address.');
    }
    
    if (!data['project-type']) {
        errors.push('Please select a project type.');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please provide more details about your project.');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#A87C4F' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ==========================================================================
// Smooth Scrolling for Internal Links
// ==========================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================================================
// Custom Cursor (Optional Enhancement)
// ==========================================================================

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    background: transparent;
    border: 1px solid #A87C4F;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
`;

document.body.appendChild(cursor);

// Only show custom cursor on desktop
if (window.innerWidth > 1024) {
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(168, 124, 79, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

// ==========================================================================
// Performance Optimizations
// ==========================================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any expensive scroll operations can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ==========================================================================
// Image Lazy Loading Enhancement
// ==========================================================================

// Add fade-in effect for images as they load
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in-out';
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    // Handle images that are already loaded
    if (img.complete) {
        img.style.opacity = '1';
    }
});

// ==========================================================================
// Initialize
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('ARCHDesign Architects website initialized successfully');
    
    // Add any initialization code here
    
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Add schema markup for breadcrumbs dynamically
    updateBreadcrumbSchema();
});

// ==========================================================================
// SEO Enhancements
// ==========================================================================

// Update breadcrumb schema based on current section
function updateBreadcrumbSchema() {
    const sections = document.querySelectorAll('section[id]');
    const breadcrumbList = document.querySelector('.breadcrumb ol');
    
    if (!breadcrumbList) return;
    
    // Monitor which section is in view and update breadcrumb accordingly
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const sectionId = entry.target.id;
                const sectionName = getSectionName(sectionId);
                
                // Update document title dynamically
                if (sectionId && sectionId !== 'home') {
                    document.title = `${sectionName} | ARCHDesign Architects | Los Angeles`;
                } else {
                    document.title = 'ARCHDesign Architects | Contemporary Architectural Design Studio | Los Angeles';
                }
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => observer.observe(section));
}

// Get section name for breadcrumb and title updates
function getSectionName(sectionId) {
    const sectionNames = {
        'home': 'Home',
        'portfolio': 'Portfolio',
        'about': 'Philosophy',
        'services': 'Services',
        'team': 'Team',
        'contact': 'Contact'
    };
    return sectionNames[sectionId] || 'Home';
}

// Add lazy loading for images not in viewport
function addLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
addLazyLoading();

// ==========================================================================
// Enhanced Form Handling for New Pages
// ==========================================================================

// Handle application form on careers page
const applicationForm = document.querySelector('.application-form');

if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(applicationForm);
        const data = Object.fromEntries(formData);
        
        // Validate application form
        if (!validateApplicationForm(data)) {
            return;
        }
        
        // Show loading state
        const submitBtn = applicationForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            applicationForm.reset();
            
            // Show success message
            showNotification('Thank you for your application. We\'ll review it and get back to you soon!', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Application form validation
function validateApplicationForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter your full name.');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address.');
    }
    
    if (!data.position) {
        errors.push('Please select a position of interest.');
    }
    
    if (!data['cover-letter'] || data['cover-letter'].trim().length < 50) {
        errors.push('Please provide a detailed cover letter (minimum 50 characters).');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

// ==========================================================================
// Enhanced Scroll Animations for New Page Elements
// ==========================================================================

// Apply animations to new page elements
const newAnimatedElements = document.querySelectorAll('.process-step, .job-card, .stat-item, .gallery-item');

newAnimatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ==========================================================================
// Job Card Interactions
// ==========================================================================

const jobCards = document.querySelectorAll('.job-card');

jobCards.forEach(card => {
    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
    
    // Handle apply button clicks
    const applyBtn = card.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get position title
            const positionTitle = card.querySelector('.job-title').textContent;
            
            // Scroll to application form
            const applicationForm = document.getElementById('contact-form');
            if (applicationForm) {
                applicationForm.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Pre-fill position field if it exists
                const positionSelect = document.getElementById('position');
                if (positionSelect) {
                    // Convert title to option value
                    const optionValue = positionTitle.toLowerCase().replace(/\s+/g, '-');
                    const option = positionSelect.querySelector(`option[value*="${optionValue.split('-')[0]}"]`);
                    if (option) {
                        positionSelect.value = option.value;
                    }
                }
            }
        });
    }
});

// ==========================================================================
// Gallery Image Interactions
// ==========================================================================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const image = item.querySelector('img');
    
    item.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.05)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
    
    // Add click functionality for lightbox (future enhancement)
    item.addEventListener('click', () => {
        // Future: Implement lightbox gallery
        console.log('Gallery item clicked:', image.src);
    });
});

// ==========================================================================
// Process Step Interactions
// ==========================================================================

const processSteps = document.querySelectorAll('.process-step');

processSteps.forEach((step, index) => {
    step.addEventListener('mouseenter', () => {
        step.style.transform = 'translateY(-5px)';
    });
    
    step.addEventListener('mouseleave', () => {
        step.style.transform = 'translateY(0)';
    });
    
    // Add sequential animation delay
    step.style.animationDelay = `${index * 0.1}s`;
});

// ==========================================================================
// Enhanced Custom Cursor for New Elements
// ==========================================================================

// Add new elements to cursor hover effects
const newHoverElements = document.querySelectorAll('.job-card, .gallery-item, .process-step, .apply-btn');

if (window.innerWidth > 1024 && cursor) {
    newHoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(168, 124, 79, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

// ==========================================================================
// Page-Specific Initialization
// ==========================================================================

// Enhanced initialization for new pages
document.addEventListener('DOMContentLoaded', () => {
    // Detect current page type
    const pageType = detectPageType();
    
    // Page-specific initializations
    switch(pageType) {
        case 'service-detail':
            initializeServicePage();
            break;
        case 'case-study':
            initializeCaseStudyPage();
            break;
        case 'careers':
            initializeCareersPage();
            break;
        default:
            // Homepage initialization already handled
            break;
    }
});

// Detect current page type
function detectPageType() {
    if (document.querySelector('.service-detail-page')) return 'service-detail';
    if (document.querySelector('.case-study-page')) return 'case-study';
    if (document.querySelector('.careers-page')) return 'careers';
    return 'homepage';
}

// Service page initialization
function initializeServicePage() {
    console.log('Service detail page initialized');
    
    // Add any service-specific functionality
    const ctaButtons = document.querySelectorAll('.service-cta .submit-btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(btn.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Case study page initialization
function initializeCaseStudyPage() {
    console.log('Case study page initialized');
    
    // Initialize stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumber(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Careers page initialization
function initializeCareersPage() {
    console.log('Careers page initialized');
    
    // Smooth scroll for apply buttons
    const applyButtons = document.querySelectorAll('.apply-btn[href="#contact-form"]');
    applyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#contact-form');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Animate stat numbers (for case studies)
function animateStatNumber(element) {
    const text = element.textContent;
    const hasPercent = text.includes('%');
    const hasPlus = text.includes('+');
    const number = parseInt(text.replace(/[^\d]/g, ''));
    
    if (isNaN(number)) return;
    
    let current = 0;
    const increment = number / 60; // Animate over ~1 second at 60fps
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current).toString();
        if (hasPercent) displayValue += '%';
        if (hasPlus) displayValue += '+';
        
        element.textContent = displayValue;
    }, 16);
}
