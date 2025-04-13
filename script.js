// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    // Function to handle header scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // Close mobile menu on link click
            nav.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Function to show current testimonial
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].style.display = 'block';
        dots[index].classList.add('active');
    }
    
    // Initialize testimonial slider
    showTestimonial(currentIndex);
    
    // Event listeners for testimonial controls
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.feature-card, .step, .stat-item, .content-image, .about-image');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            } else {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
            }
        });
    }
    
    // Initialize animation states
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    // Form submission handling
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email === '') {
                showToast('Please enter your email address');
                return;
            }
            
            // Simulate form submission
            emailInput.value = '';
            showToast('Thank you for subscribing to our newsletter!');
        });
    }
    
    // Toast notification function
    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Append to body
        document.body.appendChild(toast);
        
        // Add active class after a small delay
        setTimeout(() => {
            toast.classList.add('active');
        }, 10);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('active');
            
            // Remove element after animation completes
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    // Add toast styles dynamically
    const toastStyles = document.createElement('style');
    toastStyles.textContent = `
        .toast {
            position: fixed;
            bottom: -100px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            z-index: 1000;
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: var(--shadow);
        }
        
        .toast.active {
            bottom: 20px;
            opacity: 1;
        }
    `;
    document.head.appendChild(toastStyles);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for header height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Interactive fabric showcase
    const fabricShowcase = document.createElement('div');
    fabricShowcase.className = 'fabric-showcase';
    fabricShowcase.innerHTML = `
        <div class="fabric-card">
            <div class="fabric-image">
                <img src="https://placehold.co/400x300?text=Ankara+Fabric" alt="Ankara Fabric">
            </div>
            <div class="fabric-info">
                <h3>Premium Ankara</h3>
                <div class="fabric-meta">
                    <span><i class="fas fa-user"></i> John's Tailoring</span>
                    <span><i class="fas fa-map-marker-alt"></i> Lagos</span>
                </div>
                <p>Beautiful hand-crafted Ankara fabric with traditional patterns</p>
                <div class="fabric-actions">
                    <button class="btn btn-sm btn-primary">Contact Tailor</button>
                    <div class="fabric-nft-badge">
                        <i class="fas fa-certificate"></i> NFT Verified
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add showcase styles
    const showcaseStyles = document.createElement('style');
    showcaseStyles.textContent = `
        .fabric-showcase {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 900;
            max-width: 300px;
            transform: translateX(120%);
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .fabric-showcase.active {
            transform: translateX(0);
        }
        
        .fabric-card {
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }
        
        .fabric-image img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }
        
        .fabric-info {
            padding: 1rem;
        }
        
        .fabric-info h3 {
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        
        .fabric-meta {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.8rem;
            color: var(--gray-600);
        }
        
        .fabric-info p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .fabric-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .btn-sm {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
        }
        
        .fabric-nft-badge {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.8rem;
            color: var(--accent-color);
            background-color: rgba(251, 99, 64, 0.1);
            padding: 0.3rem 0.6rem;
            border-radius: 20px;
        }
        
        .close-showcase {
            position: absolute;
            top: 5px;
            right: 5px;
            background: rgba(0,0,0,0.2);
            color: white;
            border: none;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 12px;
        }
    `;
    document.head.appendChild(showcaseStyles);
    
    // Add close button to showcase
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-showcase';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    fabricShowcase.querySelector('.fabric-card').appendChild(closeBtn);
    
    // Add showcase to document
    document.body.appendChild(fabricShowcase);
    
    // Show showcase after 5 seconds
    setTimeout(() => {
        fabricShowcase.classList.add('active');
    }, 5000);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        fabricShowcase.classList.remove('active');
    });
    
    // Create typing animation effect in the hero section
    const heroText = document.querySelector('.hero-content h1');
    if (heroText) {
        const originalText = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
}); 