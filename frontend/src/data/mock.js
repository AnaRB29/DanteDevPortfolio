// Mock data for Alfonso Martín's portfolio (raccoon-themed game dev)

export const profile = {
  name: "Alfonso Martín",
  role: "Desarrollador de Software & Videojuegos",
  tagline: "Gameplay Programming & Tool Development",
  bio: "Ingeniero en Desarrollo de Videojuegos con conocimiento en distintos lenguajes de programación. Destaco por mi capacidad para aprender rápidamente nuevas tecnologías y mantenerme a la vanguardia. Me apasiona la resolución creativa de problemas. Mi enfoque está en la Programación de Gameplay y el Desarrollo de Herramientas.",
  location: "Madrid, España",
  email: "alfonso.martin@mapache.dev",
  availability: "Disponible para proyectos freelance",
  stats: [
    { label: "Años de experiencia", value: "5+" },
    { label: "Juegos publicados", value: "12" },
    { label: "Herramientas creadas", value: "8" },
    { label: "Game Jams", value: "20+" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com", handle: "@alfonsomartin" },
    { name: "LinkedIn", url: "https://linkedin.com", handle: "/in/alfonsomartin" },
    { name: "Itch.io", url: "https://itch.io", handle: "alfonso.itch.io" },
    { name: "Twitter", url: "https://twitter.com", handle: "@alfonso_dev" }
  ]
};

export const skills = [
  { name: "C#", level: 95, category: "Lenguajes" },
  { name: "C++", level: 85, category: "Lenguajes" },
  { name: "Python", level: 80, category: "Lenguajes" },
  { name: "JavaScript", level: 75, category: "Lenguajes" },
  { name: "Unity", level: 95, category: "Motores" },
  { name: "Unreal Engine", level: 80, category: "Motores" },
  { name: "Godot", level: 70, category: "Motores" },
  { name: "GameMaker", level: 65, category: "Motores" },
  { name: "Git / GitHub", level: 90, category: "Herramientas" },
  { name: "Blender", level: 70, category: "Herramientas" },
  { name: "Aseprite", level: 85, category: "Herramientas" },
  { name: "FMOD / Wwise", level: 75, category: "Herramientas" }
];

export const projects = [
  {
    id: 1,
    title: "Trash Panda Odyssey",
    genre: "Aventura / Plataformas",
    engine: "Unity",
    year: "2024",
    description: "Un mapache recorre la ciudad nocturna recolectando tesoros mientras evita a los guardias. Pixel art 2D con física personalizada.",
    role: "Gameplay Programmer & Lead Dev",
    tags: ["C#", "Unity", "2D", "Pixel Art"],
    color: "#6B4423",
    emoji: "pl"
  },
  {
    id: 2,
    title: "Forest Keeper",
    genre: "RPG / Exploración",
    engine: "Unreal Engine",
    year: "2023",
    description: "RPG de exploración en un bosque encantado. Sistema de crafteo con hierbas y herramientas procedurales.",
    role: "Tools Developer",
    tags: ["C++", "Unreal", "RPG", "Procedural"],
    color: "#2D4A2B",
    emoji: "rp"
  },
  {
    id: 3,
    title: "Nocturnal",
    genre: "Sigilo / Puzzle",
    engine: "Godot",
    year: "2023",
    description: "Juego de sigilo donde controlas un mapache ladrón. IA de enemigos basada en visión y sonido.",
    role: "Solo Developer",
    tags: ["GDScript", "Godot", "AI", "Stealth"],
    color: "#3F5A3A",
    emoji: "st"
  },
  {
    id: 4,
    title: "Pixel Forge",
    genre: "Herramienta",
    engine: "Unity Editor",
    year: "2024",
    description: "Editor de tilesets pixel art integrado en Unity. Exportación directa a atlas y animaciones.",
    role: "Tool Developer",
    tags: ["C#", "Editor", "Pipeline"],
    color: "#D97706",
    emoji: "tl"
  },
  {
    id: 5,
    title: "Raccoon Racers",
    genre: "Arcade / Multijugador",
    engine: "Unity",
    year: "2022",
    description: "Carreras multijugador local con mapaches en kart. Física arcade y netcode rollback experimental.",
    role: "Gameplay Programmer",
    tags: ["C#", "Multiplayer", "Arcade"],
    color: "#8B5A2B",
    emoji: "mp"
  },
  {
    id: 6,
    title: "Tiny Woods",
    genre: "Simulación",
    engine: "Godot",
    year: "2022",
    description: "Simulador de vida en miniatura. Un mapache gestiona su bosque y construye refugios con objetos reciclados.",
    role: "Designer & Programmer",
    tags: ["GDScript", "Sim", "Cozy"],
    color: "#4A6B3A",
    emoji: "sm"
  }
];

export const experience = [
  {
    id: 1,
    company: "Hidden Burrow Studios",
    role: "Gameplay Programmer Senior",
    period: "2023 - Presente",
    description: "Liderando el desarrollo de mecánicas de juego y sistemas de IA para título AA en Unreal Engine. Mentor técnico del equipo junior.",
    icon: "briefcase"
  },
  {
    id: 2,
    company: "Moonlit Games",
    role: "Tools Developer",
    period: "2021 - 2023",
    description: "Desarrollo de herramientas internas en Unity Editor para agilizar pipelines de arte y narrativa. Reducción de tiempos de iteración en un 40%.",
    icon: "wrench"
  },
  {
    id: 3,
    company: "Pixel Forest Indie",
    role: "Gameplay Programmer",
    period: "2020 - 2021",
    description: "Primera experiencia profesional. Programación de gameplay 2D en Unity para dos títulos indie publicados en Steam.",
    icon: "code"
  },
  {
    id: 4,
    company: "Universidad Politécnica",
    role: "Ingeniería en Desarrollo de Videojuegos",
    period: "2016 - 2020",
    description: "Grado en Ingeniería del Software con especialización en videojuegos. Proyecto final premiado en la gala de egresados.",
    icon: "graduation"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Laura Vega",
    role: "Game Director, Hidden Burrow",
    text: "Alfonso tiene un talento raro: resuelve problemas técnicos complejos con soluciones elegantes y además sabe comunicarlas al equipo. Su código es tan limpio como el pelaje de un mapache bien bañado.",
    avatarBg: "#6B4423"
  },
  {
    id: 2,
    name: "Diego Ruiz",
    role: "Art Director, Moonlit Games",
    text: "Las herramientas que construyó cambiaron por completo nuestro flujo de trabajo. Cada artista del estudio le debe horas de su vida recuperadas.",
    avatarBg: "#2D4A2B"
  },
  {
    id: 3,
    name: "Marina Sol",
    role: "Indie Dev, Pixel Forest",
    text: "Trabajar con Alfonso es como tener a un mapache curioso en tu equipo: siempre explorando, siempre encontrando la ruta más creativa al objetivo.",
    avatarBg: "#D97706"
  }
];

export const devlogs = [
  {
    id: 1,
    title: "Cómo construí un sistema de IA sigilosa para mi mapache ladrón",
    date: "12 Jun 2024",
    readTime: "8 min",
    excerpt: "Un desglose completo del sistema de percepción enemiga en Nocturnal: conos de visión, memoria auditiva y máquinas de estado jerárquicas.",
    tag: "Gameplay"
  },
  {
    id: 2,
    title: "Pixel Perfect en Unity: guía definitiva",
    date: "28 Abr 2024",
    readTime: "12 min",
    excerpt: "Cámara, filtros, texturas y snapping. Todo lo que aprendí haciendo Trash Panda Odyssey para que tu pixel art no se deforme.",
    tag: "Tutorial"
  },
  {
    id: 3,
    title: "Editor Tools: ahorrando 40% del tiempo del equipo",
    date: "15 Feb 2024",
    readTime: "6 min",
    excerpt: "La filosofía detrás de Pixel Forge y cómo entender el workflow del artista cambió mi forma de programar herramientas.",
    tag: "Tools"
  }
];
