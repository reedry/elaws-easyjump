const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./*",
        to: "./",
        context: "src/",
        ignore: ["*.ts"]
      }
    ]),
  ]
}


