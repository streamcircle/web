"use client";

import { useViewport } from "./useViewport";
// ─── One Tool from Design to Playout ─────────────────────────────────────────

export const TOOL_STEPS = [
  {
    num: '01',
    title: 'Editor',
    desc: 'A keyframe-based design canvas where every element maps to an HTML overlay layer. Build at your actual output resolution.',
    bullets: ['Drag-and-drop visual editor', '33 preset animations + custom timeline control', 'JSON/XML data binding with auto-refresh'],
    accent: '#22C68A',
    visual: 'editor',
  },
  {
    num: '02',
    title: 'Gallery',
    desc: 'Every template and exported package in one searchable library. Clone a previous lower third, swap the data source, and it\'s ready for a new show.',
    bullets: ['Searchable graphic library with thumbnails', 'Filter by workspace, type, status, or author', 'Shared across your workspace'],
    accent: '#0AB6E0',
    visual: 'gallery',
  },
  {
    num: '03',
    title: 'Workspaces',
    desc: 'Separate workspaces per show, channel, or client. Control who can edit templates and who can only operate them on air.',
    bullets: ['One workspace per show or channel', 'Owner, Admin, and Collaborator roles', 'Shared graphics and data sources across the team'],
    accent: '#82B820',
    visual: 'workspaces',
  },
  {
    num: '04',
    title: 'Export',
    desc: 'Export as HTML5 overlay packages or self-contained ZIP bundles. Every exported graphic exposes a JavaScript API for programmatic control from your playout system.',
    bullets: ['HTML export — compact, cloud-hosted assets', 'ZIP packages for offline playout (Unlimited)', 'Control exported graphics via JavaScript API'],
    accent: '#107F76',
    visual: 'export',
  },
];

export function ToolVisual({ kind, accent }) {
  if (kind === 'editor') return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg2)', borderRadius: '8px 16px 8px 32px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Editor chrome */}
      <div style={{ display: 'flex', height: '100%' }}>
        {/* left tools */}
        <div style={{ width: 36, background: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', padding: 6, gap: 4, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          {[1,2,3,4,5,6].map(i => <div key={i} style={{ width: 24, height: 24, borderRadius: 4, background: i === 2 ? accent + '30' : 'rgba(255,255,255,0.04)', border: i === 2 ? `1px solid ${accent}` : 'none' }} />)}
        </div>
        {/* canvas */}
        <div style={{ flex: 1, position: 'relative', background: 'radial-gradient(ellipse at center, #0d1518 0%, #050708 100%)' }}>
          {/* grid */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}>
            <pattern id="ed-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect width="20" height="20" fill="none" stroke="#fff" strokeWidth="0.3"/></pattern>
            <rect width="100%" height="100%" fill="url(#ed-grid)"/>
          </svg>
          {/* Selected element */}
          <div style={{ position: 'absolute', top: '40%', left: '15%', width: '60%' }}>
            <div style={{ background: accent, color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 9, letterSpacing: 1.5, padding: '3px 9px', borderRadius: '3px 8px 3px 5px', display: 'inline-block' }}>STREAMING NEWS</div>
            <div style={{ background: 'rgba(10,13,16,0.92)', borderRadius: '4px 12px 4px 8px', padding: '8px 14px', marginTop: 3, borderLeft: `2px solid ${accent}`, position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: -0.3 }}>JOHN DOE</div>
              {/* selection handles */}
              <div style={{ position: 'absolute', top: -4, left: -4, width: 8, height: 8, background: accent, border: '1.5px solid #0a0d10' }} />
              <div style={{ position: 'absolute', top: -4, right: -4, width: 8, height: 8, background: accent, border: '1.5px solid #0a0d10' }} />
              <div style={{ position: 'absolute', bottom: -4, left: -4, width: 8, height: 8, background: accent, border: '1.5px solid #0a0d10' }} />
              <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, background: accent, border: '1.5px solid #0a0d10' }} />
            </div>
          </div>
        </div>
        {/* right panel */}
        <div style={{ width: 80, background: 'rgba(0,0,0,0.3)', padding: 8, borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 8, fontWeight: 600, color: 'rgba(226,228,229,0.4)', letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase' }}>Properties</div>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.04)', height: 18, borderRadius: 3, marginBottom: 4 }} />
          ))}
        </div>
      </div>
      {/* Timeline at bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 36, right: 80, height: 36, background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
        {[accent, '#0AB6E0', '#82B820'].map((c, i) => (
          <div key={i} style={{ height: 8, background: 'rgba(255,255,255,0.04)', borderRadius: 2, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', left: `${i * 10}%`, width: `${30 + i*10}%`, height: '100%', background: c, opacity: 0.7, borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </div>
  );

  if (kind === 'gallery') return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg2)', borderRadius: '8px 16px 8px 32px', overflow: 'hidden', position: 'relative', padding: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: 'rgba(226,228,229,0.5)', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Broadcast Graphic Templates</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const colors = ['#22C68A', '#0AB6E0', '#82B820', '#107F76'];
          const c = colors[i % colors.length];
          return (
            <div key={i} style={{ aspectRatio: '16/10', background: 'rgba(13,21,24,0.8)', borderRadius: '4px 8px 4px 14px', position: 'relative', overflow: 'hidden', border: i === 5 ? `1.5px solid ${accent}` : '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${c}10, transparent)` }} />
              <div style={{ position: 'absolute', bottom: 4, left: 4, right: 4, height: 4, background: c, borderRadius: 2, opacity: 0.6 }} />
              <div style={{ position: 'absolute', top: 4, left: 4, fontFamily: 'var(--font-display)', fontSize: 6, fontWeight: 700, color: c, letterSpacing: 0.5 }}>TEMPLATE</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (kind === 'workspaces') return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0d1518 0%, #0a1518 100%)', borderRadius: '8px 16px 8px 32px', overflow: 'hidden', position: 'relative', padding: 20, border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Mock studio scene */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, height: '100%' }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ background: 'rgba(0,0,0,0.5)', borderRadius: '4px 12px 4px 16px', padding: 8, display: 'flex', flexDirection: 'column', gap: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ background: 'rgba(34,198,138,0.08)', height: 12, borderRadius: 2, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${30 + i*15}%`, background: accent, borderRadius: 2 }} />
            </div>
            {[1,2,3,4].map(j => (
              <div key={j} style={{ background: 'rgba(255,255,255,0.04)', height: 8, borderRadius: 2, width: `${60 + (j*10) % 30}%` }} />
            ))}
            {/* avatar dots */}
            <div style={{ display: 'flex', gap: 3, marginTop: 'auto' }}>
              {[accent, '#0AB6E0', '#82B820', '#107F76'].slice(0, i+1).map((c, k) => (
                <div key={k} style={{ width: 12, height: 12, borderRadius: '50%', background: c, border: '1.5px solid #0a0d10' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (kind === 'export') return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg2)', borderRadius: '8px 16px 8px 32px', overflow: 'hidden', position: 'relative', padding: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: 'rgba(226,228,229,0.5)', letterSpacing: 2, marginBottom: 10, textTransform: 'uppercase' }}>Export & Broadcast Settings</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
        <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '4px 8px 4px 14px', padding: 10, fontFamily: 'monospace', fontSize: 8, color: '#22C68A', lineHeight: 1.5, overflow: 'hidden', border: '1px solid rgba(34,198,138,0.15)' }}>
          <div style={{ color: 'rgba(226,228,229,0.4)' }}>{'// HTML5 Code Output'}</div>
          <div>&lt;div class=&quot;overlay&quot;&gt;</div>
          <div>  &lt;div class=&quot;title&quot;&gt;</div>
          <div>    {`{{name}}`}</div>
          <div>  &lt;/div&gt;</div>
          <div>&lt;/div&gt;</div>
        </div>
        <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '4px 8px 4px 14px', padding: 10, fontFamily: 'monospace', fontSize: 8, color: '#0AB6E0', lineHeight: 1.5, border: '1px solid rgba(10,182,224,0.15)' }}>
          <div style={{ color: 'rgba(226,228,229,0.4)' }}>{'// API Configuration'}</div>
          <div>endpoint: /api/v1</div>
          <div>method: POST</div>
          <div>format: HTML5</div>
          <div style={{ color: '#82B820', marginTop: 4 }}>● connected</div>
        </div>
      </div>
      <div style={{
        background: 'linear-gradient(135deg, #82B820 0%, #22C68A 100%)',
        color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11,
        padding: '8px 14px', borderRadius: '4px 12px 4px 16px', textAlign: 'center', letterSpacing: 0.5,
      }}>↓ EXPORT HTML PACKAGE</div>
    </div>
  );

  if (kind === 'onair') return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a1820 0%, #0a1518 100%)', borderRadius: '8px 16px 8px 32px', overflow: 'hidden', position: 'relative', padding: 14, border: '1px solid rgba(255,255,255,0.06)' }}>
      {/* On Air status */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(224,81,81,0.18)', border: '1px solid rgba(224,81,81,0.5)', borderRadius: '3px 10px 3px 7px', padding: '3px 10px' }}>
          <div style={{ width: 5, height: 5, background: '#E05151', borderRadius: '50%', animation: 'blink 1s ease infinite' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 9, letterSpacing: 2, color: '#FF8585' }}>ON AIR</span>
        </div>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'rgba(226,228,229,0.5)' }}>00:42:18</span>
      </div>
      {/* Layer rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {[
          { label: 'Lower Third — John Doe', state: 'LIVE', color: accent },
          { label: 'Score Widget — CZE vs SVK', state: 'CUED', color: '#0AB6E0' },
          { label: 'Ticker — Breaking News', state: 'LIVE', color: '#82B820' },
          { label: 'Bug — Channel Logo', state: 'LIVE', color: '#107F76' },
        ].map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,0,0,0.4)', border: `1px solid ${row.color}20`, borderRadius: '3px 8px 3px 12px', padding: '6px 8px' }}>
            <div style={{ width: 4, height: 14, background: row.color, borderRadius: 1 }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 9, color: '#E2E4E5', flex: 1 }}>{row.label}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 8, fontWeight: 800, color: row.color, letterSpacing: 1 }}>{row.state}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return null;
}

export function ToolStep({ step, index }) {
  const { isMobile } = useViewport();
  const reverse = index % 2 === 1;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr', gap: isMobile ? 32 : 80, alignItems: 'center', marginBottom: isMobile ? 56 : 100, direction: isMobile ? 'ltr' : (reverse ? 'rtl' : 'ltr') }}>
      <div style={{ direction: 'ltr' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 14,
          color: step.accent, letterSpacing: 2, marginBottom: 14,
        }}>{step.num}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1, marginBottom: 18 }}>{step.title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.55)', lineHeight: 1.65, marginBottom: 24, maxWidth: 460 }}>{step.desc}</p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {step.bullets.map(b => (
            <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.75)' }}>
              <span style={{ color: step.accent, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>→</span> {b}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ direction: 'ltr', position: 'relative', aspectRatio: '16/10' }}>
        {/* glow behind */}
        <div style={{ position: 'absolute', inset: -20, borderRadius: '20px 40px 20px 80px', background: `radial-gradient(ellipse at center, ${step.accent}20, transparent 70%)`, filter: 'blur(30px)', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
          <ToolVisual kind={step.visual} accent={step.accent} />
        </div>
      </div>
    </div>
  );
}
