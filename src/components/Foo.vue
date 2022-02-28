<template>
  <div>
    <div>Foo component</div>
    <router-link :to="{ name: 'bar' }" style="margin-right: 20px"
      >Go 2 bar</router-link
    >
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ran: "foo",
    };
  },
  mounted() {
    console.log("Foo mounted => ", this, this.$router, this.$route);
  },
  destroyed() {
    console.log("Foo destroyed");
  },
  beforeRouteEnter(to, from, next) {
    console.log("foo before router enter this => ", this);
    next((vm) => {
      console.log("foo before router enter next this => ", vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log("foo before router update this => ", this);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("foo before router leave");
    next();
  },
};
</script>
