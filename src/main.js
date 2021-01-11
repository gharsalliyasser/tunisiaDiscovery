import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import picker from './components/Hotels/Calendar';
// import datepicker from "./components/Hotels/main";
import card from './components/Hotels/Cards';
// import card2 from './components/Hotels/cards2';
import hover from './components/Hotels/hover';
import x from './components/Hotels/x';



Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/Home', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/picker', component: picker },
    // {path: '/Hotels/datepicker', component: datepicker },
    { path: '/Hotels/Cards', component: card },
    { path: '/Hotels/x', component: x }, 
    {path: '/Hotels/Cards', component: hover }
    
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

