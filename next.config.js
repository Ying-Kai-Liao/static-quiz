/** @type {import('next').NextConfig} */
const nextConfig = {
  //basePath: '/dist',
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
  images: { unoptimized: true }
}

module.exports = nextConfig
