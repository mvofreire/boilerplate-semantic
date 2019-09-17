const HtmlWebPackPlugin = require("html-webpack-plugin");
const rules = require("./webpack/rules");
const aliases = require("./webpack/aliases");

module.exports = {
  module: {
    rules: [
      rules.jsLoader,
      rules.htmlLoader,
      rules.cssLoader,
      rules.lessLoader,
      rules.fileLoader,
      rules.urlLoader
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/server": {
        target: "http://localhost:3333/",
        ws: true,
        pathRewrite: {
          "^/server": "/"
        }
      }
    }
  },
  resolve: {
    alias: aliases
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./template/index.html",
      filename: "./index.html"
    })
  ]
};
