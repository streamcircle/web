"use client";

import { PlayMark, SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── Stream Circle Integration ──────────────────────────────────────────────
// Stream Circle icon — from official icon_STREAM-CIRCLE_RGB_WEB_color.svg

function StreamCircleMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 215 213" style={{ display: 'block' }}>
      <g transform="matrix(1,0,0,1,-719.86,-247.03)">
        <path d="M811.08,247.05L811.08,304.63C790.78,311.32 776.08,330.44 776.08,352.95C776.08,381 798.9,403.82 826.95,403.82C840.03,403.82 851.97,398.86 860.99,390.71L910.82,419.48C891.2,444.18 860.93,460.03 826.95,460.03C767.81,460.03 719.86,412.09 719.86,352.94C719.86,299.19 759.46,254.7 811.07,247.03" fill="#0EB0DC" fillRule="nonzero"/>
      </g>
      <g transform="matrix(1,0,0,1,-719.86,-247.03)">
        <path d="M877.82,352.96C877.82,330.45 863.12,311.32 842.82,304.64L842.82,247.06C894.43,254.73 934.03,299.22 934.03,352.97C934.03,366.75 931.4,379.9 926.66,392L876.78,363.2C877.46,359.9 877.81,356.47 877.81,352.97" fill="#FF9B00" fillRule="nonzero"/>
      </g>
    </svg>
  );
}

function FlowDot({ delay = 0, color = '#22C68A' }) {
  return (
    <div style={{
      width: 8, height: 8, borderRadius: '50%', background: color,
      boxShadow: `0 0 12px ${color}`,
      position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
      animation: `flowRight 3s linear infinite`,
      animationDelay: `${delay}s`,
    }} />
  );
}

export default function StreamCircleIntegration() {
  const { isMobile } = useViewport();
  return (
    <section style={{ padding: isMobile ? '80px 20px' : '140px 40px', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      {/* Animation keyframes injected once for this section */}
      <style>{`
        @keyframes flowRight {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          to { transform: rotate(0deg) translateX(80px) rotate(0deg); }
        }
      `}</style>

      {/* Atmospheric background — gradient + flow lines */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', height: 500, background: 'radial-gradient(ellipse at center, rgba(10,182,224,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <SectionLabel label={t("streamcircle.sectionLabel")} color="#0AB6E0" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.02, marginTop: 8, marginBottom: 18 }}>
            {t("streamcircle.headingPrefix")}<span style={{
              background: 'linear-gradient(135deg, #22C68A 0%, #0AB6E0 50%, #007A98 100%)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>{t("streamcircle.headingBrand")}</span>{t("streamcircle.headingSuffix")}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(226,228,229,0.6)', lineHeight: 1.65, maxWidth: 680, margin: '0 auto' }}>
            {t("streamcircle.intro")}
          </p>
        </div>

        {/* Flow diagram */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(15,19,22,0.6) 0%, rgba(10,13,16,0.6) 100%)',
          backdropFilter: 'blur(8px)',
          borderRadius: '12px 24px 12px 40px',
          border: '1px solid rgba(10,182,224,0.18)',
          padding: isMobile ? '32px 20px' : '56px 48px',
          marginBottom: 56,
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
        }}>
          {/* Subtle line pattern */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05, pointerEvents: 'none' }}>
            <defs>
              <pattern id="sc-bg" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <line x1="0" y1="32" x2="32" y2="0" stroke="#0AB6E0" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sc-bg)"/>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto 1fr', gap: isMobile ? 28 : 40, alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {/* Tweenly node */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
                {/* Glow ring */}
                <div style={{ position: 'absolute', inset: -16, borderRadius: '40% 60% 40% 60%', background: 'radial-gradient(circle, rgba(0,177,235,0.3), transparent 70%)', filter: 'blur(20px)' }} />
                <div style={{
                  position: 'relative',
                  width: 120, height: 120,
                  background: 'linear-gradient(135deg, #0a0d10 0%, #0f1316 100%)',
                  border: '1px solid rgba(0,177,235,0.5)',
                  borderRadius: '24px 48px 24px 48px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 12px 40px rgba(0,177,235,0.2)',
                }}>
                  <PlayMark size={56} />
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--white)', letterSpacing: -0.5, marginBottom: 4 }}>{t("streamcircle.tweenlyName")}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: '#00B1EB', letterSpacing: 2, textTransform: 'uppercase' }}>{t("streamcircle.tweenlyRole")}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.5)', marginTop: 8, maxWidth: 220, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>{t("streamcircle.tweenlyDesc")}</div>
            </div>

            {/* Flow pipe */}
            <div style={{ width: isMobile ? '100%' : 220, position: 'relative', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
              {/* Pipe line with traveling dots */}
              <div style={{ position: 'relative', width: '100%', height: 2, background: 'linear-gradient(90deg, #22C68A, #0AB6E0)', opacity: 0.4 }}>
                <FlowDot delay={0} color="#22C68A" />
                <FlowDot delay={1} color="#22C68A" />
                <FlowDot delay={2} color="#0AB6E0" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: 'rgba(10,182,224,0.7)', letterSpacing: 2, textTransform: 'uppercase' }}>{t("streamcircle.sharedRuntime")}</div>
            </div>

            {/* Stream Circle node */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 20 }}>
                <div style={{ position: 'absolute', inset: -16, borderRadius: '60% 40% 60% 40%', background: 'radial-gradient(circle, rgba(10,182,224,0.3), transparent 70%)', filter: 'blur(20px)' }} />
                <div style={{
                  position: 'relative',
                  width: 120, height: 120,
                  background: 'linear-gradient(135deg, #0a0d10 0%, #0f1316 100%)',
                  border: '1px solid rgba(10,182,224,0.5)',
                  borderRadius: '48px 24px 48px 24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 12px 40px rgba(10,182,224,0.2)',
                }}>
                  <StreamCircleMark size={56} />
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--white)', letterSpacing: -0.5, marginBottom: 4 }}>{t("streamcircle.scName")}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: '#0AB6E0', letterSpacing: 2, textTransform: 'uppercase' }}>{t("streamcircle.scRole")}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.5)', marginTop: 8, maxWidth: 220, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>{t("streamcircle.scDesc")}</div>
            </div>
          </div>

          {/* Bottom bar — what the integration delivers */}
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { label: t("streamcircle.benefit0Label"), desc: t("streamcircle.benefit0Desc") },
              { label: t("streamcircle.benefit1Label"), desc: t("streamcircle.benefit1Desc") },
              { label: t("streamcircle.benefit2Label"), desc: t("streamcircle.benefit2Desc") },
              { label: t("streamcircle.benefit3Label"), desc: t("streamcircle.benefit3Desc") },
            ].map((b, i) => (
              <div key={b.label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, background: ['#22C68A','#0AB6E0','#82B820','#9B7BFF'][i], borderRadius: 1 }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--white)', letterSpacing: -0.2 }}>{b.label}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.5)', lineHeight: 1.55 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Circle modules summary + CTA */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr', gap: isMobile ? 32 : 40, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: '#0AB6E0', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 16 }}>{t("streamcircle.modulesHeading")}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { num: '01', label: t("streamcircle.module0Label"), desc: t("streamcircle.module0Desc") },
                { num: '02', label: t("streamcircle.module1Label"), desc: t("streamcircle.module1Desc") },
                { num: '03', label: t("streamcircle.module2Label"), desc: t("streamcircle.module2Desc") },
                { num: '04', label: t("streamcircle.module3Label"), desc: t("streamcircle.module3Desc") },
              ].map(m => (
                <div key={m.num} style={{
                  background: 'var(--bg2)',
                  borderRadius: '6px 14px 6px 20px',
                  padding: '16px 18px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(10,182,224,0.3)'; e.currentTarget.style.background = 'var(--bg3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'var(--bg2)'; }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, color: '#0AB6E0', letterSpacing: 2, marginBottom: 4 }}>{m.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--white)', marginBottom: 4, letterSpacing: -0.2 }}>{m.label}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.5)', lineHeight: 1.5 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(10,182,224,0.08), rgba(0,122,152,0.08))',
            borderRadius: '8px 16px 8px 32px',
            padding: '32px 32px',
            border: '1px solid rgba(10,182,224,0.3)',
          }}>
            <StreamCircleMark size={36} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--white)', letterSpacing: -0.5, marginTop: 16, marginBottom: 10, lineHeight: 1.1 }}>
              {t("streamcircle.ctaHeading")}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.55)', lineHeight: 1.6, marginBottom: 20 }}>
              {t("streamcircle.ctaBody")}
            </p>
            <a href="https://streamcircle.com" target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
              color: '#0a0d10',
              background: 'linear-gradient(135deg, #0AB6E0 0%, #007A98 100%)',
              padding: '11px 22px', textDecoration: 'none',
              borderRadius: '6px 12px 6px 20px',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              {t("streamcircle.ctaLink")} <span style={{ fontSize: 14 }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
