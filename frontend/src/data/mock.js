// Data sourced from Alfonso Martín's real CV

export const profile = {
  name: "Alfonso Martín",
  alias: "aka Dante",
  role: "Unity Developer & Fullstack C#",
  tagline: "Gameplay Systems · Clean Architecture · Performance",
  bio: "Unity Developer & Fullstack C# con más de 4 años de experiencia. Experto en sistemas de gameplay, arquitectura limpia y optimización de rendimiento para proyectos comerciales. Historial comprobado de entrega de experiencias interactivas de alta calidad en PC, móvil y VR.",
  location: "México",
  email: "dantedevfur@gmail.com",
  availability: "Disponible para colaboraciones",
  stats: [
    { label: "Años de experiencia", value: "4+" },
    { label: "Estudios & clientes", value: "10+" },
    { label: "Descargas mobile", value: "200K+" },
    { label: "Focus", value: "Gameplay · Tools" }
  ],
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alfonso-martin-743222255", handle: "/in/alfonso-martin" },
    { name: "Itch.io", url: "https://trash-gamez.itch.io/", handle: "trash-gamez" },
    { name: "Portfolio", url: "https://portfolio-dante-five.vercel.app/", handle: "dante-five" },
    { name: "Email", url: "mailto:dantedevfur@gmail.com", handle: "dantedevfur@gmail.com" }
  ]
};

export const skills = [
  { name: "C#", level: 95, category: "Lenguajes" },
  { name: ".NET Core / Framework", level: 90, category: "Lenguajes" },
  { name: "SQL", level: 80, category: "Lenguajes" },
  { name: "C++", level: 70, category: "Lenguajes" },
  { name: "Unity", level: 95, category: "Motores" },
  { name: "Unity XR / VR / AR", level: 85, category: "Motores" },
  { name: "Unreal Engine", level: 70, category: "Motores" },
  { name: "Gameplay Systems", level: 95, category: "Disciplinas" },
  { name: "Software Architecture", level: 90, category: "Disciplinas" },
  { name: "SOLID · Design Patterns", level: 90, category: "Disciplinas" },
  { name: "Optimización (Speed/Memory)", level: 90, category: "Disciplinas" },
  { name: "Scrum / Agile", level: 85, category: "Disciplinas" },
  { name: "Git & Pipelines", level: 90, category: "Herramientas" },
  { name: "Editor Tools (Unity)", level: 85, category: "Herramientas" },
  { name: "Debugging & Profiling", level: 90, category: "Herramientas" }
];

export const projects = [
  {
    id: 1,
    title: "VR Helsing",
    genre: "Boomer-Shooter VR",
    engine: "Unity",
    year: "2024",
    description: "Boomer-Shooter en Realidad Virtual. Controlas a Abraham Van Helsing, ex-cazador de monstruos que regresa de su retiro para detener al Dr. Frankenstein. Te enfrentas a oleadas de monstruos regenerados combinando biología y tecnología.",
    role: "Gameplay Programmer @ Trash Gamez",
    tags: ["C#", "Unity", "VR", "Shooter"],
    color: "#6B4423",
    image: "https://portfolio-dante-five.vercel.app/media/VRHelsing.png",
    links: [
      { store: "Steam", url: "https://store.steampowered.com/app/3540160/VR_Helsing/" },
      { store: "Itch.io", url: "https://trash-gamez.itch.io/vr-helsing" }
    ]
  },
  {
    id: 2,
    title: "Crazy Delivery",
    genre: "Arcade · Conducción",
    engine: "Unity",
    year: "2023",
    description: "Juego arcade de conducción donde eres un repartidor de pizzas. Selecciona distintos tipos de vehículos y conduce de manera caótica por la ciudad entregando pedidos a contrarreloj.",
    role: "Gameplay Programmer @ Trash Gamez",
    tags: ["C#", "Unity", "Mobile", "Arcade"],
    color: "#D97706",
    image: "https://portfolio-dante-five.vercel.app/media/CrazyDelivery.png",
    links: [
      { store: "Google Play", url: "https://play.google.com/store/apps/details?id=com.TrashGamez.CrazyDelivery" }
    ]
  },
  {
    id: 3,
    title: "Patito",
    genre: "Educativo · Narrativo",
    engine: "Unity",
    year: "2023",
    description: "Juego educativo hecho para que padres, tutores y profesores puedan hablar acerca de los límites corporales con los niños. Incluye una guía para padres/tutores para acompañar el cuento. Proyecto galardonado con el Unity for Humanity award.",
    role: "Unity Developer @ Pink Bear Games",
    tags: ["C#", "Unity", "Mobile", "Educativo"],
    color: "#E879A6",
    image: "https://portfolio-dante-five.vercel.app/media/Patito.png",
    links: [
      { store: "Google Play", url: "https://play.google.com/store/apps/details?id=com.PinkBearGames.Patito" }
    ]
  },
  {
    id: 4,
    title: "Dou Evoluciones",
    genre: "Idle · Casual",
    engine: "Unity",
    year: "2023",
    description: "Juego idle casual que te lleva a un viaje de combinaciones y mutaciones. Combina y evoluciona distintas especies del Dou de Benja Calero, descubre mutaciones y colecciona cartas únicas. Más de 200K descargas acumuladas.",
    role: "Unity Developer @ Arakuma Studio",
    tags: ["C#", "Unity", "Mobile", "Idle"],
    color: "#3F5A3A",
    image: "https://portfolio-dante-five.vercel.app/media/DouEvoluciones.png",
    links: [
      { store: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ArakumaStudio.DouEvolutions" }
    ]
  },
  {
    id: 5,
    title: "Nether Dungeons",
    genre: "Dungeon Crawler",
    engine: "Unity",
    year: "2024",
    description: "Dungeon crawler lleno de acción con mazmorras generadas proceduralmente, monstruos mortales, jefes poderosos y tesoros ocultos. Juega como Farfadox o un repertorio de héroes peculiares con habilidades únicas.",
    role: "Unity Developer @ Arakuma Studio",
    tags: ["C#", "Unity", "Procedural", "RPG"],
    color: "#2D4A2B",
    image: "https://portfolio-dante-five.vercel.app/media/NetherDungeons.png",
    links: [
      { store: "Steam", url: "https://play.google.com/store/apps/details?id=com.ArakumaStudio.NetherDungeons&hl=es_MX" }
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Cionet Solutions",
    role: "Fullstack C# Developer",
    period: "Oct 2025 — Mar 2026",
    location: "Ciudad de México, México",
    description: "Arquitectura y despliegue de sistemas escalables en C# y .NET Core (+15% uptime). Optimización del rendimiento de aplicaciones existentes reduciendo tiempos de respuesta en 25%. Colaboración en equipos Agile cross-funcionales (+10% sprint velocity). Revisiones de código y testing automatizado (-20% bugs post-release).",
    icon: "code",
    url: null
  },
  {
    id: 2,
    company: "Trash Gamez",
    role: "Co-Founder / Programming Lead",
    period: "Ago 2023 — Mar 2026",
    location: "Ciudad de México, México",
    description: "Liderazgo técnico de múltiples proyectos de videojuegos (3+ títulos desde prototipo a demo jugable). Diseño e implementación de la arquitectura core de gameplay en Unity (+20% eficiencia vía código modular). Dirección de equipo multidisciplinario bajo Agile (+15% sprint delivery). Pipelines técnicos y estándares de calidad (-30% tiempo de debug post-build).",
    icon: "briefcase",
    url: "http://trashgamez.net/"
  },
  {
    id: 3,
    company: "Pink Bear Games",
    role: "Unity Developer / Gameplay Programmer",
    period: "May 2022 — Feb 2026",
    location: "Playa del Carmen, México",
    description: "Mecánicas y sistemas core de gameplay en C# y SQL (+15% estabilidad). Gestión de builds cross-platform y despliegue en múltiples storefronts (-20% errores de deployment). Rol clave en proyecto ganador del Unity for Humanity award. Soporte post-lanzamiento resolviendo 50+ bugs críticos y optimizaciones (+10% duración de sesión).",
    icon: "wrench",
    url: "https://pinkbeargames.com/"
  },
  {
    id: 4,
    company: "Arakuma Studio",
    role: "Unity Developer / Gameplay Programmer",
    period: "Dic 2023 — Abr 2025",
    location: "Panamá, Panamá",
    description: "Desarrollo de sistemas core de gameplay en Unity (C#) para títulos mobile de alto tráfico (+200K descargas acumuladas). Herramientas internas y editor extensions automatizando tareas repetitivas (-20% tiempo de integración de assets). Sistemas performance-critical (+15% FPS en dispositivos low-end). Features cross-platform iOS/Android con 99.9% crash-free rate.",
    icon: "code",
    url: "https://arakuma.io/"
  },
  {
    id: 5,
    company: "Universidad Amerike",
    role: "B.S. Desarrollo de Software Interactivo e Ingeniería de Videojuegos",
    period: "2025 — GPA 3.48",
    location: "Ciudad de México, México",
    description: "Licenciatura en Desarrollo de Software Interactivo e Ingeniería de Videojuegos, con minor en Game Engine Architecture (Unity). Proyectos académicos enfocados en sistemas de gameplay, arquitectura de motores y pipelines de producción.",
    icon: "graduation",
    url: "https://amerike.edu.mx/"
  }
];

// Brand cards — includes studios, clients and institutions.
// `type: "image"` uses /public/logos files; `type: "text"` renders a pixel-style wordmark.
export const companies = [
  { id: 1, name: "Trash Gamez", url: "http://trashgamez.net/", type: "image", logo: "/logos/trashgamez.png", bg: "#FBF6E9" },
  { id: 2, name: "Arakuma Studio", url: "https://arakuma.io/", type: "image", logo: "/logos/arakuma.png", bg: "#7C3AED" },
  { id: 3, name: "Pink Bear Games", url: "https://pinkbeargames.com/", type: "pixel", bg: "#FBF6E9" },
  { id: 4, name: "Cionet Solutions", url: "https://cionet.com/", type: "text", label: "CIONET", color: "#0E7490", bg: "#ECFEFF" },
  { id: 5, name: "Keywords Studios", url: "https://www.keywordsstudios.com/", type: "text", label: "KEYWORDS", color: "#DC2626", bg: "#FEF2F2" },
  { id: 6, name: "Dominos Pizza", url: "https://www.dominos.com.mx/", type: "image", logo: "/logos/dominos.png", bg: "#FBF6E9" },
  { id: 7, name: "Vips", url: "https://vips.com.mx/", type: "text", label: "VIPS", color: "#B45309", bg: "#FFFBEB" },
  { id: 8, name: "Liverpool", url: "https://www.liverpool.com.mx/", type: "text", label: "LIVERPOOL", color: "#BE185D", bg: "#FDF2F8" },
  { id: 9, name: "Universidad Amerike", url: "https://amerike.edu.mx/", type: "image", logo: "/logos/amerike.png", bg: "#0F0F10" },
  { id: 10, name: "GamaCon", url: "#", type: "image", logo: "/logos/gamacon.png", bg: "#1A1A1F" },
  { id: 11, name: "GameJam Plus", url: "https://gamejamplus.com/", type: "image", logo: "/logos/gamejamplus.png", bg: "#F59EAC" }
];

export const events = [
  {
    id: 1,
    title: "GameJam Plus",
    role: "Participante · Gameplay Programmer",
    date: "2024 — 2025",
    location: "México · Global",
    description: "Participación en ediciones consecutivas de GameJam Plus, la jam internacional de mayor alcance en LATAM. Desarrollo de prototipos jugables en formato equipo durante fines de semana intensivos.",
    tag: "Game Jam",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Latin American Showcase",
    role: "Expositor",
    date: "Reciente",
    location: "LATAM",
    description: "Showcase regional para devs latinoamericanos donde presenté proyectos del estudio y establecí conexiones con publishers y otros estudios de la región.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 3,
    title: "Electronic Game Show (EGS)",
    role: "Asistente & Networking",
    date: "Anual",
    location: "Ciudad de México",
    description: "Uno de los eventos gamer más grandes de México. Asistencia a paneles técnicos, networking con estudios y publishers, y exploración de tendencias de la industria.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 4,
    title: "Gamergy",
    role: "Asistente",
    date: "Reciente",
    location: "LATAM",
    description: "Festival multiplataforma de videojuegos, esports y cultura gamer. Contacto con comunidades de jugadores competitivos y publishers mobile.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 5,
    title: "Pixelatl",
    role: "Asistente · Industria",
    date: "Anual",
    location: "Cuernavaca, México",
    description: "Festival de animación, cine y videojuegos. Asistencia al track de videojuegos con paneles de estudios latinoamericanos referentes y networking con publishers.",
    tag: "Conferencia",
    icon: "mic"
  },
  {
    id: 6,
    title: "GCMX · Game Conference México",
    role: "Asistente · Industria",
    date: "Anual",
    location: "Ciudad de México",
    description: "Conferencia profesional enfocada en el desarrollo de videojuegos en México. Charlas técnicas, business y paneles con estudios nacionales e internacionales.",
    tag: "Conferencia",
    icon: "mic"
  },
  {
    id: 7,
    title: "Liverpool Gaming Fest",
    role: "Participante",
    date: "Reciente",
    location: "Ciudad de México",
    description: "Festival corporativo de gaming y videojuegos organizado por Liverpool. Participación como desarrollador invitado mostrando proyectos y colaborando con el equipo de la marca.",
    tag: "Expo",
    icon: "award"
  }
];
