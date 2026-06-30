"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── Navigation ───────────────────────────────────────────────────────────

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isCompact } = useViewport();
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  // Close the mobile menu once we grow back to desktop (adjust during render
  // rather than in an effect — the documented pattern for derived resets).
  if (!isCompact && menuOpen) setMenuOpen(false);

  const navLinks = [
    { label: t("nav.links.0"), href: '#examples', group: 'product', top: true },
    { label: t("nav.links.1"), href: '#branding', group: 'product', top: true },
    { label: t("nav.links.2"), href: '#editor', group: 'product', top: true, sep: true },
    { label: t("nav.links.3"), href: '#onair', accent: '#E05151', group: 'product', top: true },
    { label: t("nav.links.4"), href: '#services', group: 'utility', top: true },
    { label: t("nav.links.5"), href: '#pricing', group: 'utility', top: true },
    { label: t("nav.links.6"), href: '#contact', group: 'utility', top: true },
    { label: t("nav.links.7"), href: '#faq', group: 'utility', top: false },
  ];
  const topLinks = navLinks.filter(l => l.top);

  const navOpaque = scrolled || (isCompact && menuOpen);

  return (
    <nav style={{
      position: 'fixed', top: 2, left: 0, right: 0, zIndex: 1000,
      background: navOpaque ? 'rgba(10,13,16,0.92)' : 'transparent',
      backdropFilter: navOpaque ? 'blur(20px)' : 'none',
      borderBottom: navOpaque ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 clamp(20px, 5vw, 40px)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', height: 72, gap: 40 }}>
        <Logo size={22} />

        {/* Desktop: centered link row */}
        {!isCompact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 26, flex: 1, justifyContent: 'center' }}>
            {topLinks.map((l, i) => {
              const prev = topLinks[i - 1];
              const showDivider = prev && (prev.group !== l.group || l.sep);
              return (
                <React.Fragment key={l.label}>
                  {showDivider && (
                    <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.12)' }} aria-hidden="true" />
                  )}
                  <a href={l.href} style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
                    color: 'rgba(226,228,229,0.7)', textDecoration: 'none', transition: 'color 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = l.accent || 'var(--white)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,228,229,0.7)'}>
                    {l.accent && <span style={{
                      width: 5, height: 5, borderRadius: '50%', background: l.accent,
                      boxShadow: `0 0 8px ${l.accent}`,
                      animation: l.href === '#onair' ? 'blink 1.6s infinite' : 'none',
                    }} />}
                    {l.label}
                  </a>
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Right cluster */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginLeft: isCompact ? 'auto' : 0 }}>
          {!isCompact && (
            <a href="https://editor.tweenly.io/login" style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'rgba(226,228,229,0.7)', textDecoration: 'none', padding: '8px 14px', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(226,228,229,0.7)'}>{t("nav.logIn")}</a>
          )}
          <a href="https://editor.tweenly.io/signup" style={{
            fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700,
            color: '#0a0d10', whiteSpace: 'nowrap',
            background: 'linear-gradient(135deg, #82B820 0%, #22C68A 100%)',
            padding: '10px 22px', textDecoration: 'none',
            borderRadius: '6px 12px 6px 20px',
            transition: 'all 0.25s',
            boxShadow: '0 8px 24px rgba(34,198,138,0.2)',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(34,198,138,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,198,138,0.2)'; }}>
            {t("nav.signUp")}
          </a>

          {/* Mobile/tablet: hamburger */}
          {isCompact && (
            <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu" aria-expanded={menuOpen} style={{
              width: 44, height: 44, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px 12px 6px 14px', cursor: 'pointer', flexShrink: 0,
            }}>
              <span style={{ width: 18, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ width: 18, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ width: 18, height: 2, background: 'var(--white)', borderRadius: 2, transition: 'all 0.25s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile/tablet: slide-down menu panel */}
      {isCompact && (
        <div style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? 560 : 0,
          opacity: menuOpen ? 1 : 0,
          transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease',
        }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: menuOpen ? '8px 0 24px' : 0, display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((l, i) => {
              const prev = navLinks[i - 1];
              const showDivider = prev && (prev.group !== l.group || l.sep);
              return (
                <React.Fragment key={l.label}>
                  {showDivider && <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '8px 0' }} aria-hidden="true" />}
                  <a href={l.href} onClick={() => setMenuOpen(false)} style={{
                    fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
                    color: l.accent || 'rgba(255,255,255,0.92)', textDecoration: 'none',
                    padding: '13px 4px', display: 'flex', alignItems: 'center', gap: 9,
                  }}>
                    {l.accent && <span style={{ width: 7, height: 7, borderRadius: '50%', background: l.accent, boxShadow: `0 0 8px ${l.accent}`, animation: l.label === 'On Air' ? 'blink 1.6s infinite' : 'none' }} />}
                    {l.label}
                  </a>
                </React.Fragment>
              );
            })}
            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '8px 0' }} aria-hidden="true" />
            <a href="https://editor.tweenly.io/login" onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
              color: 'rgba(255,255,255,0.92)', textDecoration: 'none', padding: '13px 4px',
            }}>{t("nav.logIn")}</a>
          </div>
        </div>
      )}
    </nav>
  );
}
