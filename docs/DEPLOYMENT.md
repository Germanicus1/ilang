# Deployment Guide

This guide covers building, deploying, and hosting the iLang project in production environments.

## Build Process

### Production Build

To create a production-ready build:

```bash
npm run build
```

This command:

- Compiles TypeScript to JavaScript
- Processes and optimizes Astro components
- Compiles and minifies Tailwind CSS
- Optimizes images and assets
- Generates static HTML files
- Creates the `dist/` directory with production files

### Build Output

The build process generates:

```
dist/
├── _astro/           # Optimized CSS and JS files
├── assets/           # Processed images and assets
├── index.html        # Homepage
├── about/            # About page directory
│   └── index.html
├── paths/            # Learning paths page
│   └── index.html
├── blog/             # Blog page directory
│   └── index.html
└── favicon.svg       # Site favicon
```

### Preview Build

To preview the production build locally:

```bash
npm run preview
```

This starts a local server serving the built files from `dist/` directory.

## Deployment Options

### Static Hosting Platforms

The iLang project generates static files, making it compatible with various hosting platforms:

#### Netlify

1. **Connect Repository**

   - Link your GitHub repository to Netlify
   - Configure build settings

2. **Build Configuration**

   ```toml
   # netlify.toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     NODE_VERSION = "18"
   ```

3. **Deploy Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18+

#### Vercel

1. **Import Project**

   - Import from GitHub repository
   - Vercel auto-detects Astro configuration

2. **Configuration**

   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install",
     "framework": "astro"
   }
   ```

3. **Environment Variables**
   - Set `BASEURL` if using a custom base path
   - Configure any other environment variables

#### GitHub Pages

1. **GitHub Actions Workflow**

   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: "18"
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v1
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/deploy-pages@v1
           id: deployment
   ```

2. **Repository Settings**
   - Enable GitHub Pages
   - Set source to "GitHub Actions"
   - Configure custom domain if needed

#### Cloudflare Pages

1. **Connect Repository**

   - Link GitHub repository to Cloudflare Pages
   - Configure build settings

2. **Build Configuration**

   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (or subdirectory if applicable)

3. **Environment Variables**
   - Set Node.js version: `18` or higher
   - Configure any custom environment variables

### Traditional Web Hosting

For traditional web hosts (cPanel, FTP, etc.):

1. **Build Locally**

   ```bash
   npm run build
   ```

2. **Upload Files**

   - Upload contents of `dist/` directory to web root
   - Ensure all files and directories are transferred
   - Maintain directory structure

3. **Server Configuration**
   - Configure server to serve `index.html` for directory requests
   - Set up proper MIME types for assets
   - Enable gzip compression if available

## Domain Configuration

### Custom Domain Setup

#### DNS Configuration

```
Type    Name    Value
A       @       [Your hosting IP]
CNAME   www     [Your hosting domain]
```

#### SSL Certificate

- Most modern hosting platforms provide automatic SSL
- Ensure HTTPS is enabled and HTTP redirects to HTTPS
- Verify SSL certificate is valid and trusted

### Base URL Configuration

If deploying to a subdirectory, update `astro.config.mjs`:

```javascript
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://yourdomain.com",
  base: "/subdirectory", // If deploying to a subdirectory
});
```

## Performance Optimization

### Build Optimizations

#### Image Optimization

- Images are automatically optimized during build
- Use appropriate formats (WebP, AVIF when supported)
- Implement lazy loading for images

#### CSS Optimization

- Tailwind CSS is purged and minified
- Critical CSS is inlined
- Unused styles are removed

#### JavaScript Optimization

- Minimal JavaScript by default (Astro's strength)
- Code splitting for any client-side JavaScript
- Tree shaking removes unused code

### CDN Configuration

#### Cloudflare

```javascript
// Recommended cache settings
const cacheSettings = {
  "*.html": "2 hours",
  "*.css": "1 year",
  "*.js": "1 year",
  "*.png,*.jpg,*.jpeg,*.gif,*.webp": "1 year",
  "*.svg": "1 month",
  "*.ico": "1 year",
};
```

#### Other CDNs

- Configure appropriate cache headers
- Enable compression (gzip/brotli)
- Set up proper cache invalidation

## Environment Variables

### Production Environment Variables

```bash
# .env.production
BASEURL=https://ilang.kerschbaumer.es
NODE_ENV=production
```

### Build-time Variables

Variables available during build:

```javascript
// Access in Astro components
const baseUrl = import.meta.env.BASE_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
```

## Monitoring and Analytics

### Performance Monitoring

#### Core Web Vitals

- Monitor Largest Contentful Paint (LCP)
- Track First Input Delay (FID)
- Measure Cumulative Layout Shift (CLS)

#### Tools

- Google PageSpeed Insights
- Lighthouse CI
- WebPageTest
- GTmetrix

### Error Monitoring

#### Client-side Errors

```javascript
// Add to Layout.astro if needed
window.addEventListener("error", (event) => {
  // Log errors to monitoring service
  console.error("Client error:", event.error);
});
```

#### Build Monitoring

- Monitor build success/failure
- Track build times
- Alert on build issues

## Backup and Recovery

### Automated Backups

#### Git-based Backup

- All source code in version control
- Regular commits ensure code backup
- Multiple remote repositories for redundancy

#### Content Backup

- JSON data files backed up with code
- Image assets in version control
- Regular repository backups

### Disaster Recovery

#### Recovery Process

1. Clone repository from backup
2. Install dependencies: `npm install`
3. Build project: `npm run build`
4. Deploy to hosting platform
5. Configure domain and SSL

#### Recovery Time Objective (RTO)

- Target: < 1 hour for full recovery
- Automated deployment pipelines reduce recovery time
- Pre-configured hosting environments

## Security Considerations

### HTTPS Configuration

- Force HTTPS redirects
- Use HSTS headers
- Implement proper SSL/TLS configuration

### Content Security Policy

```html
<!-- Add to Layout.astro head section -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://assets.calendly.com; 
               style-src 'self' 'unsafe-inline' https://assets.calendly.com;
               img-src 'self' data: https:;
               connect-src 'self' https://api.calendly.com;"
/>
```

### Security Headers

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Troubleshooting

### Common Build Issues

#### Node.js Version Mismatch

```bash
# Check Node version
node --version

# Use correct version
nvm use 18  # or appropriate version
```

#### Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Failures

```bash
# Check for TypeScript errors
npx astro check

# Clear Astro cache
rm -rf .astro
npm run build
```

### Deployment Issues

#### 404 Errors

- Verify all routes are properly built
- Check server configuration for SPA routing
- Ensure `index.html` files are in correct directories

#### Asset Loading Issues

- Verify base URL configuration
- Check asset paths in built files
- Ensure CDN configuration is correct

#### Performance Issues

- Analyze bundle size
- Check image optimization
- Verify CDN cache settings

## Maintenance

### Regular Updates

#### Dependencies

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update major versions carefully
npm install package@latest
```

#### Security Updates

- Monitor security advisories
- Update dependencies with security patches
- Regular security audits: `npm audit`

### Performance Monitoring

- Regular performance audits
- Monitor Core Web Vitals
- Track user experience metrics
- Optimize based on real user data

### Content Updates

- Regular content reviews
- Update pricing and service information
- Refresh testimonials and reviews
- Keep contact information current

---

_For development setup, see the [Setup Guide](SETUP.md). For architecture details, see the [Architecture Overview](ARCHITECTURE.md)._
