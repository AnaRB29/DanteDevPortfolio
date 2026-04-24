import { companies } from "../data/mock";
import { ExternalLink } from "lucide-react";

// Pixel placeholder for PinkBear (a tiny pink bear face built with rects)
const PinkBearPixel = () => {
  const S = 8;
  const px = (x, y, c, w = 1, h = 1) => (
    <rect x={x * S} y={y * S} width={w * S} height={h * S} fill={c} shapeRendering="crispEdges" />
  );
  const PINK = "#F5A3C7";
  const DARK = "#C97BA5";
  const EYE = "#2D1B2E";
  const NOSE = "#2D1B2E";
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
      {/* Snout area */}
      {px(5, 7, "#FBF6E9", 3, 2)}
      {px(6, 7, NOSE, 1, 1)}
    </svg>
  );
};

const LogoCard = ({ company }) => (
  <a
    href={company.url}
    target="_blank"
    rel="noreferrer"
    className="group shrink-0 w-[280px] md:w-[320px] mx-4 bg-[#FBF6E9] border-[4px] border-[#1A2F1A] p-6 pixel-shadow transition-transform duration-200"
    style={{ background: company.bg }}
  >
    <div className="h-40 flex items-center justify-center mb-4">
      {company.logo ? (
        <img
          src={company.logo}
          alt={company.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      ) : (
        <PinkBearPixel />
      )}
    </div>
    <div className="border-t-[3px] border-dashed border-[#1A2F1A]/30 pt-3 flex items-center justify-between">
      <span className="pixel-font text-[10px] text-[#1A2F1A]">{company.name.toUpperCase()}</span>
      <ExternalLink size={14} className="text-[#6B4423] group-hover:text-[#D97706] transition-colors" />
    </div>
  </a>
);

const Companies = () => {
  // Duplicate list for seamless marquee loop
  const loop = [...companies, ...companies, ...companies];

  return (
    <section id="companies" className="py-24 bg-[#F5EFE0] border-y-[4px] border-[#1A2F1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-[#D97706]" />
          <span className="pixel-font text-[10px] text-[#6B4423]">CHAPTER 05</span>
        </div>
        <h2 className="pixel-font text-[22px] md:text-[30px] text-[#1A2F1A] section-title-underline">
          Estudios aliados
        </h2>
        <p className="retro-font text-[20px] text-[#6B4423] mt-4 max-w-xl">
          Equipos con los que he desarrollado y publicado juegos. Cada logo es una aventura compartida en el bosque.
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex items-stretch py-6">
          {loop.map((c, i) => (
            <LogoCard key={`${c.id}-${i}`} company={c} />
          ))}
        </div>
        {/* Fades on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5EFE0] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5EFE0] to-transparent" />
      </div>
    </section>
  );
};

export default Companies;
