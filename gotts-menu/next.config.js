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
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=1",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
