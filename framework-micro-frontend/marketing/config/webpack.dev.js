const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common.js');
const packageJSON = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        './MarketingApp': './src/bootstrap.js'
      },
      shared: packageJSON.dependencies,
    }),
  ]
};

module.exports = merge(commonConfig, devConfig);
