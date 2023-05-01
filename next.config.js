/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
}

module.exports = nextConfig
