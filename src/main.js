import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';
import home from './components/home/home';
import about from './components/views/about';
import contact from './components/views/contact';
import picker from './components/hotels/calendar';
// import datepicker from "./components/hotels/main";
import card from './components/hotels/cards';
// import card2 from './components/hotels/cards2';
import hover from './components/hotels/hover';
import x from './components/hotels/x';
import navbar from './components/navbar/navbar';
import footer from './components/footer/footer';
import signup from './components/signup/signup';
import signin from './components/signin/signin';
// import events from './components/events/events';
import filter from './components/hotels/filter';


Vue.component('navbar', navbar)

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    // { path: '/navbar', component: navbar },
    { path: '/footer', component: footer},
    { path: '/signup', component: signup},
    { path: '/signin', component: signin},
    { path: '/picker', component: picker },
    // {path: '/Hotels/datepicker', component: datepicker },
    { path: '/hotels', component: card },
    { path: '/hotels/x', component: x }, 
    {path: '/hotels/cards', component: hover },
    {path: '/hotels/filter', component: filter },
    
  ],
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

