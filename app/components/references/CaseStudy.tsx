import type { CSSProperties } from "react";
import type { CaseStudyData, CaseStudySection } from "./caseStudies";

// ─── Case study article ───────────────────────────────────────────────────────
// Renders one customer story. Layout relies on CSS clamp/auto-fit, so it needs
// no viewport hook and stays a server component.

const BODY_TEXT: CSSProperties = {
  margin: 0, fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-secondary)',
};
const META_TEXT: CSSProperties = {
  fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'rgba(226,228,229,0.6)',
};

function Sections({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 780 }}>
      {sections.map(s => (
        <section key={s.heading} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.3, lineHeight: 1.3, color: 'var(--white)' }}>
            {s.heading}
          </h3>
          {s.paragraphs.map(p => <p key={p} style={BODY_TEXT}>{p}</p>)}
        </section>
      ))}
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <article id={data.slug} style={{
      maxWidth: 1240, margin: '0 auto',
      padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 40px) 0',
      display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 4vw, 48px)',
      // Keep the heading clear of the fixed nav when jumping to #slug
      scrollMarginTop: 72,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 44px)', lineHeight: 1.1, letterSpacing: -1.5, fontWeight: 800, color: 'var(--white)' }}>
          <span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>{data.name}</span> {data.headline}
        </h2>
        <p style={{ ...META_TEXT, margin: 0, fontSize: 15 }}>
          <time dateTime={data.date.iso}>{data.date.label}</time>
        </p>
      </div>

      <img
        src={data.leadImage.src} alt={data.leadImage.alt}
        width={data.leadImage.width} height={data.leadImage.height}
        style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 'var(--r-hero)', border: '1px solid var(--border)' }}
      />

      {/* Fact cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {data.facts.map(f => (
          <div key={f.value} style={{
            background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--r-card)',
            padding: '28px 28px 32px', display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.3, letterSpacing: -0.3, color: 'var(--white)' }}>{f.value}</span>
            <span style={META_TEXT}>{f.label}</span>
          </div>
        ))}
      </div>

      <Sections sections={data.sectionsBeforeFigure} />

      {/* Product screenshot */}
      <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <img
          src={data.figure.src} alt={data.figure.alt} loading="lazy"
          width={data.figure.width} height={data.figure.height}
          style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 'var(--r-card)', border: '1px solid var(--border)' }}
        />
        <figcaption style={META_TEXT}>{data.figure.caption}</figcaption>
      </figure>

      <Sections sections={data.sectionsAfterFigure} />

      <figure style={{
        margin: 0, position: 'relative', overflow: 'hidden',
        padding: 'clamp(32px, 5vw, 56px) clamp(24px, 5vw, 56px)',
        borderRadius: 'var(--r-hero)', background: 'var(--bg2)', border: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column', gap: 20,
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: 6, background: 'var(--gradient-brand)' }} />
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.3, fontWeight: 700, letterSpacing: -0.5, color: 'var(--white)', maxWidth: 900 }}>
          {data.quote.text}
        </blockquote>
        <figcaption style={{ ...META_TEXT, fontSize: 15 }}>{data.quote.attribution}</figcaption>
      </figure>

      <div style={{ maxWidth: 780 }}>
        <p style={BODY_TEXT}>{data.outcome}</p>
      </div>
    </article>
  );
}
