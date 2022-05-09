<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="clickA" ref="adiv">{{ aaa }}</div>
    <p>{{ bbb }}</p>
    <div class="greeting">{{ greeting }}</div>
    <el-button type="primary" @click="testS">测试</el-button>
    <div class="block-ul">
      <el-button type="primary" @click="toggleUl">切换显示 ul</el-button>
      <ul v-show="ulShow">
        <li v-for="item in fsz" :key="item.id">{{ item.txt }}</li>
      </ul>
    </div>
    <slot name="userSlot" :childSlotMsg="data4slot"></slot>
    <div>
      <h4>default slot</h4>
      <slot name="sloa" :ap="apdata"></slot>
    </div>
    <div class="test-vmodel">
      <p>{{ mess.name }}</p>
      <input v-model="mess.name" />
    </div>
  </div>
</template>

<script>
import * as m from "./m2.js";
export default {
  name: "HelloWorld-Name",
  props: {
    msg: String,
  },
  data() {
    return {
      aaa: "hello world -aaa",
      bbb: "hello sz",
      name: "Broli",
      ulShow: true,
      apdata: "apdata",
      data4slot: "子组件传给 slot 数据",
      mess: { name: "" },
      fsz: [
        { id: 1, txt: "v1" },
        { id: 2, txt: "v2" },
        { id: 3, txt: "v3" },
      ],
    };
  },
  beforeCreate() {
    console.log("HelloWorld.vue beforeCreate", this);
  } /* 
  created() {
    console.log("HelloWorld.vue created");
  },
  beforeMount() {
    console.log("HelloWorld.vue beforeMount");
  }, */,
  mounted() {
    console.log(
      "HelloWorld.vue mounted => ",
      this,
      this.constructor,
      this._prpos,
      this._data
    );
    console.log("HelloWorld.vue mounted2 => ", this.$router, this.$route);
    console.log("m module => ", m);
  },
  computed: {
    greeting() {
      return `计算属性：${this.aaa}`;
    },
    // 只要计算属性不在模板上使用（render函数），就不会被添加到 data 中某个属性的依赖
    greeting2() {
      console.log("greeting2 改变了");
      return `计算属性2：${this.bbb}`;
    },
  },
  methods: {
    toggleUl() {
      this.ulShow = !this.ulShow;
    },
    testS() {
      this.mess.name = "haha";
      // this.$set(this.mess, "np", "xixi");
      console.log(this);
      setTimeout(() => {
        console.log(this);
      }, 3000);
    },
    clickA() {
      this.$nextTick().then(() => {
        console.log("nextTick with promise => ", this.$refs.adiv.innerText);
      });
      this.$nextTick().then(() => {
        console.log("nextTick with promise 2 => ", this.$refs.adiv.innerText);
      });
      // this.aaa = "hello vue";
      // this.bbb = "hello b1";
      this.$nextTick(() => {
        console.log("nextTick => ", this.$refs.adiv.innerText);
      });
      this.aaa = "hello broli";
      this.bbb = "hello b2";
      console.log("sync => ", this.$refs.adiv.innerText);
      this.$nextTick(() => {
        console.log("nextTick 2 => ", this.$refs.adiv.innerText);
      });
      this.$emit("user-click", "somethine stuff");
    },
  },
  watch: {
    // bbb: "toggleUl",
    // bbb(value) {
    //   console.log("user watch => ", value);
    // },
    bbb: {
      handler(value) {
        console.log("user watch => ", value);
      },
      immediate: true,
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
.block-ul {
  border: 1px solid aqua;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
}
</style>
