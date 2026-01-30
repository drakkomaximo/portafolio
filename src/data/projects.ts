import type { LocalizedString } from '../domain/localization';

export interface Project {
  id: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
}

export interface ProjectsSectionContent {
  title: LocalizedString;
  subtitle: LocalizedString;
  viewDemoLabel: LocalizedString;
  codeLabel: LocalizedString;
}

const DEFAULT_URL = '#';

export const projectsSection: ProjectsSectionContent = {
  title: {
    es: 'Mis Proyectos',
    en: 'My Projects'
  },
  subtitle: {
    es: 'Algunos de los proyectos en los que he trabajado',
    en: "Some of the projects I've worked on"
  },
  viewDemoLabel: {
    es: 'Ver Demo',
    en: 'View Demo'
  },
  codeLabel: {
    es: 'Código',
    en: 'Code'
  }
};

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoUrl: DEFAULT_URL,
    codeUrl: DEFAULT_URL,
    title: {
      es: 'E-commerce Platform',
      en: 'E-commerce Platform'
    },
    subtitle: {
      es: 'Plataforma completa de comercio electrónico',
      en: 'Complete e-commerce platform'
    },
    description: {
      es: 'Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.',
      en: 'Complete e-commerce platform with shopping cart, payments and inventory management.'
    }
  },
  {
    id: 'task-management-app',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
    demoUrl: DEFAULT_URL,
    codeUrl: DEFAULT_URL,
    title: {
      es: 'Task Management App',
      en: 'Task Management App'
    },
    subtitle: {
      es: 'Gestión de tareas con drag & drop',
      en: 'Task management with drag & drop'
    },
    description: {
      es: 'Aplicación de gestión de tareas con drag & drop, notificaciones y colaboración en tiempo real.',
      en: 'Task management application with drag & drop, notifications and real-time collaboration.'
    }
  },
  {
    id: 'portfolio-website',
    technologies: ['Astro', 'Tailwind', 'TypeScript'],
    demoUrl: DEFAULT_URL,
    codeUrl: DEFAULT_URL,
    title: {
      es: 'Portfolio Website',
      en: 'Portfolio Website'
    },
    subtitle: {
      es: 'Diseño moderno y optimizado para SEO',
      en: 'Modern design and SEO optimized'
    },
    description: {
      es: 'Sitio web personal con diseño moderno, animaciones suaves y optimizado para SEO.',
      en: 'Personal website with modern design, smooth animations and SEO optimized.'
    }
  }
];
