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

export const companies = [
  {
    id: 1,
    name: "Hidden Burrow Studios",
    industry: "AA Game Studio",
    period: "2023 - Presente",
    description: "Estudio especializado en juegos narrativos de mundo abierto. Colaboro liderando sistemas de gameplay y IA.",
    color: "#2D4A2B",
    initials: "HB"
  },
  {
    id: 2,
    name: "Moonlit Games",
    industry: "Indie Studio",
    period: "2021 - 2023",
    description: "Estudio indie enfocado en experiencias cozy. Construí el toolkit interno para el equipo de arte y narrativa.",
    color: "#6B4423",
    initials: "MG"
  },
  {
    id: 3,
    name: "Pixel Forest Indie",
    industry: "Indie Collective",
    period: "2020 - 2021",
    description: "Colectivo indie de desarrolladores. Programé gameplay 2D en Unity para dos títulos publicados en Steam.",
    color: "#D97706",
    initials: "PF"
  },
  {
    id: 4,
    name: "Lumen Interactive",
    industry: "Serious Games",
    period: "2022",
    description: "Freelance. Desarrollo de prototipo educativo para museo de ciencias: simulación interactiva de ecosistemas.",
    color: "#3F5A3A",
    initials: "LI"
  },
  {
    id: 5,
    name: "Crafty Bear Games",
    industry: "Mobile Studio",
    period: "2021",
    description: "Consultoría técnica para optimización de rendimiento en un título móvil de puzzles con millones de descargas.",
    color: "#8B5A2B",
    initials: "CB"
  },
  {
    id: 6,
    name: "NightOwl Arcade",
    industry: "Arcade Publisher",
    period: "2020",
    description: "Port y adaptación de un arcade retro a PC moderno. Integración de leaderboards online y logros.",
    color: "#4A6B3A",
    initials: "NO"
  }
];

export const events = [
  {
    id: 1,
    title: "Global Game Jam 2024",
    role: "Participante - Gameplay Programmer",
    date: "26-28 Ene 2024",
    location: "Madrid, España",
    description: "48 horas creando un prototipo en equipo sobre el tema 'Make me laugh'. Nuestro juego de mapaches comediantes quedó en el top 10 local.",
    tag: "Game Jam",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Gamelab Barcelona 2023",
    role: "Ponente - 'Pixel Perfect en motores modernos'",
    date: "28-30 Jun 2023",
    location: "Barcelona, España",
    description: "Charla técnica sobre técnicas de renderizado pixel art en Unity y Unreal frente a una audiencia de 200+ desarrolladores.",
    tag: "Conferencia",
    icon: "mic"
  },
  {
    id: 3,
    title: "Ludum Dare 54",
    role: "Solo Developer",
    date: "Oct 2023",
    location: "Online",
    description: "48h en solitario con tema 'Limited Space'. Publicado 'Tiny Woods Jam' en itch.io, puntuación 4.3/5 en categoría de innovación.",
    tag: "Game Jam",
    icon: "trophy"
  },
  {
    id: 4,
    title: "Unity Unite Madrid 2023",
    role: "Asistente + Workshop DOTS",
    date: "15 Mar 2023",
    location: "Madrid, España",
    description: "Workshop intensivo de Unity DOTS y ECS. Aplicado posteriormente al sistema de multitudes de Trash Panda Odyssey.",
    tag: "Workshop",
    icon: "book"
  },
  {
    id: 5,
    title: "IndieDevDay 2022",
    role: "Expositor - Demo 'Nocturnal'",
    date: "8-9 Oct 2022",
    location: "Barcelona, España",
    description: "Stand propio mostrando demo jugable de Nocturnal. Ganador del premio 'Mejor Sigilo Indie' del evento.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 6,
    title: "GameDevMeetup Madrid",
    role: "Organizador mensual",
    date: "2021 - Presente",
    location: "Madrid, España",
    description: "Co-organizo meetups mensuales para la comunidad local de desarrolladores: charlas, playtest nights y networking.",
    tag: "Comunidad",
    icon: "users"
  }
];
