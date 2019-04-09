// tslint:disable: object-literal-sort-keys

import merge from "webpack-merge";
import common from "./webpack.common";

process.env.NODE_ENV = "development";
process.env.BABEL_ENV = "development";

export default merge(common, {
  output: {
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true
  },
  devtool: "inline-cheap-source-map"
});
