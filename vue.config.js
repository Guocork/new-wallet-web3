const { defineConfig } = require('@vue/cli-service');
const { VantResolver } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');



module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport.default({ resolvers: [VantResolver()] }),
      Components.default({ resolvers: [VantResolver()] }),
      new NodePolyfillPlugin()
    ],
  },
})
