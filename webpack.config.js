/** @type {import('webpack').Configuration} */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  const ruleForJavaScript = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
  const ruleForStyles = {
    test: /\.(c|sc|sa)ss$/i, //css,scss,sass
    use: [
      mode === "production" ? MiniCssExtractPlugin.loader : "style-loader", // Creates `style` nodes from JS strings
      "css-loader", // Translates CSS into CommonJS
      "sass-loader", // Compiles Sass to CSS
    ],
  };
  const ruleForImages = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
    generator: {
      filename: "static/images/[hash][ext][query]",
    },
  };
  const rules = [ruleForJavaScript, ruleForStyles, ruleForImages];

  const plugins = [
    new HtmlWebpackPlugin({
      inject: true, // INYECTA EL BUNDLE AL TEMPLATE HTML EN ETIQUETA HEAD
      template: "./public/index.html", // LA RUTA AL TEMPLATE HTML
      filename: "./index.html", // NOMBRE FINAL DEL ARCHIVO
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
    ...(isProduction
      ? []
      : [
          new BundleAnalyzerPlugin({
            analyzerMode: !isProduction ? "server" : "disabled",
          }),
        ]),
  ];

  return {
    entry: "./src/index.js",
    output: {
      filename: `[name].[${isProduction ? "contenthash" : "hash"}].js`,
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "assets/images/[hash][ext][query]",
      clean: true,
    },
    //mode: 'development'
    devtool: isProduction ? false : "source-map",
    resolve: {
      extensions: [".js"],
      alias: {
        "@styles": path.resolve(__dirname, "src/styles/"),
      },
    },
    module: { rules },
    plugins,

    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
    devServer: {
      client: {
        overlay: true,
      },
      compress: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
    },
  };
};
