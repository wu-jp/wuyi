<template>
  <div class="parent">
    我是父组件
    <my-inject></my-inject>
  </div>
</template>
<script>
import myInject from "./my-inject";
export default {
  //所有的`后代组件`都可以访问这个`clickMi`方法
  provide() {
    return {
      clickMi: this.clickMi
    };
  },
  components: {
    myInject
  },
  methods: {
    clickMi() {
      console.log("子组件调用了我父组件的方法");
    }
  }
};
</script>