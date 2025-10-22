# Calculadora de Costos - Datoad

Este directorio contiene la calculadora interactiva de costos para usuarios de Datoad.

## Estructura

```
cost-calculator/
├── index.html          # Página principal de la calculadora
├── css/
│   └── styles.css     # Estilos de la calculadora
├── js/
│   └── calculator.js  # Lógica de cálculo
└── assets/            # Imágenes, íconos, etc.
```

## Funcionalidad

La calculadora debe permitir a los usuarios:
1. Ingresar su gasto mensual actual en LLM APIs
2. Especificar qué modelos utilizan (GPT-4, Claude, etc.)
3. Estimar volumen de consultas por tipo (simple, medium, complejo)
4. **Calcular**: Ahorro estimado con Datoad (30-45%)
5. Ver desglose de costos antes/después

## Cómo usar

1. Subir tus archivos HTML, CSS y JS en las carpetas correspondientes
2. Para probar localmente: abrir `index.html` en el navegador
3. Para deployment: subir a GitHub Pages o tu hosting preferido

## Datos sugeridos para el cálculo

### Costos promedio por modelo (por 1M tokens):
- GPT-4: $30-60
- GPT-3.5: $1-2
- Claude 3 Opus: $15-75
- Claude 3 Sonnet: $3-15

### Distribución de queries típica:
- Simple (40%): Pueden usar modelos más baratos
- Medium (40%): Modelos de rango medio
- Complejo (20%): Requieren modelos premium

### Ahorro esperado con Datoad:
- Rango: 30-45% dependiendo del mix de workload
