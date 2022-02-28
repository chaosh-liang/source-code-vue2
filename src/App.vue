<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div ref="app-div-ref">这是一个普通的 div</div>
    <HelloWorld
      ref="hw-ref"
      msg="Welcome to Your Vue.js App"
      @user-click="userClick"
    >
      <!-- v-slot 指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope attribute 的 API 替代方案 -->
      <!-- v-slot 只能在 template 或 组件标签上使用 -->

      <!-- 将废除 slot="slot-name"(template|普通元素上)的写法 -->
      <!-- <template v-slot:userSlot> -->

      <template #userSlot="{ childSlotMsg }">
        <h3 class="slot-header">
          Here might be a Component HelloWorld data => {{ childSlotMsg }}
        </h3>
      </template>
      <!-- <h3 slot="userSlot" class="slot-header">Here might be a Component Abc</h3> -->
      <!-- </template> -->
      <template #sloa="{ ap: cusSlot }">
        <Abc data-a="abc-1" title="abc-11" :cusSlot="cusSlot" />
        <Abc data-a="abc-2" />
        <Abc data-a="abc-3" dir="rtl" />
      </template>
    </HelloWorld>
    <hr />
    <test-keep-alive />
    <br />
    <br />
    <hr />
    <div style="margin: 15px 0">
      <router-link to="/foo" style="margin-right: 20px">Go 2 Foo</router-link>
      <router-link to="/baz">Go 2 Baz</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Abc from "./components/Abc.vue";
import TestKeepAlive from "./components/Test-keepalive.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TestKeepAlive,
    Abc,
  },
  /* beforeCreate() {
    console.log("App.vue beforeCreate");
  },
  created() {
    console.log("App.vue created");
  },
  beforeMount() {
    console.log("App.vue beforeMount");
  }, */
  mounted() {
    console.log("App.vue mounted => ", this, window.vue);
  },
  methods: {
    userClick(value, ev) {
      console.log("自定义事件 => ", value, ev);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
