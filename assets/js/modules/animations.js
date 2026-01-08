/* ==========================================
   ANIMATIONS MODULE
   All the sleek animations and effects
   ========================================== */

export function initAnimations() {
  const isMobile = window.innerWidth <= 768;
  
  initScrollReveal();
  initHeaderScroll();
  initStaggeredCards();
  initStatsCounter();
  initSmoothScroll();

  if (!isMobile) {
    initParallax();
    initMagneticButtons();
    initCardTilt();
  }
}

// ============================================
// Smooth Scroll Reveal Animations
// ============================================
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  };

  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);

  // Observe sections and cards for scroll animations
  const elementsToAnimate = document.querySelectorAll(`
    .section__header,
    .feature-card,
    .session-card,
    .testimonial-card,
    .safety,
    .booking
  `);

  elementsToAnimate.forEach(el => {
    el.classList.add("scroll-fade");
    observer.observe(el);
  });
}

// ============================================
// Parallax Effect on Hero Background with Fade
// ============================================
function initParallax() {
  const hero = document.querySelector(".hero");
  
  if (!hero) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    const heroHeight = hero.offsetHeight;
    
    // Calculate opacity based on scroll position
    // Fades from 1 to 0 as user scrolls through the hero section
    const fadePoint = heroHeight * 0.8; // Start fading at 80% of hero height
    const opacity = Math.max(0, 1 - (scrolled / fadePoint));
    
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      hero.style.opacity = opacity;
    }
  }, { passive: true });
}

// ============================================
// Header Scroll Effect
// ============================================
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    lastScroll = currentScroll;
  }, { passive: true });
}

// ============================================
// Staggered Card Animations
// ============================================
function initStaggeredCards() {
  const staggerCards = (selector, baseDelay = 100) => {
    const cards = document.querySelectorAll(selector);
    cards.forEach((card, index) => {
      card.style.animationDelay = `${baseDelay * index}ms`;
    });
  };

  // Apply staggered animations to different card types
  staggerCards(".feature-card", 150);
  staggerCards(".session-card", 200);
  staggerCards(".testimonial-card", 150);
}

// ============================================
// Stats Counter Animation
// ============================================
function initStatsCounter() {
  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  };

  // Observe hero meta stats for counter animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const strong = entry.target.querySelector("strong");
        const text = strong?.textContent;
        
        if (text && !isNaN(parseFloat(text))) {
          const value = parseFloat(text);
          if (Number.isInteger(value)) {
            animateCounter(strong, value, 1500);
          }
        }
        
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".hero__meta div").forEach(stat => {
    statsObserver.observe(stat);
  });
}

// ============================================
// Magnetic Button Effect (Premium Touch)
// ============================================
function initMagneticButtons() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("mousemove", function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    button.addEventListener("mouseleave", function() {
      this.style.transform = "";
    });
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      
      // Don't prevent default for empty hash or just "#"
      if (!href || href === "#") return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// ============================================
// Card Tilt Effect (Premium 3D)
// ============================================
function initCardTilt() {
  const cards = document.querySelectorAll(".feature-card, .session-card, .hero__panel");

  cards.forEach(card => {
    card.addEventListener("mousemove", function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener("mouseleave", function() {
      this.style.transform = "";
    });
  });
}

