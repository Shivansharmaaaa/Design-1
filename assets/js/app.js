/* ==========================================
   MAIN APPLICATION
   Entry point - initializes all modules
   ========================================== */

import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
});

