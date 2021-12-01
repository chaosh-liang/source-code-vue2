<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="clickA" ref="adiv">{{ aaa }}</div>
    <p>{{ bbb }}</p>
    <div class="greeting">{{ greeting }}</div>
    <slot name="userSlot" :childSlotMsg="data4slot"></slot>
    <div>
      <h4>default slot</h4>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld-Name",
  props: {
    msg: String,
  },
  data() {
    return {
      aaa: "hello world",
      bbb: "hello sz",
      name: "Broli",
      data4slot: "子组件传给 slot 数据",
    };
  },
  mounted() {
    console.log("HelloWorld.vue mounted => ", this);
  },
  computed: {
    greeting() {
      return `计算属性：${this.aaa}`;
    },
  },
  methods: {
    clickA() {
      this.$nextTick().then(() => {
        console.log("nextTick with promise => ", this.$refs.adiv.innerText);
      });
      this.$nextTick().then(() => {
        console.log("nextTick with promise 2 => ", this.$refs.adiv.innerText);
      });
      this.aaa = "hello vue";
      this.bbb = "hello b1";
      this.$nextTick(() => {
        console.log("nextTick => ", this.$refs.adiv.innerText);
      });
      this.aaa = "hello broli";
      this.bbb = "hello b2";
      console.log("sync => ", this.$refs.adiv.innerText);
      this.$emit("user-click", "somethine stuff");
    },
  },
  watch: {
    bbb(value) {
      console.log("user watch => ", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
