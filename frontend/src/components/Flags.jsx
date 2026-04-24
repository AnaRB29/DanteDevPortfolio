// Pixel-art flags for the language toggle

export const MexicoFlag = ({ size = 22 }) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 24 16"
    shapeRendering="crispEdges"
    style={{ imageRendering: "pixelated" }}
    aria-hidden
  >
    {/* Outer border */}
    <rect x="0" y="0" width="24" height="16" fill="#271914" />
    {/* Green stripe */}
    <rect x="1" y="1" width="7" height="14" fill="#006847" />
    {/* White stripe */}
    <rect x="8" y="1" width="8" height="14" fill="#FFFFFF" />
    {/* Red stripe */}
    <rect x="16" y="1" width="7" height="14" fill="#CE1126" />
    {/* Simplified eagle emblem (gold circle w/ brown accents) */}
    <rect x="11" y="6" width="2" height="1" fill="#8B5A2B" />
    <rect x="10" y="7" width="4" height="1" fill="#DAA520" />
    <rect x="10" y="8" width="4" height="1" fill="#8B5A2B" />
    <rect x="11" y="9" width="2" height="1" fill="#DAA520" />
  </svg>
);

export const USAFlag = ({ size = 22 }) => (
  <svg
    width={size}
    height={(size * 2) / 3}
    viewBox="0 0 24 16"
    shapeRendering="crispEdges"
    style={{ imageRendering: "pixelated" }}
    aria-hidden
  >
    {/* Outer border */}
    <rect x="0" y="0" width="24" height="16" fill="#271914" />
    {/* White base */}
    <rect x="1" y="1" width="22" height="14" fill="#FFFFFF" />
    {/* Red stripes (7 total, alternating) */}
    <rect x="1" y="1" width="22" height="2" fill="#B22234" />
    <rect x="1" y="5" width="22" height="2" fill="#B22234" />
    <rect x="1" y="9" width="22" height="2" fill="#B22234" />
    <rect x="1" y="13" width="22" height="2" fill="#B22234" />
    {/* Blue canton */}
    <rect x="1" y="1" width="10" height="7" fill="#3C3B6E" />
    {/* Stars - pixel dots */}
    <rect x="2" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="4" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="6" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="8" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="3" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="5" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="7" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="9" y="4" width="1" height="1" fill="#FFFFFF" />
    <rect x="2" y="6" width="1" height="1" fill="#FFFFFF" />
    <rect x="4" y="6" width="1" height="1" fill="#FFFFFF" />
    <rect x="6" y="6" width="1" height="1" fill="#FFFFFF" />
    <rect x="8" y="6" width="1" height="1" fill="#FFFFFF" />
  </svg>
);

// Segmented toggle showing both flags side-by-side
export const LangToggle = ({ lang, onToggle, scrolled = true }) => {
  const base =
    "inline-flex items-center border-[3px] border-[#271914] transition-transform duration-150 hover:-translate-y-[1px]";
  const bg = scrolled ? "bg-[#FBF6E9]" : "bg-[#271914]";

  const segment = (active) =>
    `px-2 py-2 flex items-center gap-1 transition-all duration-150 ${
      active ? "bg-[#D54527]" : "opacity-45 hover:opacity-90"
    }`;

  return (
    <button
      onClick={onToggle}
      className={`${base} ${bg}`}
      aria-label="Toggle language"
      title={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className={segment(lang === "es")}>
        <MexicoFlag size={20} />
      </span>
      <span
        className="w-[2px] self-stretch bg-[#271914]"
        aria-hidden
      />
      <span className={segment(lang === "en")}>
        <USAFlag size={20} />
      </span>
    </button>
  );
};

export default LangToggle;
