// @ts-check

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
