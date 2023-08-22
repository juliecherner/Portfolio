/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    envCacheStrategy:
      process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  },
}

module.exports = nextConfig
