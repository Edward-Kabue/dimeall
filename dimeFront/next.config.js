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
        source: 'https://cms.dimetechgroup.com/graphql',
        destination: 'https://cms.dimetechgroup.com/graphql',
      },
    ],
  },
};

module.exports = nextConfig;
