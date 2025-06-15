// Configuration for Vecia Switzerland
export const config = {
  site: {
    name: 'Vecia Switzerland',
    url: 'https://vecia.ch',
    defaultLocale: 'fr-ch',
    locales: ['fr-ch', 'en-ch'],
  },
  deployment: {
    projectName: 'vecia-switzerland',
    region: 'fra1', // Frankfurt (closest to Switzerland)
  },
  content: {
    tagline: {
      'fr-ch': 'AI agents built for precision, privacy & performance.',
      'en-ch': 'AI agents built for precision, privacy & performance.',
    },
    currency: 'CHF',
    pricing: {
      starter: { setup: '9 500', monthly: '1 100' },
      growth: { setup: '13 500', monthly: '1 350' },
      scale: { setup: '18 500', monthly: '1 700' },
    },
  },
  features: {
    multilingual: true,
    languageSwitcher: true,
    gdprBanner: true,
    swissPrivacyBadge: true,
  },
  analytics: {
    gaId: 'G-SWISS123', // Replace with actual
    region: 'CH',
  },
};