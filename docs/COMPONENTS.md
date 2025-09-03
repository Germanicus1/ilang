# Component Documentation

This document provides detailed documentation for all Astro components in the iLang project, including their purpose, props, usage examples, and implementation details.

## Component Overview

The iLang project uses a component-based architecture with reusable Astro components. All components are located in the `src/components/` directory and follow consistent naming conventions and patterns.

## Layout Components

### Layout.astro

The main layout wrapper that provides the overall page structure.

**Purpose**: Provides the HTML document structure, navigation, footer, and modal containers for all pages.

**Key Features**:

- Responsive viewport configuration
- Global CSS imports
- Navigation integration
- WhatsApp floating button for mobile
- Contact modal integration
- Copyright year auto-update

**Usage**:

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout>
  <!-- Page content goes here -->
</Layout>
```

**Dependencies**:

- `Navigation.astro`
- `astro-icon/components`
- `free-astro-components`
- Global styles (`../styles.css`)

## Navigation Components

### Navigation.astro

Responsive navigation bar with mobile menu support.

**Purpose**: Provides site navigation with responsive mobile menu and active link highlighting.

**Key Features**:

- Sticky positioning
- Mobile hamburger menu
- Backdrop blur overlay
- Active link highlighting with gradient
- WhatsApp integration for desktop
- Smooth animations and transitions

**Configuration**:

```javascript
const navLinks = [
  { name: "Inicio", url: "", style: "transparent" },
  { name: "Ruta de Aprendizaje", url: "paths", style: "transparent" },
  { name: "Precios", url: "#pricing", style: "transparent" },
  { name: "Sobre Mí", url: "about", style: "transparent" },
];
```

**Interactive Features**:

- Menu toggle with ARIA accessibility
- Body scroll lock when menu is open
- Backdrop click to close
- Auto-close on link selection

## Content Components

### Hero.astro

Landing page hero section with call-to-action.

**Purpose**: Main hero section featuring the primary value proposition and booking integration.

**Key Features**:

- Responsive two-column layout
- Fluid typography scaling
- Calendly integration for booking
- Gradient call-to-action buttons
- Responsive image handling
- Mobile-specific button placement

**Content**:

- Hero text: "Deutsch sprechen wie ein Profi."
- Descriptive paragraph about services
- Free trial booking button
- Professional hero image

**External Integrations**:

- Calendly widget for appointment booking
- Custom CSS for Calendly styling

### Welcome.astro

Introduction and welcome section.

**Purpose**: Provides a welcoming introduction to the German language learning services.

**Typical Content**:

- Personal introduction
- Teaching philosophy
- Service overview
- Credentials and experience

### Services.astro

Service offerings display component.

**Purpose**: Showcases the different services offered using data from `services.json`.

**Data Structure**:

```json
{
  "icon": "fe:rocket",
  "name": "Service Name",
  "content": "Service description"
}
```

**Key Features**:

- Icon integration with Astro Icon
- Grid layout for service cards
- Responsive design
- Data-driven content from JSON

**Services Displayed**:

- Levels A1-C2
- All ages support
- Online classes
- Individual sessions
- Personalized materials
- Flexible scheduling

### Levels.astro

Language proficiency levels information.

**Purpose**: Displays German language proficiency levels and learning paths.

**Data Source**: `src/data/levels.json`

**Features**:

- Visual level progression
- Detailed level descriptions
- Learning objectives for each level
- Progress indicators

### Pricing.astro

Pricing table with subscription options.

**Purpose**: Displays pricing tiers with features and call-to-action buttons.

**Data Source**: `src/data/pricing.json`

**Key Features**:

- Responsive grid layout (1 column mobile, 3 columns desktop)
- Featured plan highlighting with "Más Popular" badge
- Feature lists with checkmark icons
- Gradient styling for featured plans
- Calendly integration for booking
- Contact links for custom needs

**Pricing Card Structure**:

```json
{
  "id": "plan-id",
  "title": "Plan Name",
  "description": "Plan description",
  "price": "€XX/hora",
  "featured": true/false,
  "details": ["Feature 1", "Feature 2"],
  "button": {
    "text": "Button Text",
    "url": "#",
    "isHoverEffectEnabled": true
  }
}
```

**Interactive Elements**:

- Hover effects on cards
- Featured plan scaling and highlighting
- Integrated booking buttons

### Reviews.astro

Customer testimonials and reviews section.

**Purpose**: Displays customer testimonials to build trust and credibility.

**Data Source**: `src/data/reviews.json`

**Features**:

- Customer photos and names
- Star ratings
- Testimonial text
- Responsive card layout
- Social proof elements

## Utility Components

### Button.astro

Reusable button component with customizable styling.

**Purpose**: Provides consistent button styling across the application.

**Props**:

- `text` - Button text content
- `style` - Custom CSS classes
- `link` - URL for button link
- `onclick` - JavaScript onclick handler
- `isHoverEffectEnabled` - Enable/disable hover effects

**Usage**:

```astro
<Button
  text="Click Me"
  style="bg-blue-500 text-white"
  link="/contact"
  isHoverEffectEnabled={true}
/>
```

**Styling Options**:

- Gradient backgrounds
- Shadow effects
- Hover animations
- Responsive text sizing

### ContactMe.astro

Contact information display component.

**Purpose**: Shows contact details including WhatsApp and email.

**Features**:

- WhatsApp direct link integration
- Email contact information
- Responsive layout
- Icon integration

**Contact Methods**:

- WhatsApp: +34 673721006
- Email: peter+ilang@kerschbaumer.es

### Social.astro

Social media links and integration.

**Purpose**: Provides links to social media profiles and external platforms.

**Features**:

- Icon-based social links
- External link handling
- Responsive layout
- Hover effects

### WhatsApp.astro

WhatsApp integration component.

**Purpose**: Provides direct WhatsApp messaging functionality.

**Features**:

- Floating action button
- Direct WhatsApp link
- Mobile-optimized positioning
- WhatsApp icon integration

**Implementation**:

- Fixed positioning for mobile
- Direct link to WhatsApp with phone number
- Shadow effects and styling

### Footer.astro

Site footer component.

**Purpose**: Provides footer content and copyright information.

**Features**:

- Copyright notice
- Dynamic year updating
- Responsive layout
- Consistent styling

## Component Patterns

### Data Integration

Most components follow a consistent pattern for data integration:

1. **Import JSON data** at the top of the component
2. **Map over data arrays** to generate dynamic content
3. **Use consistent data structures** across similar components
4. **Provide fallbacks** for missing data

Example:

```astro
---
import data from "../data/services.json";
---

{
  data.map((service) => (
    <div class="service-card">
      <Icon name={service.icon} />
      <h3>{service.name}</h3>
      <p>{service.content}</p>
    </div>
  ))
}
```

### Responsive Design

All components implement responsive design using:

- **Tailwind CSS classes** for breakpoint-specific styling
- **Fluid typography** with `~/lg:~` syntax
- **Mobile-first approach** with progressive enhancement
- **Flexible layouts** using CSS Grid and Flexbox

### Icon Integration

Components use the Astro Icon system consistently:

```astro
---
import { Icon } from "astro-icon/components";
---

<Icon name="fe:check-circle-o" size="1.5rem" class="text-green-500" />
```

**Icon Libraries Used**:

- Feather Icons (`fe:`)
- Material Symbols (`material-symbols:`)
- Custom SVG icons

### Styling Conventions

Components follow consistent styling patterns:

- **CSS Custom Properties** for theme colors
- **Tailwind utility classes** for styling
- **Consistent spacing** using Tailwind spacing scale
- **Hover effects** and transitions for interactivity

## External Integrations

### Calendly Integration

Multiple components integrate with Calendly for appointment booking:

**Implementation**:

```html
<link
  href="https://assets.calendly.com/assets/external/widget.css"
  rel="stylesheet"
/>
<script
  src="https://assets.calendly.com/assets/external/widget.js"
  async
></script>

<a
  href="#"
  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/peter-kerschbaumer/clase-de-aleman'});return false;"
>
  Book Appointment
</a>
```

**Used In**:

- Hero.astro
- Pricing.astro
- Button.astro (via onclick prop)

### WhatsApp Integration

Direct WhatsApp messaging integration:

**Implementation**:

```html
<a href="https://wa.me/34673721006">Contact via WhatsApp</a>
```

**Used In**:

- Navigation.astro
- ContactMe.astro
- WhatsApp.astro
- Layout.astro (floating button)

## Accessibility Features

Components implement accessibility best practices:

- **ARIA labels** for interactive elements
- **Semantic HTML** structure
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Focus management** for modals and menus

## Performance Considerations

Components are optimized for performance:

- **Lazy loading** for images
- **Minimal JavaScript** usage
- **Static generation** by default
- \*\*Optimized assets
