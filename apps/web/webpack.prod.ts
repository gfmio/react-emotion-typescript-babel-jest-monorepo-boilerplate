import merge from "webpack-merge";
import common from "./webpack.common";

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

export default merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
    filename: "static/js/[name].[chunkhash:8].js"
  }
});
