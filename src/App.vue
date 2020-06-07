<template>
  <div id="app">
    <router-view />

    <!-- 测试 render 函数-->
    <!-- <render-one></render-one> -->

    <!-- 测试 provide-inject -->
    <!-- <my-provide></my-provide> -->
  </div>
</template>
<script>
import renderOne from "./components/renders/render-one";
import myProvide from "./components/ProvideEndInject/my-provide";

export default {
  name: "app",
  components: {
    renderOne,
    myProvide
  }
};
</script>
<style>
</style>
