"use client";

import { useEffect } from "react";

// Turns on smooth scrolling (see `.smooth-scroll` in globals.css) only once
// the page has loaded, so the initial jump to a `#hash` is instant and stays
// on target while fonts load. Runs after hydration, so React never sees the
// class on <html> as a mismatch.
export default function SmoothScroll() {
  useEffect(() => {
    const enable = () => document.documentElement.classList.add("smooth-scroll");
    if (document.readyState === "complete") enable();
    else window.addEventListener("load", enable, { once: true });
    return () => window.removeEventListener("load", enable);
  }, []);
  return null;
}
