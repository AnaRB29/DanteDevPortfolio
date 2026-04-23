import { useEffect, useRef, useState } from "react";

// Pixel raccoon SVG that smoothly trails the cursor
const PixelRaccoon = ({ facing = 1, walking = false }) => {
  // Simple pixel raccoon built with <rect>. Each unit = 4px.
  // Colors
  const FUR = "#6B6B6B";
  const FUR_DARK = "#4A4A4A";
  const FACE = "#F5EFE0";
  const MASK = "#1A1A1A";
  const NOSE = "#1A1A1A";
  const EAR = "#5A5A5A";
  const TAIL = "#8A8A8A";
  const OUTLINE = "#1A2F1A";

  const S = 4; // pixel size
  const px = (x, y, color, w = 1, h = 1) => (
    <rect x={x * S} y={y * S} width={w * S} height={h * S} fill={color} shapeRendering="crispEdges" />
  );

  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      style={{ transform: `scaleX(${facing})`, imageRendering: "pixelated" }}
      aria-hidden
    >
      {/* Outline bounding (subtle) */}
      {/* Ears */}
      {px(3, 2, EAR, 2, 2)}
      {px(9, 2, EAR, 2, 2)}
      {px(3, 2, OUTLINE, 1, 1)}
      {px(10, 2, OUTLINE, 1, 1)}

      {/* Head base */}
      {px(3, 4, FUR, 8, 1)}
      {px(2, 5, FUR, 10, 3)}
      {px(3, 8, FUR, 8, 1)}

      {/* Face mask (white stripe forehead) */}
      {px(5, 5, FACE, 4, 1)}
      {px(4, 6, FACE, 1, 1)}
      {px(9, 6, FACE, 1, 1)}
      {px(6, 7, FACE, 2, 1)}

      {/* Eyes mask (black) */}
      {px(4, 6, MASK, 1, 1)}
      {px(9, 6, MASK, 1, 1)}
      {px(3, 7, MASK, 2, 1)}
      {px(9, 7, MASK, 2, 1)}

      {/* Eyes shiny */}
      {px(4, 7, "#FBF6E9", 1, 1)}
      {px(9, 7, "#FBF6E9", 1, 1)}

      {/* Snout */}
      {px(6, 8, FACE, 2, 1)}
      {px(6, 9, NOSE, 2, 1)}

      {/* Body */}
      {px(3, 9, FUR, 8, 1)}
      {px(2, 10, FUR, 10, 2)}

      {/* Legs */}
      {px(3, 12, FUR_DARK, 2, 1)}
      {px(9, 12, FUR_DARK, 2, 1)}
      {!walking && px(5, 12, FUR_DARK, 2, 1)}
      {walking && px(5, 12, FUR_DARK, 2, 1)}

      {/* Tail stripes */}
      {px(11, 7, TAIL, 2, 1)}
      {px(12, 6, FUR_DARK, 2, 1)}
      {px(11, 8, FUR_DARK, 2, 1)}
      {px(12, 9, TAIL, 2, 1)}
      {px(11, 10, FUR_DARK, 2, 1)}
      {px(12, 11, TAIL, 2, 1)}

      {/* Outline pixels */}
      {px(2, 4, OUTLINE, 1, 1)}
      {px(11, 4, OUTLINE, 1, 1)}
      {px(1, 5, OUTLINE, 1, 3)}
      {px(12, 5, OUTLINE, 1, 3)}
      {px(2, 8, OUTLINE, 1, 1)}
      {px(11, 8, OUTLINE, 1, 1)}
    </svg>
  );
};

const RaccoonCursor = () => {
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [facing, setFacing] = useState(1);
  const [walking, setWalking] = useState(false);
  const lastX = useRef(-100);
  const rafRef = useRef(null);
  const walkTimer = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
      if (e.clientX < lastX.current - 2) setFacing(-1);
      else if (e.clientX > lastX.current + 2) setFacing(1);
      lastX.current = e.clientX;
      setWalking(true);
      if (walkTimer.current) clearTimeout(walkTimer.current);
      walkTimer.current = setTimeout(() => setWalking(false), 120);
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (walkTimer.current) clearTimeout(walkTimer.current);
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      setPos((prev) => {
        const dx = target.x - prev.x;
        const dy = target.y - prev.y;
        return { x: prev.x + dx * 0.14, y: prev.y + dy * 0.14 };
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  // Hide on small screens
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot marker at exact cursor */}
      <div
        style={{
          position: "fixed",
          left: target.x - 4,
          top: target.y - 4,
          width: 8,
          height: 8,
          background: "#D97706",
          border: "2px solid #1A2F1A",
          pointerEvents: "none",
          zIndex: 9998,
          imageRendering: "pixelated"
        }}
      />
      {/* Raccoon follower */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 28,
          top: pos.y + 12,
          pointerEvents: "none",
          zIndex: 9997,
          transition: "transform 0.08s linear"
        }}
      >
        <PixelRaccoon facing={facing} walking={walking} />
      </div>
    </>
  );
};

export default RaccoonCursor;
