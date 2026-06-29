import en from "./en.json";

// Single source of truth for UI copy. Keys are nested by section; read them
// with a dotted path (e.g. "hero.title", "faq.items.0.q"). Add a locale by
// dropping in another JSON file with the same shape and registering it below.
const dictionaries = { en };

export type Locale = keyof typeof dictionaries;

// Recursively builds the union of valid dotted paths to string leaves, so
// `t()` keys are autocompleted and typo-checked at compile time. Arrays
// contribute a numeric segment (e.g. "nav.links.0", "faq.items.0.q").
type Join<K extends string, Rest extends string> = Rest extends "" ? K : `${K}.${Rest}`;
type Paths<T> = T extends string
  ? ""
  : T extends readonly (infer E)[]
    ? Join<`${number}`, Paths<E>>
    : T extends object
      ? { [K in Extract<keyof T, string>]: Join<K, Paths<T[K]>> }[Extract<keyof T, string>]
      : "";

export type TranslationKey = Paths<typeof en>;

function resolve(dict: unknown, key: string): string | undefined {
  const value = key.split(".").reduce<unknown>(
    (node, seg) => (node == null ? undefined : (node as Record<string, unknown>)[seg]),
    dict,
  );
  return typeof value === "string" ? value : undefined;
}

/**
 * Returns a `t` lookup bound to the given locale (defaults to English).
 *
 *   const { t } = getTranslation();
 *   t("hero.headlineLine2"); // -> "broadcast overlays."
 *   t("faq.items.0.q");      // nested arrays/objects via dotted path
 *
 * It's a plain synchronous lookup with no React dependency, so it can be called
 * at module scope (for data arrays) or inside any server/client component.
 * Falls back to the English value, then the key itself, if a key is missing.
 */
export function getTranslation(locale: Locale = "en") {
  const dict = dictionaries[locale] ?? en;
  const t = (key: TranslationKey): string =>
    resolve(dict, key) ?? resolve(en, key) ?? key;
  return { t };
}
