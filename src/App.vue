<template>
  <div id="app">
    <transition mode="out-in" name="page-fade">
      <!-- <router-view /> -->
      <!-- <keep-alive :exclude="['PersonalQuality']">
        <router-view />
      </keep-alive> -->
      <keep-alive :include="aliveComponetStack">
        <router-view :key="$route.path"/>
      </keep-alive>
    </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {
  private aliveComponetStack: string[] = [];
  @Watch('$route')
  private onRouterChange(to: any, from: any) {
    const toComponentName = to.matched[0] && to.matched[0].components.default.name;
    const fromComponentName = from.matched[0] && from.matched[0].components.default.name;
    if (this.aliveComponetStack.indexOf(toComponentName) === -1) { // 当前栈中没有to的component，表示前进
      this.aliveComponetStack.push(toComponentName);
    } else { // 当前栈中有to的component，表示是后退
      if (this.aliveComponetStack.indexOf(fromComponentName) !== -1) {
        this.aliveComponetStack.splice(this.aliveComponetStack.indexOf(fromComponentName), 1);
      }
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  >div{
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 页面进入时动画
.page-fade-enter-active {
  transition: all .3s ease;
}
// 页面离开时时动画
.page-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.page-fade-enter, .page-fade-leave-to {
  // transform: translateZ(10px);
  opacity: 0;
}
</style>
