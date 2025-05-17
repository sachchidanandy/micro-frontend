const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const packageJSON = require('../package.json');

const productinDomain = process.env.PRODUCTION_DOMAIN;

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
        marketing: `marketing@${productinDomain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJSON.dependencies,
    }),
  ]
};

module.exports = merge(commonConfig, prodConfig);
