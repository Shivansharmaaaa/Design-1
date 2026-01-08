# Dinner in the Sky Dubai

A modern, elegant website for Dinner in the Sky Dubai - an extraordinary fine dining experience 50 meters above Dubai.

## 🎨 Design Features

- **Modern Dark Theme** with yellow accent colors
- **Responsive Design** that works on all devices
- **Smooth Animations** and transitions
- **Accessible** navigation and interactions
- **Performance Optimized** modular architecture

## 📁 Project Structure

```
DinnerInTheSkyModern/
├── assets/
│   ├── css/
│   │   ├── base/              # Foundation styles (variables, reset, layout)
│   │   ├── components/        # Reusable UI (buttons, cards, navigation)
│   │   ├── sections/          # Page sections (hero, booking, footer)
│   │   ├── utilities/         # Animations & responsive styles
│   │   └── styles.css         # Main CSS entry point
│   ├── js/
│   │   ├── modules/           # JavaScript modules
│   │   │   ├── navigation.js  # Menu toggle functionality
│   │   │   └── animations.js  # UI animations
│   │   └── app.js             # Main JS entry point
│   └── images/                # Image assets
├── docs/
│   ├── project-structure.md   # Detailed structure documentation
│   └── style-guide.md         # Design system guide
├── index.html                 # Main HTML file
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Running Locally

**Option 1: Simple HTTP Server (Python)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: VS Code Live Server**
1. Install the "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option 3: Node.js**
```bash
npx serve
```

Then open `http://localhost:8000` in your browser.

## 📚 Documentation

- **[Project Structure](docs/project-structure.md)** - Detailed overview of the file organization
- **[Style Guide](docs/style-guide.md)** - Design system and brand guidelines

## 🏗️ Architecture

### CSS Architecture

The CSS is organized into four main categories:

1. **Base** - Foundation (variables, resets, typography)
2. **Components** - Reusable UI elements (buttons, cards)
3. **Sections** - Page-specific styles (hero, footer)
4. **Utilities** - Helpers (animations, responsive)

All CSS modules are imported in `assets/css/styles.css`.

### JavaScript Architecture

JavaScript uses ES6 modules:
- **modules/** - Individual feature modules
- **app.js** - Main entry point that initializes all modules

## 🎯 Key Features

### Sections

- **Hero** - Eye-catching introduction with animated elements
- **Concept** - Overview of the dining experience
- **Sessions** - Available timing and packages
- **Testimonials** - Guest reviews and ratings
- **Safety** - Safety information and certifications
- **Booking** - Contact and booking information
- **Footer** - Site navigation and contact details

### Components

- Responsive navigation with mobile menu
- Accent and ghost button variants
- Feature cards with hover effects
- Session cards with badges
- Testimonial cards
- Animated hero panel
- Icon lists

## 🛠️ Adding New Features

### Adding a Component

1. Create `assets/css/components/your-component.css`
2. Add `@import 'components/your-component.css';` to `styles.css`
3. Add HTML markup to `index.html`

### Adding a Section

1. Create `assets/css/sections/your-section.css`
2. Add `@import 'sections/your-section.css';` to `styles.css`
3. Add section HTML to `index.html`

### Adding JavaScript

1. Create `assets/js/modules/your-module.js`
2. Export initialization function
3. Import and call in `app.js`

## 🎨 Design System

### Colors

- **Background**: `#0d0f14` (Dark blue-black)
- **Accent**: `#d4af37` (Gold)
- **Text**: `#f8f7f4` (Off-white)
- **Borders**: Gold with varying opacity

### Typography

- **Headings**: Poppins (600 weight)
- **Body**: Inter (400-500 weight)

### Spacing

Uses a clamp-based responsive spacing system:
- `--spacing-xxl` to `--spacing-xxs`

### Border Radius

- Pills: `999px`
- Large: `24px`
- Medium: `18px`
- Small: `12px`

## 📱 Responsive Breakpoints

- **Desktop**: > 1080px
- **Tablet**: 720px - 1080px
- **Mobile**: < 720px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

The site uses modern CSS features (Grid, Custom Properties, Flexbox) and ES6 JavaScript modules.

## 📄 License

© 2025 Dinner in the Sky. All rights reserved.

## 🤝 Contributing

When contributing, please:
1. Follow the existing file structure
2. Use consistent naming conventions
3. Add comments to explain complex logic
4. Test across different screen sizes
5. Update documentation as needed

---

**Built with ❤️ and modern web technologies**
