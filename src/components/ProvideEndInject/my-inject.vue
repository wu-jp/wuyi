<template>
  <div class="child" @click="clickChild">我是子组件</div>
</template>
<script>
export default {
  //接收指定的我们想要添加在这个实例上的 property
  inject: ["clickMi"],
  methods: {
    clickChild() {
      this.clickMi();
    }
  }
};
</script>