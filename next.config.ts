import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
