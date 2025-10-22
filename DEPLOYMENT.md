# Datoad Deployment Guide

This guide will help you deploy the Datoad website to **datoad.dev**

## 🚀 Quick Start - Vercel (Recommended)

Vercel is the easiest and fastest option for React apps.

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
# From the root of the project (datoad/)
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project name? datoad
# - In which directory is your code located? ./website
# - Want to override settings? No
```

### Step 3: Connect Your Domain
```bash
# After first deploy, add your domain
vercel domains add datoad.dev

# Follow instructions to add DNS records
```

### Step 4: Production Deploy
```bash
vercel --prod
```

**Your site will be live at datoad.dev! 🎉**

---

## 🌐 Alternative: Netlify

### Option A: Via Web UI (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Configure:
   - **Base directory:** `website`
   - **Build command:** `npm run build`
   - **Publish directory:** `website/dist`
5. Click "Deploy site"
6. Go to "Domain settings" → Add custom domain → `datoad.dev`
7. Follow DNS configuration instructions

### Option B: Via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd website
npm run build
netlify deploy --prod

# Add custom domain in Netlify dashboard
```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- ✅ All assets are in `website/public/assets/`
- ✅ Logo is uploaded at `website/public/assets/logo.png`
- ✅ All email CTAs point to diegocastellanos@datoad.dev
- ✅ Build works locally: `cd website && npm run build`

---

## 🔧 Build Locally (Test Before Deploy)

```bash
cd website
npm install
npm run build
npm run preview  # Test the production build
```

Open http://localhost:4173 to test

---

## 🌍 DNS Configuration

Once you deploy, you'll need to configure DNS for datoad.dev:

### For Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

Your domain provider will give you specific instructions.

---

## ✅ Post-Deployment Testing

After deployment, test:

1. **Navigation:**
   - ✅ datoad.dev → Landing page
   - ✅ datoad.dev/calculator → Calculator
   - ✅ datoad.dev/onepager → One pager

2. **CTAs:**
   - ✅ All buttons open email to diegocastellanos@datoad.dev
   - ✅ Subjects are pre-filled
   - ✅ Body templates work

3. **One-Pager:**
   - ✅ "Print / Save PDF" button works
   - ✅ "Share via Email" button works

4. **Mobile:**
   - ✅ Hamburger menu works
   - ✅ All pages responsive

---

## 🔄 Future Updates

To update the site after changes:

### Vercel:
```bash
git add .
git commit -m "Update"
git push origin main

# Or manually:
vercel --prod
```

### Netlify:
Automatically deploys when you push to GitHub (if connected)

Or manually:
```bash
cd website
npm run build
netlify deploy --prod
```

---

## 🆘 Troubleshooting

**Issue:** Routes don't work (404 on /calculator)
- **Solution:** Make sure `_redirects` file exists in `website/public/`

**Issue:** Assets not loading
- **Solution:** Check that assets are in `website/public/assets/`

**Issue:** Build fails
- **Solution:** Test locally first: `cd website && npm run build`

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Or reach out: diegocastellanos@datoad.dev

---

**Ready to deploy? Run `vercel` from the project root! 🚀**
