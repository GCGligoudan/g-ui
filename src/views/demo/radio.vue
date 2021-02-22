<template>
  <div class="checkbox comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <highlight-code lang="html">
          &lt;Gradio
            v-model="val"
            value="cat"
            :checked="isChecked"
          &gt;
            猫
          &lt;/Gradio&gt;
          &lt;Gradio
            v-model="val"
            value="dog"
            :disabled="isDisabled"
          &gt;
            狗（禁选）
          &lt;/Gradio&gt;
          &lt;Gradio
            v-model="val" 
            value="rabbit"
          &gt;
            兔子
          &lt;/Gradio&gt;
        </highlight-code>
      </div>
      <div class="comp-code">
        <highlight-code lang="javascript">
          &lt;script&gt;
            export default {
              data(){
                return {
                  val: '',
                  isChecked: true,
                  isDisabled: true,
                }
              },
            }
          &lt;/script&gt;
        </highlight-code>
      </div>
      <div>
        <Gradio v-model="val" value="cat" :checked="isChecked">猫</Gradio>
        <Gradio v-model="val" value="dog" :disabled="isDisabled">狗（禁选）</Gradio>
        <Gradio v-model="val" value="rabbit">兔子</Gradio>
      </div>
      <div>
        <h3 class="comp-title">参数说明：</h3>
        <div class="comp-des">checkbox被选中的值：{{val}}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Gradio from '@/components/radio/radio.vue';

@Component({
  components: {
    Gradio,
  },
})
export default class Checkbox extends Vue {
  private val: string = '';
  private isChecked: boolean = true;
  private isDisabled: boolean = true;
  private selectOptions = [
    {
      label: '选项A',
      value: 'A',
    },
    {
      label: '选项B',
      value: 'B',
    },
    {
      label: '选项C',
      value: 'C',
    },
    {
      label: '选项D',
      value: 'D',
    },
  ];
}
</script>
<style lang='less' scoped >

</style>