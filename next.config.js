/** @type {import('next').NextConfig} */
const withOffline = require('next-offline');

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = withOffline(nextConfig); 