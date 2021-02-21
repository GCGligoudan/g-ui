<template>
  <div class="button comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-des" v-text="`<Gbutton>default</Gbutton>`"></div>
    </div>
    <div>
      <h3>颜色：</h3>
      <Gbutton>default</Gbutton>
      <Gbutton type="success">success</Gbutton>
      <Gbutton type="warning">warning</Gbutton>
      <Gbutton type="danger">danger</Gbutton>
      <div class="comp-des" v-text="`type属性值设置为：default(默认)、success、warning、danger`"></div>
    </div>
    <div>
      <h3>大小：</h3>
      <Gbutton size="medium">medium</Gbutton>
      <Gbutton size="small">small</Gbutton>
      <Gbutton size="large">large</Gbutton>
      <div class="comp-des" v-text="`size属性值设置为：medium（默认）、small、large`"></div>
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
export default class Author extends Vue {
  // private created() {
  //   this.$GLoading.open('登录中...');
  // }
  // private beforeDestroy() {
  //   this.$GLoading.close();
  // }
}
</script>
<style lang='less' scoped >
button{
  margin: 5px;
}
</style>