import Vue from "vue";
import VueRouter from "vue-router";
// import Foo from "../components/Foo.vue";
import Bar from "../components/Bar.vue";
import Baz from "../components/Baz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/foo",
    name: "foo",
    component: () =>
      import(/* webpackChunkName: "Foo-chunka" */ "../components/Foo.vue"),
    children: [
      {
        path: "bar",
        name: "bar",
        component: Bar,
      },
    ],
    meta: {
      auth: true,
    },
  },
  {
    path: "/baz",
    name: "baz",
    component: Baz,
    meta: {
      cxt: 12345,
    },
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// 全局守卫
router.beforeEach((to, from, next) => {
  console.log("global before each");
  next();
});
router.afterEach(() => {
  console.log("global after each");
});
router.beforeResolve((to, from, next) => {
  console.log("global before resolve");
  next();
});

export default router;
