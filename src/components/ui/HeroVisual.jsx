import { useEffect, useRef } from "react";

/* ─── Data ──────────────────────────────────────────────── */
const STARS = [
  { cx: 38,  cy: 22,  r: 0.8, o: 0.20 }, { cx: 95,  cy: 45,  r: 0.6, o: 0.15 },
  { cx: 148, cy: 18,  r: 1.0, o: 0.25 }, { cx: 210, cy: 35,  r: 0.7, o: 0.15 },
  { cx: 278, cy: 12,  r: 0.9, o: 0.22 }, { cx: 340, cy: 50,  r: 0.6, o: 0.18 },
  { cx: 390, cy: 25,  r: 1.1, o: 0.28 }, { cx: 440, cy: 60,  r: 0.7, o: 0.18 },
  { cx: 460, cy: 15,  r: 0.5, o: 0.12 }, { cx: 22,  cy: 100, r: 0.6, o: 0.15 },
  { cx: 455, cy: 110, r: 0.6, o: 0.15 }, { cx: 18,  cy: 185, r: 0.7, o: 0.18 },
  { cx: 465, cy: 220, r: 0.9, o: 0.20 }, { cx: 50,  cy: 235, r: 0.5, o: 0.12 },
  { cx: 430, cy: 240, r: 0.7, o: 0.15 }, { cx: 420, cy: 150, r: 0.8, o: 0.18 },
  { cx: 60,  cy: 155, r: 0.6, o: 0.15 },
];

// [id, x1, y1, x2, y2]
const LINES = [
  ["l1a",  74, 148, 124, 128],
  ["l1b", 406, 128, 356, 140],
  ["l2a", 124, 128, 174, 140],
  ["l2b", 356, 140, 298, 148],
  ["l3a", 174, 140, 240, 130],
  ["l3b", 298, 148, 240, 130],
];

// [id, cx, cy, r, label, labelY]
const NODES = [
  ["n-eh",  74,  148, 4.0, "El Hierro",     165],
  ["n-lz", 406,  128, 4.0, "Lanzarote",     145],
  ["n-lp", 124,  128, 4.5, "La Palma",      145],
  ["n-fv", 356,  140, 4.5, "Fuerteventura", 157],
  ["n-lg", 174,  140, 4.0, "La Gomera",     157],
  ["n-gc", 298,  148, 5.5, "Gran Canaria",  167],
];

/* ─── Animation helpers ─────────────────────────────────── */
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

function fadeNode(el, delay, duration = 600) {
  if (!el) return;
  el.style.opacity    = "0";
  el.style.transition = "none";
  setTimeout(() => {
    el.style.transition = `opacity ${duration}ms ${EASE}`;
    el.style.opacity    = "1";
  }, delay);
}

function drawLine(el, delay, duration = 500) {
  if (!el) return;
  el.style.strokeDashoffset = "180";
  el.style.opacity          = "0";
  el.style.transition       = "none";
  setTimeout(() => {
    el.style.opacity    = "1";
    el.style.transition = `stroke-dashoffset ${duration}ms ${EASE}, opacity 300ms ease`;
    el.style.strokeDashoffset = "0";
  }, delay);
}

function fadeUp(el, delay, duration = 700, ty = 10) {
  if (!el) return;
  el.style.opacity    = "0";
  el.style.transform  = `translateY(${ty}px)`;
  el.style.transition = "none";
  setTimeout(() => {
    el.style.transition = `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`;
    el.style.opacity    = "1";
    el.style.transform  = "translateY(0)";
  }, delay);
}

/* ─── Component ─────────────────────────────────────────── */
export default function HeroVisual() {
  const lineRefs  = useRef({});
  const nodeRefs  = useRef({});
  const tfRef     = useRef(null);
  const coordsRef = useRef(null);

  useEffect(() => {
    const STEP = 380;
    const LDUR = 380;
    let t = 400;

    // Step 0 — extremes
    fadeNode(nodeRefs.current["n-eh"], t);
    fadeNode(nodeRefs.current["n-lz"], t);
    t += STEP;

    drawLine(lineRefs.current["l1a"], t, LDUR);
    drawLine(lineRefs.current["l1b"], t, LDUR);
    t += LDUR + 60;

    // Step 1
    fadeNode(nodeRefs.current["n-lp"], t);
    fadeNode(nodeRefs.current["n-fv"], t);
    t += STEP;

    drawLine(lineRefs.current["l2a"], t, LDUR);
    drawLine(lineRefs.current["l2b"], t, LDUR);
    t += LDUR + 60;

    // Step 2
    fadeNode(nodeRefs.current["n-lg"], t);
    fadeNode(nodeRefs.current["n-gc"], t);
    t += STEP;

    drawLine(lineRefs.current["l3a"], t, LDUR);
    drawLine(lineRefs.current["l3b"], t, LDUR);
    t += LDUR + 120;

    // Tenerife
    fadeNode(tfRef.current, t, 800);
    t += 900;

    // Coordinates
    fadeUp(coordsRef.current, t);
  }, []);

  return (
    <div
      className="hero-right"
    >
      <svg
        width="100%"
        viewBox="0 0 480 260"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* Stars */}
        {STARS.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r}
            fill={`rgba(255,255,255,${s.o})`} />
        ))}

        {/* Lines */}
        {LINES.map(([id, x1, y1, x2, y2]) => (
          <line
            key={id}
            ref={(el) => (lineRefs.current[id] = el)}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(201,168,76,0.4)"
            strokeWidth="0.8"
            strokeDasharray="3,5"
            strokeDashoffset="180"
            opacity="0"
          />
        ))}

        {/* Island nodes */}
        {NODES.map(([id, cx, cy, r, label, labelY]) => (
          <g key={id} ref={(el) => (nodeRefs.current[id] = el)} style={{ opacity: 0 }}>
            <circle cx={cx} cy={cy} r={r}        fill="#c9a84c" opacity="0.68" />
            <circle cx={cx} cy={cy} r={r * 2.2}  fill="none"
              stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
            <text
              x={cx} y={labelY}
              textAnchor="middle"
              fontFamily="'Space Mono', monospace"
              fontSize="7.5"
              fill="rgba(201,168,76,0.5)"
              letterSpacing="0.8"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Tenerife */}
        <g ref={tfRef} style={{ opacity: 0 }}>
          <circle cx="240" cy="130" r="28"  fill="rgba(201,168,76,0.03)" />
          <circle cx="240" cy="130" r="19"  fill="rgba(201,168,76,0.06)" />
          <circle cx="240" cy="130" r="11"  fill="rgba(201,168,76,0.13)" />
          <circle cx="240" cy="130" r="6.5" fill="#c9a84c" opacity="0.92" />
          <circle cx="240" cy="130" r="2.5" fill="#f0d97a" />
          <text
            x="240" y="155"
            textAnchor="middle"
            fontFamily="'Space Mono', monospace"
            fontSize="10"
            fontWeight="700"
            fill="rgba(201,168,76,0.88)"
            letterSpacing="2"
          >
            TENERIFE
          </text>
        </g>

        {/* Coordinates */}
        <g ref={coordsRef} style={{ opacity: 0 }}>
          <rect
            x="179" y="80" width="121" height="20"
            fill="rgba(26,20,16,0.7)"
            stroke="rgba(201,168,76,0.28)"
            strokeWidth="0.6"
            rx="1.5"
          />
          <text
            x="240" y="93"
            textAnchor="middle"
            fontFamily="'Space Mono', monospace"
            fontSize="7.5"
            fill="rgba(201,168,76,0.75)"
            letterSpacing="0.8"
          >
            28.2916° N  16.6291° W
          </text>
        </g>
      </svg>
    </div>
  );
}
