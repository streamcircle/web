"use client";

import { useState } from "react";
import { GradientShape } from "./primitives";
// ─── Tweaks Panel ─────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryAccent": "#0AB6E0",
  "secondaryAccent": "#82B820",
  "asymmetric": 1
}/*EDITMODE-END*/;

export default function TweaksPanel({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [tweaks, setTweaks] = useState<Record<string, string | number>>(TWEAK_DEFAULTS);

  const update = (key: string, val: string | number) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*');
  };

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 10000, background: 'rgba(15,19,22,0.97)', border: '1px solid rgba(34,198,138,0.25)', backdropFilter: 'blur(20px)', width: 280, padding: 24, borderRadius: '8px 16px 8px 32px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, letterSpacing: 2.5, color: '#22C68A', textTransform: 'uppercase' }}>Tweaks</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(226,228,229,0.4)', fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>×</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <label style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.45)', textTransform: 'uppercase', letterSpacing: 1.2, display: 'block', marginBottom: 8 }}>Primary Accent</label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['#22C68A','#82B820','#0AB6E0','#107F76','#007A98'].map(c => (
              <div key={c} onClick={() => update('primaryAccent', c)} style={{ width: 30, height: 30, background: c, cursor: 'pointer', border: tweaks.primaryAccent === c ? '2px solid white' : '2px solid transparent', borderRadius: '4px 8px 4px 14px', transition: 'border 0.2s' }} />
            ))}
          </div>
        </div>
        <div>
          <label style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.45)', textTransform: 'uppercase', letterSpacing: 1.2, display: 'block', marginBottom: 8 }}>Decorative Shape</label>
          <GradientShape style={{ width: '100%', height: 60 }} radius="20% 50% 20% 60%" />
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.4)', lineHeight: 1.5, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          Built with the Tweenly brand system: brand gradient, asymmetric corners, Manrope + Inter.
        </div>
      </div>
    </div>
  );
}
