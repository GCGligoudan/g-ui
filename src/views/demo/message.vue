<template>
  <div class="message comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <highlight-code lang="javascript">
          this.$GMsg.show({
            message: 'default',
            type: 'default',
          });
        </highlight-code>
      </div>
      <div>
        <Gbutton @click="showMessage()">message</Gbutton>
        <div class="comp-des">type参数支持default、error，不写默认为default</div>
      </div>
      <div>
        <Gbutton type="danger" @click="showErrorMessage()">error message</Gbutton>
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
  private showMessage() {
    this.$GMsg.show({
      message: 'default',
      type: 'default',
    });
  }
  private showErrorMessage() {
    this.$GMsg.show({
      message: 'ERROR',
      type: 'error',
    });
  }
}
</script>
<style lang='less' scoped >
button{
  margin: 5px;
}
</style>