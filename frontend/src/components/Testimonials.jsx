import { companies } from "../data/mock";
import { ExternalLink } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const LogoCard = ({ company }) => {
  const isLink = company.url && company.url !== "#";
  const Wrapper = isLink ? "a" : "div";
  const wrapperProps = isLink ? { href: company.url, target: "_blank", rel: "noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group shrink-0 w-[280px] md:w-[300px] mx-4 border-[4px] border-[#271914] pixel-shadow transition-transform duration-200 overflow-hidden bg-[#FBF6E9] flex flex-col"
    >
      <div
        className="h-36 flex items-center justify-center p-4 border-b-[3px] border-[#271914]"
        style={{ background: company.bg }}
      >
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="px-4 py-3 flex items-center justify-between bg-[#FBF6E9]">
        <span className="pixel-font text-[10px] text-[#271914] truncate mr-2">
          {company.name.toUpperCase()}
        </span>
        {isLink && (
          <ExternalLink size={14} className="text-[#B68669] group-hover:text-[#D54527] transition-colors shrink-0" />
        )}
      </div>
    </Wrapper>
  );
};

const Companies = () => {
  const { lang } = useLang();
  const t = translations[lang];
  const loop = [...companies, ...companies, ...companies];

  return (
    <section id="companies" className="py-24 bg-[#ECD2D2] border-y-[4px] border-[#271914] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-[#D54527]" />
          <span className="pixel-font text-[10px] text-[#B68669]">{t.companies.chapter}</span>
        </div>
        <h2 className="pixel-font text-[22px] md:text-[30px] text-[#271914] section-title-underline">
          {t.companies.title}
        </h2>
        <p className="retro-font text-[20px] text-[#B68669] mt-4 max-w-2xl">
          {t.companies.subtitle}
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex items-stretch py-6">
          {loop.map((c, i) => (
            <LogoCard key={`${c.id}-${i}`} company={c} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#ECD2D2] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#ECD2D2] to-transparent" />
      </div>
    </section>
  );
};

export default Companies;
