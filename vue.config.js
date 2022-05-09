module.exports = {
  chainWebpack: (config) => {
    config.optimization.minimize(false);
    config.optimization.splitChunks({
      name: true,
      chunks: "all",
      minSize: 20000, // 20k
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 5,
      automaticNameDelimiter: "-",
      cacheGroups: {
        libs: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: 5,
          chunks: "initial",
        },
        vue: {
          name: "chunk-vue",
          test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
          priority: 10,
          chunks: "initial",
        },
        elementui: {
          name: "chunk-elementui",
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          priority: 15,
          chunks: "initial",
        },
      },
    });
  },
};
