<template>
  <div>
    <div class="radio">
      <label class="ui-radio ignore" :class="{'checked': model == value, 'disabled': disabled}">
        <span class="ignore"></span>
        <input 
          type="radio" 
          ref="radio" 
          :value="value" 
          @click="updateVal" 
          :disabled="disabled"
        >
      </label>
    </div>
  <span><slot></slot></span>
  </div>
</template>
<script lang="ts">
import { Component, Vue , Prop, Model } from 'vue-property-decorator';

@Component({})
export default class Radio extends Vue {
  @Model('change', { type: [String, Number] }) private readonly model!: string | number;
  @Prop() private value!: string | number;
  @Prop() private disabled!: boolean;
  @Prop() private checked!: boolean; // 当前组件checked属性，布尔值
  private mounted() {
    if ( this.checked ) { // 如果当前组件默认选中
      this.updateVal();
    }
  }
  private updateVal() {
    // 将当前input radio的值传递出去
    this.$emit('change', (this.$refs.radio as HTMLInputElement).value);
  }
}
</script>
<style lang="less" scoped>
.radio{
  display: inline-block;
  margin: 3px 0;
  margin-right: 12px;
  label.ignore{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #3AAF69;
    display: inline-block;
    position: relative;
    input[type=radio]{
      opacity: 0;
      margin: 0;
    }
  }
  .ui-radio.disabled{
    border-color: #ccc;
  }
  .ui-radio span.ignore{
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -6px 0 0 -6px;
    background-color: #3AAF69;
    transition: all .4s ease;
    opacity: 0;
    transform: scale(0);
  }
  .ui-radio.disabled span{
    background-color: #ccc;
  }
  .ui-radio.checked span{
    opacity: 1;
    transform: scale(1);
  }
}
</style>
