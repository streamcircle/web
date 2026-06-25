"use client";
// ─── Screenshot frame ────────────────────────────────────────────────────────
// Browser-chrome frame for real product screenshots. Pass `src` when a real
// screenshot exists; until then it renders a styled placeholder so the layout
// is final and the image simply drops in later.

export function ScreenshotFrame({ src, alt, urlLabel, accent = '#22C68A', badge, appName, placeholderNote = 'Product screenshot', aspectRatio = '16/9' }) {
  const gridId = 'ph-grid-' + (appName || 'x').replace(/\s+/g, '-');
  return (
    <div style={{
      position: 'relative', borderRadius: '12px 24px 12px 40px', overflow: 'hidden',
      border: `1px solid ${accent}30`, background: '#0a0d10',
      boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px ${accent}10`,
    }}>
      {/* window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF6258' }} />
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBD2E' }} />
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27C93F' }} />
        {urlLabel && <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.45)', marginLeft: 12 }}>{urlLabel}</span>}
        {badge && <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: accent, letterSpacing: 1.5, textTransform: 'uppercase' }}>{badge}</span>}
      </div>
      {/* body */}
      <div style={{ position: 'relative', aspectRatio, overflow: 'hidden', background: 'radial-gradient(ellipse at 50% 0%, #0e141a 0%, #07090c 82%)' }}>
        {src ? (
          <img src={src} alt={alt || appName} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}>
              <pattern id={gridId} width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="none" stroke="#fff" strokeWidth="0.5"/></pattern>
              <rect width="100%" height="100%" fill={`url(#${gridId})`}/>
            </svg>
            <div style={{ position: 'absolute', width: 300, height: 200, background: `radial-gradient(ellipse, ${accent}1f, transparent 70%)`, filter: 'blur(40px)' }} />
            <div style={{ position: 'relative', width: 64, height: 64, borderRadius: '12px 22px 12px 28px', border: `1.5px solid ${accent}55`, background: `${accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4.5" width="18" height="14" rx="1.6" stroke={accent} strokeWidth="1.6"/>
                <circle cx="8" cy="9.5" r="1.5" fill={accent}/>
                <path d="M4 16.5 L10 11.5 L14 14.5 L20 9.5" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'rgba(255,255,255,0.92)', letterSpacing: 0.5 }}>{appName}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.45)', marginTop: 5, letterSpacing: 0.5 }}>{placeholderNote} — coming soon</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
