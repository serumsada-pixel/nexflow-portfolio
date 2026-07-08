import { useId } from "react";

const COLORS = {
  cyan: "#00f2fe",
  violet: "#7f00ff",
  blue: "#4facfe",
  text: "#f0f4ff",
  dim: "rgba(0,242,254,0.22)",
};

/**
 * Marca personal — Monograma "JD" cercano, sobre una red neuronal
 * tridimensional tipo telaraña que le da profundidad y un destello vivo.
 */
export default function LogoBrand({
  size = 200,
  caption = "AUTOMATION",
  showCaption = true,
  animate = true,
  style,
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `jgGrad-${uid}`;
  const glowId = `jgGlow-${uid}`;
  const iconSize = size * (showCaption ? 0.72 : 0.9);
  const textSize = Math.max(14, size * 0.09);

  return (
    <div
      className={animate ? "jg-brand jg-brand--animate" : "jg-brand"}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", ...style }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="JD Automation"
        role="img"
      >
        <defs>
          <linearGradient id={gradId} x1="10%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stopColor={COLORS.cyan} />
            <stop offset="50%" stopColor={COLORS.blue} />
            <stop offset="100%" stopColor={COLORS.violet} />
          </linearGradient>
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Red neuronal 3D tipo telaraña — el "cerebro" detras del monograma */}
        <g className="jg-brand__web">
          <circle cx="80" cy="80" r="58" stroke={COLORS.dim} strokeWidth="1" fill="none" />
          <ellipse cx="80" cy="80" rx="58" ry="22" stroke={COLORS.dim} strokeWidth="1" fill="none" />
          <ellipse cx="80" cy="80" rx="58" ry="22" stroke="rgba(79,172,254,0.24)" strokeWidth="1" fill="none" transform="rotate(60 80 80)" />
          <ellipse cx="80" cy="80" rx="58" ry="22" stroke="rgba(127,0,255,0.24)" strokeWidth="1" fill="none" transform="rotate(120 80 80)" />
          {[
            [138, 80], [97.9, 135.2], [33.1, 114.1], [33.1, 45.9], [97.9, 24.8],
          ].map(([x, y], i) => (
            <circle key={i} className="jg-brand__node" cx={x} cy={y} r="3" fill={i % 2 ? COLORS.violet : COLORS.cyan}
              style={{ animationDelay: `${0.3 + i * 0.12}s` }} />
          ))}
        </g>

        {/* Monograma J + D — cercanas, sin separador */}
        <path
          className="jg-brand__mono"
          d="
            M 62 40
            L 62 96
            Q 62 114 46 114
            Q 32 114 32 98
            M 95 40
            L 95 120
            A 30 40 0 0 0 95 40
          "
          stroke={`url(#${gradId})`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        {/* Destello — chispa de intuicion sobre la red */}
        <path
          className="jg-brand__sparkle"
          d="M 128 25 Q 130 33 138 35 Q 130 37 128 45 Q 126 37 118 35 Q 126 33 128 25 Z"
          fill={`url(#${gradId})`}
          filter={`url(#${glowId})`}
        />
      </svg>

      {showCaption && (
        <div
          style={{
            marginTop: size * 0.06,
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: textSize,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            textAlign: "center",
            background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.violet})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 24px rgba(0,242,254,0.4)",
          }}
        >
          {caption}
        </div>
      )}

      <style>{`
        .jg-brand__web {
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__web {
          animation: jgWebRotate 26s linear infinite, jgWebPulse 4s ease-in-out infinite;
        }
        .jg-brand__mono {
          stroke-dasharray: 310;
          stroke-dashoffset: 310;
        }
        .jg-brand--animate .jg-brand__mono {
          animation: jgDraw 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .jg-brand__sparkle {
          opacity: 0;
          transform-origin: 128px 35px;
        }
        .jg-brand--animate .jg-brand__sparkle {
          animation: jgSparkleIn 0.5s ease 2s forwards, jgSparkle 2.4s ease-in-out 2.4s infinite;
        }
        .jg-brand__node {
          opacity: 0;
          transform-origin: center;
        }
        .jg-brand--animate .jg-brand__node {
          animation: jgNodePop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes jgWebRotate { to { transform: rotate(360deg); } }
        @keyframes jgWebPulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.55; }
        }
        @keyframes jgDraw { to { stroke-dashoffset: 0; } }
        @keyframes jgSparkleIn {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 0.35; transform: scale(0.85); }
        }
        @keyframes jgSparkle {
          0%, 100% { opacity: 0.35; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes jgNodePop {
          from { opacity: 0; transform: scale(0.2); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
