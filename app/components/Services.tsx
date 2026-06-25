"use client";

import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── Services ────────────────────────────────────────────────────────────────

export default function Services() {
  const { isMobile } = useViewport();
  return (
    <section id="services" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
        <div>
          <SectionLabel label={t("services.sectionLabel")} color="#0AB6E0" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 60px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05, marginBottom: 24 }}>
            {t("services.headingMain")} <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>{t("services.headingAccent")}</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.55)', lineHeight: 1.7, marginBottom: 32 }}>
            {t("services.paragraph")}
          </p>
          <a href="mailto:info@tweenly.io" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
            color: '#0a0d10',
            background: 'linear-gradient(135deg, #22C68A 0%, #0AB6E0 100%)',
            padding: '12px 24px', textDecoration: 'none',
            borderRadius: '6px 12px 6px 20px', transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
            {t("services.contactButton")}
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['01', t("services.steps.0.title"), t("services.steps.0.desc"), '#22C68A'],
            ['02', t("services.steps.1.title"), t("services.steps.1.desc"), '#0AB6E0'],
            ['03', t("services.steps.2.title"), t("services.steps.2.desc"), '#82B820'],
          ].map(([num, title, desc, color]) => (
            <div key={num} style={{
              display: 'flex', gap: 20, padding: '22px 26px',
              background: 'var(--bg3)', border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '8px 16px 8px 32px', position: 'relative', overflow: 'hidden',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: color, lineHeight: 1, flexShrink: 0, width: 50, opacity: 0.9 }}>{num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--white)', marginBottom: 4 }}>{title}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.5)', lineHeight: 1.55 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
