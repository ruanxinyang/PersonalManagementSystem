import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const   routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
          path: '/index',
          name: 'index',
          meta: {
              title: '系统首页',
              permiss: '0',
          },
          component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue'),
      },
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
NProgress.inc(0.1)
NProgress.configure({ easing: 'ease', speed: 100, showSpinner: false})
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
