/** @type {import('next').NextConfig} */
const nextConfig = {
  // see: https://nextjs.org/docs/messages/swc-disabled
  // see: https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    forceSwcTransforms: true,
    serverActions: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:3001/graphql",
      },
    ];
  },
  // see: https://github.com/vercel/next.js/issues/7755
  // see: https://webpack.js.org/configuration/resolve/#resolvefallback
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
