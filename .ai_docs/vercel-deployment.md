# Vercel Deployment Guide

## Initial Setup
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## Environment Variables
```env
# Production
PUBLIC_SITE_URL=https://vecia.com
PUBLIC_CONTACT_API=https://api.vecia.com/contact
PUBLIC_CALENDLY_URL=https://calendly.com/vecia
PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
PUBLIC_ENABLE_CHAT=true
PUBLIC_ENABLE_ANALYTICS=true
```

## vercel.json Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "rewrites": [
    {
      "source": "/",
      "destination": "/fr-fr"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "regions": ["cdg1", "fra1", "dxb1"]
}
```

## Edge Functions
```typescript
// api/contact.ts
export const config = {
  runtime: 'edge',
  regions: ['cdg1', 'fra1', 'dxb1'],
};

export default async function handler(req: Request) {
  // Handle contact form submission
}
```

## Deployment Regions
- **France**: CDG1 (Paris)
- **Switzerland**: FRA1 (Frankfurt - closest)
- **UAE**: DXB1 (Dubai)

## Performance Optimization
1. Enable Vercel Analytics
2. Use ISR for dynamic content
3. Configure caching headers
4. Enable compression
5. Use Vercel Image Optimization

## Monitoring
- Set up Vercel Analytics
- Configure Web Vitals tracking
- Enable Real User Monitoring
- Set up error alerting