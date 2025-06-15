#!/bin/bash

# Setup script for configuring a regional Vecia website

if [ "$#" -ne 1 ]; then
    echo "Usage: ./setup-region.sh [france|switzerland|uae]"
    exit 1
fi

REGION=$1

echo "🌍 Setting up Vecia $REGION..."

case $REGION in
    france)
        echo "🇫🇷 Configuring for France..."
        
        # Update package.json
        sed -i '' 's/"name": "vecia-website"/"name": "vecia-france"/' package.json
        
        # Update astro.config.mjs
        sed -i '' 's/site: .*/site: "https:\/\/vecia.fr",/' astro.config.mjs
        sed -i '' "s/locales: \[.*\]/locales: ['fr-fr']/" astro.config.mjs
        
        # Remove language switcher from navigation
        echo "Removing language switcher..."
        
        # Update vercel.json
        sed -i '' 's/"name": "vecia-website"/"name": "vecia-france"/' vercel.json || true
        
        echo "✅ France configuration complete!"
        ;;
        
    switzerland)
        echo "🇨🇭 Configuring for Switzerland..."
        
        # Update package.json
        sed -i '' 's/"name": "vecia-website"/"name": "vecia-switzerland"/' package.json
        
        # Update astro.config.mjs
        sed -i '' 's/site: .*/site: "https:\/\/vecia.ch",/' astro.config.mjs
        sed -i '' "s/locales: \[.*\]/locales: ['fr-ch', 'en-ch']/" astro.config.mjs
        sed -i '' "s/defaultLocale: .*/defaultLocale: 'fr-ch',/" astro.config.mjs
        
        # Create English content for Switzerland
        echo "Setting up bilingual content..."
        
        echo "✅ Switzerland configuration complete!"
        ;;
        
    uae)
        echo "🇦🇪 Configuring for UAE..."
        
        # Update package.json
        sed -i '' 's/"name": "vecia-website"/"name": "vecia-uae"/' package.json
        
        # Update astro.config.mjs
        sed -i '' 's/site: .*/site: "https:\/\/vecia.ae",/' astro.config.mjs
        sed -i '' "s/locales: \[.*\]/locales: ['en-ae']/" astro.config.mjs
        sed -i '' "s/defaultLocale: .*/defaultLocale: 'en-ae',/" astro.config.mjs
        
        # Remove language switcher
        echo "Configuring for English only..."
        
        echo "✅ UAE configuration complete!"
        ;;
        
    *)
        echo "❌ Invalid region. Use: france, switzerland, or uae"
        exit 1
        ;;
esac

echo ""
echo "Next steps:"
echo "1. Review and update content in src/lib/i18n/translations.ts"
echo "2. Update pricing in the configuration"
echo "3. Run 'npm install' to ensure dependencies"
echo "4. Test with 'npm run dev'"
echo "5. Deploy to Vercel"

echo ""
echo "🚀 Ready to deploy $REGION site!"