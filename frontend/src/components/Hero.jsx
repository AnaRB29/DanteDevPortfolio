import { ArrowDown, Github, Linkedin, Gamepad2 } from "lucide-react";
import { profile } from "../data/mock";

const PixelTree = ({ x, y, scale = 1, delay = 0 }) => (
  <div
    className="absolute leaf-float"
    style={{ left: x, bottom: y, transform: `scale(${scale})`, animationDelay: `${delay}s`, pointerEvents: "none" }}
  >
    <svg width="64" height="96" viewBox="0 0 16 24" className="pixelated">
      <rect x="7" y="18" width="2" height="6" fill="#6B4423" />
      <rect x="6" y="10" width="4" height="2" fill="#2D4A2B" />
      <rect x="4" y="12" width="8" height="2" fill="#3F5A3A" />
      <rect x="3" y="14" width="10" height="2" fill="#2D4A2B" />
      <rect x="5" y="16" width="6" height="2" fill="#3F5A3A" />
      <rect x="7" y="8" width="2" height="2" fill="#2D4A2B" />
    </svg>
  </div>
);

const PixelMoon = () => (
  <svg width="80" height="80" viewBox="0 0 20 20" className="pixelated">
    <rect x="6" y="2" width="8" height="2" fill="#F5EFE0" />
    <rect x="4" y="4" width="12" height="2" fill="#F5EFE0" />
    <rect x="3" y="6" width="12" height="8" fill="#F5EFE0" />
    <rect x="4" y="14" width="12" height="2" fill="#F5EFE0" />
    <rect x="6" y="16" width="8" height="2" fill="#F5EFE0" />
    <rect x="8" y="6" width="2" height="2" fill="#D9D0B8" />
    <rect x="11" y="9" width="2" height="2" fill="#D9D0B8" />
    <rect x="7" y="11" width="2" height="2" fill="#D9D0B8" />
  </svg>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen dark-forest-bg overflow-hidden pt-24">
      {/* Starry background */}
      <div className="absolute inset-0 starry-sky opacity-70" />

      {/* Moon */}
      <div className="absolute top-24 right-10 md:right-24 bounce-slow">
        <PixelMoon />
      </div>

      {/* Floating leaves */}
      <div className="absolute top-10 left-[15%] leaf-fall" style={{ animationDelay: "0s" }}>
        <svg width="16" height="16" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#D97706" />
          <rect x="2" y="2" width="4" height="2" fill="#D97706" />
          <rect x="1" y="4" width="6" height="2" fill="#B45309" />
          <rect x="3" y="6" width="2" height="2" fill="#6B4423" />
        </svg>
      </div>
      <div className="absolute top-0 left-[45%] leaf-fall" style={{ animationDelay: "3s" }}>
        <svg width="14" height="14" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#3F5A3A" />
          <rect x="2" y="2" width="4" height="2" fill="#3F5A3A" />
          <rect x="1" y="4" width="6" height="2" fill="#2D4A2B" />
        </svg>
      </div>
      <div className="absolute top-0 left-[75%] leaf-fall" style={{ animationDelay: "6s" }}>
        <svg width="18" height="18" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#D97706" />
          <rect x="2" y="2" width="4" height="2" fill="#B45309" />
          <rect x="1" y="4" width="6" height="2" fill="#6B4423" />
        </svg>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#2D4A2B] border-t-[6px] border-[#1A2F1A]" />
      <div className="absolute bottom-32 left-0 right-0 h-6 bg-[#3F5A3A]" />

      {/* Trees */}
      <PixelTree x="5%" y="110px" scale={1.4} delay={0.2} />
      <PixelTree x="12%" y="100px" scale={1.1} delay={0.8} />
      <PixelTree x="85%" y="105px" scale={1.3} delay={0.4} />
      <PixelTree x="92%" y="110px" scale={1.0} delay={1.1} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-96px)]">
        <div className="lg:col-span-7 z-10">
          <div className="inline-block mb-6">
            <span className="pixel-font text-[10px] tracking-wider bg-[#D97706] text-[#FBF6E9] px-3 py-2 border-[3px] border-[#1A2F1A]">
              <span className="blink">▶</span> PLAYER 1 READY
            </span>
          </div>
          <h1 className="pixel-font text-[#FBF6E9] leading-[1.35] text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] mb-4">
            {profile.name}
          </h1>
          <div className="retro-font text-[18px] text-[#F5EFE0]/70 mb-6">{profile.alias}</div>
          <p className="retro-font text-[#D97706] text-[24px] md:text-[28px] leading-tight mb-6">
            &gt; {profile.role}_
          </p>
          <p className="body-font text-[#F5EFE0]/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {profile.tagline}. Construyo mecánicas y herramientas que hacen que jugadores y artistas sonrían.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="pixel-button inline-flex items-center gap-2">
              <Gamepad2 size={16} />
              Ver proyectos
            </a>
            <a href="#contact" className="pixel-button secondary">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <a href="https://github.com" target="_blank" rel="noreferrer"
               className="w-11 h-11 bg-[#FBF6E9] text-[#1A2F1A] flex items-center justify-center pixel-border-thin hover:bg-[#D97706] hover:text-[#FBF6E9] transition-colors duration-150">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="w-11 h-11 bg-[#FBF6E9] text-[#1A2F1A] flex items-center justify-center pixel-border-thin hover:bg-[#D97706] hover:text-[#FBF6E9] transition-colors duration-150">
              <Linkedin size={18} />
            </a>
            <span className="retro-font text-[#F5EFE0]/80 text-[18px] ml-2">{profile.location}</span>
          </div>
        </div>

        {/* Big pixel raccoon badge */}
        <div className="lg:col-span-5 z-10 flex justify-center">
          <div className="relative">
            <div className="bg-[#FBF6E9] p-6 pixel-shadow border-[4px] border-[#1A2F1A]">
              <BigPixelRaccoon />
              <div className="text-center mt-3">
                <div className="pixel-font text-[10px] text-[#1A2F1A]">LVL 99</div>
                <div className="retro-font text-[18px] text-[#6B4423]">Raccoon Dev</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#D97706] text-[#FBF6E9] pixel-font text-[9px] px-3 py-2 border-[3px] border-[#1A2F1A] rotate-6">
              ONLINE
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 text-[#FBF6E9] bounce-slow" aria-label="Scroll">
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

const BigPixelRaccoon = () => {
  const S = 12;
  const px = (x, y, color, w = 1, h = 1) => (
    <rect x={x * S} y={y * S} width={w * S} height={h * S} fill={color} shapeRendering="crispEdges" />
  );
  const FUR = "#6B6B6B";
  const FUR_DARK = "#4A4A4A";
  const FACE = "#F5EFE0";
  const MASK = "#1A1A1A";
  const EAR = "#5A5A5A";
  const TAIL = "#8A8A8A";
  return (
    <svg width="216" height="216" viewBox="0 0 180 180" className="pixelated mx-auto">
      {/* Ears */}
      {px(3, 1, EAR, 2, 2)}
      {px(10, 1, EAR, 2, 2)}
      {/* Head */}
      {px(2, 3, FUR, 11, 4)}
      {px(3, 7, FUR, 9, 1)}
      {/* Mask area */}
      {px(4, 4, FACE, 7, 2)}
      {/* Eye masks */}
      {px(4, 4, MASK, 2, 2)}
      {px(9, 4, MASK, 2, 2)}
      {/* Eye pupils */}
      {px(5, 5, "#FBF6E9", 1, 1)}
      {px(10, 5, "#FBF6E9", 1, 1)}
      {/* Snout */}
      {px(6, 6, FACE, 3, 1)}
      {px(7, 7, "#1A1A1A", 1, 1)}
      {/* Body */}
      {px(2, 8, FUR, 11, 3)}
      {px(3, 11, FUR, 9, 1)}
      {/* Legs */}
      {px(3, 12, FUR_DARK, 2, 1)}
      {px(10, 12, FUR_DARK, 2, 1)}
      {px(6, 12, FUR_DARK, 3, 1)}
      {/* Tail */}
      {px(12, 5, TAIL, 2, 1)}
      {px(13, 6, FUR_DARK, 2, 1)}
      {px(12, 7, TAIL, 2, 1)}
      {px(13, 8, FUR_DARK, 2, 1)}
      {px(12, 9, TAIL, 2, 1)}
    </svg>
  );
};

export default Hero;
