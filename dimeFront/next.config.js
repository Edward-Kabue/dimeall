/** @type {import('next').NextConfig} */
const path = require('path');
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src https://cms.dimetechgroup.com/graphql;
  style-src 'self' https://cms.dimetechgroup.com/graphql;
  font-src 'self';  
`;
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];
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
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
