"use client";

import { useState } from "react";
import { PlayMark, SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── What You Can Build (4-card grid) ───────────────────────────────────────

const BUILD_CARDS = [
  {
    label: t("build.cards.0.label"),
    desc: t("build.cards.0.desc"),
    color: '#22C68A',
    preview: 'lt',
  },
  {
    label: t("build.cards.1.label"),
    desc: t("build.cards.1.desc"),
    color: '#0AB6E0',
    preview: 'ticker',
  },
  {
    label: t("build.cards.2.label"),
    desc: t("build.cards.2.desc"),
    color: '#82B820',
    preview: 'score',
  },
  {
    label: t("build.cards.3.label"),
    desc: t("build.cards.3.desc"),
    color: '#107F76',
    preview: 'fs',
  },
  {
    label: t("build.cards.4.label"),
    desc: t("build.cards.4.desc"),
    color: '#22C68A',
    preview: 'bug',
  },
  {
    label: t("build.cards.5.label"),
    desc: t("build.cards.5.desc"),
    color: '#E05151',
    preview: 'breaking',
  },
];

function BuildPreview({ kind, color }: { kind: string; color: string }) {
  if (kind === 'lt') return (
    <div style={{ position: 'absolute', bottom: 22, left: 24, right: 70, display: 'flex', alignItems: 'stretch', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.6))' }}>
      <div style={{ width: 3, background: color, flexShrink: 0 }}/>
      <div style={{ flex: 1, background: 'rgba(10,13,16,0.92)', backdropFilter: 'blur(8px)', padding: '8px 12px 9px 12px', borderRadius: '0 8px 0 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <div style={{ background: color, color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 8, letterSpacing: 1.5, padding: '1px 6px', borderRadius: '2px 5px 2px 4px', textTransform: 'uppercase' }}>Reporter</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 7, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: 1 }}>● LIVE · STUDIO</div>
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: -0.2, lineHeight: 1.1 }}>Sarah Mitchell</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>Senior Correspondent</div>
      </div>
    </div>
  );
  if (kind === 'ticker') return (
    <div style={{ position: 'absolute', bottom: 26, left: 0, right: 0, background: 'rgba(10,13,16,0.94)', borderTop: `1px solid ${color}40`, borderBottom: `1px solid ${color}40`, height: 36, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingLeft: 12, fontFamily: 'var(--font-body)', fontSize: 10, color: '#E2E4E5', whiteSpace: 'nowrap', animation: 'ticker 16s linear infinite' }}>
        <span><span style={{ color, fontWeight: 700, marginRight: 4 }}>14:32</span><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: 700, marginRight: 6 }}>REUTERS</span>Tweenly 3.0 released — full HTML overlay pipeline</span>
        <span style={{ width: 2, height: 12, background: `${color}40` }}/>
        <span><span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700, marginRight: 4 }}>14:28</span><span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: 700, marginRight: 6 }}>AP</span>New score widget presets shipping next sprint</span>
      </div>
    </div>
  );
  if (kind === 'score') return (
    <div style={{ position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)', background: 'rgba(10,13,16,0.94)', border: `1px solid ${color}40`, borderRadius: '4px 12px 4px 8px', padding: '0', display: 'flex', alignItems: 'stretch', overflow: 'hidden', filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.5))' }}>
      <div style={{ padding: '8px 14px', borderRight: `1px solid ${color}25` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 10, height: 10, background: color, borderRadius: 2 }}/>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: '#fff', letterSpacing: 0.5 }}>CZE</div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color, lineHeight: 1 }}>2</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          <div style={{ width: 10, height: 10, background: 'rgba(255,255,255,0.4)', borderRadius: 2 }}/>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, color: '#fff', letterSpacing: 0.5 }}>SVK</div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: '#fff', lineHeight: 1 }}>1</div>
        </div>
      </div>
      <div style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 44 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color, lineHeight: 1 }}>72&apos;</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 7, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, marginTop: 2 }}>2ND HALF</div>
      </div>
    </div>
  );
  if (kind === 'fs') return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
      <div style={{ position: 'relative', width: 72, height: 72 }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '20% 50% 20% 50%', background: `linear-gradient(135deg, ${color}, #107F76)`, animation: 'gradientFlow 4s ease infinite', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.5))' }} />
        <div style={{ position: 'absolute', inset: -8, borderRadius: '20% 50% 20% 50%', border: `1px solid ${color}40` }}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 16, height: 1, background: color, opacity: 0.6 }}/>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#fff', letterSpacing: 4 }}>STINGER</div>
        <div style={{ width: 16, height: 1, background: color, opacity: 0.6 }}/>
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: 1 }}>Full-frame transition · 1.2s</div>
    </div>
  );
  if (kind === 'bug') return (
    <>
      {/* Corner bug */}
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ background: 'rgba(10,13,16,0.85)', border: `1px solid ${color}50`, borderRadius: '4px 10px 4px 10px', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <PlayMark size={14} color={color}/>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, color: '#fff', letterSpacing: 1 }}>CHANNEL</span>
        </div>
      </div>
      {/* Bottom subtler watermark */}
      <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 3 }}>CHANNEL</div>
      <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-body)', fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: color, animation: 'blink 1.6s infinite' }}/>
        ON AIR
      </div>
    </>
  );
  if (kind === 'breaking') return (
    <div style={{ position: 'absolute', top: '50%', left: 16, right: 16, transform: 'translateY(-50%)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: color, color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10, letterSpacing: 2.5, padding: '5px 14px', borderRadius: '3px 10px 3px 7px', textTransform: 'uppercase', marginBottom: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0a0d10', animation: 'blink 1.2s infinite' }}/>
        Breaking
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: '#fff', lineHeight: 1.1, letterSpacing: -0.4, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Live updates incoming from Berlin</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Coverage starts at 21:00 CET — reporter on scene</div>
    </div>
  );
  return null;
}

function BuildCard({ item }: { item: (typeof BUILD_CARDS)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg2)',
        borderRadius: '8px 16px 8px 32px',
        overflow: 'hidden', position: 'relative',
        border: `1px solid ${hovered ? item.color + '40' : 'rgba(255,255,255,0.06)'}`,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}>
      {/* Preview area */}
      <div style={{ position: 'relative', aspectRatio: '16/9', background: 'radial-gradient(ellipse at 30% 30%, #0d2228 0%, #0a1518 100%)', overflow: 'hidden' }}>
        {/* line pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}>
          <defs>
            <pattern id={`bp-${item.preview}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="2" y1="18" x2="18" y2="2" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#bp-${item.preview})`}/>
        </svg>
        {/* sweep highlight on hover */}
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`, animation: 'lineSweep 1.4s ease infinite' }} />
        )}
        <BuildPreview kind={item.preview} color={item.color} />
      </div>
      {/* Info */}
      <div style={{ padding: '20px 24px 24px', borderTop: `2px solid ${item.color}` }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--white)', marginBottom: 8, letterSpacing: -0.3 }}>{item.label}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.5)', lineHeight: 1.55 }}>{item.desc}</div>
      </div>
    </div>
  );
}

export default function WhatYouCanBuild() {
  const { isMobile } = useViewport();
  return (
    <section id="examples" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label={t("build.sectionLabel")} /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05 }}>
            {t("build.heading")}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.62)', maxWidth: 560, margin: '16px auto 0', lineHeight: 1.65 }}>
            {t("build.subheading")}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 20 }}>
          {BUILD_CARDS.map(item => <BuildCard key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  );
}
