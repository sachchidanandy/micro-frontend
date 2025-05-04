const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // set mode to development
  devServer: {
    open: true,
    port: 8081
  }, // set port
  entry: './src/index.js', // set entry point of application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }, // set output path
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // set name of the application
      filename: 'remoteEntry.js', // set remote entry file name
      exposes: {
        './ProductsList': './src/bootstrap.js',
      }, // list file to exposes
      shared: ['faker'], // library shared betwen diff application
    }), // set module federation
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
