var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "client/dist");
var APP_DIR = path.resolve(__dirname, "client/src/review");
// var APP_DIR = path.resolve(__dirname, 'client/src/sideBar');
// var APP_DIR = path.resolve(__dirname, 'client/src/photoGallery');

var config = {
  entry: APP_DIR + "/index.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  }
};

module.exports = config;
