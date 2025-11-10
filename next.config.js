/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: 'https://',
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
