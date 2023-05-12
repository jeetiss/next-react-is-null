/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["encoding"] = false;
    return config;
  },
};

module.exports = nextConfig;
