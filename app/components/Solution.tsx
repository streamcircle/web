"use client";

import { ScreenshotFrame } from "./ScreenshotFrame";
import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// Editor capabilities — Gallery / Workspaces / Export folded in as chips
// alongside the core editor features (was four full rows).

const EDITOR_CHIPS = [
  { label: t("solution.chips.0"), accent: '#22C68A' },
  { label: t("solution.chips.1"), accent: '#22C68A' },
  { label: t("solution.chips.2"), accent: '#22C68A' },
  { label: t("solution.chips.3"), accent: '#0AB6E0' },
  { label: t("solution.chips.4"), accent: '#82B820' },
  { label: t("solution.chips.5"), accent: '#107F76' },
  { label: t("solution.chips.6"), accent: '#107F76' },
];

export default function Solution() {
  const { isMobile } = useViewport();
  return (
    <section id="editor" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 52 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label={t("solution.sectionLabel")} /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05 }}>
            {t("solution.headingLine1")}<br/>
            <span style={{
              background: 'linear-gradient(90deg, #5BE3AE 0%, #22C68A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic', fontWeight: 500,
            }}>{t("solution.headingLine2")}</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(226,228,229,0.62)', maxWidth: 620, margin: '16px auto 0', lineHeight: 1.65 }}>
            {t("solution.description")}
          </p>
        </div>
        <ScreenshotFrame appName={t("solution.appName")} urlLabel="editor.tweenly.io" accent="#22C68A" badge={t("solution.badge")} placeholderNote={t("solution.placeholderNote")} aspectRatio="16/9" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginTop: isMobile ? 24 : 28 }}>
          {EDITOR_CHIPS.map(c => (
            <div key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 4px 8px', padding: '9px 16px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'rgba(226,228,229,0.82)', fontWeight: 500 }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
