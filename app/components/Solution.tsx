"use client";

import { ScreenshotFrame } from "./ScreenshotFrame";
import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// Editor capabilities — Gallery / Workspaces / Export folded in as chips
// alongside the core editor features (was four full rows).

const EDITOR_CHIPS = [
  { label: 'Drag-and-drop canvas', accent: '#22C68A' },
  { label: 'Timeline · 33 animations', accent: '#22C68A' },
  { label: 'JSON / XML data binding', accent: '#22C68A' },
  { label: 'Gallery — shared graphic library', accent: '#0AB6E0' },
  { label: 'Workspaces & roles', accent: '#82B820' },
  { label: 'HTML & ZIP export', accent: '#107F76' },
  { label: 'JavaScript API', accent: '#107F76' },
];

export default function Solution() {
  const { isMobile } = useViewport();
  return (
    <section id="editor" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 52 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label="Tweenly Editor · Design" /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05 }}>
            A browser-based<br/>
            <span style={{
              background: 'linear-gradient(90deg, #5BE3AE 0%, #22C68A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic', fontWeight: 500,
            }}>broadcast design studio.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.62)', maxWidth: 620, margin: '16px auto 0', lineHeight: 1.65 }}>
            The visual design tool — a keyframe canvas where every element maps to an HTML overlay layer. Build at your real output resolution, animate on a timeline, bind live data, and ship as HTML or a self-contained package.
          </p>
        </div>
        <ScreenshotFrame appName="Tweenly Editor" urlLabel="editor.tweenly.io" accent="#22C68A" badge="● Design tool" placeholderNote="Editor screenshot" aspectRatio="16/9" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: isMobile ? 24 : 28 }}>
          {EDITOR_CHIPS.map(c => (
            <div key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 4px 8px', padding: '9px 16px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(226,228,229,0.82)', fontWeight: 500 }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
