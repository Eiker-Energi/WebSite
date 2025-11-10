import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: "https://",
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
