<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  private name: string =  'SvgIcon';
  @Prop() private iconClass!: string;
  @Prop() private className!: string;
  get iconName() {
    return `#icon-${this.iconClass}`;
  }
  get svgClass() {
    if (this.className) {
      return 'svg-icon ' + this.className;
    } else {
      return 'svg-icon';
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>