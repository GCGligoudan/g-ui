<template>
  <div class="loading comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-des" v-text="`this.$GMessage.showMsgBox()`"></div>
      <div>
        <Gbutton @click="messagebox()">messagebox</Gbutton>
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
    }).then(() => {
      console.log('confirm');
    }).catch(() => {
      console.log('cancel');
    });
  }
}
</script>
<style lang='less' scoped >
button{
  margin: 5px;
}
</style>