// const { withContentlayer } = require("next-contentlayer");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['lh3.googleusercontent.com']
//   },
  
// };

// module.exports = withContentlayer(nextConfig);


const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
    metadataBase: 'https://emje.vercel.app/',

  },
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  }
};

module.exports = withContentlayer(nextConfig);
