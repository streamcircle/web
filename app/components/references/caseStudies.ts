import { getTranslation } from "../../i18n";
import pageCopy from "../../i18n/en/references.json";

const { t } = getTranslation();
// ─── Case study data ──────────────────────────────────────────────────────────
// One entry per published customer story. Copy lives in i18n; this file only
// wires keys to the structure `CaseStudy` renders. List lengths (facts,
// sections, paragraphs) come from i18n/en/references.json — every locale shares its shape —
// so adding or removing a paragraph is a copy-only change. Add a story by
// adding its copy under `caseStudies.<id>` in i18n/en/references.json and an entry below.

export type CaseStudySection = { heading: string; paragraphs: string[] };

export type CaseStudyData = {
  /** Anchor id on /references (e.g. /references#praha-tv) */
  slug: string;
  name: string;
  headline: string;
  date: { label: string; iso: string };
  leadImage: { src: string; alt: string; width: number; height: number };
  facts: { value: string; label: string }[];
  sectionsBeforeFigure: CaseStudySection[];
  figure: { src: string; alt: string; caption: string; width: number; height: number };
  sectionsAfterFigure: CaseStudySection[];
  quote: { text: string; attribution: string };
  outcome: string;
};

/** Key of a story under `caseStudies` in i18n/en/references.json */
type CaseStudyId = keyof typeof pageCopy.caseStudies;

function sections(id: CaseStudyId, group: "sectionsBeforeFigure" | "sectionsAfterFigure"): CaseStudySection[] {
  return pageCopy.caseStudies[id][group].map((section, s) => ({
    heading: t(`caseStudies.${id}.${group}.${s}.heading`),
    paragraphs: section.paragraphs.map((_, p) => t(`caseStudies.${id}.${group}.${s}.paragraphs.${p}`)),
  }));
}

const prahaTv: CaseStudyData = {
  slug: "praha-tv",
  name: t("caseStudies.prahaTv.name"),
  headline: t("caseStudies.prahaTv.headline"),
  date: { label: t("caseStudies.prahaTv.date"), iso: "2026-10-10" },
  leadImage: {
    src: "/assets/references/praha-tv-election-lead.jpg",
    alt: t("caseStudies.prahaTv.leadImageAlt"),
    width: 1920,
    height: 1081,
  },
  facts: pageCopy.caseStudies.prahaTv.facts.map((_, i) => ({
    value: t(`caseStudies.prahaTv.facts.${i}.value`),
    label: t(`caseStudies.prahaTv.facts.${i}.label`),
  })),
  sectionsBeforeFigure: sections("prahaTv", "sectionsBeforeFigure"),
  figure: {
    src: "/assets/references/praha-tv-onair-grid.jpg",
    alt: t("caseStudies.prahaTv.figureAlt"),
    caption: t("caseStudies.prahaTv.figureCaption"),
    width: 2105,
    height: 1133,
  },
  sectionsAfterFigure: sections("prahaTv", "sectionsAfterFigure"),
  quote: {
    text: t("caseStudies.prahaTv.quote"),
    attribution: t("caseStudies.prahaTv.quoteAttribution"),
  },
  outcome: t("caseStudies.prahaTv.outcome"),
};

export const CASE_STUDIES: CaseStudyData[] = [prahaTv];
