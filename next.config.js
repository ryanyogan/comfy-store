/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://comfy-store.sfo3.cdn.digitaloceanspaces.com",
      },
    ],
    domains: ["img.icons8.com"],
  },
};

module.exports = nextConfig;
