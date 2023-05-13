import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAMap from "vue-amap";
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Video from "video.js";
import "video.js/dist/video-js.css";

Vue.prototype.$video = Video;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "your amap key",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});
// Vue.use(Antd);
// Vue.use(DatePicker);
// Vue.use(Button);
// Vue.use(Form);
// Vue.use(Table);
// Vue.use(Calendar);
// Vue.use(Carousel);
// Vue.component(Button.name, Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
