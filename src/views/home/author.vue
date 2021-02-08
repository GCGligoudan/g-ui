<template>
  <div></div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Author extends Vue {
  private created() {
    this.$GLoading.open('登录中...');
  }
  private beforeDestroy() {
    this.$GLoading.close();
  }
}
</script>
<style lang='less' scoped >
</style>