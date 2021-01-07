import Vue from 'vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import footer from './components/Footer/footer.vue';
import navbar from './components/Navbar/navbar.vue';



import App from './App.vue'








Vue.config.productionTip = false

new Vue({
  vuetify,
  footer,
  navbar,
 
  render: h => h(App)
}).$mount('#app')
