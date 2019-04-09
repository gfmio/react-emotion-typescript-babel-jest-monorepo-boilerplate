// tslint:disable: object-literal-sort-keys

import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

// tslint:disable-next-line: no-var-requires
const babelOptions = require("../../babel.config.js");

export default {
  entry: path.resolve(__dirname, "src", "entrypoint.tsx"),
  output: {
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    symlinks: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "..", "..", "packages", "ui")
        ],
        loader: "babel-loader",
        options: babelOptions
      },
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, "src")],
        loaders: [
          {
            loader: "babel-loader",
            options: babelOptions
          },
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                target: "esnext",
                module: "esnext"
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
} as webpack.Configuration;
