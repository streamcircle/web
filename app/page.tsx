"use client";

import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatYouCanBuild from "./components/WhatYouCanBuild";
import BrandYourChannel from "./components/BrandYourChannel";
import Solution from "./components/Solution";
import TweenlyOnAir from "./components/TweenlyOnAir";
import StreamCircleIntegration from "./components/StreamCircleIntegration";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import References from "./components/References";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TweaksPanel from "./components/TweaksPanel";

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [tweaksVisible, setTweaksVisible] = useState(false);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <WhatYouCanBuild />
      <BrandYourChannel />
      <Solution />
      <TweenlyOnAir />
      <StreamCircleIntegration />
      <Services />
      <Pricing />
      <References />
      <FAQ />
      <Contact />
      <AboutUs />
      <Footer />
      <TweaksPanel visible={tweaksVisible} onClose={() => setTweaksVisible(false)} />
    </>
  );
}
