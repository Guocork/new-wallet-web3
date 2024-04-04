import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', redirect: '/HomePage' },
  {
    path: "/HomePage",
    component: () => import('../page/HomePage.vue')
  },
  {
    path: "/Transaction",
    component: () => import('../page/Transaction.vue')
  },
  {
    path: "/Mine",
    component: () => import('../page/Mine.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
