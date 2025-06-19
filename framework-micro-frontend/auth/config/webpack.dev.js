const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig = require('./webpack.common.js');
const packageJSON = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap.js'
      },
      shared: packageJSON.dependencies,
    }),
  ]
};

module.exports = merge(commonConfig, devConfig);
