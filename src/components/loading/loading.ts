import Vue from 'vue';
import loading from './loading.vue';

interface LoadingInstance extends Vue {
  visible: boolean;
  loadingMsg: string;
}

let instance: LoadingInstance;
const LoadingConstructor = Vue.extend(loading);

const Loading = {
  open(options?: string) {
    if (!instance) {
      instance = new LoadingConstructor({
        el: document.createElement('div'),
      });
    }
    if (instance.visible) { return; }
    instance.loadingMsg = options || '加载中...';

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },
  close() {
    if (instance) {
      instance.visible = false;
    }
  },
};

export default {
  install: () => {
    Vue.prototype.$GLoading = Loading;
  },
};
