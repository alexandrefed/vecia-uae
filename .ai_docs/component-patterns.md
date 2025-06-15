# Component Patterns Guide

## Component Structure
```
components/
├── common/        # Shared across all pages
│   ├── Button.astro
│   ├── Card.astro
│   └── Container.astro
├── sections/      # Page sections
│   ├── Hero.astro
│   ├── Features.astro
│   └── Pricing.astro
└── ui/            # UI elements
    ├── Navigation.astro
    ├── Footer.astro
    └── LanguageSwitcher.astro
```

## Base Component Pattern
```astro
---
// Button.astro
export interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  class: className,
  ...rest
} = Astro.props;

const Element = href ? 'a' : 'button';
---

<Element
  class:list={[
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    className
  ]}
  href={href}
  {...rest}
>
  <slot />
</Element>
```

## Section Component Pattern
```astro
---
// Hero.astro
import Container from '../common/Container.astro';
import Button from '../common/Button.astro';
import { t } from '../../lib/i18n';

export interface Props {
  locale: string;
}

const { locale } = Astro.props;
---

<section class="hero">
  <Container>
    <h1>{t(locale, 'hero.headline')}</h1>
    <p>{t(locale, 'hero.subheading')}</p>
    <div class="hero-actions">
      <Button href={t(locale, 'hero.cta_link')}>
        {t(locale, 'hero.cta_primary')}
      </Button>
    </div>
  </Container>
</section>
```

## Responsive Design Patterns
```css
/* Mobile-first approach */
.component {
  /* Mobile styles (default) */
  padding: 1rem;
  
  /* Tablet */
  @media (min-width: 768px) {
    padding: 2rem;
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    padding: 3rem;
  }
}
```

## Animation Patterns
```astro
---
// FadeIn.astro
---

<div class="fade-in">
  <slot />
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }
</style>
```

## Performance Patterns
1. Lazy load components below fold
2. Use Astro.slots to check before rendering
3. Minimize client-side JavaScript
4. Use CSS for animations when possible
5. Implement proper loading states

## Accessibility Patterns
1. Always include proper ARIA labels
2. Ensure keyboard navigation works
3. Test with screen readers
4. Maintain proper heading hierarchy
5. Use semantic HTML elements