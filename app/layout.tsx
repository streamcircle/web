import type { Metadata } from "next";
import "./globals.css";

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
      <head>
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
      <body>{children}</body>
    </html>
  );
}
