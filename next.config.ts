import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — silences the multi-lockfile
  // inference warning caused by an unrelated lockfile higher up the tree
  turbopack: {
    root: __dirname,
  },

  // Produce a fully static export in the `out/` folder on `next build`
  output: "export",

  // The default image loader requires a server, so disable optimization
  // to keep `next/image` working in a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
