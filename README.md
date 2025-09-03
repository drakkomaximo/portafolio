# Portafolio Andrés Villanueva Tabares

Un portafolio moderno y elegante construido con **Astro**, **Tailwind CSS** y **TypeScript**.

## ✨ Características

### 🎨 Sistema de Temas
- **Modo Claro**: Colores suaves y profesionales para uso diurno
- **Modo Oscuro**: Colores profundos y elegantes para uso nocturno
- **Detección automática**: Se adapta al tema del sistema operativo
- **Transiciones suaves**: Cambio de tema sin parpadeos
- **Persistencia**: Recuerda tu preferencia de tema

### 🚀 Tecnologías
- **Astro** - Framework principal para rendimiento óptimo
- **Tailwind CSS** - Sistema de diseño utility-first
- **TypeScript** - Tipado estático para mejor desarrollo
- **React** - Componentes interactivos cuando sea necesario
- **CSS Variables** - Sistema de temas dinámico

### 🎯 Funcionalidades
- **Diseño responsive** - Optimizado para móvil y desktop
- **Glassmorphism** - Efectos de cristal modernos
- **Animaciones CSS** - Transiciones y efectos suaves
- **SEO optimizado** - Meta tags y estructura semántica
- **Performance** - Carga rápida y optimizada

## 🎨 Temas Disponibles

### Modo Claro
- Fondo blanco con acentos azules
- Texto oscuro para máximo contraste
- Sombras sutiles y bordes suaves
- Ideal para uso diurno y profesional

### Modo Oscuro
- Fondo azul oscuro con acentos vibrantes
- Texto claro para mejor legibilidad
- Efectos de luz y sombras profundas
- Perfecto para uso nocturno

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎛️ Personalización

### Cambiar Colores del Tema
Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --accent-primary: #3b82f6;    /* Azul principal */
  --accent-secondary: #8b5cf6;  /* Púrpura secundario */
  --accent-tertiary: #ec4899;   /* Rosa terciario */
}
```

### Agregar Nuevos Temas
Crea nuevos selectores de tema:

```css
[data-theme="custom"] {
  --bg-primary: #tu-color;
  --text-primary: #tu-color;
}
```

## 📱 Responsive Design

- **Mobile First** - Diseño optimizado para móviles
- **Breakpoints** - Adaptación automática a diferentes pantallas
- **Touch Friendly** - Interacciones optimizadas para touch

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construcción para producción
npm run preview      # Vista previa de producción
npm run astro        # Comandos de Astro
```

## 🎨 Componentes Principales

- **ThemeToggle** - Cambio de tema con animaciones
- **Navigation** - Navegación responsive con efectos hover
- **Hero Section** - Presentación principal con gradientes
- **Projects Grid** - Galería de proyectos interactiva
- **Skills Cards** - Habilidades técnicas con iconos
- **Contact Form** - Formulario de contacto estilizado

## 🌟 Características Avanzadas

### Transiciones de Tema
- Cambio suave entre temas sin parpadeos
- Animaciones CSS optimizadas
- Persistencia en localStorage

### Efectos Visuales
- Glassmorphism con backdrop-blur
- Sombras dinámicas según el tema
- Gradientes animados
- Efectos hover interactivos

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**Desarrollado con ❤️ por Andrés Villanueva Tabares**
