import { Heart } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const Footer = () => {
  const { lang } = useLang();
  const t = translations[lang];
  return (
    <footer className="bg-[#271914] border-t-[6px] border-[#D54527] text-[#FBF6E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D54527] pixel-border-thin flex items-center justify-center">
              <span className="pixel-font text-[10px] text-[#271914]">AM</span>
            </div>
            <div>
              <div className="pixel-font text-[11px]">ALFONSO MARTÍN</div>
              <div className="retro-font text-[16px] text-[#F5EFE0]/70">{t.footer.handle}</div>
            </div>
          </div>

          <div className="text-center retro-font text-[16px] text-[#F5EFE0]/80">
            {t.footer.madeWith} <Heart size={14} className="inline text-[#D54527]" /> {t.footer.madeWithSuffix}
          </div>

          <div className="md:text-right retro-font text-[16px] text-[#F5EFE0]/70">
            © {new Date().getFullYear()} Alfonso Martín. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
