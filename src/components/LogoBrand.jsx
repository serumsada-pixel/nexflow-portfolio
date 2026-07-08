import { useId } from "react";

const COLORS = {
  cyan: "#00f2fe",
  violet: "#7f00ff",
  blue: "#4facfe",
  text: "#f0f4ff",
  dim: "rgba(0,242,254,0.18)",
};

/**
 * Marca personal — Monograma "JD" fusionado por un núcleo de energía IA.
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
  const ringGradId = `ringGrad-${uid}`;
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
          <linearGradient id={ringGradId} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={COLORS.cyan} stopOpacity="0.1" />
            <stop offset="50%" stopColor={COLORS.cyan} stopOpacity="0.55" />
            <stop offset="100%" stopColor={COLORS.violet} stopOpacity="0.1" />
          </linearGradient>
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
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

        {/* Monograma J + D — fusionado por el nucleo IA */}
        <path
          className="jg-brand__mono"
          d="
            M 45 40
            L 45 96
            Q 45 114 29 114
            Q 15 114 15 98
            M 110 40
            L 110 120
            A 35 40 0 0 0 110 40
          "
          stroke={`url(#${gradId})`}
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        {/* Núcleo inteligente — funde las dos iniciales */}
        <circle className="jg-brand__core" cx="80" cy="80" r="7" fill={COLORS.cyan} filter={`url(#${glowId})`} />
        <circle className="jg-brand__core-ring" cx="80" cy="80" r="13" stroke={COLORS.violet} strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Nodos en los extremos de las letras */}
        {[
          [45, 40, COLORS.cyan],
          [15, 98, COLORS.blue],
          [110, 40, COLORS.violet],
          [145, 80, COLORS.cyan],
        ].map(([x, y, fill], i) => (
          <circle
            key={i}
            className="jg-brand__node"
            cx={x}
            cy={y}
            r="4"
            fill={fill}
            style={{ animationDelay: `${0.5 + i * 0.15}s` }}
          />
        ))}
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
        .jg-brand__orbit {
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__orbit {
          animation: jgOrbit 18s linear infinite;
        }
        .jg-brand__mono {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
        }
        .jg-brand--animate .jg-brand__mono {
          animation: jgDraw 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
