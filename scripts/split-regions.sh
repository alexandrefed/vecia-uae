#!/bin/bash

# Script to split the multilingual Vecia website into 3 regional websites

echo "🌍 Creating Vecia Regional Websites..."
echo ""

# Get the current directory
BASE_DIR=$(pwd)
PARENT_DIR=$(dirname "$BASE_DIR")

# Create vecia-france (French only)
echo "🇫🇷 Creating Vecia France..."
cp -r "$BASE_DIR" "$PARENT_DIR/vecia-france"
cd "$PARENT_DIR/vecia-france"

# Remove other language folders
rm -rf src/pages/en-ae src/pages/fr-ch
rm -rf src/content/en-ae src/content/fr-ch

# Update configurations
echo "Updating France configuration..."
# We'll update these files after the script

# Create vecia-switzerland (French + English)
echo "🇨🇭 Creating Vecia Switzerland..."
cp -r "$BASE_DIR" "$PARENT_DIR/vecia-switzerland"
cd "$PARENT_DIR/vecia-switzerland"

# Remove UAE content, keep Swiss
rm -rf src/pages/en-ae src/pages/fr-fr
rm -rf src/content/en-ae src/content/fr-fr

# Create vecia-uae (English only)
echo "🇦🇪 Creating Vecia UAE..."
cp -r "$BASE_DIR" "$PARENT_DIR/vecia-uae"
cd "$PARENT_DIR/vecia-uae"

# Remove French content
rm -rf src/pages/fr-fr src/pages/fr-ch
rm -rf src/content/fr-fr src/content/fr-ch

echo ""
echo "✅ Regional websites created!"
echo ""
echo "Next steps:"
echo "1. Update each site's configuration"
echo "2. Modify language settings"
echo "3. Update pricing for each region"
echo "4. Deploy to separate Vercel projects"
echo ""
echo "Directories created:"
echo "  - $PARENT_DIR/vecia-france"
echo "  - $PARENT_DIR/vecia-switzerland"
echo "  - $PARENT_DIR/vecia-uae"