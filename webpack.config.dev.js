const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/ts/index.ts",
    earth: "./src/ts/earth.ts",
    data: "./src/ts/data.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "./js/[name].js",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js", ".jpg"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.(mp4|png|jpg)?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.html?$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.json?$/,
        type: "javascript/auto",
        use: [{ loader: "json-loader" }],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    watchContentBase: true,
    open: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
      inject: "head",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "earth.html",
      template: "./src/html/threePages.html",
      inject: "head",
      chunks: ["earth"],
    }),
    new HtmlWebpackPlugin({
      filename: "data.html",
      template: "./src/html/data.html",
      inject: "head",
      chunks: ["data"],
    }),
  ],
};
