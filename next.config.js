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
      },
      {
        source: '/github',
        destination: '/github/1',
        permanent: true,
      },
    ]
  },
  env: {
    XXX_TOKEN: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
}
