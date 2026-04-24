import { ArrowDown, Github, Linkedin, Gamepad2 } from "lucide-react";
import { profile } from "../data/mock";
import { useLang, pick } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const PixelTree = ({ x, y, scale = 1, delay = 0 }) => (
  <div
    className="absolute leaf-float"
    style={{ left: x, bottom: y, transform: `scale(${scale})`, animationDelay: `${delay}s`, pointerEvents: "none" }}
  >
    <svg width="64" height="96" viewBox="0 0 16 24" className="pixelated">
      <rect x="7" y="18" width="2" height="6" fill="#724830" />
      <rect x="6" y="10" width="4" height="2" fill="#724830" />
      <rect x="4" y="12" width="8" height="2" fill="#B68669" />
      <rect x="3" y="14" width="10" height="2" fill="#724830" />
      <rect x="5" y="16" width="6" height="2" fill="#B68669" />
      <rect x="7" y="8" width="2" height="2" fill="#724830" />
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
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="hero" className="relative min-h-screen dark-forest-bg overflow-hidden pt-24">
      <div className="absolute inset-0 starry-sky opacity-70" />
      <div className="absolute top-24 right-10 md:right-24 bounce-slow">
        <PixelMoon />
      </div>

      <div className="absolute top-10 left-[15%] leaf-fall" style={{ animationDelay: "0s" }}>
        <svg width="16" height="16" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#D54527" />
          <rect x="2" y="2" width="4" height="2" fill="#D54527" />
          <rect x="1" y="4" width="6" height="2" fill="#B81B18" />
          <rect x="3" y="6" width="2" height="2" fill="#724830" />
        </svg>
      </div>
      <div className="absolute top-0 left-[45%] leaf-fall" style={{ animationDelay: "3s" }}>
        <svg width="14" height="14" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#B68669" />
          <rect x="2" y="2" width="4" height="2" fill="#B68669" />
          <rect x="1" y="4" width="6" height="2" fill="#724830" />
        </svg>
      </div>
      <div className="absolute top-0 left-[75%] leaf-fall" style={{ animationDelay: "6s" }}>
        <svg width="18" height="18" viewBox="0 0 8 8" className="pixelated">
          <rect x="3" y="0" width="2" height="2" fill="#D54527" />
          <rect x="2" y="2" width="4" height="2" fill="#B81B18" />
          <rect x="1" y="4" width="6" height="2" fill="#724830" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#724830] border-t-[6px] border-[#271914]" />
      <div className="absolute bottom-32 left-0 right-0 h-6 bg-[#B68669]" />

      <PixelTree x="5%" y="110px" scale={1.4} delay={0.2} />
      <PixelTree x="12%" y="100px" scale={1.1} delay={0.8} />
      <PixelTree x="85%" y="105px" scale={1.3} delay={0.4} />
      <PixelTree x="92%" y="110px" scale={1.0} delay={1.1} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-96px)]">
        <div className="lg:col-span-7 z-10">
          <div className="inline-block mb-6">
            <span className="pixel-font text-[10px] tracking-wider bg-[#D54527] text-[#FBF6E9] px-3 py-2 border-[3px] border-[#271914]">
              <span className="blink">▶</span> {t.hero.playerReady}
            </span>
          </div>
          <h1 className="pixel-font text-[#FBF6E9] leading-[1.35] text-[20px] sm:text-[26px] md:text-[32px] lg:text-[36px] mb-4">
            {profile.name}
          </h1>
          <div className="retro-font text-[18px] text-[#F5EFE0]/70 mb-6">{profile.alias}</div>
          <p className="retro-font text-[#D54527] text-[24px] md:text-[28px] leading-tight mb-6">
            &gt; {pick(profile.role, lang)}_
          </p>
          <p className="body-font text-[#F5EFE0]/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            {pick(profile.tagline, lang)}. {pick(profile.taglineExtra, lang)}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="pixel-button inline-flex items-center gap-2">
              <Gamepad2 size={16} />
              {t.hero.viewProjects}
            </a>
            <a href="#contact" className="pixel-button secondary">
              {t.hero.contact}
            </a>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <a href="https://github.com" target="_blank" rel="noreferrer"
               className="w-11 h-11 bg-[#FBF6E9] text-[#271914] flex items-center justify-center pixel-border-thin hover:bg-[#D54527] hover:text-[#FBF6E9] transition-colors duration-150">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="w-11 h-11 bg-[#FBF6E9] text-[#271914] flex items-center justify-center pixel-border-thin hover:bg-[#D54527] hover:text-[#FBF6E9] transition-colors duration-150">
              <Linkedin size={18} />
            </a>
            <span className="retro-font text-[#F5EFE0]/80 text-[18px] ml-2">{pick(profile.location, lang)}</span>
          </div>
        </div>

        <div className="lg:col-span-5 z-10 flex justify-center">
          <div className="relative">
            <div className="bg-[#FBF6E9] p-6 pixel-shadow border-[4px] border-[#271914]">
              <img
                src="/dante.png"
                alt="Dante the raccoon"
                className="pixelated block mx-auto"
                style={{ width: "216px", height: "auto", imageRendering: "pixelated" }}
              />
              <div className="text-center mt-3">
                <div className="pixel-font text-[10px] text-[#271914]">{t.hero.level}</div>
                <div className="retro-font text-[18px] text-[#B68669]">{t.hero.raccoonDev}</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#D54527] text-[#FBF6E9] pixel-font text-[9px] px-3 py-2 border-[3px] border-[#271914] rotate-6">
              {t.hero.online}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 text-[#FBF6E9] bounce-slow" aria-label={t.common.scroll}>
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
