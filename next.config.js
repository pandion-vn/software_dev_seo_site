/**
 * @type {import('next').NextConfig}
 */
 module.exports = {
  images: {
    unoptimized: true,
    domains: [
      'static.ghost.org',
      'images.unsplash.com'
    ],
  },
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
};
