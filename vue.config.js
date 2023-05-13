const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const browserslistToEsbuild = require("browserslist-to-esbuild");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// cdn相关配置
const cdnConfig = require("./cdn.config.js");

const isPro = process.env.NODE_ENV === "production";
const useEsbuildMinify = true;

module.exports = {
  productionSourceMap: false, // 生产环境关闭sourcemap
  lintOnSave: !isPro, // 生产环境关闭eslint
  chainWebpack: (config) => {
    // 使用 esbuild 编译 js 文件
    const rule = config.module.rule("js");
    // 清理自带的 babel-loader
    rule.uses.clear();
    // 添加 esbuild-loader
    rule.use("esbuild-loader").loader("esbuild-loader").options({
      loader: "jsx",
      jsxFactory: "vue2JsxEsbuild",
      target: "es2015",
    });

    if (isPro) {
      config.plugins.delete("prefetch");
      config.plugins.delete("preload");
      config.output.pathinfo(false);

      // cdn相关配置
      config.plugin("html").tap((args) => {
        args[0].CDN = cdnConfig.useCDN ? cdnConfig.CDN : null;
        args[0].inject = "body";
        return args;
      });

      config.optimization.runtimeChunk(true).splitChunks({
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100,
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60,
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true,
          },
          runtimeChunk: {
            name: "manifest",
          },
        },
      });
      if (useEsbuildMinify) {
        // 优化js压缩
        config.optimization.minimizer("terser").tap((args) => {
          args[0].minify = TerserPlugin.esbuildMinify;
          args[0].terserOptions = {
            legalComments: "none",
            target: browserslistToEsbuild(),
          };
          return args;
        });
        // 优化压缩css
        config.optimization.minimizer("css").tap((args) => {
          args[0].minify = CssMinimizerPlugin.esbuildMinify;
          args[0].minimizerOptions = {
            legalComments: "none",
            target: browserslistToEsbuild(),
          };
          return args;
        });
      }
    }
  },
  configureWebpack: (config) => {
    config.devtool = !isPro ? "eval-cheap-module-source-map" : false;
    config.cache = isPro
      ? false
      : {
          type: "filesystem",
          allowCollectingMemory: true,
        };
    // 如果一些第三方模块没有AMD/CommonJS规范版本，可以使用 noParse 来标识这个模块，这样 Webpack 会引入这些模块，但是不进行转化和解析，从而提升 Webpack 的构建性能。
    config.module.noParse =
      /^(vue|vue-router|vuex|vuex-router-sync|lodash|echarts|echarts-gl|axios|element-ui|moment|vue-amap|video.js|html2canvas|ant-design-vue|antd|react|react-router|redux|vanilla-jsoneditor)$/;
    // if (isPro && useEsbuildMinify) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        vue2JsxEsbuild: ["vue2-jsx-esbuild", "default"],
      })
    );
    // }

    // 生产环境开启cdn
    if (isPro) {
      config.externals = cdnConfig.useCDN ? cdnConfig.externals : {};
    }
  },
};
