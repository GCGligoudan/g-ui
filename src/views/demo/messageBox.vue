<template>
  <div class="loading comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <highlight-code lang="javascript">
          this.$GMessage.showMsgBox({
            title: 'warning',
            content: '测试文字',
            showCancelButton: true,
            cancelButtonText: 'cancel',
            confirmButtonText: 'confirm'
          }).then(() => {
            this.$GMsg.show({
              message: 'confirm',
            });
          }).catch(() => {
            this.$GMsg.show({
              message: 'cancel',
              type: 'error',
            });
          });
        </highlight-code>
      </div>
      <div>
        <Gbutton @click="messagebox()">messagebox</Gbutton>
        <div class="comp-des">提示：cancelButtonText、confirmButtonText可以不写，默认为“取消”、“确定”</div>
        <div class="comp-des">用户操作之后，支持then/catch进行后续异步操作</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Gbutton from "@/components/button/button.vue";

@Component({
  components: {
    Gbutton,
  },
})
export default class Loading extends Vue {
  private messagebox() {
    this.$GMessage.showMsgBox({
      title: 'warning',
      content: '测试文字',
      showCancelButton: true,
      cancelButtonText: 'cancel',
      confirmButtonText: 'confirm',
    }).then(() => {
      this.$GMsg.show({
        message: 'confirm',
      });
    }).catch(() => {
      this.$GMsg.show({
        message: 'cancel',
        type: 'error',
      });
    });
  }
}
</script>
<style lang='less' scoped >
button{
  margin: 5px;
}
</style>