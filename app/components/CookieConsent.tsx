"use client";

import { useEffect, useState } from "react";
import * as CC from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookie-consent.css";
import { getTranslation } from "../i18n";

const { t } = getTranslation();

// Consent banner wired to Google Consent Mode v2. The default state (all
// denied) is set in app/layout.tsx before GTM loads; here we only ever call
// `consent: 'update'` to reflect the visitor's choice. GTM/GA4 read these
// signals and gate analytics + ad tags accordingly.
//
// Category → Consent Mode signal mapping:
//   analytics → analytics_storage
//   marketing → ad_storage, ad_user_data, ad_personalization
// `necessary` is always on and maps to no Consent Mode signal.

declare global {
  // `dataLayer` is already declared globally by @next/third-parties; we only
  // add the gtag shim defined in the beforeInteractive script in layout.tsx.
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function syncConsentMode() {
  const granted = (category: string) =>
    CC.acceptedCategory(category) ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    analytics_storage: granted("analytics"),
    ad_storage: granted("marketing"),
    ad_user_data: granted("marketing"),
    ad_personalization: granted("marketing"),
  });
}

export default function CookieConsent() {
  // The floating trigger only appears once a choice has been made — until then
  // the consent banner itself occupies the bottom-right corner.
  const [showTrigger, setShowTrigger] = useState(false);

  useEffect(() => {
    CC.run({
      // Keep the choice for 6 months, then re-ask (GDPR-friendly cadence).
      cookie: { name: "tweenly_cc", expiresAfterDays: 182 },

      guiOptions: {
        consentModal: { layout: "box", position: "bottom right" },
        preferencesModal: { layout: "box" },
      },

      // Re-sync Consent Mode on initial load (restores a returning visitor's
      // stored choice) and on every subsequent change, and reveal the floating
      // trigger now that the banner has been dismissed.
      onConsent: () => {
        syncConsentMode();
        setShowTrigger(true);
      },
      onChange: syncConsentMode,

      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {},
        marketing: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: t("cookies.title"),
              description: t("cookies.description"),
              acceptAllBtn: t("cookies.acceptAll"),
              acceptNecessaryBtn: t("cookies.rejectAll"),
              showPreferencesBtn: t("cookies.manage"),
            },
            preferencesModal: {
              title: t("cookies.settingsTitle"),
              acceptAllBtn: t("cookies.acceptAll"),
              acceptNecessaryBtn: t("cookies.rejectAll"),
              savePreferencesBtn: t("cookies.save"),
              closeIconLabel: t("cookies.close"),
              sections: [
                {
                  title: t("cookies.settingsIntroTitle"),
                  description: t("cookies.settingsIntroDesc"),
                },
                {
                  title: t("cookies.necessaryTitle"),
                  description: t("cookies.necessaryDesc"),
                  linkedCategory: "necessary",
                },
                {
                  title: t("cookies.analyticsTitle"),
                  description: t("cookies.analyticsDesc"),
                  linkedCategory: "analytics",
                },
                {
                  title: t("cookies.marketingTitle"),
                  description: t("cookies.marketingDesc"),
                  linkedCategory: "marketing",
                },
                {
                  title: t("cookies.moreTitle"),
                  description: t("cookies.moreDesc"),
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  if (!showTrigger) return null;

  return (
    <button
      type="button"
      aria-label={t("footer.cookieSettings")}
      title={t("footer.cookieSettings")}
      onClick={() => CC.showPreferences()}
      style={{
        position: "fixed",
        // Respect the iOS/Android safe area so the button clears the home
        // indicator and the browser's collapsing bottom toolbar.
        bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        right: "calc(20px + env(safe-area-inset-right, 0px))",
        zIndex: 999,
        width: 44,
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#151a1e",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(226,228,229,0.75)",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
        transition: "color 0.2s, border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#22C68A";
        e.currentTarget.style.borderColor = "rgba(34,198,138,0.5)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(226,228,229,0.75)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Cookie glyph */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
        <circle cx="8.5" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="11" cy="15.5" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="13.5" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    </button>
  );
}
