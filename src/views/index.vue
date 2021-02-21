<template>
  <div class="home">
    <h3>g-ui</h3>
    <p>轻量、易用的移动端组件库</p>
    <ul>
      <li>
        <router-link to="/button">
          button <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/checkbox">
          checkbox
          <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/loading">
          loading
          <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/message">
          message
          <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/messageBox">
          messageBox
          <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/radio">
          radio <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/svg">
          svg <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
      <li>
        <router-link to="/validator">
          validator
          <svg-icon class="rightArrow" iconClass="rightArrow"></svg-icon>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class About extends Vue {}
</script>
<style lang="less" scoped>
.home {
  text-align: center;
}
h3 {
  font-size: 36px;
  color: aquamarine;
  padding: 20px 0;
}
ul {
  border-top: 1px solid #eee;
  margin-top: 50px;
}
ul li {
  border-bottom: 1px solid #eee;
}
ul li a{
  color: #222;
  position: relative;
  padding: 10px 0;
  display: block;
}
.rightArrow {
  position: absolute;
  right: 20px;
}
</style>
