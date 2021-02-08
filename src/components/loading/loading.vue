<template>
  <transition name="loading-bounce" mode="out-in">
    <div class="loading-box" v-show="visible">
      <!-- <div class="loading-mask"></div> -->
      <div class="loading-content">
        <div class="loading-icon">
          <svg-icon iconClass="loading"></svg-icon>
        </div>
        <div class="loading-text" v-if="loadingMsg">{{loadingMsg}}</div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({})
export default class Loading extends Vue {
  private visible: boolean = false;
  private loadingMsg: string = '';
}
</script>
<style lang='less' scoped>
.loading-bounce-enter-active {
  transition: all .4s ease;
}
.loading-bounce-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.loading-bounce-enter, .loading-bounce-leave-to {
  transform: translateZ(10px);
  opacity: 0;
}
.loading-box{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999999;
  // background-color: rgba(48, 65, 86, 0.2);
  background-color: transparent;
  .loading-content {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .loading-icon{
      font-size: 150px;
    }
  }
}
</style>