import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
// layout
import navbar from "./layout/Navbar/navbar";
import footer from "./layout/Footer/footer";
// auth
import signin from './auth/signin/signin';
import signup from './auth/signup/signup';
// others
import home from './components/home/home';
import about from './components/views/about';
import contact from './components/views/contact';
import datepicker from "./components/Hotels/main";
import CarsPost from "./components/Cars/CarsPost";
import card from './components/Hotels/Cards';
import events from './components/events/events';
import filter from './components/Hotels/filter';
import Gallery from './components/places/Gallery';
import showplaces from'./components/places/showplaces'
import GoogleMap from './components/places/map';
import 'leaflet/dist/leaflet.css';


Vue.component('navbar', navbar)
Vue.use(VueRouter)


Vue.config.productionTip = false

const router = new VueRouter({
    routes: [{
            path: '/home',
            component: home,

        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/contact',
            component: contact
        },
        {
            path: '/navbar',
            component: navbar
        },
        {
            path: '/footer',
            component: footer
        },
        {
            path: '/signup',
            component: signup
        },
        {
            path: '/signin',
            component: signin
        },
        {
            path: '/picker',
            component: datepicker
        },
        {
            path: '/events',
            component: events
        },
        {
            path: '/hotels',
            component: card
        },
        {
            path: '/gallery',
            component: Gallery
        },
        {
            path: '/hotels/filter',
            component: filter
        },
        {
            path: '/CarsPost',
            component: CarsPost
        },
        {
            path:'/showplaces/:idplace',
            component:showplaces
        },
        {
            path:'/map',
            component:GoogleMap
        },
      
      
    ],
    mode: 'history'
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')



