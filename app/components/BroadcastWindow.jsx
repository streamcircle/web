"use client";

import { useState, useEffect } from "react";
import { LiveTicker } from "./LiveTicker";
// ─── Lower Third — uses asymmetric brand corners ─────────────────────────────

const LOWER_THIRDS = [
  { name: 'John Doe', title: 'BREAKING NEWS', accent: '#22C68A' },
  { name: 'Sarah Mitchell', title: 'Senior Graphics Designer', accent: '#0AB6E0' },
  { name: 'Marcus Weber', title: 'Technical Director, RTL', accent: '#82B820' },
];

function LowerThird({ data, visible }) {
  return (
    <div style={{
      position: 'absolute', bottom: 70, left: 36,
      transform: visible ? 'translateX(0)' : 'translateX(-110%)',
      opacity: visible ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.6))',
    }}>
      <div style={{
        background: data.accent,
        color: '#0a0d10',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: 2,
        padding: '4px 14px', textTransform: 'uppercase',
        borderRadius: '4px 14px 4px 8px', display: 'inline-block', marginBottom: 4,
      }}>{data.title}</div>
      <div style={{
        background: 'rgba(10,13,16,0.94)', backdropFilter: 'blur(12px)',
        padding: '10px 22px', borderRadius: '6px 20px 6px 12px',
        borderLeft: `3px solid ${data.accent}`,
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: -0.3, color: 'var(--white)', lineHeight: 1.2 }}>{data.name}</div>
      </div>
    </div>
  );
}

// ─── Broadcast Preview Window ─────────────────────────────────────────────

export function BroadcastWindow() {
  const [ltIndex, setLtIndex] = useState(0);
  const [ltVisible, setLtVisible] = useState(false);
  const [score, setScore] = useState({ home: 1, away: 0 });
  const [time, setTime] = useState(67);

  useEffect(() => {
    const show = setTimeout(() => setLtVisible(true), 600);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setLtVisible(false);
      setTimeout(() => {
        setLtIndex(i => (i + 1) % LOWER_THIRDS.length);
        setLtVisible(true);
      }, 600);
    }, 3800);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(tt => tt >= 90 ? 1 : tt + 1), 800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const g = setInterval(() => {
      setScore(s => Math.random() > 0.85 ? { home: s.home + (Math.random()>0.5?1:0), away: s.away + (Math.random()>0.5?0:1) } : s);
    }, 4200);
    return () => clearInterval(g);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#0d1115', overflow: 'hidden', borderRadius: '8px 16px 8px 32px' }}>
      {/* Background — broadcast scene tint */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 30%, #0d3a44 0%, transparent 60%), radial-gradient(ellipse at 75% 70%, #1a3520 0%, transparent 55%), #0a1518' }} />

      {/* Subtle line pattern (from brand manual) */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }}>
        <defs>
          <pattern id="lp1" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <line x1="2" y1="20" x2="20" y2="4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lp1)"/>
      </svg>

      {/* Scanline */}
      <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(transparent, rgba(34,198,138,0.18), transparent)', animation: 'scanline 5s linear infinite', pointerEvents: 'none', zIndex: 5 }} />

      {/* LIVE badge */}
      <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(224,81,81,0.18)', borderRadius: '4px 8px 4px 14px', padding: '5px 11px', zIndex: 10, border: '1px solid rgba(224,81,81,0.5)' }}>
        <div style={{ width: 7, height: 7, background: '#E05151', borderRadius: '50%', animation: 'blink 1s ease infinite' }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11, letterSpacing: 2, color: '#FF8585' }}>LIVE</span>
      </div>

      {/* Clock */}
      <div style={{ position: 'absolute', top: 14, right: 14, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12, letterSpacing: 2, color: 'rgba(226,228,229,0.5)', zIndex: 10 }}>
        {String(Math.floor(time / 60)).padStart(2,'0')}:{String(time % 60).padStart(2,'0')}
      </div>

      {/* Score graphic — asymmetric corners */}
      <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <div style={{
          background: 'rgba(10,13,16,0.92)', borderRadius: '6px 20px 6px 12px',
          padding: '7px 18px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: 0.5,
          display: 'flex', alignItems: 'center', gap: 14, color: 'var(--white)',
          border: '1px solid rgba(34,198,138,0.25)',
        }}>
          <span>CZE</span>
          <span style={{ color: '#22C68A', fontSize: 20, fontWeight: 800 }}>{score.home} : {score.away}</span>
          <span>SVK</span>
        </div>
      </div>

      <LowerThird data={LOWER_THIRDS[ltIndex]} visible={ltVisible} />

      {/* Bottom ticker */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <LiveTicker bg="rgba(10,13,16,0.92)" />
      </div>

      <div style={{ position: 'absolute', bottom: 50, right: 16, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 10, letterSpacing: 2, color: 'rgba(34,198,138,0.5)', textTransform: 'uppercase' }}>tweenly editor</div>
    </div>
  );
}
