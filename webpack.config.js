const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: "development",
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "assert": require.resolve("assert/"),
      "process": require.resolve("process/browser"),
    }
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
};
