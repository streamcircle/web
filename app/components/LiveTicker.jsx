// ─── Live Ticker ────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "Your designer finished the graphics. Your operator needs them on air in 20 minutes. Tweenly handles the middle part.",
  "No plugins were harmed in the making of this broadcast.",
  "Fun fact: the lower third you're looking at right now was built in Tweenly.",
  "One more \"can you just make the logo bigger\" away from switching to Tweenly.",
  "Tweenly + Stream Circle — from playlist to pixel, no exports in between.",
  "HTML overlays that work offline. Yes, really. ZIP it and forget the WiFi.",
  "Your scoreboard data changes. Your graphic updates. Nobody had to alt-tab.",
  "30 years in broadcast taught us one thing — operators don't have time for workarounds.",
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
      }}>● LIVE</div>
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
