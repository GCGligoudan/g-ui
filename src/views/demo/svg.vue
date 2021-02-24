<template>
  <div class="button comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <!-- Code Block -->
        <highlight-code lang="html">
          &lt;svg-icon iconClass="close"&gt;button&lt;/svg-icon&gt;

          &lt;svg-icon iconClass="user"&gt;button&lt;/svg-icon&gt;

          &lt;svg-icon iconClass="password"&gt;button&lt;/svg-icon&gt;

          &lt;svg-icon iconClass="email"&gt;button&lt;/svg-icon&gt;
        </highlight-code>
      </div>
    </div>
    <div>
      <h3 class="comp-title">效果：</h3>
      <ul>
        <li>
          <svg-icon iconClass="close"></svg-icon>
        </li>
        <li v-for="(name, index) in svgName" :key="index">
          <svg-icon :iconClass="name"></svg-icon>
        </li>
      </ul>
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
  private svgName: string[] = ['user', 'password', 'email'];
}
</script>
<style lang='less' scoped >
  ul li{
    margin: 6px 0;
  }
</style>