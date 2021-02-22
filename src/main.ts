import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueI18n from 'vue-i18n';
import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages';
import 'highlight.js/styles/default.css';
import messages from './lang/locale';
import '@/common.less';
import '@/icons'; // svg

import Loading from '@/components/loading/loading.ts';
import MessageBox from '@/components/messageBox/messageBox.ts';
import Message from '@/components/message/message.ts';
import validator from '@/utils/validate';
Vue.use(Loading);
Vue.use(MessageBox);
Vue.use(Message);
Vue.use(validator);

Vue.use(VueHighlightJS);

Vue.config.productionTip = false;
Vue.config.errorHandler = (err, vm, info) => {
  console.log(`Error: ${err.toString()}\nInfo: ${info}`);
};

Vue.use(VueI18n);
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
