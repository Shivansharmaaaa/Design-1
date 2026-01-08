/* ==========================================
   NAVIGATION MODULE
   Mobile menu toggle and controls
   ========================================== */

export function initNavigation() {
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navOverlay = document.querySelector(".nav-overlay");

  if (!navToggle || !navMenu || !navOverlay) return;

  const links = navMenu.querySelectorAll("a");

  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.setAttribute("aria-hidden", "true");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    navToggle.setAttribute("aria-expanded", "true");
    navMenu.setAttribute("aria-hidden", "false");
    navOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const toggleMenu = () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Event listeners
  navToggle.addEventListener("click", toggleMenu);

  // Close menu when clicking on overlay
  navOverlay.addEventListener("click", closeMenu);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Initialize closed
  closeMenu();
}

