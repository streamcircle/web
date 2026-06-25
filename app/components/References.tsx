"use client";

import { PlayMark, SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// ─── References ─────────────────────────────────────────────────────────────

const ADOPTERS = [
  {
    name: 'BLITZ',
    logo: '/assets/blitz-logo.png',
    logoTile: true,
    logoHeight: 38,
    type: 'Sports Broadcaster',
    desc: 'Live score graphics and lower thirds for football and hockey coverage.',
    accent: '#22C68A',
    elements: ['Score widgets', 'Lower thirds', 'Tickers'],
  },
  {
    name: 'PRAHA TV',
    logo: '/assets/praha-tv-logo.png',
    type: 'Regional Television',
    desc: 'Full on-air graphics package — news lower thirds, tickers, and channel branding.',
    accent: '#0AB6E0',
    elements: ['Lower thirds', 'News tickers', 'Bugs'],
  },
];

export default function References() {
  const { isMobile } = useViewport();
  return (
    <section id="references" style={{ padding: isMobile ? '64px 20px' : '100px 40px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionLabel label="Early Adopters" color="#22C68A" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 44px)', letterSpacing: -1, color: 'var(--white)', lineHeight: 1.1, marginTop: 8 }}>
            Already on air with Tweenly
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
          {ADOPTERS.map(a => (
            <div key={a.name} style={{
              background: 'var(--bg2)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px 16px 8px 32px',
              padding: '28px 32px',
              position: 'relative', overflow: 'hidden',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${a.accent}40`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'none'; }}>
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: 48, height: 2, background: a.accent }} />
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div>
                  {a.logo
                    ? (a.logoTile
                        ? <div style={{ display: 'inline-block', borderRadius: '4px 10px 4px 8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.14)', lineHeight: 0 }}>
                            <img src={a.logo} alt={a.name} style={{ height: a.logoHeight || 40, width: 'auto', display: 'block' }} />
                          </div>
                        : <img src={a.logo} alt={a.name} style={{ height: a.logoHeight || 40, width: 'auto', display: 'block', objectFit: 'contain' }} />)
                    : <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--white)', letterSpacing: 1.5 }}>{a.name}</div>
                  }
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: a.accent, fontWeight: 600, letterSpacing: 1, marginTop: a.logo ? 8 : 2, textTransform: 'uppercase' }}>{a.type}</div>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '8px 16px 8px 16px', background: `${a.accent}15`, border: `1px solid ${a.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PlayMark size={18} color={a.accent} />
                </div>
              </div>
              {/* Description */}
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.6)', lineHeight: 1.55, marginBottom: 16 }}>{a.desc}</div>
              {/* Element tags */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {a.elements.map(el => (
                  <div key={el} style={{
                    fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 600,
                    color: a.accent, background: `${a.accent}12`,
                    border: `1px solid ${a.accent}25`,
                    padding: '4px 10px', borderRadius: '4px 8px 4px 14px',
                    letterSpacing: 0.5,
                  }}>{el}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
