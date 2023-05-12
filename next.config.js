/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["encoding"] = false;
    return config;
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
