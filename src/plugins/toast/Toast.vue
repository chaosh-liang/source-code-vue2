<template>
  <div class="wrap" v-if="show">
    <span>hello, </span>
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>
