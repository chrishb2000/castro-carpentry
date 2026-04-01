/* ========================================
   Castro Carpentry - JavaScript
   ======================================== */

// Translations
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            portfolio: 'Portfolio',
            contact: 'Contact'
        },
        hero: {
            title: 'Castro Carpentry',
            subtitle: 'Master Craftsmanship with Over 20 Years of Experience',
            cta: 'Get a Free Quote',
            slide1: {
                title: 'Custom Kitchen Cabinets',
                text: 'Transform your kitchen with handcrafted cabinets'
            },
            slide2: {
                title: 'Outdoor Decks & Pergolas',
                text: 'Beautiful outdoor living spaces'
            },
            slide3: {
                title: 'Custom Furniture',
                text: 'Unique pieces crafted to perfection'
            },
            slide4: {
                title: 'Hardwood Flooring',
                text: 'Elegant floors that last a lifetime'
            },
            slide5: {
                title: 'Custom Staircases',
                text: 'Stunning staircases designed for your home'
            }
        },
        video: {
            title: 'Quality Craftsmanship',
            text: 'Every project is a masterpiece'
        },
        about: {
            title: 'About Castro Carpentry',
            description: 'With over 20 years of experience in the woodworking industry, Castro Carpentry has become a trusted name in Magnolia, Texas. We specialize in both interior and exterior carpentry services, delivering exceptional quality and attention to detail on every project.',
            description2: 'Our commitment to professionalism, punctuality, and customer satisfaction has earned us the trust of countless homeowners throughout the Houston area. From custom kitchens to outdoor decks, we bring your vision to life with precision and care.',
            stats: {
                years: 'Years Experience',
                projects: 'Projects Completed',
                satisfaction: 'Satisfaction'
            }
        },
        services: {
            title: 'Our Services',
            subtitle: 'Comprehensive woodworking solutions for your home',
            interior: {
                title: 'Interior Carpentry',
                text: 'Custom cabinets, trim work, molding, doors, and built-in shelving solutions for every room in your home.'
            },
            exterior: {
                title: 'Exterior Carpentry',
                text: 'Decks, pergolas, fences, outdoor kitchens, and exterior trim work built to withstand Texas weather.'
            },
            kitchens: {
                title: 'Kitchens',
                text: 'Complete kitchen remodeling, custom cabinets, islands, pantries, and countertops designed for your lifestyle.'
            },
            furniture: {
                title: 'Custom Furniture',
                text: 'One-of-a-kind furniture pieces including tables, chairs, beds, and storage solutions crafted to your specifications.'
            },
            cabinets: {
                title: 'Cabinets & Closets',
                text: 'Custom cabinetry for kitchens, bathrooms, garages, and walk-in closets with smart organization systems.'
            },
            flooring: {
                title: 'Flooring & Stairs',
                text: 'Hardwood flooring installation, refinishing, and custom staircase construction with premium materials.'
            }
        },
        portfolio: {
            title: 'Our Portfolio',
            subtitle: 'A showcase of our finest craftsmanship'
        },
        testimonials: {
            title: 'Client Reviews',
            subtitle: 'What our customers say about us',
            review1: {
                text: '"Excellent work, 100% recommended!"'
            },
            review2: {
                text: '"Punctuality, Quality, and Professionalism"'
            },
            review3: {
                text: '"Responsiveness, Punctuality, Quality, Professionalism, and Value"'
            }
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch for a free consultation',
            address: {
                label: 'Address'
            },
            phone: {
                label: 'Phone'
            },
            email: {
                label: 'Email'
            },
            hours: {
                label: 'Hours',
                text: 'Monday - Saturday: 8:00 AM - 6:00 PM'
            }
        },
        footer: {
            description: 'Professional woodworking services with over 20 years of experience serving Magnolia, TX and surrounding areas.',
            quickLinks: 'Quick Links',
            services: 'Services',
            contact: 'Contact'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Quiénes Somos',
            services: 'Servicios',
            portfolio: 'Portafolio',
            contact: 'Contacto'
        },
        hero: {
            title: 'Castro Carpentry',
            subtitle: 'Maestría Artesanal con Más de 20 Años de Experiencia',
            cta: 'Obtén un Presupuesto Gratis',
            slide1: {
                title: 'Gabinetes de Cocina Personalizados',
                text: 'Transforma tu cocina con gabinetes hechos a mano'
            },
            slide2: {
                title: 'Terrazas y Pérgolas',
                text: 'Hermosos espacios para vivir al aire libre'
            },
            slide3: {
                title: 'Muebles Personalizados',
                text: 'Piezas únicas elaboradas a la perfección'
            },
            slide4: {
                title: 'Pisos de Madera',
                text: 'Pisos elegantes que duran toda la vida'
            },
            slide5: {
                title: 'Escaleras Personalizadas',
                text: 'Escaleras impresionantes diseñadas para tu hogar'
            }
        },
        video: {
            title: 'Artesanía de Calidad',
            text: 'Cada proyecto es una obra maestra'
        },
        about: {
            title: 'Sobre Castro Carpentry',
            description: 'Con más de 20 años de experiencia en la industria de la carpintería, Castro Carpentry se ha convertido en un nombre de confianza en Magnolia, Texas. Nos especializamos en servicios de carpintería interior y exterior, ofreciendo calidad excepcional y atención al detalle en cada proyecto.',
            description2: 'Nuestro compromiso con el profesionalismo, la puntualidad y la satisfacción del cliente nos ha ganado la confianza de innumerables propietarios en toda el área de Houston. Desde cocinas personalizadas hasta terrazas al aire libre, damos vida a tu visión con precisión y cuidado.',
            stats: {
                years: 'Años de Experiencia',
                projects: 'Proyectos Completados',
                satisfaction: 'Satisfacción'
            }
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Soluciones integrales de carpintería para tu hogar',
            interior: {
                title: 'Carpintería Interior',
                text: 'Gabinetes personalizados, molduras, puertas y soluciones de estantería incorporada para cada habitación de tu hogar.'
            },
            exterior: {
                title: 'Carpintería Exterior',
                text: 'Terrazas, pérgolas, cercas, cocinas al aire libre y molduras exteriores construidas para resistir el clima de Texas.'
            },
            kitchens: {
                title: 'Cocinas',
                text: 'Remodelación completa de cocinas, gabinetes personalizados, islas, despensas y encimeras diseñadas para tu estilo de vida.'
            },
            furniture: {
                title: 'Muebles Personalizados',
                text: 'Piezas de mobiliario únicas incluyendo mesas, sillas, camas y soluciones de almacenamiento hechas a tus especificaciones.'
            },
            cabinets: {
                title: 'Gabinetes y Closets',
                text: 'Gabinetes personalizados para cocinas, baños, garajes y closets con sistemas de organización inteligentes.'
            },
            flooring: {
                title: 'Pisos y Escaleras',
                text: 'Instalación de pisos de madera, restauración y construcción de escaleras personalizadas con materiales premium.'
            }
        },
        portfolio: {
            title: 'Nuestro Portafolio',
            subtitle: 'Una muestra de nuestra mejor artesanía'
        },
        testimonials: {
            title: 'Reseñas de Clientes',
            subtitle: 'Lo que nuestros clientes dicen de nosotros',
            review1: {
                text: '"¡Excelente trabajo, 100% recomendado!"'
            },
            review2: {
                text: '"Puntualidad, Calidad y Profesionalismo"'
            },
            review3: {
                text: '"Capacidad de respuesta, Puntualidad, Calidad, Profesionalismo y Valor"'
            }
        },
        contact: {
            title: 'Contáctanos',
            subtitle: 'Ponte en contacto para una consulta gratis',
            address: {
                label: 'Dirección'
            },
            phone: {
                label: 'Teléfono'
            },
            email: {
                label: 'Email'
            },
            hours: {
                label: 'Horario',
                text: 'Lunes - Sábado: 8:00 AM - 6:00 PM'
            }
        },
        footer: {
            description: 'Servicios profesionales de carpintería con más de 20 años de experiencia sirviendo a Magnolia, TX y áreas circundantes.',
            quickLinks: 'Enlaces Rápidos',
            services: 'Servicios',
            contact: 'Contacto'
        }
    }
};

// Current language
let currentLang = 'en';

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langBtns = document.querySelectorAll('.lang-btn');
const scrollTopBtn = document.getElementById('scroll-top');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselIndicators = document.getElementById('carousel-indicators');

// Carousel state
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.carousel-slide');

// ========================================
// Navigation
// ========================================

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// ========================================
// Language Switcher
// ========================================

function updateContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = t;
        
        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                value = null;
                break;
            }
        }
        
        if (value) {
            element.textContent = value;
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update meta tags for SEO
    if (lang === 'es') {
        document.querySelector('meta[name="description"]').setAttribute('content', 
            'Castro Carpentry - Más de 20 años de experiencia en carpintería interior y exterior, cocinas, muebles personalizados y gabinetes. Sirviendo a Magnolia, TX y áreas circundantes.');
        document.querySelector('title').textContent = 'Castro Carpentry | Servicios Profesionales de Carpintería en Magnolia, TX';
    } else {
        document.querySelector('meta[name="description"]').setAttribute('content', 
            'Castro Carpentry - Over 20 years of experience in interior and exterior carpentry, kitchens, custom furniture, and cabinets. Serving Magnolia, TX and surrounding areas.');
        document.querySelector('title').textContent = 'Castro Carpentry | Professional Woodworking Services in Magnolia, TX';
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update button states
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update content
    updateContent(lang);
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// ========================================
// Scroll to Top
// ========================================

function handleScrollTop() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========================================
// Carousel
// ========================================

function createIndicators() {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    slides[currentSlide].classList.add('active');
    updateIndicators();
    resetInterval();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// ========================================
// Portfolio Modal
// ========================================

let currentImageIndex = 0;
const portfolioImages = Array.from(portfolioItems).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt,
    caption: item.querySelector('img').dataset.caption
}));

function openModal(index) {
    currentImageIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalContent() {
    const image = portfolioImages[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalCaption.textContent = image.caption;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
    updateModalContent();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
    updateModalContent();
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    
    if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            closeMobileMenu();
        }
    }
}

// ========================================
// Fade In Animation on Scroll
// ========================================

function handleFadeInAnimation() {
    const fadeElements = document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// ========================================
// Active Navigation Link on Scroll
// ========================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Event Listeners
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel
    createIndicators();
    startInterval();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(savedLang);
    
    // Event Listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleScrollTop();
        handleFadeInAnimation();
        updateActiveNavLink();
    });
    
    navToggle.addEventListener('click', toggleMobileMenu);
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    
    carouselPrev.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });
    
    carouselNext.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    
    // Pause carousel on hover
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
    carousel.addEventListener('mouseleave', startInterval);
    
    // Portfolio modal
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
    
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });
    modalNext.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
        if (e.key === 'ArrowLeft' && modal.classList.contains('active')) {
            prevImage();
        }
        if (e.key === 'ArrowRight' && modal.classList.contains('active')) {
            nextImage();
        }
    });
    
    // Touch support for carousel
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
        resetInterval();
    }
    
    // Handle initial animation
    handleFadeInAnimation();
});

// ========================================
// Google Maps - Update with correct coordinates
// ========================================

// Update the map iframe src with correct coordinates for the address
function updateGoogleMap() {
    const mapIframe = document.querySelector('.contact-map iframe');
    if (mapIframe) {
        // Using the address: 19149 Goodnight Trail, Magnolia, TX 77355
        const encodedAddress = encodeURIComponent('19149 Goodnight Trail, Magnolia, TX 77355');
        mapIframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890!2d-95.7456789!3d30.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiA5NcKwNDQnNDQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;
    }
}

// Call on load
window.addEventListener('load', updateGoogleMap);
