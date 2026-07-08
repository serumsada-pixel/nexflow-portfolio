import { useId } from "react";

const COLORS = {
  cyan: "#00f2fe",
  violet: "#7f00ff",
  blue: "#4facfe",
  text: "#f0f4ff",
  slogan: "#96a2b3",
  dim: "rgba(0,242,254,0.18)",
};

/**
 * Marca personal — "El Nodo Inteligente" v2
 * Monograma J+G dentro de una red hexagonal orbital (IA + workflows).
 */
export default function LogoBrand({
  size = 200,
  showText = true,
  showSlogan = true,
  brandName = "GUERRERO IA",
  slogan = "Soluciones inteligentes, resultados reales",
  animate = true,
  style,
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `jgGrad-${uid}`;
  const glowId = `jgGlow-${uid}`;
  const ringGradId = `ringGrad-${uid}`;
  const iconSize = size * (showText ? 0.72 : 0.85);
  const textSize = Math.max(15, size * 0.105);
  const sloganSize = Math.max(10, textSize * 0.4);
  const [wordA, wordB] = brandName.includes(" ")
    ? brandName.split(" ")
    : [brandName.slice(0, -2), brandName.slice(-2)];

  return (
    <div
      className={animate ? "jg-brand jg-brand--animate" : "jg-brand"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={brandName}
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor={COLORS.cyan} />
            <stop offset="50%" stopColor={COLORS.blue} />
            <stop offset="100%" stopColor={COLORS.violet} />
          </linearGradient>
          <linearGradient id={ringGradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={COLORS.cyan} stopOpacity="0.1" />
            <stop offset="50%" stopColor={COLORS.cyan} stopOpacity="0.55" />
            <stop offset="100%" stopColor={COLORS.violet} stopOpacity="0.1" />
          </linearGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Anillo orbital */}
        <circle
          className="jg-brand__orbit"
          cx="80"
          cy="80"
          r="72"
          stroke={`url(#${ringGradId})`}
          strokeWidth="1.2"
          strokeDasharray="6 10"
          fill="none"
        />

        {/* Red hexagonal */}
        <polygon
          className="jg-brand__hex"
          points="80,18 133.8,49 133.8,111 80,142 26.2,111 26.2,49"
          stroke={COLORS.dim}
          strokeWidth="1"
          fill="rgba(0,242,254,0.03)"
        />

        {/* Conexiones al núcleo */}
        {[
          [80, 18], [133.8, 49], [133.8, 111], [80, 142], [26.2, 111], [26.2, 49],
        ].map(([x, y], i) => (
          <line
            key={i}
            className="jg-brand__spoke"
            x1={x}
            y1={y}
            x2="80"
            y2="80"
            stroke={COLORS.dim}
            strokeWidth="1"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {/* Monograma J+G fusionado — loop de automatización */}
        <path
          className="jg-brand__mono"
          d="
            M 52 42
            L 52 88
            Q 52 108 68 108
            Q 80 108 80 96
            L 80 64
            Q 80 42 100 42
            Q 124 42 124 64
            Q 124 86 100 86
            L 80 86
            L 80 74
            L 108 74
          "
          stroke={`url(#${gradId})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        {/* Núcleo inteligente */}
        <circle className="jg-brand__core" cx="80" cy="80" r="6" fill={COLORS.cyan} filter={`url(#${glowId})`} />
        <circle className="jg-brand__core-ring" cx="80" cy="80" r="11" stroke={COLORS.violet} strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Nodos en vértices */}
        {[
          [52, 42, COLORS.cyan],
          [68, 108, COLORS.blue],
          [124, 64, COLORS.violet],
          [108, 74, COLORS.cyan],
        ].map(([x, y, fill], i) => (
          <circle
            key={i}
            className="jg-brand__node"
            cx={x}
            cy={y}
            r="4"
            fill={fill}
            style={{ animationDelay: `${0.4 + i * 0.2}s` }}
          />
        ))}
      </svg>

      {showText && (
        <div style={{ textAlign: "center", marginTop: size * 0.05 }}>
          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: textSize,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              lineHeight: 1.15,
            }}
          >
            <span style={{ color: COLORS.text }}>{wordA}</span>
            {" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {wordB}
            </span>
          </div>

          {showSlogan && (
            <p
              style={{
                color: COLORS.slogan,
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: sloganSize,
                letterSpacing: "0.08em",
                marginTop: textSize * 0.4,
                fontStyle: "italic",
              }}
            >
              {slogan}
            </p>
          )}
        </div>
      )}

      <style>{`
        .jg-brand__orbit {
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__orbit {
          animation: jgOrbit 18s linear infinite;
        }
        .jg-brand__mono {
          stroke-dasharray: 340;
          stroke-dashoffset: 340;
        }
        .jg-brand--animate .jg-brand__mono {
          animation: jgDraw 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .jg-brand__hex {
          opacity: 0;
        }
        .jg-brand--animate .jg-brand__hex {
          animation: jgFadeIn 1s ease 0.2s forwards;
        }
        .jg-brand__spoke {
          opacity: 0;
        }
        .jg-brand--animate .jg-brand__spoke {
          animation: jgFadeIn 0.6s ease forwards;
        }
        .jg-brand__core, .jg-brand__core-ring {
          opacity: 0;
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__core {
          animation: jgCoreIn 0.6s ease 1.6s forwards, jgPulse 2.8s ease-in-out 2.2s infinite;
        }
        .jg-brand--animate .jg-brand__core-ring {
          animation: jgCoreIn 0.6s ease 1.8s forwards, jgRingPulse 2.8s ease-in-out 2.4s infinite;
        }
        .jg-brand__node {
          opacity: 0;
          transform-origin: center;
        }
        .jg-brand--animate .jg-brand__node {
          animation: jgNodePop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes jgOrbit { to { transform: rotate(360deg); } }
        @keyframes jgDraw { to { stroke-dashoffset: 0; } }
        @keyframes jgFadeIn { to { opacity: 1; } }
        @keyframes jgNodePop {
          from { opacity: 0; transform: scale(0.2); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes jgCoreIn {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes jgPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        @keyframes jgRingPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.18); }
        }
      `}</style>
    </div>
  );
}
