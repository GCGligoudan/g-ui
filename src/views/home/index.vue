<template>
  <div>
    <Gbutton @click="queryPlanList()">用户第一次进入</Gbutton>
    <br>
    <Gbutton @click="reportList()" style="background-color: green;">用户已绑定套餐</Gbutton>
    <br>
    
    <Gbutton @click="aaaaa()">TestShow</Gbutton>
    <p>{{ $t("message.hello") }}</p>
    <h3>用户open id验证中</h3>
    <router-link to="/about">about</router-link>
    <br />
    <router-link to="/demo123">demo123</router-link>
    <br />
    <router-link to="/svgDemo">svgDemo</router-link>
    <br>
    <router-link to="/author">author</router-link>
    <br />
    <button @click="show = !show">click</button>
    
    <br>

    <div class="form-item">
      <label for="userEmail">用户名：</label>
      <input id="userEmail" class='v-check' type="text" v-model="userName" 
        v-checkParam="[inputNameRequired, inputNameMin, inputNameMax, inputNamePattern]"
      >
    </div>
    <div class="form-item">
      <label for="password">密码：</label>
      <input id="password" type="password" class="v-check" v-model="userPassword"
        v-checkParam="[inputPasswordRequired,inputPasswordMin,inputPasswordPattern]">
    </div>
    <div class="form-item">
      <label for="confirmPassword">确认密码：</label>
      <input id="confirmPassword" type="password" class="v-check" v-model="confirmPassword"
        v-checkParam="[inputConfirmPasswordValue]">
    </div>
    <transition name="component-fade">
      <Gbutton class="btn" v-if="show" type="success" v-checkSubmit>确认</Gbutton>
    </transition>
    <br>
    <br>
    <router-link to="/loadingDemo">loadingDemo</router-link>
    <br>
    <br>
    <br>
    <div class="screen">
      <p>
        <label>
          <Gradio class="radio" v-model="val" value="1"></Gradio>
          <span>猫</span>
        </label>
      </p>
      <p>
        <label>
          <Gradio class="radio" v-model="val" :checked="ischecked" value="2"></Gradio>
          <span>狗</span>
        </label>
      </p>
      <p>
        <label>
          <Gradio class="radio" v-model="val" :disabled="isdisabled" value="3"></Gradio>
          <span>兔子</span>
        </label>
      </p>
      <p>
        <label>
          <Gradio class="radio" v-model="val" value="4"></Gradio>
          <span>猪</span>
        </label>
      </p>
      <div>
        <Gbutton @click="jiaojuan()">交卷</Gbutton>
      </div>
    </div>
    <div class="screen">
      <checkbox v-model="vallue" :options="selectOptions"></checkbox>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import Gbutton from '../../components/button/button.vue';
import { max, min, required, name, pattern} from '@/utils/rules';
import Gradio from '@/components/radio/radio.vue';
import checkbox from '@/components/checkbox/checkbox.vue';
@Component({
  components: {
    Gbutton,
    Gradio,
    checkbox,
  },
})
export default class Auth extends Vue {
  private val: string = '';
  private someBool: Array<string|number> = [];
  private vallue: Array<string|number> = ['A', 'B'];
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
  private isdisabled: boolean = true;
  private ischecked: boolean = true;
  private show: boolean = true;
  private userName: string = '';
  private userPassword: string = '';
  private confirmPassword: string = '';
  private inputNameMax = max('请不要超过20个字符');
  private inputNameMin = min('请不要小于3个字符');
  private inputNameRequired = required('请输入用户名');
  private inputNamePattern  = pattern('请输入符合要求的用户名', /^[a-zA-Z0-9_-]{4,16}$/);
  private inputPasswordRequired = required('请输入密码');
  private inputPasswordMin = min('至少填写8个字符', 8);
  private inputPasswordPattern  = pattern('请输入符合要求的密码', /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  private inputConfirmPasswordRequired = required('请再次输入密码');
  private inputConfirmPasswordValue =
  ( currentVue: any, value: string | number,
    callback: (a: HTMLElement, b: string) => {}, el: HTMLElement,
  ) => {
    if (value !== currentVue.userPassword) {
      callback(el, '请输入相同的密码');
    }
  }
  private aaaaa() {
    this.$GMsg.show({
      message: '测试',
      type: 'error',
    });
  }
  private submit() {
    alert('通过校验');
  }
  private queryPlanList() { // 跳转至用户已绑定检测盒套餐列表
    this.$router.push({path: '/planList'});
  }
  private reportList() { // 跳转至用户主页，已绑定的盒子套餐列表页
    this.$router.push({path: '/reportList'});
  }
  private jiaojuan() {
    this.vallue = ['A', 'B', 'C', 'D'];
  }
}
</script>
<style lang='less' scoped >
.btn{
  background: #ff0000;
}
.component-fade-enter-active {
  transition: all .5s ease;
}
.component-fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.component-fade-enter, .component-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.screen{
  width: 340px;
  height: 300px;
  border: 1px solid #222;
  margin: 20px auto 0 auto;
  display: flex;
  flex-direction: column;
}
.screen p{
  padding: 0 15px;
}
.screen .radio{
  margin-right: 8px;
}
.but-wrap{
  width: 30px;
  height: 30px;
  border: 1px solid #222;
  margin:0 auto;
  margin-top: 4px;
  border-radius:50%;
  cursor: pointer;
}
</style>