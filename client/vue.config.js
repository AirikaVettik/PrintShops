const path = require('path');

function resolveSrc (_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: process.env.VUE_APP_BE,
        changeOrigin: true
      }
    }
  }
};
