import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';




Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/navbar', component: Navbar },
    { path: '/footer', component: Footer},
    { path: '/home', component: Home},
    
  ],
  mode: 'history'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')