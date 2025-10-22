# Datoad Website

Official Datoad website with landing page, cost calculator, and one pager.

## 🚀 Features

- **Modern landing page** with attractive design and call-to-actions
- **Advanced interactive calculator** with sliders and tooltips
- **Professional one pager** with complete product information
- **React Router** for smooth page navigation
- **Responsive design** optimized for mobile and desktop
- **Tailwind CSS** for modern styling

## 📁 Project Structure

```
website/
├── index.html                    # HTML root
├── package.json                  # Dependencies (React, React Router, Vite, Tailwind)
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
│
├── public/
│   └── assets/
│       ├── logo.png             # Company logo
│       ├── logo-icon.png        # Icon version (optional)
│       └── images/              # Other images
│
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Router configuration
    ├── index.css                # Global styles + Tailwind
    │
    └── pages/
        ├── LandingPage.jsx      # Home page (/)
        ├── OnePager.jsx         # One pager (/onepager)
        ├── OnePager.css         # One pager styles
        └── Calculator.jsx       # Calculator (/calculator)
```

## 🛠️ Installation & Usage

### Requirements
- Node.js 18+ (recommended)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   cd website
   npm install
   ```

2. **Run in development:**
   ```bash
   npm run dev
   ```
   This will open the app at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Optimized files will be in `dist/`

4. **Preview build:**
   ```bash
   npm run preview
   ```

## 🌐 Site Routes

- `/` - Main landing page
- `/calculator` - Interactive cost calculator
- `/onepager` - Detailed one pager

## 📊 Pages

### Landing Page (`/`)
Main page featuring:
- Hero section with value proposition
- Key statistics (30-45% savings, 5.7x ROI)
- Featured capabilities
- "How it works" visual
- CTAs for calculator and pilot program

### Calculator (`/calculator`)
Interactive calculator allowing users to:
- Enter monthly LLM API spend
- Configure model mix (GPT-4, GPT-3.5, Claude)
- Specify workload types (Simple QA, SQL, Complex, Doc Summary)
- View real-time results:
  - Total monthly savings
  - Reduction percentage
  - Datoad fee and net benefit
  - ROI calculation
  - Before/after distribution
  - Optimized model mix

### One Pager (`/onepager`)
Complete document with:
- Header with logo and tagline
- Problem statement and current situation
- Solution and cognitive routing
- Savings projection dashboard
- 30-day pilot timeline
- Pricing and plans
- CTAs and contact information

## 🎨 Customization

### Brand Colors
Main colors are defined in Tailwind:
- Primary Teal: `from-blue-600 to-teal-600`
- Dark Teal: `#1E5959`
- Slate: `#475569`

To change: edit `tailwind.config.js`

### Content
- **Landing**: `src/pages/LandingPage.jsx`
- **Calculator**: `src/pages/Calculator.jsx`
- **One Pager**: `src/pages/OnePager.jsx` and `OnePager.css`

### Calculation Formulas
Edit `src/pages/Calculator.jsx` in the `useMemo` function:
```javascript
const optimizedCost =
  simple_qa_cost × 0.40 +           // 60% savings
  sql_analytics_cost × 0.30 +       // 70% savings
  complex_reasoning_cost × 1.0 +    // No change
  doc_summarization_cost × 0.40     // 60% savings
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
# Or connect GitHub repo
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from /dist
```

### SPA Configuration
If using GitHub Pages or similar, configure redirects for React Router:

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Automatically configured with Vite

## 📝 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Features**:
  - Hot Module Replacement (HMR)
  - TypeScript ready
  - Optimized production builds
  - Automatic code splitting

## 🔗 Links & Contact

- **Website**: [datoad.dev](https://datoad.dev)
- **Email**: diegocastellanos@datoad.dev
- **Twitter**: [@getdatoad](https://twitter.com/getdatoad)
- **LinkedIn**: [/company/datoad](https://linkedin.com/company/datoad)

## 📄 License

© 2025 Datoad, Inc. All rights reserved.

---

*Built with React + Vite + Tailwind + React Router*
