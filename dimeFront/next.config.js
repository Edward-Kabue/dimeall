/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  rewrites: {
    return: [
      {
        source: '/graphql',
        destination: 'https://cms.dimetechgroup.com',
      },
    ],
  },
  return: {
    rewrites,
  },
};

module.exports = nextConfig;
