const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const packageJSON = require('../package.json');

const hostName = process.env.PRODUCTION_HOST;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@http://${hostName}/marketing/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ]
};

module.exports = merge(commonConfig, prodConfig);
