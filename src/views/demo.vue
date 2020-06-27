<template>
  <div id="demo">
    <h3 @click="back">back</h3>
    <div class="nav">
      <router-link tag="span" :to="{name: 'computed'}">电脑</router-link>
      <router-link tag="span" :to="{name: 'phone'}">手机</router-link>
      <router-link tag="span" :to="{name: 'card'}">机车</router-link>
      <router-link tag="span" :to="{name: 'game'}">游戏</router-link>
    </div>
    <transition :name="transitionName">
      <router-view v-loading="visible"></router-view>
    </transition>
  </div>
</template>

<script>
import loading from '../components/my-loading/directive-loading.js'

export default {
  props: {},
  data() {
    return {
      transitionName: "",
      visible: false,
    };
  },
  computed: {},
  created() {
    // 自定义v-loading指令
    this.visible = true;
    setTimeout(()=>{
      this.visible = false;
    }, 3000)
  },
  mounted() {},
  watch: {
    $route(to, from) {
      let toIndex, fromIndex;

      switch (to.name) {
        case "computed":
          toIndex = 1;
          break;
        case "phone":
          toIndex = 2;
          break;
        case "card":
          toIndex = 3;
          break;
        case "game":
          toIndex = 4;
          break;
      }

      switch (from.name) {
        case "computed":
          fromIndex = 1;
          break;
        case "phone":
          fromIndex = 2;
          break;
        case "card":
          fromIndex = 3;
          break;
        case "game":
          fromIndex = 4;
          break;
      }

      console.log(toIndex, fromIndex);

      if (toIndex > fromIndex) {
        this.transitionName = "right";
      } else {
        this.transitionName = "left";
      }

      // this.$emit("success", to.name);

      // console.log(to);
      // console.log(from);
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scopeds>
.nav {
  height: 40px;
  line-height: 40px;
  background-color: rgb(7, 137, 252);
}
.nav span {
  padding: 0 15px;
}

.left-enter,
.left-leave-to {
  transform: translateX(100%);
}
.left-enter-active,
.left-leave-active {
  transition: transform linear 0.2s;
}

.right-enter,
.right-leave-to {
  transform: translateX(-100%);
}
.right-enter-active,
.right-leave-active {
  transition: transform linear 0.2s;
}
</style>
