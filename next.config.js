/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    envCacheStrategy:
      process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
