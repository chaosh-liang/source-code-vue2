<template>
  <div>Baz component</div>
</template>

<script>
export default {
  data() {
    return {
      hihi: "baz",
    };
  },
  mounted() {
    console.log("Baz mounted => ", this, this.$route);
  },
  destroyed() {
    console.log("Baz destroyed");
  },
  beforeRouteEnter(to, from, next) {
    console.log("baz before router enter this => ", this);
    next((vm) => {
      console.log("baz before router enter next this => ", vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("baz before router update this => ", this);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("baz before router leave");
    next();
  },
};
</script>
