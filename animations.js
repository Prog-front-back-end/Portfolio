// Variables globales pour les animations
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let isLoaded = false;

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
    createDynamicElements();
    initUltraLoader();
    initCustomCursor();
    initFloatingParticles();
    initScrollAnimations();
    initAdvancedAnimations();
    initParallaxEffects();
    initFormEnhancements();
    initSmoothScrolling();
    initHeaderEffects();
    initPortfolioAnimations();
});

// Créer les éléments dynamiques nécessaires
function createDynamicElements() {
    // Ajouter le loader HTML
    const loader = document.createElement('div');
    loader.className = 'ultra-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Styve Developer</div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Ajouter les curseurs personnalisés
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    // Ajouter le conteneur de particules
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    document.body.appendChild(particlesContainer);
    
    // Ajouter les styles CSS nécessaires
    addDynamicStyles();
}

// Ajouter les styles CSS pour les animations
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Loader ultra-moderne */
        .ultra-loader {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(135deg, #1f2039 0%, #2a2d5a 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: all 0.8s ease;
        }
        .ultra-loader.loader-exit {
            opacity: 0;
            transform: scale(1.1);
        }
        .loader-content {
            text-align: center;
            color: #a5b4fc;
        }
        .loader-text {
            font-size: 2.5rem;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
            opacity: 0;
            animation: pulse 2s ease-in-out infinite;
        }
        .loader-spinner {
            width: 80px; height: 80px;
            border: 3px solid rgba(165, 180, 252, 0.3);
            border-top: 3px solid #a5b4fc;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        
        /* Curseur personnalisé */
        .custom-cursor {
            position: fixed;
            width: 30px; height: 30px;
            background: #a5b4fc;
            border-radius: 50%;
            pointer-events: none;
            mix-blend-mode: difference;
            z-index: 9999;
            transition: all 0.3s ease;
            opacity: 0;
        }
        .custom-cursor.active { opacity: 1; }
        .custom-cursor-dot {
            position: fixed;
            width: 4px; height: 4px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
        }
        
        /* Particules flottantes */
        .floating-particles {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            z-index: 1;
        }
        .magic-particle {
            position: absolute;
            width: 4px; height: 4px;
            background: #a5b4fc;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            opacity: 0.6;
            animation: floatUp 12s linear infinite;
        }
        
        /* Animations */
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes floatUp {
            from {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            to {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        /* Classes d'animation */
        .animate-fade-in {
            animation: fadeInUp 0.8s ease forwards;
        }
        .animate-slide-left {
            animation: slideInLeft 0.8s ease forwards;
        }
        .animate-slide-right {
            animation: slideInRight 0.8s ease forwards;
        }
        
        /* Mode performance réduite */
        .reduced-motion * {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
        }
        
        /* Responsive - masquer curseur sur mobile */
        @media (max-width: 996px) {
            .custom-cursor, .custom-cursor-dot {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Loader ultra-moderne
function initUltraLoader() {
    const loader = document.querySelector('.ultra-loader');
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée du texte
    setTimeout(() => {
        const loaderText = document.querySelector('.loader-text');
        if (loaderText) {
            loaderText.style.opacity = '1';
        }
    }, 500);

    // Sortie du loader
    setTimeout(() => {
        loader.classList.add('loader-exit');
        setTimeout(() => {
            loader.remove();
            isLoaded = true;
            document.body.style.overflow = 'visible';
            startMainAnimations();
        }, 1200);
    }, 1000);
}

// Démarrage des animations principales
function startMainAnimations() {
    // Animation des titres lettre par lettre
    animateTextLetterByLetter('h1');
    
    // Animation des éléments importants
    setTimeout(() => {
        document.querySelectorAll('.important').forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'scale(0.8)';
                el.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'scale(1)';
                }, 100);
            }, i * 200);
        });
    }, 1000);
    
    // Animation des images de la page d'accueil
    setTimeout(() => {
        const heroImage = document.querySelector('.section-robbie img');
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateX(50px)';
            heroImage.style.transition = 'all 1s ease';
            setTimeout(() => {
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateX(0)';
            }, 100);
        }
    }, 1500);
    
    // Animation des images du portfolio
    setTimeout(() => {
        const portfolioImages = document.querySelectorAll('.section-robbie_photo img');
        portfolioImages.forEach((img, i) => {
            img.style.opacity = '0';
            img.style.transform = 'translateY(30px)';
            img.style.transition = `all 0.8s ease ${i * 0.1}s`;
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
            }, 200 + (i * 100));
        });
    }, 2000);
}

// Animation lettre par lettre pour les titres
function animateTextLetterByLetter(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px) rotateX(90deg)';
            span.style.display = 'inline-block';
            span.style.transition = `all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${i * 0.05}s`;
            element.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0) rotateX(0)';
            }, 100 + (i * 50));
        });
    });
}

// Curseur personnalisé ultra-fluide
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    
    // Vérifier si on est sur mobile
    if (window.innerWidth <= 996) {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Point central instantané
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Animation fluide du curseur principal
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Activation du curseur
    document.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    
    // Effets hover avancés
    const interactiveElements = document.querySelectorAll('a, button, .cta, img, .lien-photo, input, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.opacity = '0.3';
            cursor.style.mixBlendMode = 'exclusion';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
            cursor.style.mixBlendMode = 'difference';
        });
    });
}

// Particules magiques flottantes
function initFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        createMagicParticle();
    }
    
    function createMagicParticle() {
        const particle = document.createElement('div');
        particle.className = 'magic-particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (8 + Math.random() * 6) + 's';
        
        // Couleurs variées
        const colors = ['#a5b4fc', '#c7d2fe', '#e0e7ff', '#8b5cf6'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
        
        // Recréer après l'animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                createMagicParticle();
            }
        }, (8 + Math.random() * 6) * 1000);
    }
}

// Animations au scroll ultra-sophistiquées
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                
                // Animation spéciale pour les images
                if (entry.target.tagName === 'IMG') {
                    entry.target.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        entry.target.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observer toutes les images et éléments importants
    document.querySelectorAll('img, .carre-contenu, table, form, .portfolio-photos h2').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Animations avancées et effets spéciaux
function initAdvancedAnimations() {
    // Effet de hover magnétique sur les CTA
    document.querySelectorAll('.cta').forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
        
        // Effet de particules au clic
        button.addEventListener('click', function(e) {
            createClickParticles(e, this);
        });
    });
    
    // Effet de lueur sur les images au survol
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.2) drop-shadow(0 0 20px rgba(165, 180, 252, 0.5))';
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Animation des liens Robbie
    document.querySelectorAll('.Robbie-links').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.textShadow = '0 4px 8px rgba(165, 180, 252, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.textShadow = 'none';
        });
    });
}

// Créer des particules au clic
function createClickParticles(e, element) {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
        `;
        
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        element.appendChild(particle);
        
        let opacity = 1;
        let posX = x;
        let posY = y;
        
        function animateParticle() {
            posX += vx * 0.02;
            posY += vy * 0.02;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animateParticle);
    }
}

// Effets de parallaxe avancés
function initParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        // Parallaxe sur l'image hero
        const heroImg = document.querySelector('.section-robbie img');
        if (heroImg) {
            const speed = 0.3;
            heroImg.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.0001})`;
        }
        
        // Parallaxe sur les particules
        const particles = document.querySelectorAll('.magic-particle');
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index * 0.01);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Améliorations du formulaire
function initFormEnhancements() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Labels flottants et effets
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 30px rgba(165, 180, 252, 0.4)';
            this.style.transform = 'scale(1.02)';
            createInputRipple(this);
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
        
        // Animation de frappe
        input.addEventListener('input', function() {
            this.style.borderColor = '#a5b4fc';
            setTimeout(() => {
                this.style.borderColor = '';
            }, 200);
        });
    });
}

// Créer effet d'ondulation sur les inputs
function createInputRipple(input) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(165, 180, 252, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 1;
    `;
    
    const parent = input.parentElement;
    if (parent) {
        parent.style.position = 'relative';
        parent.appendChild(ripple);
        
        // Animation
        ripple.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '300px', height: '300px', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => ripple.remove();
    }
}

// Défilement fluide
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                // Animation de scroll personnalisée
                const start = window.pageYOffset;
                const distance = targetPosition - start;
                const duration = 1000;
                let startTime = null;
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Fonction d'easing
                    const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    
                    window.scrollTo(0, start + distance * ease(progress));
                    
                    if (progress < 1) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
}

// Gestion du header au scroll
function initHeaderEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            header.classList.add('scrolled');
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Animations spécifiques au portfolio
function initPortfolioAnimations() {
    const portfolioLinks = document.querySelectorAll('.lien-photo');
    
    portfolioLinks.forEach((link, index) => {
        // Animation d'entrée échelonnée
        link.style.opacity = '0';
        link.style.transform = 'scale(0.8)';
        link.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'scale(1)';
        }, 100 + (index * 100));
        
        // Effet hover avancé
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// Performance monitoring
let fps = 0;
let lastTime = performance.now();

function measureFPS() {
    const now = performance.now();
    fps = 1000 / (now - lastTime);
    lastTime = now;
    
    // Optimiser si FPS trop bas
    if (fps < 30) {
        document.body.classList.add('reduced-motion');
    } else {
        document.body.classList.remove('reduced-motion');
    }
    
    requestAnimationFrame(measureFPS);
}

// Démarrer le monitoring après le chargement
setTimeout(() => {
    requestAnimationFrame(measureFPS);
}, 4000);

// Easter egg - Triple clic sur le logo
let logoClickCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('logo') || e.target.closest('.logo')) {
        logoClickCount++;
        if (logoClickCount === 3) {
            // Effet spécial
            document.body.style.filter = 'hue-rotate(180deg) saturate(2)';
            setTimeout(() => {
                document.body.style.filter = 'none';
                logoClickCount = 0;
            }, 2000);
        }
        setTimeout(() => logoClickCount = 0, 1000);
    }
});

// Gestion responsive
window.addEventListener('resize', function() {
    if (window.innerWidth <= 996) {
        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.custom-cursor-dot');
        if (cursor) cursor.style.display = 'none';
        if (cursorDot) cursorDot.style.display = 'none';
    }
});