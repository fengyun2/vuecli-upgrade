import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {};
const files = require.context("./modules", true, /^\.\/(\w*\/)+index\.js$/);

files.keys().forEach((file) => {
  const moduleName = file.replace(/(^\.\/)|(\/index\.js$)/g, "");
  modules[moduleName] = files(file).default || files(file);
});

export default new Vuex.Store({
  modules,
});
