const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");
const webpack = require("webpack");
const path = require("path");

const clientDir = path.resolve(__dirname);

module.exports = {
  mode: "development",
  entry: path.join(clientDir, "index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new DotenvPlugin({ path: "../.env", systemvars: true }),
    new HtmlWebpackPlugin({
      template: `${clientDir}/index.html`,
      inject: true
    })
  ],
  resolve: {
    modules: [clientDir, path.join(__dirname, "../node_modules")]
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: "minimal"
  }
};