import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import { LangToggle } from "./Flags";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.events, href: "#devlog" },
    { label: t.nav.contact, href: "#contact" }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FBF6E9]/95 backdrop-blur border-b-[3px] border-[#271914]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#724830] pixel-border-thin flex items-center justify-center">
            <span className="pixel-font text-[10px] text-[#FBF6E9]">AM</span>
          </div>
          <div className="hidden sm:block">
            <div className="pixel-font text-[11px] text-[#D54527] leading-tight">ALFONSO</div>
            <div className="retro-font text-[16px] text-[#B68669] leading-tight">aka dante · game.dev</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`retro-font text-[18px] px-3 py-2 transition-colors duration-150 ${
                scrolled
                  ? "text-[#271914] hover:text-[#D54527] hover:bg-[#271914]/5"
                  : "text-[#FBF6E9] hover:text-[#D54527]"
              }`}
            >
              {l.label}
            </a>
          ))}

          <LangToggle lang={lang} onToggle={toggle} scrolled={scrolled} />

          <a href="#contact" className="pixel-button ml-3">{t.nav.hireMe}</a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle lang={lang} onToggle={toggle} scrolled={true} />
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 bg-[#724830] text-[#FBF6E9] flex items-center justify-center pixel-border-thin"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FBF6E9] border-t-[3px] border-[#271914]">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="retro-font text-[20px] px-3 py-2 text-[#271914] hover:bg-[#724830]/10"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="pixel-button mt-2 text-center">{t.nav.hireMe}</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
