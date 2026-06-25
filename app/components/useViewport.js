"use client";

import { useState, useEffect } from "react";
// Viewport width hook — the site is inline-styled (no media queries),
// so layout breakpoints are driven from JS.
export function useViewport() {
  // Start at a fixed desktop width so server prerender and client hydration
  // match, then read the real viewport on mount (avoids hydration mismatch).
  const [w, setW] = useState(1280);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { w, isMobile: w < 760, isTablet: w >= 760 && w < 1040, isCompact: w < 1040 };
}
