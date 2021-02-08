<template>
  <div class="svg-demo">
    <Gbutton @click="loading()">loading</Gbutton>
    <br>
    <br>
    <Gbutton @click="messagebox()">messageBox</Gbutton>
    <br>
    <br>
    <Gbutton @click="closeLoading()">closeLoading</Gbutton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gbutton from '@/components/button/button.vue';

@Component({
  components: {
    Gbutton,
  },
})
export default class LoadingDemo extends Vue {
  private loading() {
    this.$GLoading.open('加载中...');
    setTimeout(() => {
      this.$GLoading.close();
    }, 3000);
  }
  private closeLoading() {
    this.$GLoading.close();
  }
  private messagebox() {
    this.$GMessage.showMsgBox({
      title: 'warning',
      content: '测试文字',
      showCancelButton: true,
    }).then(() => {
      // console.log('queding');
    }).catch(() => {
      // console.log('quxiao');
    });
  }
}
</script>

<style lang="less">

</style>