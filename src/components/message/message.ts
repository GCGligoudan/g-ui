import Vue from 'vue';
import message from './message.vue';

interface IMessage extends Vue {
  message: string;
  type: string;
  isMessageShow: boolean;
}
interface IOptions {
  message: string;
  type?: string;
}
const MessageConstructor = Vue.extend(message);
let instance: IMessage;

const showMessage = {
  show(options: IOptions) {
    if (instance) {
      instance.isMessageShow = false;
    }

    instance = new MessageConstructor({
      el: document.createElement('div'),
    });

    if (instance.isMessageShow) { return; }

    instance.message = options.message;
    instance.type = options.type || 'default';

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.isMessageShow = true;
    });
  },
};

export default {
  install: () => {
    Vue.prototype.$GMsg = showMessage;
  },
};
