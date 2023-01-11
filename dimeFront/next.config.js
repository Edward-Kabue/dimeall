/** @type {import('next').NextConfig} */
const path = require('path');
const ContentSecurityPolicy = `
  default-src '*';
`;

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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: ContentSecurityPolicy,
      },
    ];
  },
};

module.exports = nextConfig;
