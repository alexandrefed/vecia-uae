# Astro Reference Guide

## Project Structure
```
src/
├── components/     # Reusable UI components
├── content/        # Markdown/MDX content collections
├── layouts/        # Page layouts
├── pages/          # File-based routing
├── styles/         # Global styles
└── utils/          # Helper functions
```

## Key Patterns

### Component Creation
```astro
---
// Component logic (TypeScript)
export interface Props {
  title: string;
  variant?: 'primary' | 'secondary';
}

const { title, variant = 'primary' } = Astro.props;
---

<!-- Component template -->
<div class={`component ${variant}`}>
  <h2>{title}</h2>
  <slot />
</div>

<style>
  /* Scoped styles */
  .component {
    /* styles */
  }
</style>
```

### i18n Implementation
```astro
---
import { getLocale } from '../lib/i18n';
import translations from '../content/translations.json';

const locale = getLocale(Astro.url);
const t = translations[locale];
---
```

### SEO Meta Tags
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const seo = {
  title: 'Page Title',
  description: 'Page description',
  image: '/og-image.jpg',
  canonical: Astro.url.href
};
---

<BaseLayout {seo}>
  <!-- Page content -->
</BaseLayout>
```

## Performance Best Practices
1. Use `loading="lazy"` for images below fold
2. Implement `<ViewTransitions />` for smooth navigation
3. Use Astro Image component for optimization
4. Minimize client-side JavaScript
5. Leverage Astro's partial hydration

## Common Commands
```bash
# Add integrations
npx astro add tailwind
npx astro add vercel
npx astro add sitemap

# Create new page
# Simply create file in src/pages/

# Build for production
npm run build
```