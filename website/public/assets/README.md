# Assets Folder

This folder contains all static assets for the Datoad website.

## 📁 Structure

```
assets/
├── logo.png              # Main Datoad logo
├── logo-icon.png         # Logo icon (optional)
├── images/               # Other site images
│   ├── screenshots/
│   ├── features/
│   └── team/
└── README.md            # This file
```

## 🎨 Logo Specifications

### Main Logo (`logo.png`)
- **Recommended size**: 512x512px (or larger)
- **Format**: PNG with transparency
- **Usage**: Header, landing page, footer
- **Aspect ratio**: Square (1:1)

### Logo Icon (`logo-icon.png`)
- **Recommended size**: 64x64px or 128x128px
- **Format**: PNG with transparency
- **Usage**: Navbar, favicon, one pager
- **Aspect ratio**: Square (1:1)

## 🖼️ Adding More Images

You can add more images organized in subfolders:

```bash
assets/
  images/
    screenshots/dashboard.png
    features/routing.png
    team/team-photo.jpg
```

To use them in your components:

```jsx
<img src="/assets/images/screenshots/dashboard.png" alt="Dashboard" />
```

## 🎨 Brand Colors (reference)

Based on current design:

- **Primary Teal**: `#2B8A8A`
- **Dark Teal**: `#1E5959`
- **Light Blue**: `#F0F9FF`
- **Slate**: `#475569`
- **Borders**: `#E2E8F0`

## ✅ Fallback

If the logo is not found, pages will automatically display a Zap icon (⚡) as fallback.

## 📝 Notes

- All files in `public/` are served directly
- No need to import them in components
- Use absolute paths: `/assets/...`
- Optimize images before uploading (use tools like TinyPNG)

---

**Need help?** Contact diegocastellanos@datoad.dev
