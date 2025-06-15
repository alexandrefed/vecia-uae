# 🌍 Regional Setup Guide

## Quick Setup: 3 Separate Websites

This guide will help you create 3 independent regional websites from the current multilingual site.

## Option 1: Automated Setup (Recommended)

```bash
# Make scripts executable
chmod +x scripts/split-regions.sh
chmod +x scripts/setup-region.sh

# Run the split script
./scripts/split-regions.sh

# This creates:
# ../vecia-france/
# ../vecia-switzerland/
# ../vecia-uae/
```

## Option 2: Manual Setup

### 🇫🇷 1. Vecia France (French Only)

```bash
# Copy current project
cp -r . ../vecia-france
cd ../vecia-france

# Clean up other languages
rm -rf src/pages/en-ae src/pages/fr-ch

# Update astro.config.mjs
```

**astro.config.mjs changes:**
```javascript
export default defineConfig({
  site: 'https://vecia.fr', // or vecia-france.vercel.app
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'fr-fr',
    locales: ['fr-fr'], // Only French
    routing: {
      prefixDefaultLocale: false, // No /fr-fr prefix
    },
  },
});
```

**Update src/pages/index.astro:**
```astro
---
// Import the French homepage directly
import Homepage from './fr-fr/index.astro';
---
<Homepage />
```

**Remove language switcher from Navigation.astro**

### 🇨🇭 2. Vecia Switzerland (French + English)

```bash
# Copy current project
cp -r . ../vecia-switzerland
cd ../vecia-switzerland

# Clean up non-Swiss content
rm -rf src/pages/en-ae src/pages/fr-fr

# Rename fr-ch to fr and create en
mv src/pages/fr-ch src/pages/fr
cp -r src/pages/fr src/pages/en
```

**astro.config.mjs changes:**
```javascript
export default defineConfig({
  site: 'https://vecia.ch', // or vecia-switzerland.vercel.app
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          'fr': 'fr-CH',
          'en': 'en-CH',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

**Update translations for Switzerland**

### 🇦🇪 3. Vecia UAE (English Only)

```bash
# Copy current project
cp -r . ../vecia-uae
cd ../vecia-uae

# Clean up French content
rm -rf src/pages/fr-fr src/pages/fr-ch
mv src/pages/en-ae/* src/pages/
rmdir src/pages/en-ae
```

**astro.config.mjs changes:**
```javascript
export default defineConfig({
  site: 'https://vecia.ae', // or vecia-uae.vercel.app
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
  // Remove i18n configuration completely
});
```

**Simplify the site structure - no language routing needed**

## Deployment Instructions

### For Each Regional Site:

1. **Create GitHub Repository**
   ```bash
   # For each region
   cd ../vecia-france
   git init
   git add .
   git commit -m "Initial commit: Vecia France"
   
   # Create repo on GitHub: vecia-france
   git remote add origin https://github.com/YOUR_USERNAME/vecia-france.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com/new
   - Import `vecia-france` repo
   - Deploy (no regions config!)
   - Repeat for other sites

3. **Update Environment Variables**
   Each site gets its own:
   - PUBLIC_SITE_URL
   - PUBLIC_GA_ID
   - Pricing configuration

## Quick Modifications Needed

### France Site
1. Remove `<LanguageSwitcher>` from Navigation
2. Update all links to remove `/fr-fr` prefix
3. Set prices in EUR only

### Switzerland Site
1. Keep language switcher for FR/EN
2. Update pricing to CHF
3. Add Swiss-specific content

### UAE Site
1. Remove all language switching
2. Remove i18n utilities
3. Update pricing to AED
4. Simplify to single language

## Testing Each Site

```bash
# France
cd ../vecia-france
npm install
npm run dev
# Visit http://localhost:4321

# Switzerland
cd ../vecia-switzerland
npm install
npm run dev
# Visit http://localhost:4322

# UAE
cd ../vecia-uae
npm install
npm run dev
# Visit http://localhost:4323
```

## Domain Configuration

### Option A: Country Domains (Best)
- vecia.fr → vecia-france.vercel.app
- vecia.ch → vecia-switzerland.vercel.app
- vecia.ae → vecia-uae.vercel.app

### Option B: Subdomains (Cheaper)
- fr.vecia.com → vecia-france.vercel.app
- ch.vecia.com → vecia-switzerland.vercel.app
- ae.vecia.com → vecia-uae.vercel.app

### Option C: Free Vercel Domains
- vecia-france.vercel.app
- vecia-switzerland.vercel.app
- vecia-uae.vercel.app

## Benefits Achieved

✅ **Independent Pricing** - Each region has its own prices
✅ **Separate Analytics** - Track each market independently
✅ **Local SEO** - Better rankings in each country
✅ **Simple Updates** - Change one without affecting others
✅ **Free Hosting** - 3 projects on Vercel free tier

## Next Steps

1. Choose manual or automated setup
2. Create the 3 regional sites
3. Deploy each to Vercel
4. Configure domains (optional)
5. Set up analytics per region
6. Launch! 🚀

---

**Need help?** Each regional site is simpler than the multilingual version!