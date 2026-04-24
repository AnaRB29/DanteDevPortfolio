import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Eventos", href: "#devlog" },
  { label: "Contacto", href: "#contact" }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <a href="#contact" className="pixel-button ml-4">Hire me</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 bg-[#724830] text-[#FBF6E9] flex items-center justify-center pixel-border-thin"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            <a href="#contact" onClick={() => setOpen(false)} className="pixel-button mt-2 text-center">Hire me</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
