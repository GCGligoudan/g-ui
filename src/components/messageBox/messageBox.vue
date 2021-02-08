<template>
  <transition name="message-bounce" mode="out-in">
    <div class="message-box" v-show="isShowMessageBox">
      <div class="mask"></div>
      <div class="message-content">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
        <div class="btn-group">
          <button class="btn btn-cancel" @click="cancel" v-show="showCancelButton">{{ cancelButtonText }}</button>
          <button class="btn btn-confirm" @click="confirm" v-show="showConfirmButton">{{ confirmButtonText }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class MessageBox extends Vue {
  private title: string = '';
  private showCancelButton: boolean = false;
  private showConfirmButton: boolean = true;
  private cancelButtonText: string = '';
  private confirmButtonText: string = '';
  private content: string = '';
  private isShowMessageBox: boolean = true;
  private resolve!: (s: string) => void;
  private reject!: (s: string) => void;
  private promise!: Promise<string>; // 保存promise对象
  private showMsgBox() { // 弹出messageBox,并创建promise对象
    this.isShowMessageBox = true;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });

    return this.promise; // 返回promise对象
  }
  private confirm() { // 确定，将promise断定为resolve状态
    this.isShowMessageBox = false;
    this.resolve('confirm');
    this.remove();
  }
  private cancel() { // 取消,将promise断定为reject状态
    this.isShowMessageBox = false;
    this.reject('cancel');
    this.remove();
  }
  private remove() {
    setTimeout(() => {
      this.destroy();
    }, 30);
  }
  private destroy() {
    this.$destroy();
    document.body.removeChild(this.$el);
  }
}
</script>

<style lang="less" scoped>
.message-bounce-enter-active {
  transition: all .6s ease;
}
.message-bounce-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.message-bounce-enter, .message-bounce-leave-to {
  transform: translateZ(10px);
  opacity: 0;
}
.message-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .message-content {
    display: block;
    padding-top: 5px;
    width: 55%;
    position: relative;
    top: -50px;
    text-align: center;
    border-radius: 10px;
    background: #fff;
    z-index: 50001;
    .title {
      font-weight: 600;
      margin: 10px 0;
      margin-bottom: 0;
    }
    .content {
      font-size: 1em;
      line-height: 1.5em;
      color: #555;
      padding: 5px 10px;
      border-bottom: 1px solid #ddd;
    }
    .btn-group {
      padding: 10px;
      display: flex;
      flex-direction: row;
      .btn{
        flex: 1;
        line-height: 1.6em;
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
        background-color: #fff;
        font-size: 1em;
      }
      .btn-cancel {
        border-right: 1px solid #ddd;
      }
      .btn-confirm{
        color: #26a2ff;
      }
    }
  }
}
</style>