import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
