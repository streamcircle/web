import { getTranslation } from "../../i18n";

const { t } = getTranslation();
// ─── References hero ──────────────────────────────────────────────────────────

export default function ReferencesHero() {
  return (
    <section id="top" style={{
      position: 'relative', overflow: 'hidden', background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      // Nav is fixed (72px tall), so the hero reserves that space itself
      paddingTop: 72,
    }}>
      {/* Subtle diagonal line pattern (decorative) */}
      <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, zIndex: 0, pointerEvents: 'none' }}>
        <defs>
          <pattern id="referencesHeroLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="4" y1="36" x2="36" y2="4" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#referencesHeroLines)" />
      </svg>
      {/* Asymmetric brand shape (decorative) */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-8%', top: '12%', width: '46%', height: '84%',
        background: 'var(--gradient-brand)', opacity: 0.06,
        borderRadius: '64px 160px 64px 260px', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1, maxWidth: 1240, margin: '0 auto',
        padding: 'clamp(40px, 7vw, 72px) clamp(20px, 5vw, 40px) clamp(32px, 5vw, 56px)',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: 3, color: 'var(--cyan)', textTransform: 'uppercase' }}>
          {t("referencesPage.hero.label")}
        </div>
        <h1 style={{
          margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.98, letterSpacing: -2.5, color: 'var(--white)',
        }}>
          <span style={{ display: 'block', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>{t("referencesPage.hero.headlineLine1")}</span>
          <span style={{
            display: 'block',
            background: 'var(--gradient-headline)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
          }}>{t("referencesPage.hero.headlineLine2")}</span>
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'rgba(226,228,229,0.75)', maxWidth: 520 }}>
          {t("referencesPage.hero.lead")}
        </p>
      </div>
    </section>
  );
}
