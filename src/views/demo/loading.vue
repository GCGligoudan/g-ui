<template>
  <div class="loading comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <!-- Code Block -->
        <highlight-code lang="javascript">
          this.$GLoading.open('加载中')
        </highlight-code>
      </div>
      <div>
        <Gbutton @click="loading()">loading</Gbutton>
      </div>
    </div>
    <div>
      <h3 class="comp-title">关闭：</h3>
      <div class="comp-code">
        <!-- Code Block -->
        <highlight-code lang="javascript">
          this.$GLoading.close()
        </highlight-code>
      </div>
      <!-- <div>
        <Gbutton @click="closeLoading()">关闭loading</Gbutton>
      </div> -->
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
  private loading() {
    this.$GLoading.open('加载中');
    setTimeout(() => {
      this.$GLoading.close();
    }, 5000);
  }
  private closeLoading() {
    this.$GLoading.close();
  }
}
</script>
<style lang='less' scoped >
button{
  margin: 5px;
}
</style>