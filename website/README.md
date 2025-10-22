# Datoad Website

Sitio web oficial de Datoad con landing page, calculadora de costos y one pager.

## 🚀 Características

- **Landing Page moderna** con diseño atractivo y call-to-actions
- **Calculadora interactiva avanzada** con sliders y tooltips
- **One Pager profesional** con información completa del producto
- **React Router** para navegación fluida entre páginas
- **Diseño responsive** optimizado para móvil y desktop
- **Tailwind CSS** para estilos modernos

## 📁 Estructura del Proyecto

```
website/
├── index.html                    # HTML root
├── package.json                  # Dependencias (React, React Router, Vite, Tailwind)
├── vite.config.js               # Configuración Vite
├── tailwind.config.js           # Configuración Tailwind
├── postcss.config.js            # Configuración PostCSS
│
├── public/
│   └── assets/
│       ├── logo.png             # ⚠️ COLOCA TU LOGO AQUÍ
│       ├── logo-icon.png        # Icono (opcional)
│       ├── images/              # Otras imágenes
│       └── README.md            # Guía de assets
│
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Router configuration
    ├── index.css                # Estilos globales + Tailwind
    │
    └── pages/
        ├── LandingPage.jsx      # Página principal (/)
        ├── OnePager.jsx         # One pager (/onepager)
        ├── OnePager.css         # Estilos del one pager
        └── Calculator.jsx       # Calculadora (/calculator)
```

## 🛠️ Instalación y Uso

### Requisitos
- Node.js 18+ (recomendado)
- npm o yarn

### Pasos

1. **Instalar dependencias:**
   ```bash
   cd website
   npm install
   ```

2. **Agregar tu logo:**
   - Coloca tu logo en `public/assets/logo.png`
   - Ver `public/assets/README.md` para especificaciones

3. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   Esto abrirá la app en `http://localhost:3000`

4. **Build para producción:**
   ```bash
   npm run build
   ```
   Los archivos optimizados estarán en `dist/`

5. **Preview del build:**
   ```bash
   npm run preview
   ```

## 🌐 Rutas del Sitio

- `/` - Landing page principal
- `/calculator` - Calculadora de costos interactiva
- `/onepager` - One pager con información detallada

## 📊 Páginas

### Landing Page (`/`)
Página principal con:
- Hero section con propuesta de valor
- Estadísticas clave (30-45% savings, 5.7x ROI)
- Features destacadas
- "How it works" visual
- CTAs para calculator y pilot program

### Calculator (`/calculator`)
Calculadora interactiva que permite:
- Ingresar gasto mensual en LLM APIs
- Configurar mix de modelos (GPT-4, GPT-3.5, Claude)
- Especificar workload types (Simple QA, SQL, Complex, Doc Summary)
- Ver resultados en tiempo real:
  - Total savings mensual
  - Porcentaje de reducción
  - Datoad fee y net benefit
  - ROI calculation
  - Distribución before/after
  - Optimized model mix

### One Pager (`/onepager`)
Documento completo con:
- Header con logo y tagline
- Problema y situación actual
- Solución y cognitive routing
- Savings projection dashboard
- Timeline del pilot (30 días)
- Pricing y planes
- CTAs y contacto

## 🎨 Personalización

### Logo
1. Coloca tu logo en `public/assets/logo.png` (512x512px recomendado)
2. El sitio lo usará automáticamente en todas las páginas
3. Ver `public/assets/README.md` para más detalles

### Colores de Marca
Los colores principales están definidos en Tailwind:
- Primary Teal: `from-blue-600 to-teal-600`
- Dark Teal: `#1E5959`
- Slate: `#475569`

Para cambiar: edita `tailwind.config.js`

### Contenido
- **Landing**: `src/pages/LandingPage.jsx`
- **Calculator**: `src/pages/Calculator.jsx`
- **One Pager**: `src/pages/OnePager.jsx` y `OnePager.css`

### Fórmulas de Cálculo
Edita `src/pages/Calculator.jsx` en la función `useMemo`:
```javascript
const optimizedCost =
  simple_qa_cost × 0.40 +           // 60% ahorro
  sql_analytics_cost × 0.30 +       // 70% ahorro
  complex_reasoning_cost × 1.0 +    // Sin cambio
  doc_summarization_cost × 0.40     // 60% ahorro
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta dist/ a Netlify
# O conectar repo de GitHub
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para servir desde /dist
```

### Configuración para SPA
Si usas GitHub Pages o similar, necesitas configurar redirects para React Router:

**Netlify**: Crea `public/_redirects`:
```
/*    /index.html   200
```

**Vercel**: Ya configurado automáticamente con Vite

## 📝 Stack Técnico

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Routing**: React Router 6
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Features**:
  - Hot Module Replacement (HMR)
  - TypeScript ready
  - Optimized production builds
  - Code splitting automático

## 🔗 Links y Contacto

- **Website**: [datoad.dev](https://datoad.dev)
- **Email**: diegocastellanos@datoad.dev
- **Twitter**: [@getdatoad](https://twitter.com/getdatoad)
- **LinkedIn**: [/company/datoad](https://linkedin.com/company/datoad)

## 📄 Licencia

© 2025 Datoad, Inc. All rights reserved.

---

*Built with React + Vite + Tailwind + React Router*
