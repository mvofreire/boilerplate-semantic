module.exports = {
  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules|dist|.storybook/,
    use: {
      loader: "babel-loader"
    }
  },
  htmlLoader: {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader"
      }
    ]
  },
  cssLoader: {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
  },
  lessLoader: {
    test: /\.less$/,
    loader: "less-loader", // compiles Less to CSS
    options: {
      modifyVars: {
        "primary-color": "red",
        "link-color": "blue",
        "border-radius-base": "2px"
      },
      javascriptEnabled: true
    }
  },
  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    use: {
      loader: "file-loader",
      query: {
        name: "media/[name].[hash:8].[ext]"
      }
    }
  },
  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    use: {
      loader: "url-loader",
      query: {
        limit: 10000,
        name: "media/[name].[hash:8].[ext]"
      }
    }
  }
};
