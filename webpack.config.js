const path = require("path");

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/tooltip.js",
  output: {
    filename: "tooltip.min.js",
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "/js/",
  },
  devServer: {
    contentBase: "dist",
    watchContentBase: true,
  },
  watch: true,
};
