<template>
  <div class="abc-class">abc-component: {{ cusSlot }}</div>
</template>

<script>
export default {
  name: "abc",
  props: {
    cusSlot: {
      type: String,
      default: "default-msg",
    },
    hName: String,
  },
  mounted() {
    console.log("props => ", this.props, this.$attrs);
    // console.log("Abc.vue mounted => ", this, this.cusSlot);
  },
};
</script>
