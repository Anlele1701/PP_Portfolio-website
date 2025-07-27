import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

const nextConfig: NextConfig = {
  basePath,
  output: "export",
  distDir: "dist",
};

export default nextConfig;
