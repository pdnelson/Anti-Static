import Vue from "vue";
import vuetify from '@/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import App from "./App.vue";

// Views
import Index from "./views/Index";

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({ routes });

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
