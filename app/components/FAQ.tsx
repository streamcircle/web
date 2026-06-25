"use client";

import { useState } from "react";
import { SectionLabel } from "./primitives";
import { useViewport } from "./useViewport";
import { getTranslation } from "../i18n";

const { t } = getTranslation();
// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  { q: t("faq.items.0.q"), a: t("faq.items.0.a") },
  { q: t("faq.items.1.q"), a: t("faq.items.1.a") },
  { q: t("faq.items.2.q"), a: t("faq.items.2.a") },
  { q: t("faq.items.3.q"), a: t("faq.items.3.a") },
  { q: t("faq.items.4.q"), a: t("faq.items.4.a") },
  { q: t("faq.items.5.q"), a: t("faq.items.5.a") },
  { q: t("faq.items.6.q"), a: t("faq.items.6.a") },
  { q: t("faq.items.7.q"), a: t("faq.items.7.a") },
];

function FAQItem({ item, open, onClick }: { item: (typeof FAQ_ITEMS)[number]; open: boolean; onClick: () => void }) {
  return (
    <div style={{
      background: open ? 'rgba(34,198,138,0.04)' : 'var(--bg2)',
      border: `1px solid ${open ? 'rgba(34,198,138,0.25)' : 'rgba(255,255,255,0.06)'}`,
      borderRadius: '8px 16px 8px 32px',
      overflow: 'hidden', transition: 'all 0.3s',
    }}>
      <button onClick={onClick} style={{
        width: '100%', background: 'none', border: 'none',
        padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        cursor: 'pointer', gap: 20, textAlign: 'left',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: open ? '#22C68A' : 'var(--white)', letterSpacing: -0.2 }}>{item.q}</span>
        <span style={{ color: open ? '#22C68A' : 'rgba(226,228,229,0.4)', fontSize: 24, transform: open ? 'rotate(45deg)' : 'none', transition: 'all 0.3s', flexShrink: 0, lineHeight: 1, fontFamily: 'var(--font-display)', fontWeight: 300 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 28px 24px', fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(226,228,229,0.65)', lineHeight: 1.7, animation: 'fadeUp 0.3s ease' }}>
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const { isMobile } = useViewport();
  return (
    <section id="faq" style={{ padding: isMobile ? '72px 20px' : '120px 40px', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-block' }}><SectionLabel label={t("faq.label")} /></div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: -1.5, color: 'var(--white)', lineHeight: 1.05, marginBottom: 12 }}>
            {t("faq.heading")}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(226,228,229,0.62)' }}>
            {t("faq.intro")}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ_ITEMS.map((item, i) => <FAQItem key={item.q} item={item} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />)}
        </div>
      </div>
    </section>
  );
}
