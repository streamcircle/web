import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // The landing page intentionally uses plain <img> for logos/screenshots
      // (images are served as-is under `output: "export"` + unoptimized).
      "@next/next/no-img-element": "off",
      // Fonts are loaded via <link> in the App Router root layout (loads
      // globally). This rule targets the Pages Router `_document.js` and is a
      // false positive here; next/font can't be used because the design
      // references font families by literal name (e.g. 'Bebas Neue').
      "@next/next/no-page-custom-font": "off",
    },
  },
]);

export default eslintConfig;
