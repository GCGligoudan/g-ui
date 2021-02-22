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
      name: 'index',
      meta: {
        title: 'g-ui移动组件库',
      },
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/index',
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
    {
      path: '/button',
      name: 'button',
      component: () => import(/* webpackChunkName: 'button' */ './views/demo/button.vue'),
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import(/* webpackChunkName: 'checkbox' */ './views/demo/checkbox.vue'),
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import(/* webpackChunkName: 'radio' */ './views/demo/radio.vue'),
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import(/* webpackChunkName: 'loading' */ './views/demo/loading.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import(/* webpackChunkName: 'message' */ './views/demo/message.vue'),
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: () => import(/* webpackChunkName: 'messageBox' */ './views/demo/messageBox.vue'),
    },
    {
      path: '/validator',
      name: 'validator',
      component: () => import(/* webpackChunkName: 'validator' */ './views/demo/validator.vue'),
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
