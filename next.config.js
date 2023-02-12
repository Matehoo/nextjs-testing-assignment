/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd35xwkx70uaomf.cloudfront.net',
        port: '',
        pathname: '*',
      },
    ],
  },
}
