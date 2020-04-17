const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/ts/index.ts",
    data: "./src/ts/data.ts",
    textMoveOnPath: "./src/ts/textMoveOnPath.ts",
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
      filename: "demo.html",
      template: "./src/html/demo.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "textMoveOnPath.html",
      template: "./src/html/svg.html",
      inject: "head",
      chunks: ["textMoveOnPath"],
    }),
  ],
};
