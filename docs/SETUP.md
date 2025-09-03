# Setup Guide

This guide will help you set up the iLang project for local development.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

- **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git**
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Recommended Tools

- **VS Code** - Recommended code editor
  - Install the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
  - Install the [Tailwind CSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Germanicus1/iLang.git
cd iLang
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- Astro framework
- Tailwind CSS
- TypeScript
- Various UI components and utilities

### 3. Environment Setup

The project uses environment variables for configuration. Create a `.env` file in the root directory if needed:

```bash
# Optional: Base URL for deployment
BASEURL=
```

Note: The project currently doesn't require specific environment variables for local development.

## Development

### Start Development Server

```bash
npm run dev
```

This will:

- Start the Astro development server
- Enable hot module replacement
- Make the site available at `http://localhost:4321`

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the project for production         |
| `npm run preview` | Preview the production build locally     |
| `npm run astro`   | Run Astro CLI commands                   |

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make changes** to files in the `src/` directory
3. **View changes** automatically in your browser
4. **Test your changes** across different screen sizes
5. **Commit your changes** following the project's Git workflow

## Project Configuration

### Astro Configuration

The project is configured via `astro.config.mjs`:

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://ilang.kerschbaumer",
  base: "/",
});
```

### Tailwind Configuration

Tailwind is configured in `tailwind.config.mjs` with:

- Custom color scheme
- Fluid typography
- Extended font families
- Custom utilities

### TypeScript Configuration

The project uses Astro's strict TypeScript configuration:

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

## File Structure Overview

```
iLang/
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layout templates
│   ├── pages/          # Route pages (index.astro, about.astro, etc.)
│   ├── data/           # JSON data files
│   ├── assets/         # Images, icons, and other assets
│   └── styles.css      # Global styles
├── public/             # Static files served directly
├── docs/               # Documentation
└── dist/               # Built files (generated)
```

## Common Development Tasks

### Adding New Content

1. **Services**: Edit `src/data/services.json`
2. **Pricing**: Edit `src/data/pricing.json`
3. **Reviews**: Edit `src/data/reviews.json`
4. **Levels**: Edit `src/data/levels.json`

### Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Follow the existing naming convention (PascalCase)
3. Import and use in your pages or layouts

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. The file name becomes the route (e.g., `about.astro` → `/about`)
3. Use the main layout: `import Layout from '../layouts/Layout.astro'`

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow mobile-first responsive design
- Use the custom color scheme defined in the config
- Maintain consistent spacing and typography

## Troubleshooting

### Common Issues

**Port already in use**

```bash
# Kill process using port 4321
lsof -ti:4321 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors**

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**

```bash
# Check TypeScript configuration
npx astro check
```

**Build failures**

```bash
# Clear Astro cache
rm -rf .astro
npm run build
```

### Getting Help

1. Check the [Astro documentation](https://docs.astro.build/)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check existing [GitHub issues](https://github.com/Germanicus1/iLang/issues)
4. Create a new issue if needed

## Performance Tips

- Use Astro's component islands for interactive elements
- Optimize images in the `public/img/` directory
- Minimize custom CSS in favor of Tailwind utilities
- Test performance with `npm run build && npm run preview`

## Next Steps

After setup, you might want to:

- Read the [Architecture Overview](ARCHITECTURE.md)
- Explore the [Component Documentation](COMPONENTS.md)
- Review the [Contributing Guidelines](CONTRIBUTING.md)

---

_Need help? Check the [main documentation](README.md) or open an issue on GitHub._
