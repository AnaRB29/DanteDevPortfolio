import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#1A2F1A] border-t-[6px] border-[#D97706] text-[#FBF6E9]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D97706] pixel-border-thin flex items-center justify-center">
            <span className="pixel-font text-[10px] text-[#1A2F1A]">DD</span>
          </div>
          <div>
            <div className="pixel-font text-[11px]">ALFONSO MARTÍN</div>
            <div className="retro-font text-[16px] text-[#F5EFE0]/70">aka Dante · raccoon powered</div>
          </div>
        </div>

        <div className="text-center retro-font text-[16px] text-[#F5EFE0]/80">
          Hecho con <Heart size={14} className="inline text-[#D97706]" /> y pixeles en el bosque.
        </div>

        <div className="md:text-right retro-font text-[16px] text-[#F5EFE0]/70">
          © {new Date().getFullYear()} Alfonso Martín. Todos los mapaches reservados.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
