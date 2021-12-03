<template>
  <div>B component</div>
</template>

<script>
export default {
  data() {
    return {
      bRandom: "b",
    };
  },
  mounted() {
    console.log("B component => ", this);
  },
};
</script>
