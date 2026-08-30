const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  images: {
    deviceSizes:,
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'utils'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // TAMBAHKAN BLOK HEADERS DI BAWAH INI UNTUK MEMAKSA AUTO-DOWNLOAD VIA SERVER
  async headers() {
    return [
      {
        source: '/cv-msoleh.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="CV_Muhamad_Soleh.pdf"',
          },
        ],
      },
    ]
  },
})
