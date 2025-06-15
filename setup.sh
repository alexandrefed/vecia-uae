#!/bin/bash

echo "🚀 Setting up Vecia Website..."
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment variables
if [ ! -f .env.local ]; then
    echo "🔐 Creating .env.local file..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your configuration"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your configuration"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:4321 in your browser"
echo ""
echo "Happy coding! 🎆"