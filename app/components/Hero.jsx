"use client";

import { useState, useEffect } from "react";
import { BroadcastWindow } from "./BroadcastWindow";
import { LiveTicker } from "./LiveTicker";
import { GradientShape } from "./primitives";
import { useViewport } from "./useViewport";
// ─── Hero ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const [loaded, setLoaded] = useState(true);
  const { isCompact, isMobile } = useViewport();
  useEffect(() => {
    // Mount entrance: paint visible (SSR/no-JS friendly), then replay the
    // fade-in. Deferred so neither setState runs synchronously in the effect.
    const reset = setTimeout(() => setLoaded(false), 0);
    const t = setTimeout(() => setLoaded(true), 60);
    return () => { clearTimeout(reset); clearTimeout(t); };
  }, []);

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: 72 }}>
      {/* Floating gradient shapes — brand DNA */}
      <div style={{ position: 'absolute', top: '15%', left: '-8%', width: 520, height: 380, opacity: 0.12, animation: 'floatShape 18s ease infinite', zIndex: 0 }}>
        <GradientShape style={{ width: '100%', height: '100%' }} radius="20% 60% 20% 50%" />
      </div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 280, opacity: 0.08, animation: 'floatShape 22s ease infinite reverse', zIndex: 0 }}>
        <GradientShape style={{ width: '100%', height: '100%' }} radius="50% 20% 60% 20%" />
      </div>

      {/* Subtle line pattern background */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, zIndex: 0 }}>
        <defs>
          <pattern id="heroLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="4" y1="36" x2="36" y2="4" stroke="#fff" strokeWidth="1" strokeLinecap="round"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroLines)"/>
      </svg>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isCompact ? '40px clamp(20px,5vw,40px) 56px' : '60px 40px 80px', width: '100%', display: 'grid', gridTemplateColumns: isCompact ? '1fr' : '1fr 1.1fr', gap: isCompact ? 48 : 64, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* Left: headline */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32,
            background: 'rgba(34,198,138,0.08)', border: '1px solid rgba(34,198,138,0.25)',
            borderRadius: '4px 14px 4px 8px', padding: '6px 14px',
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(10px)',
            transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <div style={{ width: 6, height: 6, background: '#22C68A', borderRadius: '50%', animation: 'blink 1.5s ease infinite' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, letterSpacing: 2, color: '#22C68A', textTransform: 'uppercase' }}>LIVE BROADCASTING RUNS ON TIMING</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(48px, 6vw, 84px)',
            lineHeight: 0.98, letterSpacing: -2.5, color: 'var(--white)', marginBottom: 28,
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.7s 0.1s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>Design</span><br/>
            <span style={{
              background: 'linear-gradient(135deg, #82B820 0%, #22C68A 30%, #0AB6E0 70%, #007A98 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientFlow 6s ease infinite',
              display: 'inline-block',
            }}>broadcast overlays.</span><br/>
            <span>Control them on air.</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 400, color: 'rgba(226,228,229,0.6)',
            lineHeight: 1.65, maxWidth: 480, marginBottom: 36,
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(15px)',
            transition: 'all 0.7s 0.25s cubic-bezier(0.16,1,0.3,1)',
          }}>
            Build tickers, lower thirds, score widgets, bugs, and stingers — bind live data, animate on a visual timeline, and export as HTML overlays ready for air.
          </p>

          <div style={{
            display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap',
            opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(15px)',
            transition: 'all 0.7s 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <a href="https://editor.tweenly.io/signup" style={{
              fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700,
              color: '#0a0d10',
              background: 'linear-gradient(135deg, #82B820 0%, #22C68A 50%, #107F76 100%)',
              backgroundSize: '200% 200%',
              padding: '14px 32px', textDecoration: 'none',
              borderRadius: '6px 12px 6px 20px',
              transition: 'all 0.3s', display: 'inline-block',
              animation: 'pulseGlow 3s ease infinite, gradientFlow 5s ease infinite',
              boxShadow: '0 8px 24px rgba(34,198,138,0.25)',
            }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-2px) scale(1.02)'}
              onMouseLeave={e => e.target.style.transform = 'none'}>
              Start for Free
            </a>
            <a href="#editor" style={{
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
              color: 'rgba(226,228,229,0.7)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 18px', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,228,229,0.7)'}>
              <span style={{ fontSize: 14 }}>▶</span> See it in action
            </a>
          </div>
        </div>

        {/* Right: broadcast preview */}
        <div style={{
          opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateX(40px)',
          transition: 'all 0.9s 0.3s cubic-bezier(0.16,1,0.3,1)',
          position: 'relative',
        }}>
          {/* Decorative gradient shape behind */}
          <div style={{ position: 'absolute', inset: -20, borderRadius: '20px 40px 20px 80px', background: 'linear-gradient(135deg, rgba(130,184,32,0.15), rgba(0,122,152,0.15))', filter: 'blur(40px)', zIndex: 0 }} />

          <div style={{
            background: 'rgba(15,19,22,0.85)', backdropFilter: 'blur(8px)',
            borderRadius: '12px 24px 12px 40px',
            overflow: 'hidden', position: 'relative', zIndex: 1,
            border: '1px solid rgba(34,198,138,0.18)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(34,198,138,0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF6258' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27C93F' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(226,228,229,0.4)', marginLeft: 12 }}>tweenly — Score Widget</span>
            </div>
            <BroadcastWindow />
          </div>

          {/* Floating element tags */}
          <div style={{ marginTop: 14, display: 'flex', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            {[
              { label: 'Lower Third', color: '#22C68A' },
              { label: 'Live Ticker', color: '#0AB6E0' },
              { label: 'Score Widget', color: '#82B820' },
            ].map(t => (
              <div key={t.label} style={{
                fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600,
                color: t.color, background: `${t.color}14`,
                border: `1px solid ${t.color}30`,
                padding: '5px 12px', borderRadius: '4px 8px 4px 14px',
              }}>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isCompact ? '24px clamp(20px,5vw,40px)' : '28px 40px', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 24 : 40 }}>
          {[
            ['30+', 'Years in Broadcast'],
            ['100%', 'Web-based'],
            ['No-Code', 'Editor + Full API'],
            ['HTML5', 'Production Export'],
          ].map(([val, label], i) => (
            <div key={val} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36,
                background: ['linear-gradient(135deg,#82B820,#22C68A)','linear-gradient(135deg,#22C68A,#0AB6E0)','linear-gradient(135deg,#0AB6E0,#007A98)','linear-gradient(135deg,#82B820,#107F76)'][i],
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: -1.5, lineHeight: 1,
              }}>{val}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.62)', fontWeight: 400 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <LiveTicker />
    </section>
  );
}
