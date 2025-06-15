# Vecia Website

Multilingual website for Vecia - Agentic Automation for Modern Business.

## 🚀 Quick Start

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

## 🌐 Locales

- **fr-FR** (French - France): Default locale
- **fr-CH** (French - Switzerland): Swiss market focus
- **en-AE** (English - UAE): Middle East market

## 📝 Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Localized content
│   ├── layouts/        # Page layouts
│   ├── lib/i18n/       # Internationalization
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── .ai_docs/           # AI context documentation
└── public/             # Static assets
```

## 🎨 Design System

- **Primary**: #5B8BFF
- **Secondary**: #9B59F6
- **Accent**: #3BB4FF
- **Typography**: Inter (body), Space Grotesk (headings)

## 🚀 Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically on push to main

## 🔧 Development

```bash
# Run linting
npm run lint

# Format code
npm run format

# Type check
npm run astro check
```

## 📄 Environment Variables

Copy `.env.example` to `.env.local` and configure:

- `PUBLIC_SITE_URL`: Production URL
- `PUBLIC_CALENDLY_URL`: Calendly booking link
- `PUBLIC_GA_ID`: Google Analytics ID

## 📦 Key Features

- ⚡ Lightning-fast performance
- 🌐 Full i18n support
- 📱 Mobile-first responsive
- ♿ Accessibility compliant
- 🔒 GDPR compliant
- 🎆 SEO optimized