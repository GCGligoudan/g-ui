<template>
  <div class="checkbox comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <highlight-code lang="html">
          &lt;template&gt;
            &lt;checkbox
              v-model='value'
              :options='selectOptions'
            &gt;
            &lt;/checkbox&gt;
          &lt;/template&gt;
        </highlight-code>
      </div>
      <div class="comp-code">
        <highlight-code lang="javascript">
          &lt;script&gt;
            export default {
              data(){
                return {
                  value: ['A', 'B']
                  selectOptions: [
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
                  ]
                }
              },
            }
          &lt;/script&gt;
        </highlight-code>
      </div>
      <checkbox v-model="value" :options="selectOptions"></checkbox>
      <div class="comp-des">checkbox被选中的值：{{value.join(',')}}</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import checkbox from "@/components/checkbox/checkbox.vue";

@Component({
  components: {
    checkbox,
  },
})
export default class Checkbox extends Vue {
private value: Array<string|number> = ['A', 'B'];
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