<template>
  <div>
    <h5>A component</h5>
    <el-button @click="showMess">测试 Message</el-button>
  </div>
</template>

<script>
export default {
  name: "A-Comp",
  data() {
    return {
      aRandom: "a",
    };
  },
  mounted() {
    console.log(
      "A component => ",
      this.$router,
      this.$route,
      this._routerRoot,
      this
    );
  },
  methods: {
    showMess() {
      this.$msg({
        duration: 0,
        type: "success",
        iconClass: "el-icon-headset",
        message: "Message 组件",
      });
      this.$toast("风来阿兰算法的发");
    },
  },
};
</script>
