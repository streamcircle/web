"use client";

import { GradientShape, SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
// ─── Pricing ────────────────────────────────────────────────────────────────

const FREE_FEATURES = ['Full visual editor', 'HTML export', 'Tickers & image sequences', 'JSON/XML data sources', 'On Air preview', '256 MB storage'];

export const UNL_FEATURES = ['Everything in Free', 'ZIP export (offline playout)', 'API control in exports', 'Code triggers', 'Unlimited storage', 'Shared workspaces', 'Team collaboration'];

export default function Pricing() {
  const { isMobile } = useViewport();
  return (
    <section id="pricing" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)', position: 'relative' }}>
      {/* Decorative gradient shape */}
      <div style={{ position: 'absolute', top: '20%', right: '-10%', width: 500, height: 360, opacity: 0.06, zIndex: 0 }}>
        <GradientShape style={{ width: '100%', height: '100%' }} radius="20% 50% 20% 60%" />
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label="Pricing" color="#82B820" /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05, marginBottom: 12 }}>
            Free to Start.
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.62)' }}>
            Upgrade when you need API control and team collaboration. Per user, per month. No credit card required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
          {/* Free */}
          <div style={{
            background: 'var(--bg2)', borderRadius: '8px 16px 8px 32px',
            padding: 36, border: '1px solid rgba(255,255,255,0.06)', position: 'relative',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--white)', marginBottom: 8 }}>Free</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, letterSpacing: -2, color: 'var(--white)' }}>€0</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.58)' }}>/user/month</span>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FREE_FEATURES.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.7)' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8 L6.5 11.5 L13 5" stroke="#22C68A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://editor.tweenly.io/signup" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
              color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)',
              padding: '12px 20px', textDecoration: 'none',
              borderRadius: '6px 12px 6px 20px', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}>
              Get Started
            </a>
          </div>

          {/* Unlimited */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(34,198,138,0.08) 0%, rgba(0,122,152,0.08) 100%)',
            borderRadius: '8px 16px 8px 32px',
            padding: 36, border: '1px solid rgba(34,198,138,0.4)', position: 'relative',
            boxShadow: '0 24px 60px rgba(34,198,138,0.1)',
          }}>
            <div style={{
              position: 'absolute', top: -1, right: 24,
              background: 'linear-gradient(135deg, #82B820, #22C68A)',
              color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10, letterSpacing: 1.5,
              padding: '4px 12px', borderRadius: '0 0 8px 8px', textTransform: 'uppercase',
            }}>Recommended</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--white)', marginBottom: 8 }}>Unlimited</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 24 }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, letterSpacing: -2,
                background: 'linear-gradient(135deg, #82B820 0%, #22C68A 50%, #0AB6E0 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>€40</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.58)' }}>/user/month</span>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {UNL_FEATURES.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.85)', fontWeight: f === 'Everything in Free' ? 600 : 400 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 8 L6.5 11.5 L13 5" stroke="#82B820" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://editor.tweenly.io/signup" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
              color: '#0a0d10',
              background: 'linear-gradient(135deg, #82B820 0%, #22C68A 100%)',
              backgroundSize: '200% 200%',
              padding: '12px 20px', textDecoration: 'none',
              borderRadius: '6px 12px 6px 20px', transition: 'all 0.2s',
              animation: 'gradientFlow 5s ease infinite',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              Go Unlimited
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
