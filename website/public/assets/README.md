# Assets Folder

Esta carpeta contiene todos los assets estáticos del sitio web de Datoad.

## 📁 Estructura

```
assets/
├── logo.png              # Logo principal de Datoad (recomendado: 512x512px)
├── logo-icon.png         # Icono del logo (recomendado: 64x64px)
├── images/               # Otras imágenes del sitio
│   ├── screenshots/
│   ├── features/
│   └── team/
└── README.md            # Este archivo
```

## 🎨 Especificaciones del Logo

### Logo Principal (`logo.png`)
- **Tamaño recomendado**: 512x512px (o mayor)
- **Formato**: PNG con transparencia
- **Uso**: Header, landing page, footer
- **Relación de aspecto**: Cuadrado (1:1)

### Logo Icono (`logo-icon.png`)
- **Tamaño recomendado**: 64x64px o 128x128px
- **Formato**: PNG con transparencia
- **Uso**: Navbar, favicon, one pager
- **Relación de aspecto**: Cuadrado (1:1)

## 📂 Cómo agregar tu logo

1. **Coloca tu logo aquí**: Copia tu archivo `logo.png` en esta carpeta
2. **Logo icono (opcional)**: Si tienes una versión icono, nómbrala `logo-icon.png`
3. **Sin cambios de código necesarios**: Las páginas ya están configuradas para usar `/assets/logo.png`

## 🖼️ Otras Imágenes

Puedes agregar más imágenes organizadas en subcarpetas:

```bash
assets/
  images/
    screenshots/dashboard.png
    features/routing.png
    team/team-photo.jpg
```

Para usarlas en tus componentes:

```jsx
<img src="/assets/images/screenshots/dashboard.png" alt="Dashboard" />
```

## 🎨 Colores de Marca (referencia)

Basado en el diseño actual:

- **Primary Teal**: `#2B8A8A`
- **Dark Teal**: `#1E5959`
- **Light Blue**: `#F0F9FF`
- **Slate**: `#475569`
- **Borders**: `#E2E8F0`

## ✅ Fallback

Si no se encuentra el logo, las páginas mostrarán un ícono de Zap (⚡) como fallback automático.

## 📝 Notas

- Todos los archivos en `public/` son servidos directamente
- No necesitas importarlos en los componentes
- Usa rutas absolutas: `/assets/...`
- Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG)

---

**¿Necesitas ayuda?** Contacta a diegocastellanos@datoad.dev
