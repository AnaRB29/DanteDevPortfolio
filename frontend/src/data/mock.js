// Real data sourced from https://portfolio-dante-five.vercel.app/

export const profile = {
  name: "Dante",
  role: "Videogame Development Engineer",
  tagline: "Gameplay Programming & Tool Development",
  bio: "Ingeniero en Desarrollo de Videojuegos con conocimiento en distintos lenguajes de programación. Destaco por mi capacidad para aprender rápidamente nuevas tecnologías y mantenerme a la vanguardia. Me apasiona la resolución creativa de problemas. Mi enfoque está en la Programación de Gameplay y el Desarrollo de Herramientas.",
  location: "Remoto · Disponible",
  email: "dantedevfur@gmail.com",
  availability: "Disponible para proyectos",
  stats: [
    { label: "Juegos publicados", value: "5" },
    { label: "Estudios", value: "3" },
    { label: "Plataformas", value: "PC · VR · Mobile" },
    { label: "Focus", value: "Gameplay · Tools" }
  ],
  socials: [
    { name: "Itch.io", url: "https://trash-gamez.itch.io/", handle: "trash-gamez" },
    { name: "Email", url: "mailto:dantedevfur@gmail.com", handle: "dantedevfur@gmail.com" }
  ]
};

export const skills = [
  { name: "C#", level: 95, category: "Lenguajes" },
  { name: "C++", level: 80, category: "Lenguajes" },
  { name: "Python", level: 75, category: "Lenguajes" },
  { name: "Unity", level: 95, category: "Motores" },
  { name: "Unity XR / VR", level: 85, category: "Motores" },
  { name: "Unity Mobile", level: 90, category: "Motores" },
  { name: "Gameplay Programming", level: 95, category: "Disciplinas" },
  { name: "Tool Development", level: 90, category: "Disciplinas" },
  { name: "Procedural Generation", level: 80, category: "Disciplinas" }
];

export const projects = [
  {
    id: 1,
    title: "VR Helsing",
    genre: "Boomer-Shooter VR",
    engine: "Unity",
    year: "2024",
    description: "Boomer-Shooter en Realidad Virtual. Controlas a Abraham Van Helsing, ex-cazador de monstruos que regresa de su retiro para detener al Dr. Frankenstein. Te enfrentas a oleadas de monstruos regenerados combinando biología y tecnología.",
    role: "Gameplay Programmer @ TrashGamez",
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
    role: "Gameplay Programmer @ TrashGamez",
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
    description: "Juego educativo hecho para que padres, tutores y profesores puedan hablar acerca de los límites corporales con los niños. Incluye una guía para padres/tutores para acompañar el cuento.",
    role: "Gameplay Programmer @ PinkBear Games",
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
    description: "Juego idle casual que te lleva a un viaje de combinaciones y mutaciones. Combina y evoluciona distintas especies del Dou de Benja Calero, descubre mutaciones y colecciona cartas únicas.",
    role: "Gameplay Programmer @ Arakuma Studios",
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
    description: "Dungeon crawler lleno de acción que pone a prueba tus habilidades mientras luchas a través de mazmorras generadas proceduralmente con monstruos mortales, jefes poderosos y tesoros ocultos. Juega como Farfadox o un repertorio de héroes peculiares.",
    role: "Gameplay Programmer @ Arakuma Studios",
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
    company: "TrashGamez",
    role: "Gameplay Programmer",
    period: "VR Helsing · Crazy Delivery",
    description: "Desarrollo de gameplay para títulos arcade y de realidad virtual. Programación de mecánicas de combate, físicas y sistemas de progresión para PC, VR y mobile.",
    icon: "briefcase",
    url: "http://trashgamez.net/"
  },
  {
    id: 2,
    company: "Arakuma Studios",
    role: "Gameplay Programmer",
    period: "Dou Evoluciones · Nether Dungeons",
    description: "Implementación de sistemas idle, generación procedural de mazmorras, combate, IA de enemigos y pipelines de contenido para títulos mobile y PC.",
    icon: "code",
    url: "https://arakuma.io/"
  },
  {
    id: 3,
    company: "PinkBear Games",
    role: "Gameplay Programmer",
    period: "Patito",
    description: "Desarrollo de un juego educativo y narrativo para mobile enfocado en sensibilizar sobre límites corporales, con una guía integrada para padres y tutores.",
    icon: "wrench",
    url: "https://pinkbeargames.com/"
  }
];

// Company logos for the carousel (local assets in /public/logos)
export const companies = [
  {
    id: 1,
    name: "TrashGamez",
    url: "http://trashgamez.net/",
    logo: "/logos/trashgamez.png",
    bg: "#FBF6E9"
  },
  {
    id: 2,
    name: "Arakuma Studios",
    url: "https://arakuma.io/",
    logo: "/logos/arakuma.png",
    bg: "#FBF6E9"
  },
  {
    id: 3,
    name: "PinkBear Games",
    url: "https://pinkbeargames.com/",
    logo: null, // Pixel placeholder rendered inline
    bg: "#FBF6E9"
  }
];

export const events = [
  {
    id: 1,
    title: "Global Game Jam",
    role: "Participante - Gameplay Programmer",
    date: "Anual",
    location: "Remoto / Local",
    description: "Participación recurrente en la Global Game Jam creando prototipos jugables en 48 horas junto a equipos multidisciplinarios.",
    tag: "Game Jam",
    icon: "trophy"
  },
  {
    id: 2,
    title: "Ludum Dare",
    role: "Solo Developer",
    date: "Multiple",
    location: "Online",
    description: "Jams en solitario de 48 horas para experimentar con mecánicas, prototipado rápido y pulido en sprints cortos.",
    tag: "Game Jam",
    icon: "trophy"
  },
  {
    id: 3,
    title: "VR Development Workshop",
    role: "Asistente & Aprendizaje",
    date: "2024",
    location: "Online",
    description: "Formación intensiva en desarrollo XR para Unity aplicada posteriormente al proyecto VR Helsing.",
    tag: "Workshop",
    icon: "book"
  },
  {
    id: 4,
    title: "Publicación en Steam",
    role: "Lanzamiento de VR Helsing",
    date: "2024",
    location: "Global",
    description: "Hito de publicación y soporte post-lanzamiento de VR Helsing en la tienda de Steam con integración de logros y stats.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 5,
    title: "Publicaciones en Google Play",
    role: "Lanzamiento de títulos mobile",
    date: "2023 - 2024",
    location: "Global",
    description: "Proceso completo de publicación, certificación y mantenimiento de Crazy Delivery, Patito y Dou Evoluciones en Google Play.",
    tag: "Expo",
    icon: "award"
  },
  {
    id: 6,
    title: "Comunidad GameDev",
    role: "Networking y colaboración",
    date: "Continuo",
    location: "Remoto",
    description: "Colaboración continua con colegas de TrashGamez, Arakuma Studios y PinkBear Games en proyectos cross-studio y mentoría técnica.",
    tag: "Comunidad",
    icon: "users"
  }
];
