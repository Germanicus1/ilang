# Architecture Overview

This document provides a comprehensive overview of the iLang project's technical architecture, design patterns, and structural organization.

## Technology Stack

### Core Framework

- **Astro 5.1.5** - Static site generator with component islands architecture
- **TypeScript** - Type-safe JavaScript with strict configuration
- **Vite** - Build tool and development server (via Astro)

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Fluid Tailwind** - Responsive typography and spacing
- **Custom CSS Variables** - Theme-based color system
- **Astro Icon** - SVG icon system with Iconify integration

### Fonts & Typography

- **Montserrat** - Primary heading font (variable and static)
- **Lato** - Body text font
- **Twinkle Star** - Decorative accent font

### External Libraries

- **Flowbite** - UI components and utilities
- **HammerJS** - Touch gesture recognition
- **Feather Icons** - Additional icon set
- **Free Astro Components** - Modal and UI components

## Project Architecture

### File Structure

```
iLang/
├── 📁 docs/                    # Documentation
├── 📁 public/                  # Static assets (served directly)
│   ├── 📁 img/                # Images and photos
│   ├── 📁 js/                 # Client-side JavaScript
│   ├── favicon.svg            # Site favicon
│   └── avatar*.jpg            # Profile images
├── 📁 src/                     # Source code
│   ├── 📁 assets/             # Build-time assets
│   ├── 📁 components/         # Astro components
│   ├── 📁 data/               # JSON data files
│   ├── 📁 icons/              # Custom SVG icons
│   ├── 📁 layouts/            # Page layout templates
│   ├── 📁 pages/              # Route pages
│   └── styles.css             # Global styles
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.js          # PostCSS configuration
├── .prettierrc                # Code formatting rules
└── package.json               # Dependencies and scripts
```

### Component Architecture

The project follows Astro's component-based architecture with clear separation of concerns:

#### Layout Components

- **`Layout.astro`** - Main page wrapper with navigation, footer, and modal

#### UI Components

- **`Navigation.astro`** - Site navigation with mobile menu
- **`Hero.astro`** - Landing page hero section
- **`Welcome.astro`** - Introduction section
- **`Services.astro`** - Service offerings display
- **`Levels.astro`** - Language level information
- **`Pricing.astro`** - Pricing table
- **`Reviews.astro`** - Customer testimonials
- **`ContactMe.astro`** - Contact information
- **`Footer.astro`** - Site footer
- **`Social.astro`** - Social media links
- **`WhatsApp.astro`** - WhatsApp integration
- **`Button.astro`** - Reusable button component

### Data Management

#### JSON-Based Content System

The project uses a JSON-based content management approach:

```
src/data/
├── services.json    # Service offerings
├── pricing.json     # Pricing tiers
├── reviews.json     # Customer testimonials
└── levels.json      # Language proficiency levels
```

#### Data Structure Patterns

- **Consistent Schema**: All data files follow predictable structures
- **Icon Integration**: Services and features include icon references
- **Localization Ready**: Content structured for easy translation
- **Type Safety**: JSON schemas align with TypeScript interfaces

### Routing System

Astro's file-based routing system:

```
src/pages/
├── index.astro      # Homepage (/)
├── home.astro       # Alternative home route (/home)
├── about.astro      # About page (/about)
├── blog.astro       # Blog page (/blog)
└── paths.astro      # Learning paths (/paths)
```

### Styling Architecture

#### CSS Custom Properties

Theme-based color system using CSS variables:

```css
:root {
  --bkg: 210 40% 98%; /* Background */
  --txt-header: 210 40% 12%; /* Header text */
  --txt-body: 210 10% 40%; /* Body text */
  --accent1: 45 100% 51%; /* Primary accent */
  --accent2: 210 40% 90%; /* Secondary accent */
}
```

#### Tailwind Configuration

- **Fluid Typography**: Responsive text scaling
- **Custom Colors**: HSL-based color system
- **Extended Fonts**: Custom font family definitions
- **Responsive Design**: Mobile-first breakpoints

### Build System

#### Astro Configuration

```javascript
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://ilang.kerschbaumer",
  base: "/",
});
```

#### Build Process

1. **TypeScript Compilation** - Type checking and compilation
2. **Component Processing** - Astro component compilation
3. **CSS Processing** - Tailwind compilation and optimization
4. **Asset Optimization** - Image and asset processing
5. **Static Generation** - HTML generation for all routes

## Design Patterns

### Component Composition

- **Single Responsibility** - Each component has a focused purpose
- **Prop-Based Configuration** - Components accept configuration via props
- **Slot-Based Content** - Flexible content insertion using Astro slots

### Data Flow

- **Static Data** - JSON files provide static content
- **Build-Time Processing** - Data processed during build
- **Client-Side Hydration** - Minimal JavaScript for interactions

### Responsive Design

- **Mobile-First** - Design starts with mobile constraints
- **Progressive Enhancement** - Features added for larger screens
- **Fluid Typography** - Text scales smoothly across devices
- **Flexible Layouts** - CSS Grid and Flexbox for adaptability

## Performance Optimizations

### Static Generation

- **Zero JavaScript by Default** - Pure HTML/CSS output
- **Component Islands** - JavaScript only where needed
- **Optimized Assets** - Automatic image and asset optimization

### Loading Strategies

- **Lazy Loading** - Images load as needed
- **Critical CSS** - Above-the-fold styles inlined
- **Font Loading** - Optimized web font delivery

### Bundle Optimization

- **Tree Shaking** - Unused code elimination
- **Code Splitting** - Separate bundles for different features
- **Asset Compression** - Minified CSS and JavaScript

## Integration Points

### External Services

- **WhatsApp API** - Direct messaging integration
- **Email Services** - Contact form handling
- **Font Services** - Google Fonts and Fontsource integration

### Icon System

- **Astro Icon** - Primary icon system
- **Iconify** - Large icon library access
- **Custom SVGs** - Project-specific icons
- **Feather Icons** - Additional icon set

## Development Workflow

### Code Organization

- **Component-First** - UI built from reusable components
- **Data-Driven** - Content separated from presentation
- **Type-Safe** - TypeScript throughout the codebase

### Build Pipeline

1. **Development** - Hot reload with Astro dev server
2. **Type Checking** - Continuous TypeScript validation
3. **Linting** - Code quality enforcement
4. **Formatting** - Prettier code formatting
5. **Building** - Production-ready static site generation

### Quality Assurance

- **TypeScript Strict Mode** - Maximum type safety
- **Prettier Configuration** - Consistent code formatting
- **Component Testing** - Manual testing workflow
- **Performance Monitoring** - Build-time performance checks

## Scalability Considerations

### Content Management

- **JSON Schema Evolution** - Backward-compatible data changes
- **Component Versioning** - Stable component interfaces
- **Asset Organization** - Scalable file structure

### Performance Scaling

- **Static Hosting** - CDN-friendly static files
- **Caching Strategies** - Browser and CDN caching
- **Image Optimization** - Responsive image delivery

### Development Scaling

- **Modular Architecture** - Independent component development
- **Clear Interfaces** - Well-defined component APIs
- **Documentation** - Comprehensive development guides

---

_For implementation details, see the [Component Documentation](COMPONENTS.md) and [Setup Guide](SETUP.md)._
