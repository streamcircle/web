import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";

// Google Consent Mode v2 default state. Emitted as a raw, synchronous inline
// script at the very top of <head> so it runs during HTML parsing — before the
// GTM container (which @next/third-parties injects with the afterInteractive
// strategy, i.e. after hydration) can initialise GA4 or any ad tag. Everything
// defaults to `denied` until the visitor chooses in the cookie banner;
// `wait_for_update` gives the banner a moment to restore a returning visitor's
// stored choice. See docs/cookie-consent-gtm.md for the matching GTM setup.
const CONSENT_MODE_DEFAULT = `
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
`;

// Brand play-mark favicon (from tweenly_triangle_web.svg)
const FAVICON =
  "data:image/svg+xml,%3Csvg width='187' height='187' viewBox='0 0 187 187' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M159.645 72.971L51.0635 10.2792C35.2589 1.1536 15.5023 12.5606 15.5023 30.8087V156.189C15.5023 174.437 35.2589 185.844 51.0635 176.719L159.645 114.027C175.45 104.901 175.45 82.0903 159.645 72.9647V72.971Z' fill='%2300B1EB'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Tweenly — Broadcast Graphics Design and Runtime",
  description:
    "Build tickers, lower thirds, score widgets, bugs, and stingers — bind live data, animate on a visual timeline, and export as HTML overlays ready for air.",
  icons: {
    icon: { url: FAVICON, type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MTSX222V" />
      <head>
        {/* First thing in <head>: set Consent Mode defaults before GTM runs. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_DEFAULT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&family=Bebas+Neue&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
