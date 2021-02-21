<template>
  <div class="g-checkboxlist">
    <div class="g-checkbox" v-for="(option, index) in options" :key="index">
      <label>
        <input 
          class="g-checkbox-input"
          type="checkbox"
          v-model="currentValue"
          :value="option.value"
        >
        <span>{{option.label}}</span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model, Watch } from 'vue-property-decorator';
@Component({})
export default class Checkbox extends Vue {
  @Model('change', { type: Array }) private readonly model!: Array<string|number>;
  @Prop() private value!: string[];
  @Prop() private options!: Array<string | object>;
  private currentValue: Array<string|number> = this.model;
  @Watch('currentValue')
  private onCurrentValueChanged(val: Array<string|number>) {
    this.$emit('change', this.currentValue);
  }
}
</script>
<style lang="less" scoped>
.g-checkboxlist{
  display: block;
  .g-checkbox{
    margin: 0.2em 0;
  }
  // easy inline labels
  input[type=checkbox], label {
    // dont highlight text when double clicking
    user-select: none;
  }
  input[type=checkbox] {
    position: relative;
    border: 1px solid #3aaf69;
    margin: 0 0.2em 0 0;
    padding: 0;
    text-align: center;
    width: 16px;
    height: 16px;
    line-height: 1;
    background: white;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border-radius: 2px;
    color: rgba(white, 0);
    transition: all 0.2s ease;
    // Better Font Rendering
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:before {
      // checkmark
      content: "✔";
    }
    &:focus {
      outline: 0;
      border: 1px solid darken(#3aaf69, 5%);
    }
    &:active {
      outline: none;
    }
    &:hover {
      outline: none;
    }
    &:checked {
      background: #3aaf69;
      // the color is what hides the checkmark
      color: rgba(white, 1);
    }
  }
}
</style>
