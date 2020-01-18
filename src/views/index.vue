<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">首页</router-link>
      <router-link :to="{name: 'about'}">关于</router-link>
      <router-link :to="{name: 'gmail'}">邮箱</router-link>
      <router-link :to="{name: 'login'}">index</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
</style>
