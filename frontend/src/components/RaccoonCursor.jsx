import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [moving, setMoving] = useState(false);
  const rafRef = useRef(null);
  const moveTimer = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
      setMoving(true);
      if (moveTimer.current) clearTimeout(moveTimer.current);
      moveTimer.current = setTimeout(() => setMoving(false), 140);
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (moveTimer.current) clearTimeout(moveTimer.current);
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
      {/* Dot marker at exact cursor position */}
      <div
        style={{
          position: "fixed",
          left: target.x - 4,
          top: target.y - 4,
          width: 8,
          height: 8,
          background: "#D54527",
          border: "2px solid #271914",
          pointerEvents: "none",
          zIndex: 9998,
          imageRendering: "pixelated"
        }}
      />
      {/* Cotton candy follower */}
      <div
        style={{
          position: "fixed",
          left: pos.x - 28,
          top: pos.y + 10,
          pointerEvents: "none",
          zIndex: 9997,
          transform: moving ? "translateY(-3px) rotate(-4deg)" : "translateY(0) rotate(0deg)",
          transition: "transform 0.18s ease-out"
        }}
      >
        <img
          src="/algodon.png"
          alt=""
          aria-hidden
          className="pixelated"
          style={{
            width: "56px",
            height: "auto",
            imageRendering: "pixelated",
            filter: "drop-shadow(2px 2px 0 rgba(39, 25, 20, 0.35))"
          }}
        />
      </div>
    </>
  );
};

export default CursorFollower;
