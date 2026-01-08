# Project Structure

This document outlines the organization of the Dinner in the Sky project.

## Overview

The project follows a modular architecture with clear separation of concerns:

```
DinnerInTheSkyModern/
├── assets/
│   ├── css/
│   │   ├── base/              # Foundation styles
│   │   ├── components/        # Reusable UI components
│   │   ├── sections/          # Page-specific sections
│   │   ├── utilities/         # Helpers and utilities
│   │   └── styles.css         # Main entry point (imports all modules)
│   ├── js/
│   │   ├── modules/           # JavaScript modules
│   │   └── app.js             # Main entry point
│   └── images/                # Image assets
├── docs/                      # Documentation
├── index.html                 # Main HTML file
└── README.md                  # Project readme
```

## CSS Architecture

### Base (`assets/css/base/`)
Foundation styles that establish the design system:
- **variables.css** - CSS custom properties (colors, spacing, typography)
- **reset.css** - CSS resets and element defaults
- **layout.css** - Container and layout utilities
- **typography.css** - Text styles and utility classes

### Components (`assets/css/components/`)
Reusable UI components used throughout the site:
- **buttons.css** - Button styles and variants
- **navigation.css** - Header and navigation
- **cards.css** - Feature, session, and testimonial cards
- **lists.css** - Icon lists and styled lists

### Sections (`assets/css/sections/`)
Page-specific section styles:
- **hero.css** - Hero section
- **concept.css** - Concept section
- **sessions.css** - Sessions section
- **testimonials.css** - Testimonials section
- **safety.css** - Safety section
- **booking.css** - Booking section
- **footer.css** - Footer

### Utilities (`assets/css/utilities/`)
Helper styles and system-wide utilities:
- **animations.css** - Keyframe animations
- **responsive.css** - Media queries and responsive styles

## JavaScript Architecture

### Modules (`assets/js/modules/`)
Individual feature modules:
- **navigation.js** - Mobile menu toggle and navigation controls
- **animations.js** - Hero panel and other animations

### Entry Point (`assets/js/app.js`)
Main application file that initializes all modules using ES6 imports.

## Benefits of This Structure

1. **Modularity** - Each file has a single, clear purpose
2. **Maintainability** - Easy to locate and update specific styles/features
3. **Scalability** - Simple to add new components or sections
4. **Performance** - Easier to optimize and lazy-load specific modules
5. **Collaboration** - Multiple developers can work on different modules simultaneously
6. **Debugging** - Faster to identify and fix issues in isolated modules

## Adding New Features

### Adding a New Component
1. Create a new file in `assets/css/components/`
2. Add the import to `styles.css`
3. Follow the existing naming conventions

### Adding a New Section
1. Create a new file in `assets/css/sections/`
2. Add the import to `styles.css`
3. Add the HTML markup to `index.html`

### Adding JavaScript Functionality
1. Create a new module in `assets/js/modules/`
2. Export the initialization function
3. Import and call it from `app.js`

## File Naming Conventions

- Use kebab-case for file names: `navigation.css`, `hero.css`
- Be descriptive and specific: `buttons.css` not `btn.css`
- Group related files in appropriate directories
- Keep filenames short but meaningful

## Code Organization

- Each CSS file starts with a comment header describing its purpose
- Related styles are grouped together
- Complex selectors are broken into readable chunks
- Comments explain "why" not "what"

## Browser Support

The site uses modern CSS features including:
- CSS Custom Properties (CSS Variables)
- CSS Grid and Flexbox
- CSS Animations
- ES6 Modules

Ensure testing across modern browsers (Chrome, Firefox, Safari, Edge).

