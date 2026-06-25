"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { GradientShape, SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// ─── Brand Your Channel ────────────────────────────────────────────────────
// Each kit is a complete on-air look — built in Tweenly as a coordinated system
// of bug, lower third, ticker, scoreboard etc. Three concrete demo brands
// (KICK, VERITAS, 404) plus three in-house sample kits (BLUEPRINT, AURORA,
// PULSE) that fill the grid while real client brands are being built out.

const CHANNEL_KITS = [
  {
    id: 'kick',
    name: 'KICK',
    tagline: 'Live sports. Real-time data. High energy.',
    sector: 'Sports',
    accent: '#FF5A00',
    accent2: '#FFB347',
    elements: 12,
    typeNote: 'Bebas Neue · Inter',
  },
  {
    id: 'veritas',
    name: 'VERITAS',
    tagline: 'Editorial news with verified sources.',
    sector: 'News',
    accent: '#C41E2A',
    accent2: '#2B4570',
    elements: 7,
    typeNote: 'Lora · Inter',
  },
  {
    id: '404',
    name: '404',
    tagline: 'Tech-native. Terminal. Glitch-friendly.',
    sector: 'Experimental',
    accent: '#00E5FF',
    accent2: '#FFD60A',
    elements: 8,
    typeNote: 'JetBrains Mono · Inter',
  },
];

// Renders mockup content authored at native 1920×1080 (matching .pen source),
// scaled to fit any container via CSS transform. Optional `crop` zooms into a
// sub-region {x, y, w, h} of the 1920×1080 frame so kit selector cards can
// highlight the signature element rather than shrinking the full scene.

function ScaledMockup({ crop, children }) {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(0.2);
  const baseW = crop ? crop.w : 1920;
  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / baseW);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [baseW]);
  const tx = crop ? -crop.x : 0;
  const ty = crop ? -crop.y : 0;
  return (
    <div ref={wrapperRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#000' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 1920, height: 1080,
        transform: `scale(${scale}) translate(${tx}px, ${ty}px)`,
        transformOrigin: 'top left',
      }}>
        {children}
      </div>
    </div>
  );
}

// Small helper to position an absolutely-positioned element by x/y/w/h in
// 1920×1080 pixel space. Children inherit standard CSS coordinates.

const px = (x, y, w, h, extra = {}) => ({
  position: 'absolute', left: x, top: y,
  ...(w != null ? { width: w } : {}),
  ...(h != null ? { height: h } : {}),
  ...extra,
});

// ─── KICK — live sports, orange-on-dark ──────────────────────────────────
// Composition built from the kick.pen "On-Air Mockup" frame, enriched with the
// "Stats Card" panel on the right so the main scene has a substantial data
// element to balance the lower third.

function KickScene({ crop }) {
  return (
    <ScaledMockup crop={crop}>
      {/* Stadium background + darken overlay (from oa-bg in kick.pen) */}
      <img src="https://images.unsplash.com/photo-1695713503375-e8458c3e1d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80" alt="" style={{ ...px(0, 0, 1920, 1080), objectFit: 'cover' }} draggable="false"/>
      <div style={{ ...px(0, 0, 1920, 1080), background: 'rgba(0,0,0,0.4)' }}/>

      {/* Top-right channel bug + small tick */}
      <div style={{ ...px(1800, 24), fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.6)', letterSpacing: 2 }}>KICK</div>
      <div style={{ ...px(1838, 26, 8, 2), background: 'rgba(255,90,0,0.4)', transform: 'rotate(-30deg)', transformOrigin: 'left center' }}/>

      {/* ── Scoreboard top-center (380×62) ─────────────────────────────── */}
      <div style={{ ...px(770, 24, 380, 62), background: 'rgba(10,10,10,0.85)', overflow: 'visible' }}>
        {/* Team color bars */}
        <div style={{ ...px(55, 11, 4, 40), background: '#C8102E' }}/>
        <div style={{ ...px(321, 11, 4, 40), background: '#D4A017' }}/>
        {/* Abbreviations */}
        <div style={{ ...px(14, 22), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: 1 }}>SLA</div>
        <div style={{ ...px(330, 22), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: 1 }}>SPA</div>
        {/* Big numbers */}
        <div style={{ ...px(145, 4), fontFamily: 'Bebas Neue, sans-serif', fontSize: 48, color: '#fff', lineHeight: 1 }}>2</div>
        <div style={{ ...px(182, 10), fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: '#555', lineHeight: 1 }}>:</div>
        <div style={{ ...px(210, 4), fontFamily: 'Bebas Neue, sans-serif', fontSize: 48, color: '#fff', lineHeight: 1 }}>1</div>
        {/* Center divider */}
        <div style={{ ...px(189, 6, 2, 40), background: '#2A2A2A' }}/>
        {/* 2ND HALF + time */}
        <div style={{ ...px(158, 4), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#555', letterSpacing: 1.5 }}>2ND HALF</div>
        <div style={{ ...px(162, 40), fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: '#FF5A00', lineHeight: 1 }}>89:14</div>
        {/* Bottom accent */}
        <div style={{ ...px(0, 59, 380, 3), background: '#FF5A00' }}/>
      </div>

      {/* ── Lower third bottom-left (620×94) ───────────────────────────── */}
      <div style={{ ...px(80, 820, 620, 94), background: 'rgba(20,20,20,0.9)', overflow: 'hidden' }}>
        {/* Diagonal orange accent */}
        <div style={{ ...px(555, -18, 100, 130), background: '#FF5A00', transform: 'rotate(-6deg)', transformOrigin: 'top left' }}/>
        {/* Watermark big number */}
        <div style={{ ...px(470, -50), fontFamily: 'Bebas Neue, sans-serif', fontSize: 140, color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}>28</div>
        {/* KICK badge */}
        <div style={{ ...px(0, 0, 82, 94), background: '#FF5A00' }}>
          <div style={{ ...px(18, 30), fontFamily: 'Bebas Neue, sans-serif', fontSize: 22, color: '#fff', lineHeight: 1 }}>KICK</div>
        </div>
        {/* Name */}
        <div style={{ ...px(96, 11), fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 30, color: '#fff', lineHeight: 1 }}>ONDŘEJ CHYTIL</div>
        {/* Role */}
        <div style={{ ...px(96, 48), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15, color: '#999', lineHeight: 1 }}>Záložník  //  SK Slavia Praha</div>
        {/* Meta */}
        <div style={{ ...px(96, 72), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#555', letterSpacing: 1.5 }}>GÓL 89:14  //  PŘÍMÝ KOP  //  2:1</div>
      </div>

      {/* ── Stats Card right-side (640×440) ────────────────────────────── */}
      <div style={{ ...px(1180, 380, 640, 440), background: 'rgba(20,20,20,0.92)', overflow: 'hidden' }}>
        {/* Diagonal orange corner accent */}
        <div style={{ ...px(560, -30, 120, 160), background: '#FF5A00', transform: 'rotate(-6deg)', transformOrigin: 'top left' }}/>
        {/* Title */}
        <div style={{ ...px(32, 28), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12, color: '#999', letterSpacing: 2 }}>STŘELECKÁ FORMA</div>
        {/* Big number */}
        <div style={{ ...px(32, 38), fontFamily: 'Bebas Neue, sans-serif', fontSize: 140, color: '#FF5A00', lineHeight: 1 }}>14</div>
        {/* Big label */}
        <div style={{ ...px(32, 200), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#555', letterSpacing: 1.5 }}>GÓLŮ V SEZONĚ</div>
        {/* Progress bar */}
        <div style={{ ...px(32, 240, 576, 6), background: '#2A2A2A' }}/>
        <div style={{ ...px(32, 240, 380, 6), background: '#FF5A00' }}/>
        <div style={{ ...px(32, 256), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#fff', letterSpacing: 1 }}>SCHICK — 14</div>
        <div style={{ ...px(440, 256), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#555', letterSpacing: 1 }}>LIGA PRŮMĚR — 8.2</div>
        {/* Divider */}
        <div style={{ ...px(32, 300, 576, 1), background: '#2A2A2A' }}/>
        {/* 3-up stats grid */}
        <div style={{ ...px(32, 320), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#555', letterSpacing: 1.5 }}>MIN/GÓL</div>
        <div style={{ ...px(32, 334), fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: '#fff', lineHeight: 1 }}>127</div>
        <div style={{ ...px(180, 320), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#555', letterSpacing: 1.5 }}>xG</div>
        <div style={{ ...px(180, 334), fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: '#fff', lineHeight: 1 }}>11.4</div>
        <div style={{ ...px(330, 320), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#555', letterSpacing: 1.5 }}>KONVERZE</div>
        <div style={{ ...px(330, 334), fontFamily: 'Bebas Neue, sans-serif', fontSize: 36, color: '#FF5A00', lineHeight: 1 }}>22%</div>
      </div>

      {/* ── Ticker bottom (1920×40) ────────────────────────────────────── */}
      <div style={{ ...px(0, 1040, 1920, 40), background: 'rgba(10,10,10,0.9)', overflow: 'hidden' }}>
        <div style={{ ...px(0, 0, 1920, 2), background: '#2A2A2A' }}/>
        {/* KICK orange badge */}
        <div style={{ ...px(0, 0, 90, 40), background: '#FF5A00' }}>
          <div style={{ ...px(20, 8), fontFamily: 'Bebas Neue, sans-serif', fontSize: 20, color: '#fff', lineHeight: 1 }}>KICK</div>
        </div>
        {/* FOTBAL category chip */}
        <div style={{ ...px(100, 6, 80, 28), background: '#1C1C1C' }}>
          <div style={{ ...px(12, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, color: '#999', letterSpacing: 1.5 }}>FOTBAL</div>
        </div>
        {/* Item 1 */}
        <div style={{ ...px(200, 16, 8, 8), background: '#FF5A00' }}/>
        <div style={{ ...px(216, 12), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: '#fff', whiteSpace: 'nowrap' }}>SLA 2:1 SPA  (89. min — Chytil)</div>
        <div style={{ ...px(530, 12), fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#555' }}>//</div>
        {/* Item 2 */}
        <div style={{ ...px(560, 16, 8, 8), background: '#FF5A00' }}/>
        <div style={{ ...px(576, 12), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: '#fff', whiteSpace: 'nowrap' }}>BAY 3:0 DOR  (FT)</div>
        <div style={{ ...px(790, 12), fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#555' }}>//</div>
        {/* Item 3 */}
        <div style={{ ...px(820, 12), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: '#999', whiteSpace: 'nowrap' }}>WIMBLEDON — Nosková → semifinále</div>
        <div style={{ ...px(1130, 12), fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#555' }}>//</div>
        {/* Item 4 */}
        <div style={{ ...px(1160, 12), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: '#999', whiteSpace: 'nowrap' }}>F1 — Hamilton P1 v tréninku, Verstappen P3</div>
      </div>
    </ScaledMockup>
  );
}

// ─── VERITAS — editorial news, white card + red accent ──────────────────

function VeritasScene({ crop }) {
  return (
    <ScaledMockup crop={crop}>
      <img src="https://images.unsplash.com/photo-1742805382153-bb4be26d6031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80" alt="" style={{ ...px(0, 0, 1920, 1080), objectFit: 'cover' }} draggable="false"/>
      <div style={{ ...px(0, 0, 1920, 1080), background: 'rgba(0,0,0,0.25)' }}/>

      {/* Top-left bug */}
      <div style={{ ...px(24, 20, 3, 30), background: '#C41E2A' }}/>
      <div style={{ ...px(40, 18), fontFamily: 'Lora, serif', fontSize: 28, fontWeight: 500, color: '#fff', lineHeight: 1 }}>V</div>
      <div style={{ ...px(64, 28), fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 2 }}>VERITAS</div>

      {/* Main lower third */}
      <div style={{ ...px(80, 846, 6, 144), background: '#C41E2A' }}/>
      <div style={{ ...px(86, 846, 714, 144), background: 'rgba(255,255,255,0.94)', border: '1px solid #E0DEDA' }}>
        <div style={{ ...px(24, 18), fontFamily: 'Lora, serif', fontSize: 30, fontWeight: 500, color: '#1A1A1A', letterSpacing: -0.5, lineHeight: 1 }}>Jana Nováková</div>
        <div style={{ ...px(24, 58), fontFamily: 'Inter, sans-serif', fontSize: 16, color: '#6B6B6B', lineHeight: 1 }}>Analytička, Ministerstvo financí ČR</div>

        {/* Source seal */}
        <div style={{ ...px(590, 18, 100, 30), border: '1.5px solid #2B4570' }}>
          <div style={{ ...px(18, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, color: '#2B4570', letterSpacing: 1.5 }}>STUDIO</div>
        </div>
        {/* Verified badge */}
        <div style={{ ...px(596, 56) }}>
          <div style={{ ...px(0, 6, 8, 8), background: '#4CAF50', borderRadius: '50%' }}/>
          <div style={{ ...px(14, 4), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 10, color: '#6B6B6B', letterSpacing: 0.5 }}>VERIFIED</div>
        </div>

        {/* Divider + ctx strip */}
        <div style={{ ...px(24, 94, 666, 1), background: '#E0DEDA' }}/>
        <div style={{ ...px(24, 100, 666, 36), background: '#F5F3F0' }}>
          <div style={{ ...px(14, 10), fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#9B9B9B' }}>MF ČR  |  Odbor makroekonomických analýz  |  od 2019</div>
        </div>
        <div style={{ ...px(604, 108), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 11, color: '#9B9B9B' }}>14:32 CET</div>
      </div>

      {/* Ticker */}
      <div style={{ ...px(80, 1006, 6, 52), background: '#C41E2A' }}/>
      <div style={{ ...px(86, 1006, 1754, 52), background: 'rgba(255,255,255,0.94)', border: '1px solid #E0DEDA', overflow: 'hidden' }}>
        <div style={{ ...px(16, 19), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, color: '#1A1A1A', letterSpacing: 2 }}>VERITAS</div>
        <div style={{ ...px(106, 10, 1, 32), background: '#E0DEDA' }}/>

        <div style={{ ...px(120, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#C41E2A' }}>14:32</div>
        <div style={{ ...px(154, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 9, color: '#2B4570' }}>ČTK</div>
        <div style={{ ...px(120, 27), fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1A1A1A' }}>Vláda schválila rozpočet. Deficit 280 mld, o 40 více než plán.</div>

        <div style={{ ...px(540, 10, 2, 32), background: 'rgba(196,30,42,0.2)' }}/>
        <div style={{ ...px(556, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#9B9B9B' }}>14:28</div>
        <div style={{ ...px(590, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 9, color: '#2B4570' }}>REUTERS</div>
        <div style={{ ...px(556, 27), fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(26,26,26,0.75)' }}>ECB snížila sazby o 0,25 bodu. Třetí snížení za 6 měsíců.</div>

        <div style={{ ...px(980, 10, 2, 32), background: 'rgba(196,30,42,0.12)' }}/>
        <div style={{ ...px(996, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#9B9B9B' }}>14:15</div>
        <div style={{ ...px(1030, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 9, color: '#2B4570' }}>ČRo</div>
        <div style={{ ...px(996, 27), fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(26,26,26,0.55)' }}>Nezaměstnanost klesla na 3,8 %.</div>

        <div style={{ ...px(1590, 10, 1, 32), background: '#E0DEDA' }}/>
        <div style={{ ...px(1591, 0, 163, 52), background: '#F5F3F0' }}>
          <div style={{ ...px(40, 18), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, color: '#1A1A1A' }}>14:32 CET</div>
        </div>
      </div>
    </ScaledMockup>
  );
}

// ─── 404 — terminal aesthetic, cyan on black ────────────────────────────

function FourOhFourScene({ crop }) {
  return (
    <ScaledMockup crop={crop}>
      <img src="https://images.unsplash.com/photo-1765445666244-ccfec0904605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80" alt="" style={{ ...px(0, 0, 1920, 1080), objectFit: 'cover' }} draggable="false"/>
      <div style={{ ...px(0, 0, 1920, 1080), background: 'rgba(0,0,0,0.55)' }}/>

      {/* Scanlines */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{ ...px(0, 870 + i * 8, 1920, 1), background: 'rgba(255,255,255,0.03)' }}/>
      ))}

      {/* Bug top-right */}
      <div style={{ ...px(1820, 24), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 18, color: 'rgba(255,255,255,0.55)', letterSpacing: 2 }}>404</div>

      {/* Header meta line */}
      <div style={{ ...px(480, 818), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 9, color: '#333', letterSpacing: 1 }}>CH:404 // 14:32:07 UTC // LOWER_THIRD</div>

      {/* Cyan accent rail */}
      <div style={{ ...px(76, 828, 3, 140), background: '#00E5FF' }}/>
      <div style={{ ...px(76, 828, 12, 1), background: 'rgba(0,229,255,0.5)' }}/>
      <div style={{ ...px(76, 968, 12, 1), background: 'rgba(0,229,255,0.5)' }}/>

      {/* L3 main */}
      <div style={{ ...px(80, 830, 680, 116), background: 'rgba(0,0,0,0.91)', border: '1px solid #2A2A2A' }}>
        {/* Top row */}
        <div style={{ ...px(14, 8), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 13, color: '#FFD60A' }}>[LIVE]</div>
        <div style={{ ...px(73, 10), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#666' }}>CH:404</div>
        <div style={{ ...px(121, 10), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#00E5FF' }}>FEED:ACTIVE</div>
        <div style={{ ...px(540, 10), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#00E5FF' }}>SIG ████░░</div>
        <div style={{ ...px(0, 33, 680, 1), background: '#2A2A2A' }}/>

        {/* Content row */}
        <div style={{ ...px(17, 41), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, color: 'rgba(255,255,255,0.12)', letterSpacing: 0.5 }}>JANA NOVÁKOVÁ</div>
        <div style={{ ...px(14, 44), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, color: '#fff', letterSpacing: 0.5 }}>JANA NOVÁKOVÁ</div>
        <div style={{ ...px(14, 72), fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#999' }}>Analytička digitálních médií</div>
        <div style={{ ...px(580, 46), fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: 14, color: '#666' }}>14:32:07</div>
        <div style={{ ...px(580, 68), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>SRC:STUDIO</div>
        <div style={{ ...px(0, 90, 680, 1), background: '#2A2A2A' }}/>

        {/* Meta row */}
        <div style={{ ...px(14, 97), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>14:32:07</div>
        <div style={{ ...px(70, 97), fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#333' }}>//</div>
        <div style={{ ...px(90, 97), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>ID:40417</div>
        <div style={{ ...px(146, 97), fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#333' }}>//</div>
        <div style={{ ...px(166, 97), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>FEED:ACTIVE</div>
        <div style={{ ...px(240, 97), fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#333' }}>//</div>
        <div style={{ ...px(260, 97), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>STREAM:OK</div>
        <div style={{ ...px(322, 103, 344, 1), background: '#222' }}/>
      </div>

      {/* Debug line */}
      <div style={{ ...px(82, 968), fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#333' }}>{'> signal_lock: true // retry: 0 // stream: active_'}</div>

      {/* Ticker frame lines */}
      <div style={{ ...px(80, 1004, 1760, 1), background: 'rgba(0,229,255,0.4)' }}/>
      <div style={{ ...px(80, 1058, 1760, 1), background: 'rgba(0,229,255,0.4)' }}/>

      {/* Ticker */}
      <div style={{ ...px(80, 1006, 1760, 52), background: 'rgba(0,0,0,0.94)', border: '1px solid #2A2A2A' }}>
        {/* Badge */}
        <div style={{ ...px(0, 0, 86, 52), background: '#000' }}>
          <div style={{ ...px(16, 15), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 16, color: '#00E5FF', letterSpacing: 1 }}>[404]</div>
        </div>
        <div style={{ ...px(86, 0, 1, 52), background: '#2A2A2A' }}/>
        <div style={{ ...px(87, 0, 48, 52), background: '#0A0A0A' }}>
          <div style={{ ...px(12, 20), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 10, color: '#FFD60A' }}>LIVE</div>
        </div>
        <div style={{ ...px(135, 0, 1, 52), background: '#2A2A2A' }}/>

        {/* Content */}
        <div style={{ ...px(152, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#FF3B30' }}>14:32</div>
        <div style={{ ...px(186, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 9, color: '#00E5FF' }}>ČTK</div>
        <div style={{ ...px(152, 27), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: '#fff' }}>Globální datový výpadek zasáhl tři kontinenty — příčina neznámá</div>

        <div style={{ ...px(646, 10, 2, 32), background: 'rgba(255,59,48,0.2)' }}/>
        <div style={{ ...px(662, 8), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 9, color: '#666' }}>14:28</div>
        <div style={{ ...px(696, 8), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 9, color: '#00E5FF' }}>REUTERS</div>
        <div style={{ ...px(662, 27), fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>AI generátor překonal Turingův test — výsledky zpochybněny</div>

        {/* Tail time */}
        <div style={{ ...px(1669, 0, 1, 52), background: '#2A2A2A' }}/>
        <div style={{ ...px(1670, 0, 90, 52), background: '#050505' }}>
          <div style={{ ...px(24, 10), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 14, color: '#666' }}>14:32</div>
          <div style={{ ...px(36, 30), fontFamily: 'JetBrains Mono, monospace', fontWeight: 500, fontSize: 10, color: '#444' }}>:07</div>
        </div>
      </div>
    </ScaledMockup>
  );
}

// ─── AURORA — premium cinematic, refined editorial ──────────────────────

function AuroraScene({ crop }) {
  return (
    <ScaledMockup crop={crop}>
      {/* Soft gradient background */}
      <div style={{ ...px(0, 0, 1920, 1080), background: 'radial-gradient(ellipse at 60% 40%, #2B1A47 0%, #0E0820 60%, #050310 100%)' }}/>
      {/* Ambient color blobs */}
      <div style={{ ...px(1100, 100, 700, 700), borderRadius: '60% 40% 30% 70%', background: 'radial-gradient(circle at 30% 30%, rgba(199,125,255,0.35), transparent 60%)', filter: 'blur(80px)' }}/>
      <div style={{ ...px(-200, 500, 600, 600), borderRadius: '40% 60% 70% 30%', background: 'radial-gradient(circle at 60% 60%, rgba(255,143,171,0.28), transparent 60%)', filter: 'blur(100px)' }}/>

      {/* Top-left minimal serif logo */}
      <div style={{ ...px(80, 60), display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ width: 36, height: 36, borderRadius: '40% 60% 30% 70%', background: 'linear-gradient(135deg, #C77DFF, #FF8FAB)' }}/>
        <div style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', fontSize: 36, fontWeight: 500, color: '#fff', letterSpacing: 6 }}>aurora</div>
      </div>

      {/* Top-right time + status */}
      <div style={{ ...px(1700, 76), fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', letterSpacing: 2, textAlign: 'right' }}>21:30 · S2 · E4</div>

      {/* Centered "now showing" card */}
      <div style={{ ...px(560, 360, 800, 360), background: 'rgba(20,15,35,0.55)', backdropFilter: 'blur(20px)', border: '1px solid rgba(199,125,255,0.22)', borderRadius: '20px 56px 20px 32px', padding: 48 }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, color: '#C77DFF', letterSpacing: 5, textTransform: 'uppercase' }}>Currently Showing</div>
        <div style={{ fontFamily: 'Lora, serif', fontStyle: 'italic', fontWeight: 500, fontSize: 72, color: '#fff', lineHeight: 1.05, letterSpacing: -0.8, marginTop: 18 }}>The Quiet Hour</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 20, color: 'rgba(255,255,255,0.55)', marginTop: 14 }}>Season 2 · Episode 4 — Field Notes</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 28 }}>
          <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: '38%', height: '100%', background: 'linear-gradient(90deg, #C77DFF, #FF8FAB)' }}/>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: 1 }}>22:14 / 58:00</div>
        </div>
      </div>

      {/* Lower third bottom-left */}
      <div style={{ ...px(80, 880, 760, 130), background: 'rgba(20,15,35,0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(199,125,255,0.18)', borderRadius: '12px 32px 12px 22px', overflow: 'hidden' }}>
        <div style={{ ...px(24, 18), fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: 'rgba(199,125,255,0.75)', letterSpacing: 3.5, textTransform: 'uppercase' }}>Director</div>
        <div style={{ ...px(24, 42), fontFamily: 'Lora, serif', fontStyle: 'italic', fontSize: 36, color: '#fff', fontWeight: 500, letterSpacing: -0.3 }}>Anna Černá</div>
        <div style={{ ...px(24, 92), fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>Cinematographer · Czech Television, Originals</div>
      </div>
    </ScaledMockup>
  );
}

// ─── PULSE — finance / markets, dense data ─────────────────────────────

function PulseScene({ crop }) {
  const indices = [
    { name: 'S&P 500', val: '5,847.21', chg: '+0.84%', up: true },
    { name: 'DAX', val: '19,234.55', chg: '-0.32%', up: false },
    { name: 'NIKKEI', val: '39,128.40', chg: '+1.21%', up: true },
  ];
  const tickerItems = [
    { sym: 'AAPL', val: '234.50', chg: '+0.83', up: true },
    { sym: 'TSLA', val: '412.20', chg: '-1.24', up: false },
    { sym: 'NVDA', val: '142.85', chg: '+2.41', up: true },
    { sym: 'GOOGL', val: '184.32', chg: '+0.55', up: true },
    { sym: 'MSFT', val: '438.91', chg: '-0.12', up: false },
    { sym: 'AMZN', val: '208.45', chg: '+1.07', up: true },
  ];
  return (
    <ScaledMockup crop={crop}>
      {/* Dark gradient background */}
      <div style={{ ...px(0, 0, 1920, 1080), background: 'linear-gradient(180deg, #060912 0%, #0A0F1C 100%)' }}/>
      {/* Subtle grid */}
      <svg style={{ ...px(0, 0, 1920, 1080), opacity: 0.5 }}>
        <defs>
          <pattern id="pulse-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(0,200,83,0.06)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1920" height="1080" fill="url(#pulse-grid)"/>
      </svg>

      {/* Top-right bug */}
      <div style={{ ...px(1730, 36), display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 10, height: 10, background: '#00C853', borderRadius: '50%', boxShadow: '0 0 16px #00C853' }}/>
        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: 4 }}>PULSE</div>
      </div>

      {/* Top-left index cards row */}
      {indices.map((idx, i) => (
        <div key={idx.name} style={{ ...px(80 + i * 244, 80, 224, 108), background: 'rgba(15,20,35,0.85)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 4px 10px', overflow: 'hidden' }}>
          <div style={{ ...px(16, 12), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 2 }}>{idx.name}</div>
          <div style={{ ...px(16, 32), fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 26, color: '#fff' }}>{idx.val}</div>
          <div style={{ ...px(16, 66), fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: 14, color: idx.up ? '#00C853' : '#FF4D4D' }}>{idx.up ? '▲' : '▼'} {idx.chg}</div>
        </div>
      ))}

      {/* Big stock card center */}
      <div style={{ ...px(80, 320, 1300, 420), background: 'rgba(15,20,35,0.55)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px 16px 6px 12px', overflow: 'hidden' }}>
        <div style={{ ...px(28, 28), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: 2.5, textTransform: 'uppercase' }}>AAPL · Apple Inc.</div>
        <div style={{ ...px(28, 56), display: 'flex', alignItems: 'baseline', gap: 18 }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: 80, color: '#fff', lineHeight: 1 }}>234.50</div>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, fontSize: 26, color: '#00C853' }}>▲ +1.92 (+0.83%)</div>
        </div>
        {/* Sparkline */}
        <svg viewBox="0 0 1300 240" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 240 }}>
          <defs>
            <linearGradient id="pulse-spark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(0,200,83,0.35)"/>
              <stop offset="100%" stopColor="rgba(0,200,83,0)"/>
            </linearGradient>
          </defs>
          <path d="M 0,170 L 90,150 L 180,165 L 270,130 L 360,140 L 450,100 L 540,110 L 630,75 L 720,85 L 810,55 L 900,30 L 990,45 L 1080,20 L 1170,35 L 1260,10 L 1300,18 L 1300,240 L 0,240 Z" fill="url(#pulse-spark)"/>
          <path d="M 0,170 L 90,150 L 180,165 L 270,130 L 360,140 L 450,100 L 540,110 L 630,75 L 720,85 L 810,55 L 900,30 L 990,45 L 1080,20 L 1170,35 L 1260,10 L 1300,18" fill="none" stroke="#00C853" strokeWidth="3"/>
        </svg>
      </div>

      {/* Lower third bottom-left */}
      <div style={{ ...px(80, 780, 720, 110), background: 'rgba(15,20,35,0.92)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px 16px 6px 12px', overflow: 'hidden' }}>
        <div style={{ ...px(0, 0, 6, 110), background: '#00C853' }}/>
        <div style={{ ...px(22, 18), fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11, color: '#00C853', letterSpacing: 2.5 }}>ANALYST · LIVE</div>
        <div style={{ ...px(22, 40), fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: -0.3 }}>Tomáš Marek</div>
        <div style={{ ...px(22, 78), fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>Head of Equity Research · Komerční banka</div>
      </div>

      {/* Bottom ticker */}
      <div style={{ ...px(0, 1020, 1920, 60), background: 'rgba(8,12,22,0.95)', overflow: 'hidden' }}>
        <div style={{ ...px(0, 0, 1920, 1), background: 'rgba(0,200,83,0.25)' }}/>
        <div style={{ ...px(0, 0, 130, 60), background: '#00C853', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: 15, color: '#060912', letterSpacing: 2.5 }}>MARKETS</div>
        </div>
        <div style={{ ...px(150, 20), display: 'flex', gap: 28, whiteSpace: 'nowrap' }}>
          {tickerItems.map(t => (
            <div key={t.sym} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'JetBrains Mono, monospace', fontSize: 17 }}>
              <span style={{ fontWeight: 700, color: '#fff' }}>{t.sym}</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>{t.val}</span>
              <span style={{ fontWeight: 600, color: t.up ? '#00C853' : '#FF4D4D' }}>{t.up ? '▲' : '▼'} {t.chg}%</span>
            </div>
          ))}
        </div>
      </div>
    </ScaledMockup>
  );
}

// ─── BLUEPRINT — generic wireframe starter ──────────────────────────────

function BlueprintScene({ crop }) {
  const slot = (extra = {}) => ({
    border: '2px dashed rgba(155,123,255,0.4)',
    background: 'rgba(155,123,255,0.04)',
    fontFamily: 'Manrope, sans-serif',
    fontWeight: 700,
    letterSpacing: 2,
    color: 'rgba(155,123,255,0.7)',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...extra,
  });
  return (
    <ScaledMockup crop={crop}>
      {/* Wireframe grid background */}
      <div style={{ ...px(0, 0, 1920, 1080), background: 'linear-gradient(135deg, #14101F 0%, #0a0710 100%)' }}/>
      <svg style={{ ...px(0, 0, 1920, 1080) }}>
        <defs>
          <pattern id="bp-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(155,123,255,0.06)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="1920" height="1080" fill="url(#bp-grid)"/>
      </svg>
      {/* Centered hint label */}
      <div style={{ ...px(0, 480, 1920) }}>
        <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300, fontSize: 80, color: 'rgba(155,123,255,0.25)', textAlign: 'center', letterSpacing: 8 }}>BLUEPRINT</div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 22, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: 8, letterSpacing: 2 }}>Wire any element to your brand</div>
      </div>

      {/* Bug slot */}
      <div style={{ ...slot({ ...px(1740, 40, 140, 56), fontSize: 14 }) }}>BUG</div>

      {/* Score slot */}
      <div style={{ ...slot({ ...px(80, 40, 320, 80), fontSize: 14 }) }}>SCORE / DATA</div>

      {/* Lower third slot */}
      <div style={{ ...slot({ ...px(80, 840, 720, 130), fontSize: 18 }) }}>LOWER THIRD</div>

      {/* Ticker slot */}
      <div style={{ ...slot({ ...px(80, 990, 1760, 56), fontSize: 14 }) }}>TICKER</div>
    </ScaledMockup>
  );
}

function ChannelScene({ kit, crop }) {
  if (kit.id === 'kick') return <KickScene crop={crop}/>;
  if (kit.id === 'veritas') return <VeritasScene crop={crop}/>;
  if (kit.id === '404') return <FourOhFourScene crop={crop}/>;
  if (kit.id === 'aurora') return <AuroraScene crop={crop}/>;
  if (kit.id === 'pulse') return <PulseScene crop={crop}/>;
  return <BlueprintScene crop={crop}/>;
}

function ChannelKitCard({ kit, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        background: active ? 'rgba(255,255,255,0.04)' : 'var(--bg3)',
        borderRadius: '8px 16px 8px 32px',
        overflow: 'hidden',
        border: active ? `1px solid ${kit.accent}60` : '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        transform: active ? 'translateY(-4px)' : 'none',
        boxShadow: active ? `0 24px 50px ${kit.accent}20` : 'none',
      }}>
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <ChannelScene kit={kit} />
        {/* Brand strip indicator */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${kit.accent}, ${kit.accent2})` }} />
      </div>
      <div style={{ padding: '16px 18px 18px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ width: 14, height: 14, background: `linear-gradient(135deg, ${kit.accent}, ${kit.accent2})`, borderRadius: '20% 60% 20% 60%', flexShrink: 0 }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--white)', letterSpacing: 0.5 }}>{kit.name}</div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, color: kit.accent, letterSpacing: 1.5, background: `${kit.accent}15`, padding: '3px 7px', borderRadius: '3px 6px 3px 5px', textTransform: 'uppercase' }}>{kit.sector}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.55)', lineHeight: 1.4, marginBottom: 8, minHeight: 32 }}>{kit.tagline}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(226,228,229,0.35)', letterSpacing: 0.5 }}>{kit.typeNote}</div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, color: 'rgba(226,228,229,0.4)', letterSpacing: 1.5 }}>{kit.elements} ELEMENTS</div>
        </div>
      </div>
    </div>
  );
}

export default function BrandYourChannel() {
  const { isMobile } = useViewport();
  const [active, setActive] = useState('kick');
  const activeKit = CHANNEL_KITS.find(k => k.id === active) || CHANNEL_KITS[0];

  return (
    <section id="branding" style={{ padding: '120px 40px', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Floating brand shape */}
      <div style={{ position: 'absolute', top: '5%', right: '-10%', width: 460, height: 340, opacity: 0.06, zIndex: 0, animation: 'floatShape 24s ease infinite' }}>
        <GradientShape style={{ width: '100%', height: '100%' }} radius="20% 60% 20% 50%" />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 24 : 80, alignItems: isMobile ? 'start' : 'end', marginBottom: isMobile ? 36 : 56 }}>
          <div>
            <SectionLabel label="Channel Branding" color="#9B7BFF" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.02, marginTop: 8 }}>
              Build an entire <span style={{
                background: 'linear-gradient(135deg, #9B7BFF 0%, #22C68A 50%, #0AB6E0 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>channel identity</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}> — not just one graphic.</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.6)', lineHeight: 1.7, maxWidth: 460 }}>
            Design a complete on-air look — every lower third, ticker, score widget, and bug coordinated as one brand system. Build a new channel from scratch, or extend your existing graphics package without breaking visual consistency.
          </p>
        </div>

        {/* Featured large preview */}
        <div style={{ position: 'relative', marginBottom: 32, borderRadius: '12px 24px 12px 40px', overflow: 'hidden', border: `1px solid ${activeKit.accent}30`, background: '#0a0d10', boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px ${activeKit.accent}10` }}>
          {/* Window chrome */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF6258' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBD2E' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27C93F' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.4)', marginLeft: 12 }}>tweenly — {activeKit.name.toLowerCase()} brand kit</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: activeKit.accent, letterSpacing: 1.5, textTransform: 'uppercase' }}>● Live preview</span>
          </div>
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
            <ChannelScene kit={activeKit} />
          </div>
        </div>

        {/* Kit selector cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, marginBottom: isMobile ? 36 : 56 }}>
          {CHANNEL_KITS.map(kit => (
            <ChannelKitCard key={kit.id} kit={kit} active={kit.id === active} onClick={() => setActive(kit.id)} />
          ))}
        </div>

        {/* CTA path cards */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
          <a href="https://editor.tweenly.io/signup" style={{
            background: 'linear-gradient(135deg, rgba(34,198,138,0.08), rgba(10,182,224,0.08))',
            borderRadius: '8px 16px 8px 32px',
            padding: '32px 36px',
            border: '1px solid rgba(34,198,138,0.3)',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 24,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(34,198,138,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(34,198,138,0.3)'; }}>
            <div style={{ width: 56, height: 56, borderRadius: '12px 24px 12px 24px', background: 'linear-gradient(135deg, #82B820, #22C68A)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#0a0d10' }}>+</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#22C68A', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>For new channels</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--white)', letterSpacing: -0.5, lineHeight: 1.1 }}>Launch a brand-new channel</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.55)', marginTop: 6, lineHeight: 1.55 }}>Start from a blank canvas. Define your colors, type, and motion language — then design a complete graphics package inside one workspace.</div>
            </div>
            <span style={{ color: '#22C68A', fontSize: 22, fontFamily: 'var(--font-display)' }}>→</span>
          </a>

          <a href="mailto:info@tweenly.io" style={{
            background: 'linear-gradient(135deg, rgba(155,123,255,0.08), rgba(10,182,224,0.08))',
            borderRadius: '8px 16px 8px 32px',
            padding: '32px 36px',
            border: '1px solid rgba(155,123,255,0.3)',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 24,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(155,123,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(155,123,255,0.3)'; }}>
            <div style={{ width: 56, height: 56, borderRadius: '12px 24px 12px 24px', background: 'linear-gradient(135deg, #9B7BFF, #0AB6E0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 12 L20 12 M14 6 L20 12 L14 18" stroke="#0a0d10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#9B7BFF', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>For existing brands</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--white)', letterSpacing: -0.5, lineHeight: 1.1 }}>Extend your current branding</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.55)', marginTop: 6, lineHeight: 1.55 }}>Already have a brand book? Send us your existing design files and we'll rebuild them in Tweenly — pixel-perfect, animatable, and production-ready.</div>
            </div>
            <span style={{ color: '#9B7BFF', fontSize: 22, fontFamily: 'var(--font-display)' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
