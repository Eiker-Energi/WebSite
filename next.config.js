/** @type {import('next').NextConfig} */
const isGhActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : '';

const ghPagesOpts = isGhActions && repo
  ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
  : {};

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: { typedRoutes: true },
  ...ghPagesOpts,
};

module.exports = nextConfig;
