"use client";

import Link from "next/link";
import { getTranslation } from "../../i18n";

const { t } = getTranslation();
// ─── Pilot CTA band ───────────────────────────────────────────────────────────

// Dark text on the bright gradient band = the page background colour
const INK = 'var(--bg)';

export default function PilotCta() {
  return (
    <section id="next" style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(48px, 7vw, 80px) clamp(20px, 5vw, 40px)' }}>
      <div style={{
        position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-hero)',
        background: 'var(--gradient-brand)',
        padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 56px)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: 3, color: INK, textTransform: 'uppercase' }}>
            {t("referencesPage.cta.label")}
          </span>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.1, letterSpacing: -1.5, fontWeight: 800, color: INK }}>
            {t("referencesPage.cta.heading")}
          </h2>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: INK }}>
            {t("referencesPage.cta.text")}
          </p>
        </div>
        <Link href="/#contact" style={{
          background: INK, color: 'var(--white)', textDecoration: 'none', whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
          padding: '14px 32px', borderRadius: 'var(--r-button)', transition: 'transform 0.25s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}>
          {t("referencesPage.cta.button")}
        </Link>
      </div>
    </section>
  );
}
