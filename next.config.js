// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: false
// });

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['storage.googleapis.com', 'www.lacartoons.com']
  },
  async rewrites() {
    return [
      {
        source: '/video/:slug',
        destination: 'https://ok.ru/videoembed/:slug'
      },
      {
        source: '/mycdn/:slug',
        destination: 'https://vd255.mycdn.me/:slug'
      }
    ];
  }
};
