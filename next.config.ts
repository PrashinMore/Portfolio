import type { NextConfig } from "next";

/** Set to `/Portfolio` when deploying to GitHub Pages (repo name path). Empty for local dev at `/`. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
