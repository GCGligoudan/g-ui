<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Gbutton>默认按钮</Gbutton>
    <br>
    <Gbutton type="success">成功按钮</Gbutton>
    <br>
    <Gbutton size="small" type="warning">警告按钮</Gbutton>
    <br>
    <Gbutton size="large" type="danger" disabled>危险按钮</Gbutton>
    <br>
    <Gbutton disabled>禁止按钮</Gbutton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Gbutton from '../components/button/button.vue';

@Component({
  components: {
    Gbutton,
  },
})

export default class About extends Vue {
}
</script>
<style lang="less">
.g-button{
  margin-bottom: 5px;
}
</style>


