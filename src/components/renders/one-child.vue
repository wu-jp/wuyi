<template>
  <div class="child">
    {{name}}
    <button @click.stop="clickBtn">点击child</button>
  </div>
</template>
<script>
export default {
  props: {
    name: String
  },
  methods: {
    clickBtn() {
      this.$emit("childClick");
    }
  }
};
</script>