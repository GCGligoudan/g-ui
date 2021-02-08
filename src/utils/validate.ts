import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

interface IvNode extends VNode {
  context?: IVue;
}
interface IVue extends Vue {
  submit?: () => void;
  _uid?: number;
}

@Component({})
export class ValidatorMixin extends Vue {
  public GValidate(validateEl?: HTMLElement) {
    let elements = this.$el.querySelectorAll('.v-check');
    if ( validateEl ) {
      elements = validateEl.querySelectorAll('.v-check');
    }

    const evObj = document.createEvent('Event');
    evObj.initEvent('blur', true, true);

    if (elements) {
      for (const element of elements) {
        element.dispatchEvent(evObj);
      }
    }

    let errorInputs = this.$el.querySelectorAll('.input-error');
    if (validateEl) {
      errorInputs = validateEl.querySelectorAll('.input-error');
    }
    if (errorInputs.length !== 0) {
      return false;
    } else {
      return true;
    }
  }
}

export default {
  install: () => {
    // 注册一个全局自定义指令 `v-checkParam`
    Vue.directive('checkParam', {
      inserted: (el, binding, vNode) => {
        const InputEl = el as HTMLInputElement;
        InputEl.classList.add('v-check');
        InputEl.addEventListener('blur', (event) => {
          resetError(InputEl);
          for (const rule of binding.value) {
            const { required, min, max, message, pattern } = rule;
            if ( !!required && !InputEl.value ) {
              validateError(InputEl, message);
              break;
            }
            if ( min && InputEl.value.length < min ) {
              validateError(InputEl, message);
              break;
            }
            if ( max && InputEl.value.length > max ) {
              validateError(InputEl, message);
              break;
            }
            if ( pattern && !pattern.test(InputEl.value) ) {
              validateError(InputEl, message);
              break;
            }
            if ( rule && typeof rule === 'function' ) {
              rule(vNode.context, InputEl.value, validateError, InputEl);
              break;
            }
          }
        });
      },
    });

    // 注册一个全局自定义指令 `v-checkSubmit`
    Vue.directive('checkSubmit', {
      inserted: (el, binding, vNode: IvNode) => { // 当被绑定的元素插入到 DOM 中时
        el.addEventListener('click', (event) => {
          const elements = vNode.context && vNode.context.$el.querySelectorAll('.v-check');
          const evObj = document.createEvent('Event');
          evObj.initEvent('blur', true, true);
          if (elements) {
            for (const element of elements) {
              element.dispatchEvent(evObj);
            }
          }
          const errorInputs = vNode.context && vNode.context.$el.querySelectorAll('.input-error');
          if (errorInputs && errorInputs.length === 0) {
            if (vNode.context && vNode.context.submit) {
              vNode.context.submit(); // vue实例中的 methods
            }
          }
        });
      },
    });
  },
};

const validateError = (el: HTMLElement, errorMsg: string) => {
  if (Array.prototype.includes.call(el.classList, 'input-error')) {
    return;
  } else {
    const errorNode = document.createElement('p');
    errorNode.className = 'error-tips';
    errorNode.textContent = errorMsg;
    if (el.parentNode) {
      el.parentNode.appendChild(errorNode);
    }
    el.className += ' input-error';
  }
};

/**
 * 重置当前节点样式
 * @param el: HTMLElement
 */
const resetError = (el: HTMLElement) => {
  el.className = el.className.replace('input-error', '').trim();
  if ( el.parentNode ) {
    const ErrorNode = el.parentNode.querySelector('.error-tips');
    if (ErrorNode) {
      el.parentNode.removeChild(ErrorNode);
    }
  }
};
