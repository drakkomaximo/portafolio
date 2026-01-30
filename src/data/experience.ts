import type { LocalizedString, LocalizedStringArray } from '../domain/localization';

export interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  period: string;
  role: LocalizedString;
  achievements: LocalizedStringArray;
  description: LocalizedString;
  technologies?: string[];
}

export const companies: Company[] = [
  {
    id: 'simphony',
    name: 'SIMPHONY S.A.S',
    logo: 'https://github.com/user-attachments/assets/2d943268-9872-4f9a-b894-cefa758ec305',
    website: 'https://simphony.com.co/',
    period: 'Enero 2024 – Abril 2025',
    role: {
      es: 'Senior Frontend Developer',
      en: 'Senior Frontend Developer',
    },
    achievements: {
      es: [
        'Optimización de rendimiento y accesibilidad, reduciendo tiempos de carga.',
        'Diseño e implementación de soluciones web y móviles alineadas a requerimientos de negocio, presupuesto y cronogramas.',
        'Desarrollo de aplicaciones escalables y responsivas con frameworks modernos.',
        'Colaboración con equipos backend y UX/UI para asegurar coherencia arquitectónica.',
        'Liderazgo de entregables técnicos en entornos ágiles (SCRUM).',
        'Promoción de buenas prácticas y arquitectura modular reutilizable.',
      ],
      en: [
        'Optimized performance and accessibility, reducing load times.',
        'Designed and implemented web and mobile solutions aligned with business requirements, budget, and timelines.',
        'Developed scalable and responsive applications using modern frameworks.',
        'Collaborated with backend and UX/UI teams to ensure architectural consistency.',
        'Led technical deliverables in agile environments (SCRUM).',
        'Promoted best practices and reusable modular architecture.',
      ],
    },
    description: {
      es: 'Senior Frontend Developer encargado del diseño e implementación de soluciones web y móviles para SIMPHONY S.A.S.',
      en: 'Senior Frontend Developer in charge of designing and implementing web and mobile solutions for SIMPHONY S.A.S.',
    },
    technologies: ['React', 'Next.js', 'Astro.js', 'Vue.js', 'React Native', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'publicis',
    name: 'Publicis Global Delivery (PGD)',
    logo: 'https://github.com/drakkomaximo/drakkomaximo/assets/57687342/048f3128-5745-40a3-bc5f-eb692f75dac3',
    website: 'https://www.publicisgroupe.com/en/the-groupe/about-publicis-groupe',
    period: 'Septiembre 2023 – Marzo 2025',
    role: {
      es: 'Experience Technology Engineer',
      en: 'Experience Technology Engineer',
    },
    achievements: {
      es: [
        'Mejora en estabilidad y tiempos de respuesta en producción.',
        'Optimización de la experiencia de usuario en plataformas de alto tráfico.',
        'Desarrollo y despliegue de aplicaciones web orientadas a datos.',
        'Implementación de aplicaciones móviles multiplataforma con React Native.',
        'Desarrollo de herramientas internas con Next.js.',
        'Trabajo colaborativo bajo metodologías ágiles.',
      ],
      en: [
        'Improved stability and response times in production.',
        'Optimized UX for high-traffic platforms.',
        'Developed and deployed data-driven web applications.',
        'Implemented cross-platform mobile applications with React Native.',
        'Built internal tools using Next.js.',
        'Collaborated in agile teams (Scrum).',
      ],
    },
    description: {
      es: 'Experience Technology Engineer enfocado en aplicaciones web y móviles orientadas a datos para Publicis Global Delivery.',
      en: 'Experience Technology Engineer focused on data-driven web and mobile applications for Publicis Global Delivery.',
    },
    technologies: ['React', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'SASS', 'Salesforce', 'Veeva Vault', 'Next.js'],
  },
  {
    id: 'donrep',
    name: 'Donrep S.A.S',
    logo: 'https://user-images.githubusercontent.com/57687342/227538339-4ce66d6c-8350-48bb-9df5-9e38bf91c4c5.jpg',
    website: 'https://www.donrep.co/',
    period: 'Agosto 2022 – Marzo 2023',
    role: {
      es: 'Senior Frontend Developer',
      en: 'Senior Frontend Developer',
    },
    achievements: {
      es: [
        'Incremento del 50% en eficiencia del proceso de facturación electrónica.',
        'Mejora del rendimiento y usabilidad multiplataforma.',
        'Diseño de un sistema contable con procesos automatizados.',
        'Liderazgo de la renovación de la herramienta interna Jimmy v3.',
        'Refactorización de código aplicando estándares de accesibilidad.',
      ],
      en: [
        'Increased electronic invoicing efficiency by 50%.',
        'Improved performance and usability across platforms.',
        'Designed an accounting system with automated processes.',
        'Led the redesign of the internal tool Jimmy v3.',
        'Refactored code applying accessibility standards.',
      ],
    },
    description: {
      es: 'Senior Frontend Developer liderando la renovación de herramientas internas y sistemas contables en Donrep S.A.S.',
      en: 'Senior Frontend Developer leading the renewal of internal tools and accounting systems at Donrep S.A.S.',
    },
    technologies: ['JavaScript', 'TypeScript', 'React.js', 'React Native', 'HTML5', 'CSS3', 'Git', 'WCAG'],
  },
  {
    id: 'itglobers',
    name: 'ITGlobers',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQE57T41T0ZR8A/company-logo_200_200/0/1587092424852?e=2147483647&v=beta&t=KeWpAEzM4ESlfH0As5SRjMrj04gWb18SRZFEJoCMN7Y',
    website: 'https://itglobers.com/',
    period: 'Agosto 2021 – Agosto 2022',
    role: {
      es: 'Senior Frontend Developer',
      en: 'Senior Frontend Developer',
    },
    achievements: {
      es: [
        'Optimización de flujos y carga de datos.',
        'Mejora de consistencia visual y diseño responsivo.',
        'Mejora de UI/UX en plataformas web.',
        'Desarrollo de módulos internos escalables.',
        'Aseguramiento de estándares de código limpio.',
      ],
      en: [
        'Optimized data flows and loading.',
        'Improved visual consistency and responsive design.',
        'Improved UI/UX across web platforms.',
        'Developed scalable internal modules.',
        'Ensured clean code standards.',
      ],
    },
    description: {
      es: 'Senior Frontend Developer centrado en mejoras de UI/UX y módulos internos escalables en ITGlobers.',
      en: 'Senior Frontend Developer focused on UI/UX improvements and scalable internal modules at ITGlobers.',
    },
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'REST APIs'],
  },
  {
    id: 'rebus',
    name: 'Rebus Technology',
    logo: 'https://user-images.githubusercontent.com/57687342/227536088-d390782d-a612-4a0-86ba-1ff4efad9614.png',
    website: 'https://www.linkedin.com/company/rebus-technology/',
    period: 'Abril 2021 – Agosto 2021',
    role: {
      es: 'Senior Frontend Developer',
      en: 'Senior Frontend Developer',
    },
    achievements: {
      es: [
        'Reducción de errores en producción mediante tipado estático.',
        'Mejora del rendimiento de la interfaz.',
        'Desarrollo de la PWA Greenrun.',
        'Implementación de flujos mobile-first.',
        'Integración de APIs RESTful.',
      ],
      en: [
        'Reduced production bugs through static typing.',
        'Improved interface performance.',
        'Developed the Greenrun PWA.',
        'Implemented mobile-first flows.',
        'Integrated RESTful APIs.',
      ],
    },
    description: {
      es: 'Senior Frontend Developer responsable del desarrollo de la PWA Greenrun y flujos mobile-first en Rebus Technology.',
      en: 'Senior Frontend Developer responsible for developing the Greenrun PWA and mobile-first flows at Rebus Technology.',
    },
    technologies: ['TypeScript', 'JavaScript', 'REST APIs', 'PWA', 'Mobile-First', 'Git'],
  },
  {
    id: 'sense',
    name: 'Sense Holding S.A.S',
    logo: 'https://github.com/user-attachments/assets/a37f932e-50b7-4a64-a078-cd01fff57a3e',
    website: 'https://sense-digital.co/',
    period: 'Octubre 2019 – Abril 2021',
    role: {
      es: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    achievements: {
      es: [
        'Incremento del 30% en ventas online.',
        'Mejora en usabilidad y consistencia visual.',
        'Desarrollo de plataforma e-commerce escalable.',
        'Implementación de funcionalidades alineadas a marketing y UX.',
        'Creación de guías de estilo y componentes reutilizables.',
      ],
      en: [
        'Increased online sales by 30%.',
        'Improved usability and visual consistency.',
        'Developed a scalable e-commerce platform.',
        'Implemented features aligned with marketing and UX.',
        'Created style guides and reusable components.',
      ],
    },
    description: {
      es: 'Frontend Developer encargado del desarrollo de una plataforma e-commerce escalable para Sense Holding S.A.S.',
      en: 'Frontend Developer in charge of developing a scalable e-commerce platform for Sense Holding S.A.S.',
    },
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'UX/UI'],
  },
  {
    id: 'bit',
    name: 'Bogotá Institute of Technology (BIT)',
    logo: 'https://user-images.githubusercontent.com/57687342/227535618-7049fda7-9f72-4b24-bef3-6c7b6a830bd3.png',
    website: 'https://bit.institute/',
    period: 'Septiembre 2019 – Diciembre 2019',
    role: {
      es: 'Fullstack Angular Instructor',
      en: 'Fullstack Angular Instructor',
    },
    achievements: {
      es: [
        'Aumento en la tasa de finalización de proyectos.',
        'Formación de más de 150 mujeres en desarrollo web Full Stack.',
        'Diseño de proyectos educativos con stack MEAN.',
        'Implementación de metodologías ágiles en entornos académicos.',
        'Enfoque práctico basado en casos reales.',
      ],
      en: [
        'Increased project completion rates.',
        'Trained more than 150 women in Full Stack web development.',
        'Designed educational projects using the MEAN stack.',
        'Implemented agile methodologies in academic environments.',
        'Applied a practical, real-case-based approach.',
      ],
    },
    description: {
      es: 'Instructor Fullstack Angular en el Bogotá Institute of Technology, enfocado en formación práctica y proyectos reales.',
      en: 'Fullstack Angular Instructor at Bogotá Institute of Technology, focused on practical training and real-world projects.',
    },
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Git'],
  },
];
