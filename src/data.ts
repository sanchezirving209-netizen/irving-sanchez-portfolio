import { BlogPost, Certification, Experience, Project, Testimonial } from './types';

export const personalInfo = {
  name: "Irving Martín Sánchez",
  fullName: "Irving Martin Sanchez Sanchez",
  title: "Ingeniero en Aeronáutica & Desarrollador Tecnológico",
  email: "irvinzzmss@hotmail.com",
  phone: "5568640016",
  whatsapp: "https://wa.me/525568640016",
  linkedin: "https://www.linkedin.com/in/irvingsánchezsánchez",
  about: "Soy Ingeniero en Aeronáutica con experiencia multidisciplinaria en logística, ventas, atención al cliente, administración y resolución de problemas. Me apasiona la convergencia entre la tecnología y los procesos industriales. Tengo un interés profundo y práctico en la inteligencia artificial, la automatización, el desarrollo web y la ciberseguridad (pentesting). Mi enfoque es el aprendizaje continuo y la aplicación de nuevas tecnologías para optimizar operaciones y crear soluciones innovadoras.",
  skills: [
    "Desarrollo Web", "Inteligencia Artificial", "Ciberseguridad (Pentesting)", "Visión por Computadora",
    "Automatización de Procesos", "GitHub", "Redes Básicas", "Análisis de Datos",
    "Logística", "Administración", "Microsoft Office", "Inglés (B1)"
  ]
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Desarrollador de Proyectos de Automatización",
    company: "Proyecto Personal - CDMX",
    period: "Jul 2025 - Presente",
    description: [
      "Investigación y desarrollo de soluciones de automatización utilizando herramientas de Inteligencia Artificial (incluyendo MCP y similares).",
      "Uso de GitHub para el control y organización de proyectos.",
      "Aprendizaje y aplicación de Python y bases de datos en proyectos personales.",
      "Evaluación de tecnologías para optimizar procesos y resolver problemas."
    ]
  },
  {
    id: "exp-2",
    role: "Auxiliar de Operaciones Aeroportuarias",
    company: "Aeropuerto Internacional de la Ciudad de México (AICM)",
    period: "Jul 2023 - Feb 2025",
    description: [
      "Apoyé en actividades relacionadas con las operaciones aeroportuarias y seguimiento de procesos administrativos.",
      "Elaboré y analicé reportes técnicos y operativos.",
      "Revisé documentación conforme a la normativa aeronáutica vigente.",
      "Trabajé en equipo para apoyar la mejora y eficiencia de las actividades del área."
    ]
  },
  {
    id: "exp-3",
    role: "Auxiliar de Operaciones, Logística y Ventas",
    company: "Central de Abastos de Ciudad de México",
    period: "Jun 2020 - Ene 2023",
    description: [
      "Coordiné actividades de logística para el abastecimiento y distribución de mercancías.",
      "Gestioné inventarios, aseguré disponibilidad de productos y negocié con proveedores.",
      "Brindé atención y seguimiento a clientes, elaborando cotizaciones y dando soporte comercial.",
      "Apoyé en exportación, administré ventas y colaboré en la mejora de operaciones diarias."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Plataforma Web Empresarial",
    description: "Sistema web a medida diseñado para la gestión y digitalización de procesos de negocio, mejorando la eficiencia operativa.",
    tags: ["Desarrollo Web", "React", "Bases de Datos", "UI/UX"],
    icon: "globe"
  },
  {
    id: "proj-2",
    title: "Automatización de Marketing",
    description: "Herramienta para automatizar campañas de marketing digital, integrando análisis de datos para optimizar el alcance.",
    tags: ["Automatización", "Análisis de Datos", "APIs"],
    icon: "workflow"
  },
  {
    id: "proj-3",
    title: "Visión por Computadora Aplicada",
    description: "Sistema de integración de cámaras IP con algoritmos de visión por computadora para monitoreo y análisis de entornos.",
    tags: ["Visión por Computadora", "Cámaras IP", "Redes", "IA"],
    icon: "camera"
  },
  {
    id: "proj-4",
    title: "Aplicaciones con IA Integrada",
    description: "Desarrollo de herramientas de software que consumen modelos de inteligencia artificial para asistir en la resolución de problemas.",
    tags: ["Inteligencia Artificial", "Desarrollo de Software", "Automatización"],
    icon: "bot"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Ingeniero en Aeronáutica",
    issuer: "Instituto Politécnico Nacional (UPIIG)",
    date: "Junio 2025",
    type: "degree"
  },
  {
    id: "cert-2",
    title: "Sistemas de Gestión de la Calidad (ISO 9001:2015)",
    issuer: "Instituto Politécnico Nacional",
    date: "Septiembre 2025",
    type: "course"
  },
  {
    id: "cert-3",
    title: "Dominio del Idioma Inglés (Nivel B1)",
    issuer: "CENLEX Zacatenco, IPN",
    date: "Marzo 2026",
    type: "language"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos R.",
    role: "Director de Operaciones",
    content: "Irving tiene una capacidad única para entender problemas complejos y proponer soluciones tecnológicas prácticas. Su sistema de automatización nos ahorró horas de trabajo semanal.",
    avatarInitials: "CR"
  },
  {
    id: "test-2",
    name: "Laura M.",
    role: "Gerente Comercial",
    content: "Trabajar con Irving fue una excelente experiencia. Su atención al detalle y enfoque en el cliente aseguraron que la plataforma web superara nuestras expectativas.",
    avatarInitials: "LM"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Integración de Cámaras IP para Visión por Computadora en la Industria",
    excerpt: "Descubre cómo la implementación de sistemas de visión artificial económicos puede transformar la seguridad y el monitoreo de procesos industriales.",
    date: "15 May 2026",
    readTime: "5 min",
    category: "Visión por Computadora"
  },
  {
    id: "blog-2",
    title: "Automatización con IA: El futuro de la logística",
    excerpt: "Análisis de cómo las herramientas de inteligencia artificial están optimizando las cadenas de suministro y reduciendo tiempos muertos.",
    date: "02 Abr 2026",
    readTime: "7 min",
    category: "Inteligencia Artificial"
  },
  {
    id: "blog-3",
    title: "Fundamentos de Ciberseguridad para Plataformas Web",
    excerpt: "Una guía básica sobre pentesting y las vulnerabilidades más comunes que todo desarrollador debe conocer al crear aplicaciones web.",
    date: "18 Mar 2026",
    readTime: "6 min",
    category: "Ciberseguridad"
  }
];
