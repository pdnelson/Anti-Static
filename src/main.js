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
import CreateAccount from "./modules/accounts/CreateAccount";
import LogIn from "./modules/accounts/LogIn";

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
  },
  {
    path: '/register',
    name: 'register',
    component: CreateAccount
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  }
]

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

router.beforeEach((to, _, next) => {

  // Change the page name in the tab for each router view
  if      (to.name === 'index')     document.title = "Anti-Static Software";
  else if (to.name === 'projects')  document.title = "Anti-Static Software - Projects";
  else if (to.name === 'music')     document.title = "Anti-Static Software - Music";
  else if (to.name === 'shop')      document.title = "Anti-Static Software - Store";
  else if (to.name === 'login')     document.title = "Anti-Static Software - Log In";
  else if (to.name === 'register')  document.title = "Anti-Static Software - Register";

  next();
});

Vue.use(VueRouter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
