import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ["mongoose"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

// Velite next.js plugin approach — build content during next dev/build
const withVelite = (config) => {
  const originalWebpack = config.webpack;
  return {
    ...config,
    webpack(webpackConfig, options) {
      webpackConfig.plugins.push(
        new (class {
          apply(compiler) {
            // Velite build is now handled by the package.json scripts
          }
        })()
      );
      if (typeof originalWebpack === "function") {
        return originalWebpack(webpackConfig, options);
      }
      return webpackConfig;
    },
  };
};

export default withVelite(nextConfig);
