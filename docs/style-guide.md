# Dinner in the Sky - Premium Design Style Guide

## Overview
This style guide documents the elegant, premium design system inspired by high-end Italian restaurants like Siena Dubai. The theme emphasizes sophistication, subtle luxury, and refined elegance suitable for a modern fine-dining experience.

---

## Color Palette

### Primary Colors
- **Background Dark**: `#0d0f14` - Deep charcoal for main background
- **Background Alt**: `#16181f` - Slightly lighter for contrast
- **Accent Gold**: `#d4af37` - Champagne gold for luxury accents
- **Accent Strong**: `#c19a2e` - Deeper gold for gradients

### Secondary Colors
- **Burgundy**: `#8b2e3d` - Sophisticated wine tone for accents
- **Text Primary**: `#f8f7f4` - Warm off-white for readability
- **Text Muted**: `#b8b4ab` - Subtle beige for secondary text
- **Text Soft**: `#928e85` - Lighter grey for tertiary content

### Surface Colors
- **Surface**: `rgba(26, 29, 36, 0.85)` - Cards and panels
- **Surface Soft**: `rgba(22, 24, 30, 0.75)` - Lighter surfaces
- **Border**: `rgba(212, 175, 55, 0.12)` - Gold-tinted borders
- **Border Strong**: `rgba(212, 175, 55, 0.25)` - Emphasized borders

### Usage Guidelines
- Use champagne gold sparingly for CTAs and important highlights
- Burgundy adds warmth and depth; use for special occasions
- Maintain high contrast ratios for accessibility (WCAG AA minimum)
- Dark surfaces create depth; lighter surfaces bring focus

---

## Typography

### Font Families
- **Headings**: `"Cormorant Garamond"` - Elegant serif for premium feel
  - Fallbacks: Poppins, Georgia, serif
  - Weight range: 400-700
  - Used for: H1, H2, H3, H4, logo

- **Body**: `"Inter"` - Clean sans-serif for readability
  - Fallbacks: -apple-system, BlinkMacSystemFont, "Segoe UI"
  - Weight range: 400-600
  - Used for: Paragraphs, navigation, buttons

### Heading Styles
```css
H1: 700 weight, -0.02em letter-spacing
H2: 600 weight, -0.01em letter-spacing  
H3: 600 weight, -0.005em letter-spacing
H4: 600 weight, -0.01em letter-spacing
```

### Body Text
- Base: 1rem (16px)
- Line height: 1.7
- Color: `var(--color-text)` (#f8f7f4)

### Special Elements
- **Eyebrow text**: 0.7rem, uppercase, 0.25em spacing, 600 weight
- **Buttons**: 0.9rem, 0.05em spacing, 600 weight
- **Badges**: 0.7rem, uppercase, 0.1-0.12em spacing, 600 weight

---

## Spacing System

### Fluid Spacing (clamp values)
```css
--spacing-xxl: clamp(5rem, 7.5vw, 7.5rem)   /* Major sections */
--spacing-xl:  clamp(3rem, 5vw, 5rem)       /* Large gaps */
--spacing-lg:  clamp(2rem, 4vw, 3.5rem)     /* Medium gaps */
--spacing-md:  clamp(1.5rem, 3vw, 2.5rem)   /* Small gaps */
--spacing-sm:  clamp(1rem, 2.2vw, 1.5rem)   /* Tight spacing */
--spacing-xs:  0.75rem                       /* Very tight */
--spacing-xxs: 0.5rem                        /* Minimal */
```

### Border Radius
- **Pill**: `999px` - Buttons, badges
- **Large**: `24px` - Cards, panels
- **Medium**: `18px` - Feature cards
- **Small**: `12px` - Stats, tags

---

## Shadows & Depth

### Shadow Layers
```css
--shadow-lg: 0 32px 80px rgba(0, 0, 0, 0.5)    /* Hero panel */
--shadow-md: 0 20px 50px rgba(0, 0, 0, 0.38)   /* Cards hover */
--shadow-sm: 0 12px 28px rgba(0, 0, 0, 0.25)   /* Default cards */
--shadow-glow: 0 0 40px rgba(212, 175, 55, 0.15) /* Gold glow */
```

### Usage
- Stack shadows: Use `box-shadow: var(--shadow-md), var(--shadow-glow)` for premium effect
- Increase shadow on hover to create depth
- Glow shadow adds luxury to gold accent elements

---

## Animation Principles

### Timing
- **Quick interactions**: 280-320ms - Hover states, color changes
- **Medium transitions**: 400-500ms - Transform, position changes
- **Slow reveals**: 600-800ms - Fade-ins, scroll animations
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for natural motion

### Key Animations

#### 1. Fade In Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**Usage**: Hero content, section headers, cards

#### 2. Fade In Scale
```css
@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```
**Usage**: Hero panel, modal-like elements

#### 3. Float
```css
@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
}
```
**Usage**: Background gradient orbs (20-25s duration)

### Interaction States

#### Hover Transforms
- **Buttons**: `translateY(-3px)` + enhanced shadow
- **Cards**: `translateY(-8px)` + accent border + glow
- **Links**: Underline animation with gold gradient

#### Button Ripple
- Expanding circle overlay on hover
- White overlay at 10% opacity
- 0.6s ease transition

---

## Component Patterns

### Cards
```css
Base State:
- Background: var(--color-surface)
- Border: 1px solid var(--color-border-soft)
- Border radius: var(--radius-md) to var(--radius-lg)
- Padding: var(--spacing-lg) var(--spacing-md)

Hover State:
- Transform: translateY(-8px)
- Border: var(--color-accent)
- Shadow: Enhanced + glow
- Optional: Gradient overlay (5% opacity)
```

### Badges
```css
- Pill-shaped (border-radius: 999px)
- Small text (0.7rem, uppercase, 0.1-0.12em spacing)
- Gold border: 1px solid var(--color-border)
- Two variants:
  * Default: Grey background
  * Accent: Gold background with accent color
```

### Buttons
```css
Primary (--accent):
- Gold gradient background
- Dark text (#0d0f14)
- Shadow + glow effect
- Hover: Lift + enhance shadow

Ghost:
- Transparent background
- Gold border (border-strong)
- Backdrop blur (10px)
- Hover: Accent color + lift
```

---

## Interactive Features

### Scroll Animations
- **Intersection Observer**: Triggers at 15% visibility
- **Root margin**: `-100px` bottom offset
- **Effect**: Fade in + translate up (40px)
- **Target**: Sections, cards, headers

### Parallax
- **Hero section**: 0.5 speed multiplier
- **Subtle effect**: Only active within viewport height
- **Gradient orbs**: Float animation (20-25s infinite)

### Cursor Glow (Desktop Only)
- **Size**: 400px circle
- **Effect**: Radial gradient with gold tint (8% opacity)
- **Behavior**: Follows mouse, fades on leave
- **Breakpoint**: ≥1024px only

### Header Scroll
- **Trigger**: 100px scroll
- **Effect**: Enhanced background blur + shadow
- **Transition**: 300ms ease

---

## Responsive Breakpoints

```css
Desktop: Default styles
Tablet:  max-width: 1080px - Single column layouts
Mobile:  max-width: 900px  - Stack hero meta
Small:   max-width: 720px  - Mobile menu, reduced spacing
```

### Mobile Considerations
- Mobile menu: Slide-in from top with blur backdrop
- Reduced spacing scale
- Simplified animations (reduced motion)
- No cursor glow effect

---

## Accessibility

### Motion
- **Reduced motion**: All animations 1ms duration when preferred
- **Scroll fade**: Immediately visible with reduced motion
- **Critical transitions**: Never disable for focus indicators

### Contrast
- **Text on dark**: Minimum 7:1 ratio (AAA)
- **Gold accent**: Use gradient for better contrast
- **Interactive elements**: Clear focus states with 2px outline

### Focus States
- **Buttons**: 2px solid gold outline, 4px offset
- **Links**: Gold underline animation
- **Navigation**: Gradient underline on focus/hover

---

## Best Practices

### Do's ✓
- Use fluid spacing (clamp) for responsive scaling
- Stack shadows for premium depth
- Apply subtle animations (under 1 second)
- Maintain warm, elegant color relationships
- Use serif headings for sophistication
- Add gold accents sparingly for impact

### Don'ts ✗
- Avoid bright, saturated colors
- Don't overuse animations (keep subtle)
- Never use more than 3 accent colors in one view
- Don't create heavy shadows on mobile
- Avoid fast, jarring transitions
- Don't neglect accessibility features

---

## Implementation Notes

### Loading Strategy
1. Critical CSS inlined: Typography, layout, critical colors
2. Hero animations: Triggered on page load
3. Scroll animations: Lazy-loaded via Intersection Observer
4. Cursor glow: Desktop-only, load on window load

### Performance
- **CSS animations**: GPU-accelerated (transform, opacity)
- **JavaScript**: Debounced scroll handlers
- **Observers**: Unobserve after animation complete
- **Fonts**: Preconnect to Google Fonts, display=swap

### Browser Support
- Modern browsers (last 2 versions)
- Graceful degradation for older browsers
- Fallback fonts for system compatibility

---

## Version History

**v2.0.0** (Current)
- Premium redesign with Cormorant Garamond
- Champagne gold and burgundy color scheme
- Advanced scroll animations
- Cursor glow effect
- Enhanced interaction states

**v1.0.0**
- Initial blue/yellow theme
- Basic animations
- Standard components

---

*Last updated: November 2025*
*Design inspired by: Siena Dubai, premium Italian fine dining aesthetics*
