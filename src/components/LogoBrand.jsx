import { useId } from "react";

const COLORS = {
  cyan: "#00f2fe",
  violet: "#7f00ff",
  blue: "#4facfe",
  dim: "rgba(0,242,254,0.18)",
};

/**
 * Marca personal — "Flujo Infinito"
 * Loop de automatización continua con núcleo de energía IA y spark de despegue.
 */
export default function LogoBrand({
  size = 200,
  brandName = "JDG AUTOMATIONS",
  animate = true,
  style,
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `jgGrad-${uid}`;
  const glowId = `jgGlow-${uid}`;
  const ringGradId = `ringGrad-${uid}`;

  return (
    <div
      className={animate ? "jg-brand jg-brand--animate" : "jg-brand"}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", ...style }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={brandName}
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

        {/* Loop de flujo infinito — automatización continua */}
        <path
          className="jg-brand__mono"
          d="
            M 80 80
            C 50 45 15 55 15 80
            C 15 105 50 115 80 80
            C 110 45 145 55 145 80
            C 145 105 110 115 80 80
          "
          stroke={`url(#${gradId})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter={`url(#${glowId})`}
        />

        {/* Spark — despegue / innovación */}
        <path
          className="jg-brand__spark"
          d="M 115 55 L 150 20 L 127 60 Z"
          fill={`url(#${gradId})`}
          filter={`url(#${glowId})`}
        />

        {/* Núcleo inteligente */}
        <circle className="jg-brand__core" cx="80" cy="80" r="7" fill={COLORS.cyan} filter={`url(#${glowId})`} />
        <circle className="jg-brand__core-ring" cx="80" cy="80" r="13" stroke={COLORS.violet} strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Nodos en los extremos del loop */}
        {[
          [15, 80, COLORS.cyan],
          [145, 80, COLORS.violet],
          [50, 47, COLORS.blue],
          [110, 47, COLORS.cyan],
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

      <style>{`
        .jg-brand__orbit {
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__orbit {
          animation: jgOrbit 18s linear infinite;
        }
        .jg-brand__mono {
          stroke-dasharray: 360;
          stroke-dashoffset: 360;
        }
        .jg-brand--animate .jg-brand__mono {
          animation: jgDraw 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .jg-brand__spark {
          opacity: 0;
          transform-origin: 127px 55px;
        }
        .jg-brand--animate .jg-brand__spark {
          animation: jgSparkIn 0.5s ease 1.9s forwards, jgSparkFloat 3s ease-in-out 2.4s infinite;
        }
        .jg-brand__core, .jg-brand__core-ring {
          opacity: 0;
          transform-origin: 80px 80px;
        }
        .jg-brand--animate .jg-brand__core {
          animation: jgCoreIn 0.6s ease 1.4s forwards, jgPulse 2.8s ease-in-out 2s infinite;
        }
        .jg-brand--animate .jg-brand__core-ring {
          animation: jgCoreIn 0.6s ease 1.6s forwards, jgRingPulse 2.8s ease-in-out 2.2s infinite;
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
        @keyframes jgSparkIn {
          from { opacity: 0; transform: scale(0.3) translate(-6px, 6px); }
          to { opacity: 1; transform: scale(1) translate(0, 0); }
        }
        @keyframes jgSparkFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(4px, -4px); }
        }
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
