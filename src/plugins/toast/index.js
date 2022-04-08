import vue from "vue";
import Toast from "./Toast.vue";

const Ctor = vue.extend(Toast); // 创建构造器

function showToast(text, duration = 3000) {
  const div = document.createElement("div");
  const component = new Ctor({
    el: div,
    data() {
      return {
        text,
        show: true,
      };
    },
  });
  document.body.appendChild(component.$el); // 这里必须是 component.$el
  setTimeout(() => {
    component.show = false;
  }, duration);
}

function registyToast() {
  vue.prototype.$toast = showToast;
}

export default registyToast;
