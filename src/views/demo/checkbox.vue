<template>
  <div class="button comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-des" v-text="`
        <checkbox v-model='value' :options='selectOptions'></checkbox>
        <script>
          ...
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
        </script>
      `"></div>
      <checkbox v-model="value" :options="selectOptions"></checkbox>
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
export default class Author extends Vue {
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
button{
  margin: 5px;
}
</style>