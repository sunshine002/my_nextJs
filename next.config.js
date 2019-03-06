
// 静态导出
// exports.exportPathMap = () => ({
//   "/": { page: "/" },
//   "/hello": { page: "/hello" }
// });

const path = require('path')
const withTs = require('@zeit/next-typescript')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
// const cssLoaderConfig = require('@zeit/next-less/less-loader-config')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTs(withLess(withCss({
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
  }
})));
    // webpack(config/* , { buildId, dev, isServer, defaultLoaders } */) {
    //   config.module.rules.push({ test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] });
    //   config.resolve.alias = {
    //     common: path.resolve(__dirname, '../common'),
    //   }

    //   return config

    // // 静态导出
    // exportPathMap: () => ({
    //   "/": { page: "/" },
    //   "/hello": { page: "/hello" }
    // }),



