const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.resolve(__dirname, '../src/www/bootstrap.ts'),
    vendor: path.resolve(__dirname, '../src/www/vendor.ts')
  },
  plugins: [
    new WebpackCleanupPlugin({
      exclude: ['index.html', 'fonts/**/*', 'media/images/**/*']
    })
  ]
});
