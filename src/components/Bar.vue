<template>
  <div>
    <div>Bar component</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      afff: "barasdf",
    };
  },
  mounted() {
    console.log("Bar mounted => ", this.$router, this.$route);
  },
  destroyed() {
    console.log("Bar destroyed");
  },
  beforeRouteEnter(to, from, next) {
    console.log("bar before router enter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("bar before router update");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("bar before router leave");
    next();
  },
};
</script>
