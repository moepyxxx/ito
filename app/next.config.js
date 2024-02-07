/** @type {import('next').NextConfig} */
const nextConfig = {
  // see: https://nextjs.org/docs/messages/swc-disabled
  // see: https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
