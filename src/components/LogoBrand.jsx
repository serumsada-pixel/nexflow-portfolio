import { useId } from "react";

const COLORS = {
  bg: "#0b0f19",
  cyan: "#00f2fe",
  violet: "#7f00ff",
  blue: "#4facfe",
  text: "#f0f4ff",
  slogan: "#96a2b3",
};

/**
 * Isotipo "El Nodo Inteligente": fusión J+G como circuito de automatización.
 * 100% SVG vectorial, escalable y reutilizable en hero, navbar o loader.
 */
export default function LogoBrand({
  size = 200,
  showText = true,
  showSlogan = true,
  brandName = "JDG AUTOMATIONS",
  slogan = "Soluciones inteligentes, resultados reales",
  animate = true,
  style,
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `techGradient-${uid}`;
  const glowId = `glow-${uid}`;
  const iconH = size * 0.55;
  const textSize = Math.max(14, size * 0.11);
  const sloganSize = Math.max(10, textSize * 0.42);

  return (
    <div
      className={animate ? "logo-brand logo-brand--animate" : "logo-brand"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg
        width={size}
        height={iconH}
        viewBox="0 0 200 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={COLORS.cyan} />
            <stop offset="55%" stopColor={COLORS.blue} />
            <stop offset="100%" stopColor={COLORS.violet} />
          </linearGradient>

          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circuito J → G: trazo continuo tipo loop de automatización */}
        <path
          className="logo-brand__circuit"
          d="
            M 34 22
            L 34 68
            Q 34 92 58 92
            L 76 92
            L 76 58
            Q 76 22 112 22
            Q 162 22 162 58
            Q 162 94 112 94
            L 76 94
            L 76 72
            L 132 72
          "
          stroke={`url(#${gradId})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        />

        {/* Nodos en vértices del flujo */}
        <circle className="logo-brand__node logo-brand__node--a" cx="34" cy="22" r="4.5" fill={COLORS.cyan} />
        <circle className="logo-brand__node logo-brand__node--b" cx="58" cy="92" r="4" fill={COLORS.blue} />
        <circle className="logo-brand__node logo-brand__node--c" cx="162" cy="58" r="4.5" fill={COLORS.violet} />
        <circle className="logo-brand__node logo-brand__node--d" cx="132" cy="72" r="3.5" fill={COLORS.cyan} />
      </svg>

      {showText && (
        <div style={{ textAlign: "center", marginTop: size * 0.06 }}>
          <div
            style={{
              color: COLORS.text,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 700,
              fontSize: textSize,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: COLORS.cyan }}>{brandName.split(" ")[0]}</span>
            {brandName.split(" ").length > 1 && (
              <span> {brandName.split(" ").slice(1).join(" ")}</span>
            )}
          </div>

          {showSlogan && (
            <p
              style={{
                color: COLORS.slogan,
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: sloganSize,
                letterSpacing: "0.06em",
                marginTop: textSize * 0.35,
                fontStyle: "italic",
              }}
            >
              {slogan}
            </p>
          )}
        </div>
      )}

      <style>{`
        .logo-brand__circuit {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
        }
        .logo-brand--animate .logo-brand__circuit {
          animation: logoCircuitDraw 2.2s ease-out forwards;
        }
        .logo-brand__node {
          opacity: 0;
          transform-origin: center;
        }
        .logo-brand--animate .logo-brand__node {
          animation: logoNodeIn 0.5s ease forwards;
        }
        .logo-brand--animate .logo-brand__node--a { animation-delay: 0.3s; }
        .logo-brand--animate .logo-brand__node--b { animation-delay: 0.7s; }
        .logo-brand--animate .logo-brand__node--c { animation-delay: 1.1s; }
        .logo-brand--animate .logo-brand__node--d { animation-delay: 1.4s; }

        @keyframes logoCircuitDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes logoNodeIn {
          from { opacity: 0; transform: scale(0.4); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
