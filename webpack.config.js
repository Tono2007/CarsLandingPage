/** @type {import('webpack').Configuration} */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, { mode }) => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    //mode: 'development'
    resolve: {
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(c|sc|sa)ss$/i, //css,scss,sass
          use: [
            mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader", // Creates `style` nodes from JS strings
            "css-loader", // Translates CSS into CommonJS
            "sass-loader", // Compiles Sass to CSS
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML EN ETIQUETA HEAD
        template: "./src/pages/index.html", // LA RUTA AL TEMPLATE HTML
        filename: "./pages/index.html", // NOMBRE FINAL DEL ARCHIVO
      }),
      new HtmlWebpackPlugin({
        inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML EN ETIQUETA HEAD
        template: "./src/pages/contact.html", // LA RUTA AL TEMPLATE HTML
        filename: "./pages/contact.html", // NOMBRE FINAL DEL ARCHIVO
      }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "assets/images"),
            to: "assets/images",
          },
        ],
      }),
    ],
  };
};
