import Vue from 'vue';
import messageBox from './messageBox.vue';

interface MessageBoxInstance extends Vue {
  title: string;
  content: string;
  showCancelButton: boolean;
  cancelButtonText: string;
  confirmButtonText: string;
  isShowMessageBox: boolean;
  showMsgBox: () => Promise<string>;
}

interface IOptions {
  title: string;
  content: string;
  showCancelButton: boolean;
}

const cancelBtnText = '取消';
const confirmBtnText = '确定';
let instance: MessageBoxInstance;
const MessageBoxConstructor = Vue.extend(messageBox);

const MessageBox = {
  showMsgBox(options: IOptions) {
    // 每次都生成一个新的messageBox组件
    instance = new MessageBoxConstructor({
      el: document.createElement('div'),
    });

    instance.title = options.title;
    instance.content = options.content;
    instance.cancelButtonText = cancelBtnText;
    instance.confirmButtonText = confirmBtnText;
    instance.showCancelButton = options.showCancelButton;

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.isShowMessageBox = true;
    });

    return instance.showMsgBox()
      .then((val: string) => {
        return Promise.resolve(val);
      }).catch((err: string) => {
        return Promise.reject(err);
      });
  },
};

export default {
  install: () => {
    Vue.prototype.$GMessage = MessageBox;
  },
};
