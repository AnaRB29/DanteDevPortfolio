import { companies } from "../data/mock";
import { ExternalLink } from "lucide-react";

// Pixel placeholder for Pink Bear Games
const PinkBearPixel = () => {
  const S = 8;
  const px = (x, y, c, w = 1, h = 1) => (
    <rect x={x * S} y={y * S} width={w * S} height={h * S} fill={c} shapeRendering="crispEdges" />
  );
  const PINK = "#F5A3C7";
  const DARK = "#C97BA5";
  const EYE = "#2D1B2E";
  return (
    <svg width="128" height="128" viewBox="0 0 112 112" className="pixelated">
      {/* Ears */}
      {px(1, 1, DARK, 2, 2)}
      {px(10, 1, DARK, 2, 2)}
      {px(2, 2, PINK, 1, 1)}
      {px(10, 2, PINK, 1, 1)}
      {/* Head */}
      {px(2, 2, PINK, 9, 1)}
      {px(1, 3, PINK, 11, 6)}
      {px(2, 9, PINK, 9, 1)}
      {/* Eyes */}
      {px(3, 5, EYE, 2, 2)}
      {px(8, 5, EYE, 2, 2)}
      {px(4, 5, "#FBF6E9", 1, 1)}
      {px(9, 5, "#FBF6E9", 1, 1)}
      {/* Snout */}
      {px(5, 7, "#FBF6E9", 3, 2)}
      {px(6, 7, EYE, 1, 1)}
    </svg>
  );
};

const TextLogo = ({ label, color }) => (
  <div
    className="w-full h-full flex items-center justify-center px-4"
    style={{ color }}
  >
    <span
      className="pixel-font text-center leading-tight"
      style={{
        fontSize: label.length > 8 ? 14 : label.length > 6 ? 18 : 22,
        textShadow: "3px 3px 0 rgba(26,47,26,0.15)"
      }}
    >
      {label}
    </span>
  </div>
);

const LogoCard = ({ company }) => {
  const Content = () => {
    if (company.type === "image") {
      return (
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      );
    }
    if (company.type === "pixel") return <PinkBearPixel />;
    return <TextLogo label={company.label} color={company.color} />;
  };

  const isLink = company.url && company.url !== "#";
  const Wrapper = isLink ? "a" : "div";
  const wrapperProps = isLink
    ? { href: company.url, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group shrink-0 w-[280px] md:w-[300px] mx-4 border-[4px] border-[#271914] pixel-shadow transition-transform duration-200 overflow-hidden bg-[#FBF6E9] flex flex-col"
    >
      <div
        className="h-36 flex items-center justify-center p-4 border-b-[3px] border-[#271914]"
        style={{ background: company.bg }}
      >
        <Content />
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
  // Triple the list for a smooth seamless loop
  const loop = [...companies, ...companies, ...companies];

  return (
    <section id="companies" className="py-24 bg-[#ECD2D2] border-y-[4px] border-[#271914] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-[#D54527]" />
          <span className="pixel-font text-[10px] text-[#B68669]">CHAPTER 05</span>
        </div>
        <h2 className="pixel-font text-[22px] md:text-[30px] text-[#271914] section-title-underline">
          Marcas &amp; estudios aliados
        </h2>
        <p className="retro-font text-[20px] text-[#B68669] mt-4 max-w-2xl">
          Equipos, clientes e instituciones con los que he desarrollado juegos, experiencias y herramientas. Cada logo es una aventura compartida.
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
