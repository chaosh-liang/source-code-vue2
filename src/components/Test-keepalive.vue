<template>
  <div>
    <h3>keep-alive</h3>
    <div><el-button @click="switchComp">切换组件</el-button></div>
    <keep-alive>
      <component :is="dynamicComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";

export default {
  data() {
    return {
      dynamicComp: A,
    };
  },
  mounted() {
    console.log("Test-keep-alive component => ", this);
  },
  methods: {
    switchComp() {
      this.dynamicComp = B;
    },
  },
};
</script>

<style></style>
