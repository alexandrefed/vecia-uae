// Configuration for Vecia UAE
export const config = {
  site: {
    name: 'Vecia UAE',
    url: 'https://vecia.ae',
    defaultLocale: 'en-ae',
    locales: ['en-ae'],
  },
  deployment: {
    projectName: 'vecia-uae',
    region: 'sin1', // Singapore (closest to UAE with good connectivity)
  },
  content: {
    tagline: 'Scale fast with AI—data-driven growth for visionary businesses.',
    currency: 'AED',
    currencySecondary: 'USD',
    pricing: {
      starter: { setup: '31,200', monthly: '3,670' },
      growth: { setup: '44,000', monthly: '4,400' },
      scale: { setup: '60,500', monthly: '5,500' },
    },
  },
  features: {
    multilingual: false,
    languageSwitcher: false,
    arabicReady: true,
    gdprBanner: false, // Different privacy laws
    cookieConsent: true,
  },
  analytics: {
    gaId: 'G-UAE123', // Replace with actual
    region: 'ME',
  },
};