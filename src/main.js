import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from 'vue-router';
import home from './components/home/home';
import about from './components/views/about';
import contact from './components/views/contact';
// import picker from './components/hotels/calendar';
import datepicker from "./components/hotels/main";
import card from './components/hotels/cards';
// import card2 from './components/hotels/cards2';
import hover from './components/hotels/hover';
import x from './components/hotels/x';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import signup from './components/signup/signup';
import signin from './components/signin/signin';
import events from './components/events/events';
import filter from './components/hotels/filter';

// import fr from 'vuetify/es5/locale/fr'

Vue.component('navbar', Navbar)
// {
//   methods: {
//     changeLocale () {
//       this.$vuetify.lang.current = 'fr'
//     },
//   },
// })

// export default new Vuetify({
//   lang: {
//     locales: {fr},
//     current: 'en',
//   },
// })

Vue.use(VueRouter)


Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/contact', component: contact },
    { path: '/navbar', component: Navbar },
    { path: '/footer', component: Footer},
    { path: '/signup', component: signup},
    { path: '/signin', component: signin},
    { path: '/picker', component: datepicker },
    {path: '/events', component: events },
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

