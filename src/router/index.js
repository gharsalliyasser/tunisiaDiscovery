import Vue from 'vue'
import Router from 'vue-router'
import cars from '@/components/cars'
import home from '@/components/home'
import places from '@/components/places'
import hotels from '@/components/hotels'
import events from '@/components/events'
import signup from '@/components/signup'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    
    {
      path: '/cars',
      name: 'cars',
      component: cars
    },
    {
      path: '/places',
      name: 'places',
      component: places
    },
    {
        path: '/hotels',
        name: 'hotels',
        component: hotels
      },
      {
        path: '/events',
        name: 'events',
        component: events
      },
      {
        path: '/signup',
        name: 'signup',
        component: signup
      },
      {
        path: '/signin',
        name: 'signin',
        component: signin
      },
  ]
})