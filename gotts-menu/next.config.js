/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/menu-boards/flyer.jpg",
        destination: "/flyer.jpg",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
