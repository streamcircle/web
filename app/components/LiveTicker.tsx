// ─── Live Ticker ────────────────────────────────────────────────────────────

import { getTranslation } from "../i18n";

const { t } = getTranslation();

const TICKER_ITEMS = [
  t("ticker.items.0"),
  t("ticker.items.1"),
  t("ticker.items.2"),
  t("ticker.items.3"),
  t("ticker.items.4"),
  t("ticker.items.5"),
  t("ticker.items.6"),
  t("ticker.items.7"),
];

export function LiveTicker({ accentColor = '#22C68A', bg = 'rgba(15,19,22,0.92)' }) {
  const text = TICKER_ITEMS.join('   ●   ') + '   ●   ' + TICKER_ITEMS.join('   ●   ');
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: bg, borderTop: `1px solid ${accentColor}30`, borderBottom: `1px solid ${accentColor}30`, padding: '11px 0', display: 'flex', alignItems: 'center' }}>
      <div style={{
        background: accentColor, color: '#0a0d10',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 12, letterSpacing: 2,
        padding: '4px 14px', marginLeft: 12, marginRight: 18, flexShrink: 0,
        textTransform: 'uppercase', borderRadius: '4px 8px 4px 14px',
      }}>● {t("ticker.live")}</div>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <div style={{
          display: 'flex', whiteSpace: 'nowrap',
          animation: 'ticker 38s linear infinite',
          fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, letterSpacing: 0.5, color: 'rgba(226,228,229,0.85)',
        }}>
          {text}
        </div>
      </div>
    </div>
  );
}
