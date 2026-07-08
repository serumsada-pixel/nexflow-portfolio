import { useState, useEffect, useRef } from "react";
import LogoBrand from "./components/LogoBrand.jsx";

const C = {
  blue: "#0088FF",
  glow: "#33BBFF",
  bg: "#060610",
  glass: "rgba(8,20,50,0.55)",
  border: "rgba(0,136,255,0.15)",
  text: "#F0F4FF",
  muted: "#7A8BA8",
};

const SERVICES = [
  {
    title: "AI Workflows", sub: "Automatización Inteligente",
    desc: "Flujos automatizados con n8n, agentes IA, LangGraph y pipelines de datos que eliminan tareas manuales y escalan operaciones.",
    tags: ["n8n", "LangGraph", "APIs", "Agentes IA"],
    miniType: "workflow",
    examples: ["Onboarding automático de clientes", "Alertas inteligentes por WhatsApp", "Sync CRM → facturación"],
  },
  {
    title: "Desarrollo Web", sub: "Full-Stack & Dashboards",
    desc: "Aplicaciones web de alto rendimiento con Next.js, React, dashboards ejecutivos y despliegue a producción.",
    tags: ["Next.js", "React", "Supabase", "Vercel"],
    miniType: "web",
    examples: ["Dashboard financiero interactivo", "Landing pages de alta conversión", "Portales SaaS a medida"],
  },
  {
    title: "Integración IA", sub: "LLMs & Visión Artificial",
    desc: "Chatbots conversacionales, Vision AI, RAG, procesamiento inteligente de documentos y soluciones con LLMs.",
    tags: ["Claude API", "GPT", "Vision AI", "RAG"],
    miniType: "ai",
    examples: ["Chatbot atención 24/7", "Análisis de imágenes con IA", "Búsqueda semántica en docs"],
  },
  {
    title: "Video con IA", sub: "Producción Cinematográfica",
    desc: "Motion graphics con Remotion, avatares IA, voiceovers, marketing video y producción audiovisual automatizada.",
    tags: ["Remotion", "ElevenLabs", "Midjourney", "DaVinci"],
    miniType: "video",
    examples: ["Reels automatizados para marcas", "Avatares IA para cursos", "Motion graphics corporativos"],
  },
];

const METRICS = [
  { val: 15, suf: "+", label: "Proyectos Entregados" },
  { val: 8, suf: "+", label: "Tecnologías IA" },
  { val: 100, suf: "%", label: "Remoto & Global" },
];

function MiniWorkflow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 16 }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <div className="nf-nodePulse" style={{
            width: 10, height: 10, borderRadius: "50%",
            background: C.blue, boxShadow: `0 0 8px ${C.blue}`,
            animationDelay: `${i * 0.4}s`,
          }} />
          {i < 2 && <div style={{
            width: 20, height: 2, background: `linear-gradient(90deg, ${C.blue}, transparent)`,
            borderRadius: 2, opacity: 0.5,
          }} />}
        </div>
      ))}
    </div>
  );
}

function MiniWeb() {
  return (
    <div style={{
      width: 52, height: 34, borderRadius: 4, marginBottom: 16,
      border: `1px solid rgba(0,136,255,0.3)`, background: "rgba(0,136,255,0.06)",
      padding: "3px 5px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
        {["#ff5f57", "#ffbd2e", "#28c840"].map(c => (
          <div key={c} style={{ width: 3, height: 3, borderRadius: "50%", background: c, opacity: 0.7 }} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ height: 2, width: "70%", background: C.blue, borderRadius: 1, opacity: 0.4 }} />
        <div style={{ height: 2, width: "50%", background: C.blue, borderRadius: 1, opacity: 0.25 }} />
        <div className="nf-blink" style={{ height: 2, width: "30%", background: C.glow, borderRadius: 1 }} />
      </div>
    </div>
  );
}

function MiniAI() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16, alignItems: "flex-start" }}>
      <div style={{
        padding: "3px 10px", borderRadius: "8px 8px 8px 2px",
        background: "rgba(0,136,255,0.12)", border: `1px solid rgba(0,136,255,0.2)`,
        fontSize: 9, color: C.glow,
      }}>¿Cómo puedo ayudarte?</div>
      <div style={{ display: "flex", gap: 3, padding: "0 6px" }}>
        {[0, 1, 2].map(i => (
          <div key={i} className="nf-typingDot" style={{
            width: 4, height: 4, borderRadius: "50%",
            background: C.blue, animationDelay: `${i * 0.2}s`,
          }} />
        ))}
      </div>
    </div>
  );
}

function MiniVideo() {
  return (
    <div style={{ position: "relative", width: 40, height: 40, marginBottom: 16 }}>
      <div className="nf-playPulse" style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: `1px solid rgba(0,136,255,0.25)`,
      }} />
      <div style={{
        position: "absolute", inset: 0, display: "flex",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: 0, height: 0, borderLeft: "10px solid " + C.blue,
          borderTop: "6px solid transparent", borderBottom: "6px solid transparent",
          marginLeft: 2,
        }} />
      </div>
    </div>
  );
}

const MiniVisuals = { workflow: MiniWorkflow, web: MiniWeb, ai: MiniAI, video: MiniVideo };

function Particles() {
  const pts = useRef(Array.from({ length: 22 }, (_, i) => ({
    id: i, l: Math.random() * 100, t: Math.random() * 100,
    s: Math.random() * 3 + 1, d: Math.random() * 18 + 10,
    dl: Math.random() * 8, o: Math.random() * 0.25 + 0.08,
  }))).current;
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {pts.map(p => (
        <div key={p.id} className="nf-particle" style={{
          position: "absolute", left: `${p.l}%`, top: `${p.t}%`,
          width: p.s, height: p.s, borderRadius: "50%",
          background: C.glow, opacity: p.o,
          animationDuration: `${p.d}s`, animationDelay: `${p.dl}s`,
        }} />
      ))}
    </div>
  );
}

function Card3D({ service, idx }) {
  const ref = useRef(null);
  const [tf, setTf] = useState("");
  const [gl, setGl] = useState({ x: 50, y: 50 });
  const [hov, setHov] = useState(false);

  const onMove = e => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / (r.height / 2)) * -10;
    const ry = ((x - r.width / 2) / (r.width / 2)) * 10;
    setTf(`perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04,1.04,1.04)`);
    setGl({ x: (x / r.width) * 100, y: (y / r.height) * 100 });
  };

  const onLeave = () => {
    setTf("perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)");
    setGl({ x: 50, y: 50 });
    setHov(false);
  };

  const Mini = MiniVisuals[service.miniType];

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      className="nf-fadeUp"
      style={{
        transform: tf,
        transition: "transform 0.12s ease-out, box-shadow 0.3s",
        transformStyle: "preserve-3d",
        background: `radial-gradient(circle at ${gl.x}% ${gl.y}%, rgba(0,136,255,${hov ? 0.12 : 0.04}), ${C.glass})`,
        border: `1px solid ${hov ? "rgba(0,136,255,0.35)" : C.border}`,
        borderRadius: 16,
        padding: "28px 24px",
        cursor: "default",
        backdropFilter: "blur(14px)",
        boxShadow: hov ? "0 8px 44px rgba(0,136,255,0.18), 0 0 80px rgba(0,136,255,0.06)" : "0 4px 20px rgba(0,0,0,0.3)",
        animationDelay: `${idx * 0.12}s`,
        animationFillMode: "both",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ transform: "translateZ(30px)" }}><Mini /></div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: C.text, marginBottom: 4, transform: "translateZ(20px)" }}>{service.title}</h3>
      <p style={{ fontSize: 12, color: C.blue, fontWeight: 600, marginBottom: 12, letterSpacing: 1.5, textTransform: "uppercase" }}>{service.sub}</p>
      <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.65, marginBottom: 16 }}>{service.desc}</p>

      <div style={{
        marginBottom: 16, padding: "10px 12px", borderRadius: 8,
        background: "rgba(0,136,255,0.04)", border: "1px solid rgba(0,136,255,0.08)",
      }}>
        {service.examples.map((ex, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 8,
            fontSize: 12, color: C.muted, padding: "3px 0",
          }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.blue, flexShrink: 0, opacity: 0.7 }} />
            {ex}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {service.tags.map(t => (
          <span key={t} style={{
            fontSize: 11, padding: "4px 10px", borderRadius: 20,
            background: "rgba(0,136,255,0.08)", border: "1px solid rgba(0,136,255,0.18)",
            color: C.glow, fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function Counter({ target, suffix, label }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const t0 = performance.now();
        const tick = () => {
          const p = Math.min((performance.now() - t0) / 1600, 1);
          setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ textAlign: "center", flex: "1 1 160px", padding: "8px 0" }}>
      <div style={{ fontSize: 44, fontWeight: 800, color: C.blue, lineHeight: 1 }}>
        {n}<span style={{ fontSize: 28, color: C.glow }}>{suffix}</span>
      </div>
      <div style={{ fontSize: 13, color: C.muted, marginTop: 8, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export default function App() {
  const scrollTo = id => e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'Inter',system-ui,sans-serif", position: "relative", overflowX: "hidden" }}>
      <style>{`
        @keyframes nfFloat{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-22px) translateX(12px)}}
        .nf-particle{animation:nfFloat ease-in-out infinite}
        @keyframes nfFadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        .nf-fadeUp{animation:nfFadeUp .7s ease forwards}
        @keyframes nfPulse{0%,100%{transform:scale(1);opacity:.3}50%{transform:scale(1.25);opacity:.06}}
        @keyframes nfNodePulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}
        .nf-nodePulse{animation:nfNodePulse 1.6s ease-in-out infinite}
        @keyframes nfBlink{0%,100%{opacity:.2}50%{opacity:.7}}
        .nf-blink{animation:nfBlink 1.2s ease-in-out infinite}
        @keyframes nfTyping{0%,100%{opacity:.2;transform:translateY(0)}50%{opacity:.8;transform:translateY(-2px)}}
        .nf-typingDot{animation:nfTyping 1s ease-in-out infinite}
        @keyframes nfPlayPulse{0%{transform:scale(1);opacity:.4}100%{transform:scale(2);opacity:0}}
        .nf-playPulse{animation:nfPlayPulse 2s ease-out infinite}
        *{margin:0;padding:0;box-sizing:border-box}
        ::selection{background:rgba(0,136,255,0.3);color:#fff}
        html{scroll-behavior:smooth}
        body{margin:0}
        a:hover{opacity:0.85}
        .nf-services-grid{
          display:grid;
          grid-template-columns:repeat(2,minmax(0,1fr));
          gap:20px;
          align-items:stretch;
        }
        .nf-services-grid > *{height:100%}
        @media (max-width:640px){
          .nf-services-grid{grid-template-columns:1fr}
        }
      `}</style>

      <Particles />

      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 10,
        padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(6,6,16,0.72)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,136,255,0.1)",
      }}>
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ textDecoration: "none" }}>
          <LogoBrand size={72} animate={false} showCaption={false} />
        </a>
      </header>

      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "40px 24px", position: "relative", zIndex: 1,
      }}>
        <div style={{
          position: "absolute", width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,136,255,0.1), transparent 70%)",
          animation: "nfPulse 5s ease-in-out infinite", zIndex: 0,
        }} />
        <div className="nf-fadeUp" style={{ position: "relative", zIndex: 1, paddingTop: 60 }}>
          <LogoBrand size={240} />
          <div style={{ width: 50, height: 2, background: `linear-gradient(90deg, transparent, ${C.blue}, transparent)`, borderRadius: 4, margin: "32px auto", opacity: 0.6 }} />
          <p style={{ fontSize: 17, color: C.muted, maxWidth: 520, lineHeight: 1.8, marginBottom: 40, marginLeft: "auto", marginRight: "auto" }}>
            Automatización inteligente, desarrollo web e integración de IA para escalar operaciones con impacto real.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#servicios" onClick={scrollTo("servicios")} style={{
              padding: "14px 34px", background: C.blue, color: "#fff", borderRadius: 8,
              textDecoration: "none", fontWeight: 600, fontSize: 15, border: "none",
              boxShadow: "0 4px 24px rgba(0,136,255,0.35)", cursor: "pointer", display: "inline-block",
            }}>Ver Servicios ↓</a>
            <a href="#contacto" onClick={scrollTo("contacto")} style={{
              padding: "14px 34px", background: "transparent", color: C.blue,
              borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 15,
              border: "1px solid rgba(0,136,255,0.25)", cursor: "pointer", display: "inline-block",
            }}>Contactar</a>
          </div>
        </div>
      </section>

      <section id="servicios" style={{ padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 10 }}>Servicios</h2>
            <div style={{ width: 50, height: 3, background: C.blue, borderRadius: 4, margin: "0 auto 14px" }} />
            <p style={{ color: C.muted, fontSize: 15 }}>Soluciones end-to-end para empresas que quieren escalar con IA</p>
          </div>
          <div className="nf-services-grid">
            {SERVICES.map((s, i) => <Card3D key={s.title} service={s} idx={i} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "50px 24px", position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 700, margin: "0 auto", display: "flex", flexWrap: "wrap",
          gap: 24, justifyContent: "center", padding: "40px 28px",
          background: C.glass, border: `1px solid ${C.border}`,
          borderRadius: 16, backdropFilter: "blur(14px)",
        }}>
          {METRICS.map(m => <Counter key={m.label} target={m.val} suffix={m.suf} label={m.label} />)}
        </div>
      </section>

      <section style={{ padding: "60px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Cómo Trabajo</h2>
          <div style={{ width: 50, height: 3, background: C.blue, borderRadius: 4, margin: "0 auto 40px" }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {[
              { n: "01", t: "Diagnóstico", d: "Entiendo tu operación, pain points y objetivos." },
              { n: "02", t: "Arquitectura", d: "Diseño la solución técnica y el roadmap." },
              { n: "03", t: "Ejecución", d: "Desarrollo iterativo con validación continua." },
              { n: "04", t: "Entrega", d: "Deploy, capacitación y soporte post-entrega." },
            ].map(s => (
              <div key={s.n} style={{
                flex: "1 1 140px", padding: "22px 14px",
                background: C.glass, border: `1px solid ${C.border}`,
                borderRadius: 12, backdropFilter: "blur(10px)", textAlign: "center",
              }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: C.blue, marginBottom: 6, opacity: 0.5 }}>{s.n}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" style={{ padding: "80px 24px 50px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 10 }}>Hablemos</h2>
          <div style={{ width: 50, height: 3, background: C.blue, borderRadius: 4, margin: "0 auto 14px" }} />
          <p style={{ color: C.muted, fontSize: 15, marginBottom: 36, lineHeight: 1.75 }}>
            ¿Listo para automatizar y escalar con IA?<br />Escríbeme y armamos tu solución.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            <a href="https://wa.me/573228346345" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", background: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.28)", borderRadius: 10,
              color: "#25D366", fontWeight: 600, textDecoration: "none", fontSize: 15,
            }}>💬 WhatsApp</a>
            <a href="mailto:serumsada@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", background: "rgba(0,136,255,0.1)",
              border: "1px solid rgba(0,136,255,0.22)", borderRadius: 10,
              color: C.blue, fontWeight: 600, textDecoration: "none", fontSize: 15,
            }}>✉️ Email</a>
          </div>
          <div style={{
            padding: 24, background: C.glass, border: `1px solid ${C.border}`,
            borderRadius: 14, backdropFilter: "blur(14px)",
          }}>
            <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8 }}>
              <strong style={{ color: C.text, fontSize: 17 }}>Juan David Guerrero</strong>
              <br />
              🌐 Colombia · Operación 100% Remota
              <br />
              <span style={{ fontSize: 13, opacity: 0.6 }}>
                📱 +57 322 834 6345 · ✉️ serumsada@gmail.com
              </span>
            </p>
            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {["Next.js", "React", "n8n", "Claude API", "Supabase", "Remotion", "LangGraph", "Vercel"].map(t => (
                <span key={t} style={{
                  fontSize: 10, padding: "3px 9px", borderRadius: 12,
                  background: "rgba(0,136,255,0.06)", border: "1px solid rgba(0,136,255,0.12)",
                  color: "rgba(51,187,255,0.7)", fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.15)", marginTop: 48 }}>
            © 2026 JDG AUTOMATIONS — Powered by Artificial Intelligence
          </p>
        </div>
      </section>
    </div>
  );
}
