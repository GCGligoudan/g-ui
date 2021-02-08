import Vue from 'vue';
import Router from 'vue-router';
import { ModalHelper } from '@/utils/tools';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'auth',
      meta: {
        title: '用户登录',
      },
      component: () => import('@/views/home/index.vue'),
    },
    {
      path: '/svgDemo',
      name: 'svgDemo',
      component: () => import('./views/svgDemo.vue'),
    },
    {
      path: '/loadingDemo',
      name: 'loadingDemo',
      component: () => import('./views/loadingDemo.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ './views/About.vue'),
    },
  ],
});

const DEFAULT_TITLE = 'g-ui移动组件库';
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  ModalHelper.beforeClose();
  next();
});

export default router;
