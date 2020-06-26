<template>
  <div class="box">
    <!-- <h1>This is an Login page!</h1>
    <router-link :to="{name: 'home'}">主页</router-link>-->
    <form class="login-form" action>
      <h1>login</h1>
      <div class="txtb">
        <input type="text" v-model="username" />
        <span data-placeholder="Username"></span>
      </div>
      <div class="txtb">
        <input type="password" v-model="password" />
        <span data-placeholder="Password"></span>
      </div>
      <input class="logbtn" type="submit" value="Login" />
      <div class="bottom-text">
        Don't hava account?
        <a href="#">Sign up</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {},
  beforeRouterEnter(to, from, next) {
    console.log(to);
  },
  beforeRouterLeave(to, from, next) {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: monospace;
  box-sizing: border-box;
}

.box {
  min-height: 100vh;
  background-image: linear-gradient(120deg, #34495e, #2c3e50, #2c2c54);
}

.login-form {
  width: 360px;
  background: #fff;
  height: 580px;
  padding: 80px 40px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-form h1 {
  text-align: center;
  margin-bottom: 60px;
}

.txtb {
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
  position: relative;
}

.txtb input {
  font-size: 16px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 5px;
  height: 40px;
}

.txtb span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #adadad;
  z-index: -1;
  transition: 0.6s;
}

.txtb span::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(120deg, #1abc9c, #27ae60, #2980b9);
  transition: 0.5s;
}

.focus + span::before {
  top: -5px;
}
.focus + span::after {
  width: 100%;
}

.logbtn {
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background: linear-gradient(120deg, #474787, #ff5252, #ff793f);
  background-size: 200%;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: 0.6s;
}

.logbtn:hover {
  background-position: right;
}
.bottom-text {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
}
</style>
