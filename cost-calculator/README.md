# Calculadora de Costos - Datoad

Calculadora interactiva React para demostrar ahorros de costos en LLM APIs usando Datoad.

## 🚀 Características

- **Calculadora interactiva avanzada** con sliders y tooltips
- **Cálculos en tiempo real** basados en mix de modelos y tipos de workload
- **Visualización detallada** de ahorros, ROI y distribución de costos
- **Diseño moderno** con Tailwind CSS y componentes Lucide React
- **Responsive** y optimizado para mobile

## 📁 Estructura

```
cost-calculator/
├── index.html                 # HTML root
├── package.json               # Dependencias npm
├── vite.config.js            # Configuración Vite
├── tailwind.config.js        # Configuración Tailwind
├── postcss.config.js         # Configuración PostCSS
├── src/
│   ├── main.jsx              # Entry point React
│   ├── DatoadCalculator.jsx  # Componente principal
│   └── index.css             # Estilos globales + Tailwind
├── public/                    # Assets estáticos
└── assets/                    # Imágenes adicionales
```

## 🛠️ Instalación

### Requisitos
- Node.js 18+ (recomendado)
- npm o yarn

### Pasos

1. **Instalar dependencias:**
   ```bash
   cd cost-calculator
   npm install
   ```

2. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```
   Esto abrirá la app en `http://localhost:3000`

3. **Build para producción:**
   ```bash
   npm run build
   ```
   Los archivos optimizados estarán en `dist/`

4. **Preview del build:**
   ```bash
   npm run preview
   ```

## 📊 Funcionalidad de la Calculadora

La calculadora permite a los usuarios:

1. **Ingresar gasto mensual** actual en LLM APIs
2. **Configurar mix de modelos** actual (GPT-4, GPT-3.5, Claude)
3. **Especificar tipos de workload:**
   - Simple Q&A
   - SQL/Analytics
   - Complex Reasoning
   - Doc Summarization
4. **Ver resultados en tiempo real:**
   - Total savings mensual
   - Porcentaje de reducción de costos
   - Datoad fee (15% de savings)
   - Net benefit y ROI
   - Distribución de costos antes/después
   - Optimized model mix sugerido

## 🎯 Lógica de Cálculo

### Baseline
Gasto actual del usuario basado en su mix de modelos y volumen

### Optimized Cost
```javascript
optimizedCost =
  simple_qa_cost × 0.40 +           // 60% ahorro
  sql_analytics_cost × 0.30 +       // 70% ahorro
  complex_reasoning_cost × 1.0 +    // Sin cambio (calidad first)
  doc_summarization_cost × 0.40     // 60% ahorro
```

### Savings
```javascript
totalSavings = baseline - optimizedCost
savingsPercentage = (totalSavings / baseline) × 100
```

### ROI
```javascript
datoadFee = totalSavings × 0.15  // 15% fee
netBenefit = totalSavings - datoadFee
roi = netBenefit / datoadFee
```

## 🎨 Personalización

### Colores
Edita `tailwind.config.js` para cambiar la paleta de colores

### Fórmulas de cálculo
Edita `src/DatoadCalculator.jsx` en la función `results = useMemo(...)`

### Modelos soportados
Modifica los estados `currentMix` y `optimizedMix` en el componente

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
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para servir desde /dist
```

## 📝 Notas Técnicas

- **Framework**: React 18 con Vite
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build tool**: Vite 5
- **Tooltips interactivos** con fórmulas matemáticas
- **Baseline method**: Basado en 90 días históricos del usuario

## 🔗 Links útiles

- **Website**: [datoad.dev](https://datoad.dev)
- **Email**: diegocastellanos@datoad.dev
- **Twitter**: [@getdatoad](https://twitter.com/getdatoad)

---

*Built with React + Vite + Tailwind*
