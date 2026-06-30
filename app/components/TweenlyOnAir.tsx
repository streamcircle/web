"use client";

import { ScreenshotFrame } from "./ScreenshotFrame";
import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── Tweenly On Air ──────────────────────────────────────────────────────
// On Air is a standalone live-event control surface — its own app, not just
// another feature. The hero visual is the Standby → Live two-column operator
// UI with IN/OUT commands. Red is the "live" accent here (used sparingly on
// the site, deliberate signal that this is the broadcast-critical moment).


export function OnAirOperatorUI() {
  const { isMobile } = useViewport();
  const LIVE = '#E05151';
  const LIVE_GLOW = '#FF8585';
  const STBY = '#0AB6E0';

  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #0c1014 0%, #0a0d10 100%)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '20px 40px 20px 80px',
      padding: 22,
      overflow: 'hidden',
      boxShadow: '0 40px 120px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
    }}>
      {/* ambient glows */}
      <div style={{ position: 'absolute', top: -120, left: '20%', width: 500, height: 300, background: `radial-gradient(ellipse, ${STBY}18, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -120, right: '15%', width: 500, height: 300, background: `radial-gradient(ellipse, ${LIVE}22, transparent 70%)`, filter: 'blur(40px)', pointerEvents: 'none' }} />

      {/* TOP BAR */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 16, marginBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(224,81,81,0.15)', border: `1px solid ${LIVE}80`, borderRadius: '4px 12px 4px 8px', padding: '6px 14px' }}>
            <div style={{ width: 8, height: 8, background: LIVE, borderRadius: '50%', animation: 'blink 1s ease infinite', boxShadow: `0 0 12px ${LIVE}` }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: 3, color: LIVE_GLOW }}>ON AIR</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, color: 'rgba(226,228,229,0.4)', letterSpacing: 2 }}>SESSION</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>UEFA Q-Round · Game 4</span>
          </div>
          {/* session tabs */}
          <div style={{ display: 'flex', gap: 6, marginLeft: 6 }}>
            {['G4', 'G5', 'G6'].map((s, i) => (
              <div key={s} style={{
                fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, letterSpacing: 1,
                padding: '4px 10px', borderRadius: '3px 8px 3px 5px',
                background: i === 0 ? 'rgba(34,198,138,0.12)' : 'rgba(255,255,255,0.04)',
                border: i === 0 ? '1px solid rgba(34,198,138,0.35)' : '1px solid rgba(255,255,255,0.06)',
                color: i === 0 ? '#22C68A' : 'rgba(226,228,229,0.5)',
              }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, color: 'rgba(226,228,229,0.4)', letterSpacing: 2 }}>DURATION</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'rgba(255,255,255,0.95)', letterSpacing: 1, fontVariantNumeric: 'tabular-nums' }}>01:42:18</span>
        </div>
      </div>

      {/* TWO COLUMNS */}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 14 : 22 }}>

        {/* ─── STANDBY ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, background: STBY, borderRadius: '50%' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: 3, color: STBY }}>STANDBY</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'rgba(226,228,229,0.4)', letterSpacing: 1 }}>Lower Third · Final</span>
          </div>

          {/* Preview canvas */}
          <div style={{ aspectRatio: '16/9', background: 'radial-gradient(ellipse at 30% 40%, #0e1a1f 0%, #060809 100%)', borderRadius: '6px 14px 6px 22px', border: `1px solid ${STBY}30`, position: 'relative', overflow: 'hidden' }}>
            {/* grid */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}>
              <pattern id="oa-grid-s" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><rect width="24" height="24" fill="none" stroke="#fff" strokeWidth="0.4"/></pattern>
              <rect width="100%" height="100%" fill="url(#oa-grid-s)"/>
            </svg>
            {/* mock lower third */}
            <div style={{ position: 'absolute', left: '8%', bottom: '14%', maxWidth: '76%' }}>
              <div style={{ background: '#22C68A', color: '#0a0d10', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10, letterSpacing: 2, padding: '3px 10px', borderRadius: '2px 8px 2px 4px', display: 'inline-block' }}>POST-MATCH INTERVIEW</div>
              <div style={{ background: 'rgba(10,13,16,0.94)', borderLeft: '3px solid #22C68A', borderRadius: '3px 10px 3px 6px', padding: '10px 16px', marginTop: 3 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#fff', letterSpacing: -0.4, lineHeight: 1.05 }}>JAKUB NOVÁK</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Forward · #9</div>
              </div>
            </div>
            {/* standby corner mark */}
            <div style={{ position: 'absolute', top: 10, left: 10, fontFamily: 'var(--font-display)', fontSize: 8, fontWeight: 700, letterSpacing: 2, color: STBY, opacity: 0.7 }}>● PREVIEW</div>
          </div>

          {/* Editable fields */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px 12px 4px 16px', padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M11.5 2.5 L13.5 4.5 L5 13 L2.5 13.5 L3 11 Z" stroke={STBY} strokeWidth="1.5" strokeLinejoin="round"/></svg>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, color: STBY, letterSpacing: 2 }}>EDIT FIELDS · LIVE</span>
            </div>
            {[
              { label: 'NAME', value: 'JAKUB NOVÁK', focused: true },
              { label: 'ROLE', value: 'Forward · #9', focused: false },
              { label: 'CAPTION', value: 'POST-MATCH INTERVIEW', focused: false },
            ].map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 70, fontFamily: 'var(--font-display)', fontSize: 9, fontWeight: 700, color: 'rgba(226,228,229,0.4)', letterSpacing: 1.5 }}>{f.label}</span>
                <div style={{
                  flex: 1, fontFamily: 'var(--font-body)', fontSize: 12, color: '#fff',
                  background: f.focused ? 'rgba(10,182,224,0.08)' : 'rgba(0,0,0,0.3)',
                  border: f.focused ? `1px solid ${STBY}` : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '3px 8px 3px 5px', padding: '5px 10px', position: 'relative',
                }}>
                  {f.value}
                  {f.focused && <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', width: 1.5, height: 14, background: STBY, animation: 'blink 1s ease infinite' }} />}
                </div>
              </div>
            ))}
          </div>

          {/* IN button */}
          <button style={{
            background: 'linear-gradient(135deg, #22C68A 0%, #107F76 100%)',
            color: '#0a0d10', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, letterSpacing: 4,
            padding: '14px 24px', borderRadius: '6px 16px 6px 22px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
            boxShadow: '0 0 32px rgba(34,198,138,0.25)',
          }}>
            <span>IN</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 5 L19 12 L5 19 Z" fill="#0a0d10"/></svg>
          </button>
        </div>

        {/* ─── LIVE ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 7, height: 7, background: LIVE, borderRadius: '50%', animation: 'blink 1s ease infinite', boxShadow: `0 0 10px ${LIVE}` }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: 3, color: LIVE_GLOW }}>LIVE</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'rgba(226,228,229,0.4)', letterSpacing: 1 }}>Score Widget · UEFA</span>
          </div>

          {/* Preview canvas — on air */}
          <div style={{
            aspectRatio: '16/9', background: 'radial-gradient(ellipse at 70% 50%, #1a0d10 0%, #0a0608 100%)',
            borderRadius: '6px 14px 6px 22px', border: `1.5px solid ${LIVE}55`, position: 'relative', overflow: 'hidden',
            boxShadow: `inset 0 0 0 1px ${LIVE}15`,
          }}>
            {/* mock score widget */}
            <div style={{ position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'stretch', background: 'rgba(10,13,16,0.94)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px 14px 4px 8px', overflow: 'hidden', minWidth: '60%' }}>
              <div style={{ background: '#22C68A', display: 'flex', alignItems: 'center', padding: '6px 12px', gap: 8 }}>
                <div style={{ width: 16, height: 16, background: '#0a0d10', borderRadius: 2 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#0a0d10', letterSpacing: 0.5 }}>CZE</span>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 18px', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>2</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: 1 }}>78:14</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>1</span>
              </div>
              <div style={{ background: '#0AB6E0', display: 'flex', alignItems: 'center', padding: '6px 12px', gap: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: '#0a0d10', letterSpacing: 0.5 }}>SVK</span>
                <div style={{ width: 16, height: 16, background: '#0a0d10', borderRadius: 2 }} />
              </div>
            </div>
            {/* live corner mark */}
            <div style={{ position: 'absolute', top: 10, left: 10, fontFamily: 'var(--font-display)', fontSize: 8, fontWeight: 700, letterSpacing: 2, color: LIVE_GLOW, opacity: 0.85 }}>● ON AIR</div>
            {/* tally scan line */}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 0%, ${LIVE}05 50%, transparent 100%)`, pointerEvents: 'none' }} />
          </div>

          {/* Playback controls + timeline */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px 12px 4px 16px', padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* timeline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'rgba(226,228,229,0.6)', fontVariantNumeric: 'tabular-nums', letterSpacing: 0.5 }}>00:04.2</span>
              <div style={{ flex: 1, position: 'relative', height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                {/* markers */}
                {[0.18, 0.35, 0.55, 0.82].map((p, i) => (
                  <div key={i} style={{ position: 'absolute', left: `${p * 100}%`, top: -2, width: 1.5, height: 10, background: 'rgba(255,255,255,0.25)' }} />
                ))}
                {/* progress */}
                <div style={{ position: 'absolute', inset: 0, width: '42%', background: `linear-gradient(90deg, ${LIVE}, ${LIVE_GLOW})`, borderRadius: 3 }} />
                {/* scrubber */}
                <div style={{ position: 'absolute', left: '42%', top: '50%', transform: 'translate(-50%, -50%)', width: 14, height: 14, background: '#fff', borderRadius: '50%', boxShadow: `0 0 0 3px ${LIVE}40, 0 2px 8px rgba(0,0,0,0.5)` }} />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, color: 'rgba(226,228,229,0.4)', fontVariantNumeric: 'tabular-nums', letterSpacing: 0.5 }}>00:10.0</span>
            </div>
            {/* transport buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
              {[
                { label: 'PLAY', glyph: <path d="M6 4 L18 11 L6 18 Z" fill="currentColor"/>, active: true },
                { label: 'PAUSE', glyph: <><rect x="6" y="5" width="3.5" height="12" fill="currentColor"/><rect x="12.5" y="5" width="3.5" height="12" fill="currentColor"/></> },
                { label: 'REPLAY', glyph: <path d="M4 11 A7 7 0 1 1 8 17 M4 11 L4 6 M4 11 L9 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/> },
                { label: 'NEXT', glyph: <><path d="M5 5 L13 11 L5 17 Z" fill="currentColor"/><rect x="14" y="5" width="2.5" height="12" fill="currentColor"/></> },
                { label: 'OUTRO', glyph: <><path d="M5 11 L15 11 M11 7 L15 11 L11 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/><rect x="16" y="5" width="2" height="12" fill="currentColor"/></> },
              ].map(b => (
                <div key={b.label} style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  padding: '7px 4px', borderRadius: '3px 8px 3px 5px', cursor: 'pointer',
                  background: b.active ? `${LIVE}18` : 'rgba(255,255,255,0.03)',
                  border: b.active ? `1px solid ${LIVE}60` : '1px solid rgba(255,255,255,0.05)',
                  color: b.active ? LIVE_GLOW : 'rgba(226,228,229,0.65)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 22 22">{b.glyph}</svg>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 8, fontWeight: 700, letterSpacing: 1 }}>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OUT button */}
          <button style={{
            background: `linear-gradient(135deg, ${LIVE} 0%, #B83A3A 100%)`,
            color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, letterSpacing: 4,
            padding: '14px 24px', borderRadius: '6px 16px 6px 22px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
            boxShadow: `0 0 32px ${LIVE}40`,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" fill="#fff"/></svg>
            <span>OUT</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export const ONAIR_CAPS = [
  {
    eyebrow: '01',
    title: t("onair.caps.0.title"),
    desc: t("onair.caps.0.desc"),
    accent: '#22C68A',
  },
  {
    eyebrow: '02',
    title: t("onair.caps.1.title"),
    desc: t("onair.caps.1.desc"),
    accent: '#0AB6E0',
  },
  {
    eyebrow: '03',
    title: t("onair.caps.2.title"),
    desc: t("onair.caps.2.desc"),
    accent: '#E05151',
  },
  {
    eyebrow: '04',
    title: t("onair.caps.3.title"),
    desc: t("onair.caps.3.desc"),
    accent: '#82B820',
  },
];

export default function TweenlyOnAir() {
  const { isMobile } = useViewport();
  return (
    <section id="onair" style={{ padding: isMobile ? '80px 20px 72px' : '140px 40px 120px', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* faint horizontal lines motif */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(224,81,81,0.04) 0%, transparent 30%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
        {/* HEADER */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 24 : 60, alignItems: isMobile ? 'start' : 'end', marginBottom: isMobile ? 36 : 56 }}>
          <div>
            <SectionLabel label={t("onair.sectionLabel")} color="#E05151" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: -1.8, color: 'var(--white)', lineHeight: 1.0, marginTop: 8 }}>
              {t("onair.headingLine1")}<br/>
              <span style={{
                background: 'linear-gradient(90deg, #FF8585 0%, #E05151 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                fontStyle: 'italic', fontWeight: 500,
              }}>{t("onair.headingLine2")}</span>
            </h2>
          </div>
          <div style={{ paddingBottom: 6 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(226,228,229,0.65)', lineHeight: 1.65, maxWidth: 520 }}>
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>{t("onair.leadStrong")}</strong>{t("onair.leadRest")}
            </p>
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              {[
                { icon: '◐', label: t("onair.chips.0") },
                { icon: '◇', label: t("onair.chips.1") },
              ].map(t => (
                <div key={t.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '3px 10px 3px 6px', padding: '6px 12px',
                  fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.75)',
                }}>
                  <span style={{ color: '#E05151', fontFamily: 'var(--font-display)' }}>{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HERO SCREENSHOT */}
        <ScreenshotFrame src="/assets/tw-on-air.png" appName={t("onair.screenshot.appName")} urlLabel={t("onair.screenshot.urlLabel")} accent="#E05151" badge={t("onair.screenshot.badge")} placeholderNote={t("onair.screenshot.placeholderNote")} aspectRatio="16/9" />

        {/* FLOW HINT — between mockup and caps */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, margin: '36px 0 56px', fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', flexWrap: 'wrap' }}>
          <span style={{ color: '#22C68A' }}>{t("onair.flow.preview")}</span>
          <span style={{ width: 44, height: 1, background: 'linear-gradient(90deg, #22C68A, #E05151)' }} />
          <span style={{ color: 'rgba(226,228,229,0.7)' }}>{t("onair.flow.in")}</span>
          <span style={{ width: 44, height: 1, background: '#E05151' }} />
          <span style={{ color: '#E05151' }}>{t("onair.flow.live")}</span>
          <span style={{ width: 44, height: 1, background: 'linear-gradient(90deg, #E05151, rgba(226,228,229,0.4))' }} />
          <span style={{ color: 'rgba(226,228,229,0.5)' }}>{t("onair.flow.out")}</span>
        </div>

        {/* CAPABILITY GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: isMobile ? 12 : 18 }}>
          {ONAIR_CAPS.map(cap => (
            <div key={cap.eyebrow} style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '8px 20px 8px 28px',
              padding: '24px 22px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: 32, height: 2, background: cap.accent }} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: cap.accent, letterSpacing: 2, marginBottom: 14 }}>{cap.eyebrow}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--white)', letterSpacing: -0.4, lineHeight: 1.15, marginBottom: 10 }}>{cap.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.55)', lineHeight: 1.55 }}>{cap.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
