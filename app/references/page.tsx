import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ReferencesHero from "../components/references/ReferencesHero";
import CaseStudy from "../components/references/CaseStudy";
import PilotCta from "../components/references/PilotCta";
import { CASE_STUDIES } from "../components/references/caseStudies";
import { getTranslation } from "../i18n";

const { t } = getTranslation();

export const metadata: Metadata = {
  title: t("referencesPage.meta.title"),
  description: t("referencesPage.meta.description"),
  openGraph: {
    title: t("referencesPage.meta.title"),
    description: t("referencesPage.meta.description"),
    url: "https://tweenly.io/references",
    images: [{ url: "https://tweenly.io/assets/references/praha-tv-election-lead.jpg", width: 1920, height: 1081 }],
  },
};

// ─── /references ──────────────────────────────────────────────────────────────

export default function ReferencesPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)' }}>
        <ReferencesHero />
        {CASE_STUDIES.map(cs => <CaseStudy key={cs.slug} data={cs} />)}
        <PilotCta />
      </main>
      <Footer />
    </>
  );
}
