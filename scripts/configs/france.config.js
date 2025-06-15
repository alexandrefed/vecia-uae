// Configuration for Vecia France
export const config = {
  site: {
    name: 'Vecia France',
    url: 'https://vecia.fr',
    defaultLocale: 'fr-fr',
    locales: ['fr-fr'],
  },
  deployment: {
    projectName: 'vecia-france',
    region: 'cdg1', // Paris
  },
  content: {
    tagline: "L'intelligence artificielle qui libère votre équipe des tâches répétitives.",
    currency: '€',
    pricing: {
      starter: { setup: '8 500', monthly: '1 000' },
      growth: { setup: '12 000', monthly: '1 200' },
      scale: { setup: '16 500', monthly: '1 500' },
    },
  },
  features: {
    multilingual: false,
    languageSwitcher: false,
    gdprBanner: true,
  },
  analytics: {
    gaId: 'G-FRANCE123', // Replace with actual
    region: 'EU',
  },
};