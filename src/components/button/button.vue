<template>
  <button
    class="g-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :class="[
      buttonType ? 'g-button-' + buttonType : '',
      buttonSize ? 'g-button-' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
      }
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private type!: string;
  @Prop() private size!: string;
  @Prop() private disabled!: boolean;
  get buttonType() {
    return [
      'primary',
      'success',
      'warning',
      'danger',
    ].indexOf(this.type) > -1 ? this.type : 'primary';
  }
  get buttonSize() {
    return [
      'medium',
      'small',
      'large',
    ].indexOf(this.size) > -1 ? this.size : 'medium';
  }
  get buttonDisabled() {
    return (this.disabled !== undefined && this.disabled !== false);
  }
  private handleClick(evt: any) {
    this.$emit('click', evt);
  }
}
</script>

<style lang="less">
  .g-button{
    font-size: 1em;
    display: inline-block;
    padding: 5px 8px;
    cursor: pointer;
    // line-height: 1;
    // text-align: center;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0px;
    font-weight: 500;
    color: #ffffff;
    position: relative;
    border-radius: 4px;
  }
  .is-disabled{
    opacity: 0.6;
  }
  .g-button-small{
    padding: 3px 6px;
  }
  .g-button-large{
    padding: 10px 15px;
  }
  .g-button:focus{
    border: none;
  }
  .g-button-primary{
    background-color: #2A648e;
  }
  .g-button-success{
    background-color: #52ecab;
  }
  .g-button-warning{
    background-color: #ffce28;
  }
  .g-button-danger{
    background-color: #f56c6c;
  }
</style>
