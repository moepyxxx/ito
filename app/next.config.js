/** @type {import('next').NextConfig} */
const nextConfig = {
  // see: https://nextjs.org/docs/messages/swc-disabled
  // see: https://nextjs.org/docs/messages/swc-disabled
  experimental: {
    forceSwcTransforms: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:3001/graphql",
      },
    ];
  },
};

module.exports = nextConfig;
