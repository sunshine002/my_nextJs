
// 静态导出
// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   "/hello": { page: "/hello" }
// });

const withTs = require('@zeit/next-typescript')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

module.exports = withTs(withLess(withCss({
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
  },
  cssLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
  },
  // 静态导出
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/hello': { page: '/hello' },
      '/two/user': { page: '/two/user' },
    }
  },
  // webpack: (config, { dev, isServer, defaultLoaders }) => {
  // config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] });
  //   return config
  // },
})));





