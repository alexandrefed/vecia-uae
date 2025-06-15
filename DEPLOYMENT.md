# 🚀 Vecia Website Deployment Guide

This guide will walk you through deploying the Vecia website online using GitHub and Vercel.

## Prerequisites

- [ ] GitHub account (free at github.com)
- [ ] Vercel account (free at vercel.com)
- [ ] Git installed locally
- [ ] Node.js 18+ installed

## Step 1: Create GitHub Repository

### Option A: Using GitHub.com (Easiest)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `vecia-website`
3. Description: "Multilingual AI automation agency website"
4. Keep it **Public** (for free hosting)
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI if needed
brew install gh  # macOS

# Login to GitHub
gh auth login

# Create repository
gh repo create vecia-website --public --source=. --push
```

## Step 2: Push Code to GitHub

After creating the repository, push your code:

```bash
# Add remote origin (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/vecia-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Connect your GitHub account if needed
4. Select `vecia-website` repository
5. Configure project:
   - **Framework Preset**: Astro (auto-detected)
   - **Root Directory**: `.` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

6. Add Environment Variables:
   ```
   PUBLIC_SITE_URL = https://vecia-website.vercel.app
   PUBLIC_CALENDLY_URL = https://calendly.com/vecia/discovery
   PUBLIC_GA_ID = (leave empty for now)
   ```

7. Click "Deploy"
8. Wait 2-3 minutes for deployment

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: (select your account)
# - Link to existing project: N
# - Project name: vecia-website
# - Directory: ./
# - Override settings: N
```

## Step 4: Access Your Live Website

After deployment:
- Your site is live at: `https://vecia-website.vercel.app`
- Alternative URL: `https://vecia-website-[username].vercel.app`

## Step 5: Set Up Custom Domain (Optional)

### If you have a domain (e.g., vecia.com):

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `vecia.com` and `www.vecia.com`
3. Follow DNS configuration instructions:
   - Add A record: `76.76.21.21`
   - Add CNAME: `www` → `cname.vercel-dns.com`

### Free subdomain options:
- Keep using: `vecia-website.vercel.app`
- Or get free domain at: freenom.com, dot.tk

## Step 6: Post-Deployment Setup

### Enable Analytics (Optional)
1. Vercel Dashboard → Analytics → Enable
2. Add Google Analytics:
   - Create GA4 property at analytics.google.com
   - Add GA ID to Vercel environment variables
   - Redeploy

### Set Up Forms (Optional)
1. Create Vercel KV database for contact forms
2. Or integrate with:
   - Formspree.io (free tier)
   - Netlify Forms alternative
   - n8n webhook

## Environment Variables Reference

```bash
# Required
PUBLIC_SITE_URL=https://vecia.com  # Your actual domain

# Optional
PUBLIC_CALENDLY_URL=https://calendly.com/vecia/discovery
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_ENABLE_CHAT=false
PUBLIC_ENABLE_ANALYTICS=true
```

## Continuous Deployment

Now, every time you push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel automatically deploys your changes in ~60 seconds!

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure Node.js version compatibility
- Run `npm run build` locally first

### Page Not Found
- Check vercel.json redirects
- Ensure pages are in correct locale folders

### Slow Performance
- Enable Vercel Edge Network
- Optimize images (use WebP format)
- Check Lighthouse scores

## Quick Commands

```bash
# View deployment
vercel ls

# View logs
vercel logs vecia-website

# Promote to production
vercel --prod

# Rollback
vercel rollback
```

## Support

- Vercel Docs: vercel.com/docs
- Astro Deploy Guide: docs.astro.build/en/guides/deploy/vercel/
- GitHub Issues: github.com/yourusername/vecia-website/issues

---

**🎉 Congratulations! Your Vecia website is now live!**