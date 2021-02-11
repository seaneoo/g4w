const path = require("path");
const dist = path.resolve(__dirname, "dist");

// Webpack Plugins
const TerserPlugin = require("terser-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    filename: "bundle.min.js",
    path: dist,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        /* additional options here */
      }),
    ],
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        exclude: [/node_modules/],
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      hash: true,
      scriptLoading: "defer",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
