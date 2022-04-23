/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["images2.imgbox.com", "i.imgur.com", "imgur.com"],
  },
  async redirects() {
    return [
      {
        source: "/404.js",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
