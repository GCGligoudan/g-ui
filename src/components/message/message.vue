<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div :class="['messageContainer', `message-${type}`]"
      v-show="isMessageShow">
      <p>{{ message }}</p>
    </div>
  </transition>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class Message extends Vue {
  private type: string = '';
  private message: string = '';
  private isMessageShow: boolean = false;
  private duration: number = 2500;
  private created() {
    setTimeout(() => {
      this.isMessageShow = false;
    }, this.duration);
  }
  private handleAfterLeave() {
    this.$destroy();
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>
<style lang='less' scoped >
  .message-fade-enter-active, .message-fade-leave-active{
    transition: all 0.5s ease;
  }
  .message-fade-enter, .message-fade-leave-to{
    transform: translateY(-36px);
  }
  .message-default{
    background-color: #06AE56;
  }
  .message-error{
    background-color: #FA5151;
  }
  .messageContainer{
    width: 100%;
    height: 36px;
    position: fixed;
    top: 0px;
    z-index: 99;
    p{
      font-size: 14px;
      font-family: Source Han Sans CN;
      color: #fff;
      line-height: 36px;
      text-align: center;
    }
  }
</style>