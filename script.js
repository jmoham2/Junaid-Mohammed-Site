// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Construct mailto link
        const mailtoLink = `mailto:junnu.mohammed@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you! Opening your email client...';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            formMessage.className = 'form-message';
        }, 2000);
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navMenu.style.display = 'none';
            }
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.borderBottomColor = 'rgba(71, 85, 105, 0.5)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
        navbar.style.boxShadow = 'none';
    }
});

// Button links
const viewWorkBtn = document.querySelector('.btn-primary');
const contactBtn = document.querySelector('.btn-secondary');

if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', (e) => {
        if (viewWorkBtn.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
        if (contactBtn.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe cards and items
const cardsToObserve = document.querySelectorAll(
    '.skill-category, .project-card, .timeline-item, .contact-item, .education-card'
);

cardsToObserve.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Add keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Counter animation for stats
const stats = document.querySelectorAll('.stat h3');

const countUp = (element, target) => {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const text = stat.textContent.replace('+', '');
            const number = parseInt(text);
            
            if (!isNaN(number) && !stat.classList.contains('counted')) {
                countUp(stat, number);
                stat.classList.add('counted');
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

stats.forEach(stat => statsObserver.observe(stat));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.style.display = 'none';
    }
});

// Active section highlighting in navbar
const sections = document.querySelectorAll('section[id]');

const highlightNavLink = () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.style.color = 'var(--secondary-color)';
        } else {
            link.style.color = 'var(--text-secondary)';
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Copy email to clipboard
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow default email client behavior
        // Just enhance with visual feedback
        link.style.textDecoration = 'underline';
    });
});

// Mobile menu close on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = '';
    }
});

console.log('Portfolio loaded successfully! 🚀');
