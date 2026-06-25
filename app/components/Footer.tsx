"use client";

import type { ReactNode } from "react";
import { Logo } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const { isMobile } = useViewport();
  const resourceLinks = [
    [t("footer.resources.0"), 'https://docs.tweenly.io'],
    [t("footer.resources.1"), 'https://docs.tweenly.io/appendices/terms-and-conditions/'],
    [t("footer.resources.2"), 'https://docs.tweenly.io/appendices/privacy-policy/'],
  ];
  const socialLinks: [string, string, ReactNode][] = [
    [t("footer.socials.0"), 'https://www.linkedin.com/company/tween-ly',
      <path key="li" fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19h-3v-9h3v9zM6.5 8.31c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zM20 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.83 0-1.62.62-1.62 1.97v4.7h-3v-9h2.9v1.32h.04c.4-.76 1.35-1.5 2.69-1.5 2.4 0 3.37 1.28 3.37 4.03v5.15z"/>],
    [t("footer.socials.1"), 'https://www.youtube.com/@Tweenly',
      <path key="yt" fill="currentColor" d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>],
  ];
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '48px clamp(20px,5vw,40px) 32px' : '64px 40px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1.6fr 1fr 1fr', gap: isMobile ? 32 : 40, marginBottom: 48 }}>
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <Logo size={22} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(226,228,229,0.55)', lineHeight: 1.6, maxWidth: 260, marginTop: 16 }}>
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(226,228,229,0.45)', textTransform: 'uppercase', marginBottom: 16 }}>{t("footer.resourcesHeading")}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {resourceLinks.map(([l, u]) => (
                <a key={l} href={u} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.7)', textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#22C68A'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,228,229,0.7)'}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(226,228,229,0.45)', textTransform: 'uppercase', marginBottom: 16 }}>{t("footer.socialsHeading")}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {socialLinks.map(([l, u, icon]) => (
                <a key={l} href={u} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(226,228,229,0.7)', textDecoration: 'none', transition: 'color 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#22C68A'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,228,229,0.7)'}>
                  <svg width="17" height="17" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>{icon}</svg>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.45)' }}>{t("footer.copyright")}</span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(226,228,229,0.45)' }}>{t("footer.locations")}</span>
        </div>
      </div>
    </footer>
  );
}
