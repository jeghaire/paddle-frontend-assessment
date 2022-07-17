/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/comingsoon',
        permanent: true,
      }
    ]
  },
  env: {
    XXX_TOKEN: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
}
