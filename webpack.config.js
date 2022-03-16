/** @type {import('webpack').Configuration} */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    entry: "./src/index.js",
    output: {
      filename: `[name].[${isProduction ? "contenthash" : "hash"}].js`,
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "assets/images/[hash][ext][query]",
      clean: true,
    },
    //mode: 'development'
    resolve: {
      extensions: [".js"],
      alias: {
        "@styles": path.resolve(__dirname, "src/styles/"),
      },
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
          generator: {
            filename: "static/images/[hash][ext][query]",
          },
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
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "assets/images"),
            to: "assets/images",
          },
        ],
      }),
    ],

    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
  };
};
