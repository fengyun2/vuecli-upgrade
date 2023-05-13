import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/about2",
      name: "about2",
      component: () =>
        import(/* webpackChunkName: "about2" */ "./views/About2.vue"),
    },
    {
      path: "/about3",
      name: "about3",
      component: () =>
        import(/* webpackChunkName: "about3" */ "./views/About3.vue"),
    },
    {
      path: "/about4",
      name: "about4",
      component: () =>
        import(/* webpackChunkName: "about4" */ "./views/About4.vue"),
    },
    {
      path: "/about5",
      name: "about5",
      component: () =>
        import(/* webpackChunkName: "about5" */ "./views/About5.vue"),
    },
    {
      path: "/about6",
      name: "about6",
      component: () =>
        import(/* webpackChunkName: "about6" */ "./views/About6.vue"),
    },
    {
      path: "/about7",
      name: "about7",
      component: () =>
        import(/* webpackChunkName: "about7" */ "./views/About7.vue"),
    },
    {
      path: "/about8",
      name: "about8",
      component: () =>
        import(/* webpackChunkName: "about8" */ "./views/About8.vue"),
    },
    {
      path: "/about9",
      name: "about9",
      component: () =>
        import(/* webpackChunkName: "about9" */ "./views/About9.vue"),
    },
  ],
});
