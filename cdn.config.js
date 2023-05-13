module.exports = {
  // 是否使用cdn
  useCDN: true,
  // key是'包名', value是静态资源引入后全局的名称 import Vue from 'vue'
  externals: {
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter",
    axios: "axios",
    echarts: "echarts",
    // 'echarts-gl': 'echartsGl',
    // 必须是ELEMENT，否则会报‘elementUI is not defined’
    "element-ui": "ELEMENT",
    html2canvas: "html2canvas",
  },
  CDN: {
    // CDN链接地址：https://www.jsdelivr.com/
    css: [
      "https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/theme-chalk/index.min.css",
    ],
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.7.14",
      "https://cdn.jsdelivr.net/npm/vue-router@3.6.5/dist/vue-router.min.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.6.2/dist/vuex.min.js",
      "https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js",
      // 'https://cdn.jsdelivr.net/npm/echarts-gl@2.0.9/dist/echarts-gl.min.js',
      "https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.min.js",
      "https://cdn.jsdelivr.net/npm/axios@1.4.0/dist/axios.min.js",
      "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js",
    ],
  },
};
