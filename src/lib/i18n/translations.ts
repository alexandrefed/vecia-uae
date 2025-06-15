import type { Translation, Locale } from './types';

export const translations: Record<Locale, Translation> = {
  'fr-fr': {
    nav: {
      home: 'Accueil',
      solutions: 'Solutions',
      industries: 'Industries',
      process: 'Processus',
      pricing: 'Tarifs',
      resources: 'Ressources',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      headline: 'Débloquez 30% de capacité en plus avec des agents IA formés sur votre domaine',
      subheading: 'Vecia conçoit, déploie et maintient des stacks d\'automatisation qui connectent vos outils, déclenchent des actions et transmettent des résultats raffinés à votre équipe—hébergés en toute sécurité dans l\'UE.',
      cta_primary: 'Réserver un appel découverte de 30 min',
      cta_secondary: 'Télécharger le guide ROI (2 pages)',
      cta_link: 'https://calendly.com/vecia/decouverte',
    },
    tagline: 'L\'intelligence artificielle qui libère votre équipe des tâches répétitives.',
    solutions: {
      title: 'Nos Solutions',
      dataOps: {
        title: 'Automatisation Data-Ops',
        description: 'Shopify ⇄ Excel ⇄ BI en temps réel – supprimez les goulots d\'étranglement administratifs, unifiez vos KPIs.',
      },
      marketing: {
        title: 'Suite Marketing Agentique',
        description: 'Contenu alimenté par LLM, segmentation et orchestration multicanale – augmentez vos revenus récurrents.',
      },
      trading: {
        title: 'Intelligence Décisionnelle pour Trading & Finance',
        description: 'Agents RAG sur données CTRM/ERP – insights instantanés, alertes de risque.',
      },
      custom: {
        title: 'Intégrations Personnalisées & Conformité',
        description: 'Hébergement conforme RGPD, modèles de langage français et arabe, options on-premise pour données sensibles.',
      },
    },
    industries: {
      title: 'Industries',
      retail: {
        title: 'Retail & eCommerce',
        description: 'Multi-boutiques Shopify, prévision des stocks, chat service client.',
      },
      sme: {
        title: 'Opérations PME & CRM',
        description: 'Assistants CRM low-code, automatisation des devis, triage des contrats.',
      },
      trading: {
        title: 'Trading de Matières Premières & Finance',
        description: 'IA sur documents de trading, réconciliation de positions, tableau de bord P&L en direct.',
      },
    },
    process: {
      title: 'Notre Processus en 4 Étapes',
      subtitle: 'De l\'idée à l\'impact en 30 jours',
      steps: {
        discovery: {
          title: 'Atelier Découverte (FigJam live)',
          description: 'Cartographier les points douloureux, définir les quick wins.',
        },
        sprint: {
          title: 'Sprint Build (2 semaines)',
          description: 'Livraison MVP agent; checkpoint quotidien Slack/Teams.',
        },
        measure: {
          title: 'Mesurer & Itérer',
          description: 'Tableau de bord KPI, tests A/B, revue ROI à la semaine 6.',
        },
        support: {
          title: 'Support & Échelle',
          description: 'Forfait pour monitoring, nouvelles fonctionnalités, onboarding personnel.',
        },
      },
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Des forfaits adaptés à votre croissance',
      currency: '€',
      period: '/mois',
      starter: {
        name: 'Starter',
        setup: '8 500',
        monthly: '1 000',
        features: [
          'Tour de Contrôle Data-Ops',
          'Chat bot intelligent',
          'Support par email',
          'Formation initiale',
        ],
      },
      growth: {
        name: 'Growth',
        setup: '12 000',
        monthly: '1 200',
        features: [
          'Tout Starter +',
          'Suite Marketing',
          'Intégrations avancées',
          'Support prioritaire',
        ],
      },
      scale: {
        name: 'Scale',
        setup: '16 500',
        monthly: '1 500',
        features: [
          'Tous les modules',
          'Prévisions personnalisées',
          'Localisation complète',
          'Support dédié',
        ],
      },
      enterprise: {
        name: 'Enterprise / On-Premise',
        description: 'Solutions sur mesure pour vos besoins spécifiques',
      },
    },
    cta: {
      title: 'Prêt à automatiser votre entreprise?',
      subtitle: 'Découvrez comment Vecia peut transformer vos opérations en 30 jours.',
      button: 'Planifier une démo',
    },
    footer: {
      copyright: '© 2025 Vecia. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      gdpr: 'Préférences RGPD',
    },
  },
  'fr-ch': {
    nav: {
      home: 'Accueil',
      solutions: 'Solutions',
      industries: 'Industries',
      process: 'Processus',
      pricing: 'Tarifs',
      resources: 'Ressources',
      about: 'À propos',
      contact: 'Contact',
    },
    hero: {
      headline: 'Débloquez 30% de capacité en plus avec des agents IA formés sur votre domaine',
      subheading: 'Vecia conçoit, déploie et maintient des stacks d\'automatisation qui connectent vos outils, déclenchent des actions et transmettent des résultats raffinés à votre équipe—avec une sécurité et confidentialité suisses.',
      cta_primary: 'Réserver un appel découverte de 30 min',
      cta_secondary: 'Télécharger le guide ROI (2 pages)',
      cta_link: 'https://calendly.com/vecia/decouverte',
    },
    tagline: 'AI agents built for precision, privacy & performance.',
    solutions: {
      title: 'Nos Solutions',
      dataOps: {
        title: 'Automatisation Data-Ops',
        description: 'Shopify ⇄ Excel ⇄ BI en temps réel – supprimez les goulots d\'étranglement administratifs, unifiez vos KPIs.',
      },
      marketing: {
        title: 'Suite Marketing Agentique',
        description: 'Contenu alimenté par LLM, segmentation et orchestration multicanale – augmentez vos revenus récurrents.',
      },
      trading: {
        title: 'Intelligence Décisionnelle pour Trading & Finance',
        description: 'Agents RAG sur données CTRM/ERP – insights instantanés, alertes de risque avec conformité FINMA.',
      },
      custom: {
        title: 'Intégrations Personnalisées & Conformité',
        description: 'Hébergement en Suisse, protection maximale des données, options on-premise pour données sensibles.',
      },
    },
    industries: {
      title: 'Industries',
      retail: {
        title: 'Retail & eCommerce',
        description: 'Multi-boutiques, prévision des stocks, chat service client multilingue.',
      },
      sme: {
        title: 'Opérations PME & CRM',
        description: 'Assistants CRM low-code, automatisation des devis, triage des contrats avec précision suisse.',
      },
      trading: {
        title: 'Trading de Matières Premières & Finance',
        description: 'IA sur documents de trading, réconciliation de positions, conformité réglementaire suisse.',
      },
    },
    process: {
      title: 'Notre Processus en 4 Étapes',
      subtitle: 'Précision et efficacité suisses',
      steps: {
        discovery: {
          title: 'Atelier Découverte (FigJam live)',
          description: 'Analyse détaillée de vos processus, identification des opportunités.',
        },
        sprint: {
          title: 'Sprint Build (2 semaines)',
          description: 'Développement agile avec transparence totale.',
        },
        measure: {
          title: 'Mesurer & Optimiser',
          description: 'Monitoring précis, optimisation continue basée sur les données.',
        },
        support: {
          title: 'Support & Évolution',
          description: 'Accompagnement sur mesure, évolutions sécurisées.',
        },
      },
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Transparence et flexibilité',
      currency: 'CHF',
      period: '/mois',
      starter: {
        name: 'Starter',
        setup: '9 500',
        monthly: '1 100',
        features: [
          'Tour de Contrôle Data-Ops',
          'Chat bot intelligent',
          'Support par email',
          'Hébergement en Suisse',
        ],
      },
      growth: {
        name: 'Growth',
        setup: '13 500',
        monthly: '1 350',
        features: [
          'Tout Starter +',
          'Suite Marketing',
          'Intégrations avancées',
          'Support prioritaire 24/7',
        ],
      },
      scale: {
        name: 'Scale',
        setup: '18 500',
        monthly: '1 700',
        features: [
          'Tous les modules',
          'Prévisions personnalisées',
          'Conformité réglementaire',
          'Support dédié on-site',
        ],
      },
      enterprise: {
        name: 'Enterprise / On-Premise',
        description: 'Solutions sur mesure avec sécurité maximale',
      },
    },
    cta: {
      title: 'Prêt pour une automatisation de précision?',
      subtitle: 'Découvrez la qualité suisse appliquée à l\'IA d\'entreprise.',
      button: 'Planifier une consultation',
    },
    footer: {
      copyright: '© 2025 Vecia. Tous droits réservés.',
      privacy: 'Protection des données',
      terms: 'Conditions générales',
      gdpr: 'Préférences de confidentialité',
    },
  },
  'en-ae': {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      industries: 'Industries',
      process: 'Process',
      pricing: 'Pricing',
      resources: 'Resources',
      about: 'About Us',
      contact: 'Contact',
    },
    hero: {
      headline: 'Unlock 30% more capacity with domain-trained AI agents',
      subheading: 'Vecia designs, deploys and supports automation stacks that connect your tools, trigger actions and hand polished results back to your team—securely hosted in the UAE/GCC.',
      cta_primary: 'Book a 30-min discovery call',
      cta_secondary: 'Download the 2-page ROI guide',
      cta_link: 'https://calendly.com/vecia/discovery',
    },
    tagline: 'Scale fast with AI—data-driven growth for visionary businesses.',
    solutions: {
      title: 'Our Solutions',
      dataOps: {
        title: 'Data-Ops Automation',
        description: 'Shopify ⇄ Excel ⇄ BI in real time – remove admin bottlenecks, unify KPIs.',
      },
      marketing: {
        title: 'Agentic Marketing Suite',
        description: 'LLM-powered content, segmentation & multichannel orchestration – lift repeat revenue.',
      },
      trading: {
        title: 'Decision Intelligence for Trading & Finance',
        description: 'RAG agents over CTRM/ERP data – instant insights, risk alerts.',
      },
      custom: {
        title: 'Custom Integrations & Compliance',
        description: 'GCC-compliant hosting, Arabic language models, on-prem options for sensitive data.',
      },
    },
    industries: {
      title: 'Industries',
      retail: {
        title: 'Retail & eCommerce',
        description: 'Multi-store operations, inventory forecasting, multilingual customer service.',
      },
      sme: {
        title: 'SME Operations & CRM',
        description: 'Low-code CRM assistants, quote automation, contract management.',
      },
      trading: {
        title: 'Commodity Trading & Finance',
        description: 'AI over trade documents, position reconciliation, live P&L dashboard.',
      },
    },
    process: {
      title: 'Our 4-Step Process',
      subtitle: 'From idea to impact in 30 days',
      steps: {
        discovery: {
          title: 'Discovery Workshop (FigJam live)',
          description: 'Map pain points, define quick wins.',
        },
        sprint: {
          title: 'Sprint Build (2 weeks)',
          description: 'Ship MVP agent; daily Slack/Teams checkpoint.',
        },
        measure: {
          title: 'Measure & Iterate',
          description: 'KPI dashboard, A/B tests, ROI review at week 6.',
        },
        support: {
          title: 'Support & Scale',
          description: 'Retainer for monitoring, new features, staff onboarding.',
        },
      },
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Flexible packages for rapid growth',
      currency: 'AED',
      period: '/month',
      starter: {
        name: 'Starter',
        setup: '31,200',
        monthly: '3,670',
        features: [
          'Data-Ops Control Tower',
          'Intelligent chat bot',
          'Email support',
          'Initial training',
        ],
      },
      growth: {
        name: 'Growth',
        setup: '44,000',
        monthly: '4,400',
        features: [
          'Everything in Starter +',
          'Marketing Suite',
          'Advanced integrations',
          'Priority support',
        ],
      },
      scale: {
        name: 'Scale',
        setup: '60,500',
        monthly: '5,500',
        features: [
          'All modules included',
          'Custom forecasting',
          'Full localization',
          'Dedicated support',
        ],
      },
      enterprise: {
        name: 'Enterprise / On-Premise',
        description: 'Custom solutions for your specific needs',
      },
    },
    cta: {
      title: 'Ready to scale with AI?',
      subtitle: 'Discover how Vecia can transform your operations in 30 days.',
      button: 'Schedule a Demo',
    },
    footer: {
      copyright: '© 2025 Vecia. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      gdpr: 'Cookie Preferences',
    },
  },
};