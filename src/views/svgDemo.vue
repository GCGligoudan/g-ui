<template>
  <div class="svg-demo">
    <ul>
      <li v-for="(name, index) in svgName" :key="index">
        <svg-icon :iconClass="name"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
export default class SvgDemo extends Vue {
  private svgName: string[] = ['user', 'password', 'email'];
}
</script>

<style lang="less">
.svg-demo {
  text-align: center;
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
  }
}
</style>