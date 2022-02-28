import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Input, Message, Icon } from "element-ui";

Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);

Vue.config.productionTip = false;
Vue.prototype.$msg = Message;

window.vue = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
