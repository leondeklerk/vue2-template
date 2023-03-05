import Vue from "vue";
import App from "./App.vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App)
}).$mount("#app");
