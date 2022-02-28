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
  },
  mounted() {
    // console.log("Abc.vue mounted => ", this, this.cusSlot);
  },
};
</script>
