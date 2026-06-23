import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // typedRoutes: true,
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },

  cacheComponents: true,
};

export default nextConfig;
