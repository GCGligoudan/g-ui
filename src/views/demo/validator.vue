<template>
  <div class="checkbox comp-page">
    <div>
      <p>基本使用方式：</p>
      <div class="comp-code">
        <highlight-code lang="html">
          &lt;input
            type="number"
            placeholder="请输入手机号"
            v-model="userPhone"
            v-checkParam.input="[userPhoneRequired, userPhoneValidate]"
          /&gt;
          &lt;Gbutton @click="validate()"&gt;提交&lt;/Gbutton&gt;
        </highlight-code>
      </div>
      <h3 class="comp-title">校验规则：</h3>
      <div class="comp-code">
        <highlight-code lang="javascript">
          const required = (message: string) => ({
            message,
            required: true,
          });

          export const mobile = (message: string) => ({
            message,
            pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
          });
        </highlight-code>
      </div>
      <h3 class="comp-title">校验方法：</h3>
      <div class="comp-code">
        <highlight-code lang="javascript">
          &lt;script&gt;
          export default {
            data(){
              return {
                userPhoneRequired: required("请输入手机号"),
                userPhoneValidate: mobile("请输入正确的手机号"),
              }
            },
            methods: {
              validate(){
                const validateResult = this.GValidate()
                console.log(validateResult) // 校验结果
              }
            }
          }
          &lt;/script&gt;
        </highlight-code>
      </div>
      <h3 class="comp-title" style="margin-bottom: 15px;">显示效果：</h3>
      <div>
        <div style="margin-bottom: 16px" ref="userPhoneInput">
          <input
            type="number"
            placeholder="请输入手机号"
            v-model="userPhone"
            v-checkParam.input="[userPhoneRequired, userPhoneValidate]"
          />
        </div>
        <Gbutton @click="validate()">提交</Gbutton>
      </div>
      <div class="comp-des">checkbox被选中的值：{{ value.join(",") }}</div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Mixins } from "vue-property-decorator";
import checkbox from "@/components/checkbox/checkbox.vue";
import Gbutton from "../../components/button/button.vue";
import { required, mobile, smsValidate } from "@/utils/rules";
import { ValidatorMixin } from "@/utils/validate";

@Component({
  components: {
    checkbox,
    Gbutton,
  },
})
export default class Checkbox extends Mixins(ValidatorMixin) {
  private userPhoneRequired = required("请输入手机号");
  private userPhoneValidate = mobile("请输入正确的手机号");
  private userVerifyCodeRequired = required("请填写验证码");
  private userVerifyCodeValidate = smsValidate("请输入正确的验证码");
  private userPhone: number | null = null;
  private verifyCode: number | null = null;
  private value: Array<string | number> = ["A", "B"];
  private selectOptions = [
    {
      label: "选项A",
      value: "A",
    },
    {
      label: "选项B",
      value: "B",
    },
    {
      label: "选项C",
      value: "C",
    },
    {
      label: "选项D",
      value: "D",
    },
  ];
  private validate() {
    this.GValidate();
  }
}
</script>
<style lang='less' scoped >
</style>