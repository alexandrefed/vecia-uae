# Vecia UAE - Development Guide

## Project Overview
Vecia UAE is the Middle East regional website for an AI automation agency. This **English-only website** focuses on scale and growth for visionary businesses in the UAE market.

## Architecture & Technology Stack
- **Framework**: Astro 4.x with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel with edge functions
- **Language**: Single locale (en-AE) - English only
- **Content Management**: File-based with Astro content collections
- **Forms**: Custom form handling with edge functions
- **Analytics**: Privacy-compliant analytics

## Design System
```css
/* Color Palette */
--color-primary: #5B8BFF;     /* Mid blue */
--color-secondary: #9B59F6;   /* Purple */
--color-accent: #3BB4FF;      /* Light blue */
--color-gradient: linear-gradient(135deg, #9B59F6, #3BB4FF);

/* Typography */
--font-body: 'Inter', sans-serif;
--font-heading: 'Space Grotesk', sans-serif;
```

## Key Features
1. **English-Only Focus**: Streamlined single-language experience
2. **UAE Market Optimization**: Regional content and pricing
3. **Component Architecture**: Reusable components for consistency
4. **SEO Optimized**: Targeted for UAE search markets
5. **Performance**: 90+ Lighthouse score target
6. **Accessibility**: WCAG 2.1 AA compliant
7. **Regional Compliance**: UAE data protection standards

## Project Structure
```
vecia-uae/
├── src/
│   ├── components/
│   │   ├── common/         # Shared components
│   │   ├── sections/       # Page sections
│   │   └── ui/            # UI elements
│   ├── content/
│   │   ├── blog/          # Blog posts
│   │   └── case-studies/  # Case studies
│   ├── data/
│   │   └── content.json   # Static content data
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── services/      # Service pages
│   │   ├── industries/    # Industry pages
│   │   └── about.astro    # About page
│   └── styles/
│       └── global.css
├── public/
│   ├── fonts/
│   └── images/
└── astro.config.mjs
```

## Content Management

### English Content Structure
Since this is an English-only site, all content is directly embedded without translation layers:

```typescript
// src/data/content.json
{
  "nav": {
    "home": "Home",
    "services": "Services",
    "industries": "Industries",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "AI-Powered Growth for Visionary Businesses",
    "subtitle": "Scale your operations with intelligent automation tailored for the UAE market"
  },
  "cta": {
    "primary": "Get Started",
    "secondary": "Learn More"
  }
}
```

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands
```bash
npm run dev          # Start dev server with HMR
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run check        # Type check TypeScript
```

### Environment Variables
```env
# .env.local (not committed)
PUBLIC_SITE_URL=https://vecia.ae
PUBLIC_API_ENDPOINT=https://api.vecia.ae
FORM_SECRET_KEY=your-secret-key
PUBLIC_REGION=UAE
```

## Content Guidelines

### Pricing (AED)
- **Starter**: AED 10,999/month
- **Growth**: AED 29,999/month
- **Scale**: AED 74,999/month
- Always display prices with "AED" prefix
- Include VAT information (5% UAE VAT)

### Writing Style
- Professional and growth-focused
- Emphasize scale, innovation, and transformation
- Use active voice
- Keep sentences clear and impactful
- Focus on ROI and business outcomes

## Component Development

### Creating New Components
```typescript
// src/components/MyComponent.astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="component">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  .component {
    @apply p-6 rounded-lg bg-white shadow-md;
  }
</style>
```

### Content Helpers
```typescript
// src/utils/content.ts
import contentData from '@/data/content.json';

export function getContent(path: string): string {
  return path.split('.').reduce((obj, key) => obj?.[key], contentData) || '';
}

// Usage in components
const heroTitle = getContent('hero.title');
```

## Safety Practices

### Security
- Validate all form inputs
- Sanitize user-generated content
- Use environment variables for secrets
- Implement CSRF protection
- Regular dependency updates
- Regional compliance checks

### Performance
- Lazy load images
- Optimize font loading
- Minimize JavaScript bundles
- Use Astro's static generation
- CDN optimization for Middle East
- Implement proper caching headers

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- RTL support ready (for future Arabic version)

## Testing Strategy

### Unit Tests
```typescript
// src/components/__tests__/Button.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/astro';
import Button from '../Button.astro';

describe('Button', () => {
  it('renders with correct text', async () => {
    const { getByText } = await render(Button, {
      props: { text: 'Get Started' }
    });
    expect(getByText('Get Started')).toBeTruthy();
  });
});
```

### E2E Testing
- Form submission validation
- Navigation flow testing
- Mobile responsiveness
- Performance metrics
- Regional loading times

## Deployment

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "regions": ["dxb1", "sin1"]
}
```

### Pre-deployment Checklist
- [ ] Run type checking
- [ ] Test all pages thoroughly
- [ ] Check responsive design
- [ ] Validate forms
- [ ] Test error pages
- [ ] Review SEO meta tags
- [ ] Verify analytics setup
- [ ] Check regional performance

## UAE-Specific Considerations

### Regional Optimization
- Use CDN edges in Dubai/Middle East
- Optimize for mobile-first (high mobile usage)
- Consider network conditions
- Test with regional devices

### Cultural Considerations
- Business-focused messaging
- Professional imagery
- Success stories from regional companies
- Emphasis on innovation and transformation

## Troubleshooting

### Common Issues
1. **Slow loading times**: Check CDN configuration for Middle East
2. **Form errors**: Verify API endpoints and CORS settings
3. **Build failures**: Clear cache and reinstall dependencies
4. **Font loading issues**: Ensure proper font subsetting

### Debug Mode
```typescript
// Enable debug logging
if (import.meta.env.DEV) {
  console.log('Environment:', import.meta.env.PUBLIC_REGION);
  console.log('API Endpoint:', import.meta.env.PUBLIC_API_ENDPOINT);
}
```

## Maintenance Tasks

### Regular Updates
- Review and update pricing quarterly
- Refresh case studies monthly
- Update blog content bi-weekly
- Monitor performance metrics
- Check for framework updates

### Content Updates
Since there's no language switching, content updates are straightforward:
1. Edit content directly in components
2. Update `content.json` for repeated strings
3. Build and deploy

## Resources
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [UAE Digital Government Guidelines](https://u.ae/en/about-the-uae/digital-uae)
- [Web Accessibility Standards](https://www.w3.org/WAI/WCAG21/quickref/)
- [Vercel Edge Functions](https://vercel.com/docs/functions)