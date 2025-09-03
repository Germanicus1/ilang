# Data Management Documentation

This document describes the data structures, content management system, and JSON schemas used in the iLang project.

## Overview

The iLang project uses a JSON-based content management system that separates content from presentation. All data files are located in the `src/data/` directory and follow consistent schemas for easy maintenance and updates.

## Data Files Structure

```
src/data/
├── services.json    # Service offerings and features
├── pricing.json     # Pricing plans and tiers
├── reviews.json     # Customer testimonials
└── levels.json      # German language proficiency levels
```

## Services Data (services.json)

Contains information about the German language learning services offered.

### Schema

```json
[
  {
    "icon": "string", // Icon identifier from Astro Icon
    "name": "string", // Service name/title
    "content": "string" // Service description
  }
]
```

### Current Services

1. **Niveles A1-C2**

   - Icon: `fe:rocket`
   - Description: Learn German from scratch or perfect skills to professional level

2. **Todas las edades**

   - Icon: `fe:calendar`
   - Description: Classes for all ages from ESO students to adults

3. **Online**

   - Icon: `material-symbols:nest-remote-comfort-sensor-outline-rounded`
   - Description: Comfortable and accessible classes from anywhere

4. **Clases Individuales**

   - Icon: `material-symbols:frame-person-mic-rounded`
   - Description: Personalized approach adapted to individual needs

5. **Material Personalizado**

   - Icon: `material-symbols:inbox-customize-rounded`
   - Description: Custom materials designed for specific objectives

6. **Horario Flexible**
   - Icon: `fe:clock`
   - Description: Schedule classes at convenient times with maximum flexibility

### Usage Example

```astro
---
import services from "../data/services.json";
import { Icon } from "astro-icon/components";
---

{
  services.map((service) => (
    <div class="service-card">
      <Icon name={service.icon} size="2rem" />
      <h3>{service.name}</h3>
      <p>{service.content}</p>
    </div>
  ))
}
```

## Pricing Data (pricing.json)

Contains pricing plans, features, and call-to-action information.

### Schema

```json
[
  {
    "id": "string",           // Unique identifier for the plan
    "title": "string",        // Plan name/title
    "description": "string",  // Brief plan description
    "price": "string",        // Price display (e.g., "€25/hora")
    "featured": boolean,      // Whether this is the featured/popular plan
    "details": ["string"],    // Array of plan features/benefits
    "button": {
      "text": "string",                    // Button text
      "url": "string",                     // Button URL
      "isHoverEffectEnabled": boolean      // Enable hover effects
    }
  }
]
```

### Current Pricing Plans

1. **Plan Básico**

   - ID: `basic`
   - Price: €25/hora
   - Features: Individual classes, flexible schedule, basic materials
   - Not featured

2. **Plan Intensivo** (Featured)

   - ID: `intensive`
   - Price: €22/hora
   - Features: Individual classes, priority booking, personalized materials, progress tracking
   - Featured plan with special styling

3. **Plan Premium**
   - ID: `premium`
   - Price: €30/hora
   - Features: All intensive features plus exam preparation, business German
   - Not featured

### Featured Plan Styling

The featured plan receives special treatment:

- Purple border and badge
- "Más Popular" label
- Gradient button styling
- Scale transformation on desktop
- Priority positioning in grid

### Usage Example

```astro
---
import pricing from "../data/pricing.json";
---

{
  pricing.map((plan) => (
    <div class={`pricing-card ${plan.featured ? "featured" : ""}`}>
      <h3>{plan.title}</h3>
      <p>{plan.description}</p>
      <div class="price">{plan.price}</div>
      <ul>
        {plan.details.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <button>{plan.button.text}</button>
    </div>
  ))
}
```

## Reviews Data (reviews.json)

Contains customer testimonials and reviews for social proof.

### Schema

```json
[
  {
    "id": "string",           // Unique identifier
    "name": "string",         // Customer name
    "avatar": "string",       // Path to customer photo
    "rating": number,         // Star rating (1-5)
    "review": "string",       // Testimonial text
    "location": "string",     // Customer location (optional)
    "course": "string"        // Course taken (optional)
  }
]
```

### Example Structure

```json
[
  {
    "id": "review-1",
    "name": "María González",
    "avatar": "/avatar01.jpg",
    "rating": 5,
    "review": "Las clases con Peter son excelentes. He mejorado mucho mi alemán en poco tiempo.",
    "location": "Madrid, España",
    "course": "A2 to B1"
  }
]
```

### Usage Considerations

- **Avatar Images**: Store in `public/` directory for direct access
- **Rating Display**: Use star icons or numeric display
- **Responsive Layout**: Consider card-based layout for multiple reviews
- **Social Proof**: Include location and course information for credibility

## Levels Data (levels.json)

Contains information about German language proficiency levels and learning paths.

### Schema

```json
[
  {
    "level": "string", // Level identifier (A1, A2, B1, etc.)
    "name": "string", // Level name/title
    "description": "string", // Level description
    "skills": ["string"], // Array of skills learned at this level
    "duration": "string", // Estimated learning duration
    "objectives": ["string"], // Learning objectives
    "color": "string" // Color theme for visual representation
  }
]
```

### CEFR Levels Structure

The data follows the Common European Framework of Reference (CEFR) for languages:

1. **A1 - Beginner**

   - Basic phrases and expressions
   - Simple interactions
   - Personal information

2. **A2 - Elementary**

   - Routine tasks
   - Simple descriptions
   - Immediate needs

3. **B1 - Intermediate**

   - Main points of clear input
   - Travel situations
   - Personal experiences

4. **B2 - Upper Intermediate**

   - Complex texts
   - Fluent interaction
   - Detailed explanations

5. **C1 - Advanced**

   - Demanding texts
   - Flexible language use
   - Academic/professional contexts

6. **C2 - Proficiency**
   - Native-like comprehension
   - Precise expression
   - Complex situations

### Usage Example

```astro
---
import levels from "../data/levels.json";
---

<div class="levels-grid">
  {
    levels.map((level) => (
      <div class="level-card" style={`border-color: ${level.color}`}>
        <h3>
          {level.level} - {level.name}
        </h3>
        <p>{level.description}</p>
        <ul>
          {level.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
        <div class="duration">Duration: {level.duration}</div>
      </div>
    ))
  }
</div>
```

## Content Management Guidelines

### Adding New Content

#### Services

1. Add new service object to `services.json`
2. Include appropriate icon from available icon libraries
3. Write clear, concise description in Spanish
4. Test icon rendering in component

#### Pricing Plans

1. Add new plan object to `pricing.json`
2. Set unique ID for the plan
3. Configure featured status if needed
4. Update button configuration
5. Test responsive layout with new plan

#### Reviews

1. Add customer photo to `public/` directory
2. Create review object in `reviews.json`
3. Include rating and detailed testimonial
4. Add location and course information for credibility

#### Language Levels

1. Follow CEFR standard structure
2. Include comprehensive skill descriptions
3. Set appropriate color theme
4. Define realistic duration estimates

### Content Guidelines

#### Writing Style

- **Language**: Spanish (target audience)
- **Tone**: Professional but approachable
- **Length**: Concise and scannable
- **Keywords**: Include relevant German learning terms

#### Image Requirements

- **Format**: JPG or PNG
- **Size**: Optimized for web (< 500KB)
- **Dimensions**: Consistent aspect ratios
- **Location**: Store in `public/` directory

#### Icon Selection

- **Libraries**: Feather Icons (`fe:`), Material Symbols (`material-symbols:`)
- **Style**: Consistent visual style across components
- **Size**: Scalable and readable at different sizes
- **Meaning**: Clear visual representation of content

### Data Validation

#### Required Fields

- All schema fields marked as required must be present
- String fields should not be empty
- Arrays should contain at least one item

#### Data Types

- Strings: Use proper Spanish characters and encoding
- Numbers: Use appropriate numeric types for ratings, prices
- Booleans: Use true/false for featured flags
- Arrays: Ensure consistent item structure

#### Content Quality

- **Spelling**: Use proper Spanish spelling and grammar
- **Consistency**: Maintain consistent terminology
- **Accuracy**: Ensure all information is current and correct
- **Completeness**: Include all required information

### Localization Considerations

The current data structure supports future localization:

#### Preparation for Multi-language

- **Key-based Structure**: Consider using keys instead of direct text
- **Language Files**: Separate content by language
- **Fallbacks**: Provide default language fallbacks
- **Context**: Include context information for translators

#### Current Spanish Content

- **Target Market**: Spanish-speaking students in Spain
- **Cultural Context**: References to Spanish education system (ESO)
- **Local Information**: Spanish phone numbers and locations

### Performance Considerations

#### Data Size

- **JSON Files**: Keep individual files under 50KB
- **Images**: Optimize avatar and service images
- **Caching**: Leverage static generation for data

#### Loading Strategy

- **Build Time**: Data loaded during build process
- **Static Generation**: No runtime data fetching
- **Optimization**: Automatic optimization by Astro

### Backup and Version Control

#### Git Management

- **Track Changes**: All data files in version control
- **Commit Messages**: Clear descriptions of content changes
- **Branching**: Use feature branches for major content updates

#### Content Backup

- **Regular Commits**: Frequent commits for content changes
- **Documentation**: Document major content updates
- **Recovery**: Easy rollback through Git history

---

_For implementation details, see the [Component Documentation](COMPONENTS.md) and [Architecture Overview](ARCHITECTURE.md)._
