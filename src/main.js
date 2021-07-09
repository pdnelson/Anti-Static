import Vue from "vue";
import vuetify from '@/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router';
import App from "./App.vue";

// Views
import Index from "./modules/index/Index";
import Projects from "./modules/projects/Projects";
import Music from "./modules/music/Music";
import Shop from "./modules/shop/Shop";

Vue.config.productionTip = false;

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/store',
    name: 'shop',
    component: Shop
  }
]

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
