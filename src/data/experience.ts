export interface Company {
  id: string;
  name: string;
  logo: string;
  website: string;
  period: string;
  role: {
    es: string;
    en: string;
  };
  achievements: {
    es: string[];
    en: string[];
  };
  description: {
    es: string;
    en: string;
  };
  technologies?: string[];
}

export const companies: Company[] = [
  {
    id: 'purrfect',
    name: 'Purrfect Hire',
    logo: 'https://github.com/user-attachments/assets/47cee5f8-38c2-4a40-83f6-cff115040814',
    website: 'https://purrfecthire.com/',
    period: '2025 - Presente',
    role: {
      es: 'Senior Developer',
      en: 'Senior Developer'
    },
    achievements: {
      es: [
        'Desarrollo de plataforma de reclutamiento con React y Node.js',
        'Implementación de IA en procesos de selección usando Python y TensorFlow',
        'Arquitectura de microservicios escalable'
      ],
      en: [
        'Development of recruitment platform with React and Node.js',
        'AI implementation in selection processes using Python and TensorFlow',
        'Scalable microservices architecture'
      ]
    },
    description: {
      es: 'Plataforma de reclutamiento con tecnología de vanguardia',
      en: 'Cutting-edge recruitment platform'
    },
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'TensorFlow', 'AWS']
  },
  {
    id: 'simphony',
    name: 'Simphony',
    logo: 'https://github.com/user-attachments/assets/2d943268-9872-4f9a-b894-cefa758ec305',
    website: 'https://simphony.com.co/',
    period: '2025 - Presente',
    role: {
      es: 'Tech Consultant',
      en: 'Tech Consultant'
    },
    achievements: {
      es: [
        'Consultoría en transformación digital para empresas Fortune 500',
        'Implementación de soluciones cloud con AWS y Azure',
        'Mentoría en tecnologías emergentes a equipos de 15+ desarrolladores'
      ],
      en: [
        'Digital transformation consulting for Fortune 500 companies',
        'Cloud solutions implementation with AWS and Azure',
        'Mentoring in emerging technologies for teams of 15+ developers'
      ]
    },
    description: {
      es: 'Empresa de consultoría en tecnología y transformación digital',
      en: 'Technology and digital transformation consulting company'
    },
    technologies: ['AWS', 'Azure', 'Python', 'Kubernetes', 'Terraform', 'MongoDB']
  },
  {
    id: 'publicis',
    name: 'Publicis Groupe',
    logo: 'https://github.com/drakkomaximo/drakkomaximo/assets/57687342/048f3128-5745-40a3-bc5f-eb692f75dac3',
    website: 'https://www.publicisgroupe.com/en/the-groupe/about-publicis-groupe',
    period: '2024 - 2025',
    role: {
      es: 'Lead Developer',
      en: 'Lead Developer'
    },
    achievements: {
      es: [
        'Liderazgo de proyectos internacionales para clientes Fortune 100',
        'Desarrollo de soluciones innovadoras de marketing digital',
        'Colaboración con equipos globales distribuidos en 5 continentes'
      ],
      en: [
        'Leadership of international projects for Fortune 100 clients',
        'Development of innovative digital marketing solutions',
        'Collaboration with global teams distributed across 5 continents'
      ]
    },
    description: {
      es: 'Grupo global de comunicaciones y marketing con presencia en 100+ países',
      en: 'Global communications and marketing group with presence in 100+ countries'
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Docker']
  },
  {
    id: 'donrep',
    name: 'Don Rep',
    logo: 'https://user-images.githubusercontent.com/57687342/227538339-4ce66d6c-8350-48bb-9df5-9e38bf91c4c5.jpg',
    website: 'https://www.donrep.co/',
    period: '2024 - 2024',
    role: {
      es: 'Consultor Técnico',
      en: 'Technical Consultant'
    },
    achievements: {
      es: [
        'Consultoría en arquitectura de software para startups tecnológicas',
        'Implementación de mejores prácticas de desarrollo y DevOps',
        'Capacitación a equipos técnicos en metodologías ágiles'
      ],
      en: [
        'Software architecture consulting for tech startups',
        'Development and DevOps best practices implementation',
        'Technical team training in agile methodologies'
      ]
    },
    description: {
      es: 'Empresa de consultoría tecnológica especializada en startups',
      en: 'Technology consulting company specialized in startups'
    },
    technologies: ['Node.js', 'React', 'AWS', 'Docker', 'PostgreSQL', 'Git']
  },
  {
    id: 'itglobers',
    name: 'IT Globers',
    logo: 'https://media.licdn.com/dms/image/C4E0BAQE57T41T0ZR8A/company-logo_200_200/0/1587092424852?e=2147483647&v=beta&t=KeWpAEzM4ESlfH0As5SRjMrj04gWb18SRZFEJoCMN7Y',
    website: 'https://itglobers.com/',
    period: '2023 - 2024',
    role: {
      es: 'Senior Full Stack Developer',
      en: 'Senior Full Stack Developer'
    },
    achievements: {
      es: [
        'Desarrollo de aplicaciones enterprise con arquitectura modular',
        'Integración de sistemas complejos usando APIs REST y GraphQL',
        'Optimización de rendimiento mejorando velocidad en 40%'
      ],
      en: [
        'Enterprise application development with modular architecture',
        'Complex systems integration using REST and GraphQL APIs',
        'Performance optimization improving speed by 40%'
      ]
    },
    description: {
      es: 'Empresa global de desarrollo de software',
      en: 'Global software development company'
    },
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'GraphQL', 'Azure']
  },
  {
    id: 'rebus',
    name: 'Rebus Technology',
    logo: 'https://user-images.githubusercontent.com/57687342/227536088-d390782d-a612-4a0-86ba-1ff4efad9614.png',
    website: 'https://www.linkedin.com/company/rebus-technology/',
    period: '2022 - 2023',
    role: {
      es: 'Tech Lead',
      en: 'Tech Lead'
    },
    achievements: {
      es: [
        'Arquitectura de sistemas escalables para procesar 1M+ transacciones/día',
        'Implementación de microservicios con Spring Boot y Docker',
        'Liderazgo de equipos de desarrollo de 8+ ingenieros'
      ],
      en: [
        'Scalable systems architecture processing 1M+ transactions/day',
        'Microservices implementation with Spring Boot and Docker',
        'Development team leadership of 8+ engineers'
      ]
    },
    description: {
      es: 'Empresa de tecnología enfocada en soluciones innovadoras para fintech',
      en: 'Technology company focused on innovative fintech solutions'
    },
    technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Redis', 'ELK Stack']
  },
  {
    id: 'sense',
    name: 'Sense Digital',
    logo: 'https://github.com/user-attachments/assets/a37f932e-50b7-4a64-a078-cd01fff57a3e',
    website: 'https://sense-digital.co/',
    period: '2021 - 2022',
    role: {
      es: 'Desarrollador Frontend Senior',
      en: 'Senior Frontend Developer'
    },
    achievements: {
      es: [
        'Liderazgo técnico en proyectos de gran escala para clientes corporativos',
        'Implementación de arquitecturas modernas con React y TypeScript',
        'Mentoría a desarrolladores junior y mid-level'
      ],
      en: [
        'Technical leadership in large-scale projects for corporate clients',
        'Modern architecture implementation with React and TypeScript',
        'Mentoring of junior and mid-level developers'
      ]
    },
    description: {
      es: 'Agencia digital especializada en transformación digital y UX/UI',
      en: 'Digital agency specialized in digital transformation and UX/UI'
    },
    technologies: ['React', 'TypeScript', 'Next.js', 'Styled Components', 'Jest', 'Cypress']
  },
  {
    id: 'bit',
    name: 'BIT Institute',
    logo: 'https://user-images.githubusercontent.com/57687342/227535618-7049fda7-9f72-4b24-bef3-6c7b6a830bd3.png',
    website: 'https://bit.institute/',
    period: '2020 - 2021',
    role: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer'
    },
    achievements: {
      es: [
        'Desarrollo de aplicaciones web con React y Node.js para plataforma educativa',
        'Implementación de APIs RESTful para gestión de cursos y estudiantes',
        'Trabajo en equipo con metodologías ágiles (Scrum)'
      ],
      en: [
        'Web application development with React and Node.js for educational platform',
        'RESTful API implementation for course and student management',
        'Teamwork with agile methodologies (Scrum)'
      ]
    },
    description: {
      es: 'Instituto de tecnología especializado en formación de desarrolladores',
      en: 'Technology institute specialized in developer training'
    },
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Stripe']
  }
];
