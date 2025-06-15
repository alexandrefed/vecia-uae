# i18n Implementation Guide

## Supported Locales
- **fr-FR**: French (France) - Default
- **fr-CH**: French (Switzerland)
- **en-AE**: English (UAE)

## URL Structure
```
/                  → Redirects to /fr-fr
/fr-fr/            → French (France) homepage
/fr-ch/            → French (Switzerland) homepage
/en-ae/            → English (UAE) homepage
/[locale]/services → Localized services page
```

## Translation Structure
```typescript
// src/lib/i18n/translations.ts
export const translations = {
  'fr-FR': {
    nav: {
      home: 'Accueil',
      solutions: 'Solutions',
      industries: 'Industries',
      process: 'Processus',
      pricing: 'Tarifs',
      resources: 'Ressources',
      about: 'À propos',
      contact: 'Contact'
    },
    hero: {
      headline: 'Débloquez 30% de capacité en plus avec des agents IA formés sur votre domaine',
      subheading: 'Vecia conçoit, déploie et maintient des stacks d\'automatisation...',
      cta_primary: 'Réserver un appel découverte',
      cta_secondary: 'Télécharger le guide ROI'
    },
    tagline: 'L\'intelligence artificielle qui libère votre équipe des tâches répétitives.'
  },
  'fr-CH': {
    // Swiss French variations
    tagline: 'AI agents built for precision, privacy & performance.'
  },
  'en-AE': {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      industries: 'Industries',
      process: 'Process',
      pricing: 'Pricing',
      resources: 'Resources',
      about: 'About Us',
      contact: 'Contact'
    },
    hero: {
      headline: 'Unlock 30% more capacity with domain-trained AI agents',
      subheading: 'Vecia designs, deploys and supports automation stacks...',
      cta_primary: 'Book a 30-min discovery call',
      cta_secondary: 'Download the 2-page ROI guide'
    },
    tagline: 'Scale fast with AI—data-driven growth for visionary businesses.'
  }
};
```

## Helper Functions
```typescript
// src/lib/i18n/utils.ts
export function getLocale(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  return isValidLocale(locale) ? locale : 'fr-fr';
}

export function localizedUrl(path: string, locale: string): string {
  return `/${locale}${path}`;
}

export function getHreflangLinks(currentPath: string) {
  return locales.map(locale => ({
    hreflang: locale,
    href: localizedUrl(currentPath, locale)
  }));
}
```

## Component Usage
```astro
---
import { getLocale, t } from '../lib/i18n';
const locale = getLocale(Astro.url);
---

<h1>{t(locale, 'hero.headline')}</h1>
```

## SEO Considerations
1. Implement hreflang tags
2. Use canonical URLs
3. Localize meta descriptions
4. Create locale-specific sitemaps
5. Implement language switcher

## Regional Adaptations
- **France**: GDPR compliance, French grants info
- **Switzerland**: Privacy emphasis, CHF pricing
- **UAE**: Arabic support ready, AED/USD pricing