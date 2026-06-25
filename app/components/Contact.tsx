"use client";

import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// ─── Contact ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const { isMobile } = useViewport();
  return (
    <section id="contact" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(34,198,138,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <SectionLabel label="Contact" />
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05, marginBottom: 16, marginTop: 8 }}>
          We&apos;d like to hear from you
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.62)', maxWidth: 520, margin: '0 auto 36px' }}>
          Questions about graphics, playout integration, or On Air setup? Get in touch.
        </p>
        <a href="mailto:info@tweenly.io" style={{
          display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800,
          background: 'linear-gradient(135deg, #82B820 0%, #22C68A 50%, #0AB6E0 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          textDecoration: 'none', marginBottom: 28,
          animation: 'gradientFlow 5s ease infinite',
          letterSpacing: -0.5,
        }}>
          info@tweenly.io
        </a>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          {[
            { city: 'Prague', country: 'CZE' },
            { city: 'Olomouc', country: 'CZE' },
            { city: 'Poprad', country: 'SVK' },
          ].map(loc => (
            <div key={loc.city} style={{
              padding: '14px 24px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'var(--bg3)',
              borderRadius: '6px 14px 6px 20px',
              fontFamily: 'var(--font-display)',
            }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--white)' }}>{loc.city}</div>
              <div style={{ fontSize: 11, color: '#22C68A', letterSpacing: 1.5, marginTop: 2 }}>{loc.country}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <a href="mailto:info@tweenly.io" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
            color: '#0a0d10',
            background: 'linear-gradient(135deg, #82B820 0%, #22C68A 100%)',
            backgroundSize: '200% 200%',
            padding: '14px 36px', textDecoration: 'none',
            borderRadius: '6px 12px 6px 20px',
            animation: 'gradientFlow 5s ease infinite',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
