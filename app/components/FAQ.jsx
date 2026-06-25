"use client";

import { useState } from "react";
import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  { q: 'What is the difference between Editor and On Air?', a: 'Tweenly is a platform with two products. Editor is the design tool — create and animate broadcast graphics visually, no code required. On Air is the live control app — operators load finished graphics, edit fields in Standby, and send them to air. On Air requires graphics built in Editor, but Editor works independently on its own.' },
  { q: 'What playout systems does Tweenly work with?', a: 'Tweenly integrates natively with Stream Circle for scheduling and live playout. Exported HTML graphics can also be loaded into any system that supports HTML overlays — via iframe or as a standalone browser source — and controlled through the JavaScript API. With the Unlimited plan, you can export self-contained ZIP packages that run offline in any HTML-compatible playout.' },
  { q: 'What output resolutions and frame rates are supported?', a: 'You choose the resolution and frame rate when creating a graphic — Full HD (1920\u00d71080), 4K (3840\u00d72160), or any custom size. Frame rate options are 1 fps, 25 fps, and 50 fps. The exported HTML package matches exactly what you set in the editor.' },
  { q: 'What browsers are supported?', a: 'Tweenly Editor and On Air run in any modern Chromium-based browser (Chrome, Edge, Opera). Firefox and Safari are not officially supported for the editor.' },
  { q: 'Where is my data stored?', a: 'Tweenly runs on Amazon Web Services (AWS) infrastructure. Your graphics, assets, and account data are stored securely in the cloud. We take data protection seriously and comply with EU regulations.' },
  { q: 'What happens if I downgrade or cancel my plan?', a: 'Your account and all your graphics remain accessible — nothing gets deleted. You simply return to the Free plan with its feature limits (HTML-only export, no collaboration, no API control in exports). Your work is always yours.' },
  { q: 'How long does it take to learn Tweenly?', a: 'Most designers are productive in a few hours. The editor is a visual tool — if you\'ve used any design software, you\'ll feel at home. On Air is even simpler — operators typically need less than an hour to learn the Standby \u2192 Live workflow.' },
  { q: 'What support is available?', a: 'Tweenly Editor and On Air include email support. When deployed together with Stream Circle, support follows the Stream Circle SLA with dedicated response times. We\'re a small team and we respond fast.' },
];

function FAQItem({ item, open, onClick }) {
  return (
    <div style={{
      background: open ? 'rgba(34,198,138,0.04)' : 'var(--bg2)',
      border: `1px solid ${open ? 'rgba(34,198,138,0.25)' : 'rgba(255,255,255,0.06)'}`,
      borderRadius: '8px 16px 8px 32px',
      overflow: 'hidden', transition: 'all 0.3s',
    }}>
      <button onClick={onClick} style={{
        width: '100%', background: 'none', border: 'none',
        padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        cursor: 'pointer', gap: 20, textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: open ? '#22C68A' : 'var(--white)', letterSpacing: -0.2 }}>{item.q}</span>
        <span style={{ color: open ? '#22C68A' : 'rgba(226,228,229,0.4)', fontSize: 24, transform: open ? 'rotate(45deg)' : 'none', transition: 'all 0.3s', flexShrink: 0, lineHeight: 1, fontFamily: 'var(--font-display)', fontWeight: 300 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 28px 24px', fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(226,228,229,0.65)', lineHeight: 1.7, animation: 'fadeUp 0.3s ease' }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { isMobile } = useViewport();
  return (
    <section id="faq" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label="FAQ" /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05, marginBottom: 12 }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(226,228,229,0.62)' }}>
            Everything you need to know before getting started.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ_ITEMS.map((item, i) => <FAQItem key={item.q} item={item} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </section>
  );
}
