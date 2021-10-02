import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Register from '../views/Register.vue'
import Artist from '../views/Artist.vue'
import Album from '../views/Album.vue'
import Playlist from '../views/Playlist.vue'
import CreateAlbum from '../views/CreateAlbum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: `/artist/:name`,
    name: 'Artist',
    component: Artist,
    props: true
  },
  {
    path: `/album`,
    name: 'Album',
    component: Album,
  },
  {
    path: `/playlist/:title`,
    name: 'Playlist',
    component: Playlist,
    props: true
  },
  {
    path: `/createalbum`,
    name: 'CreateAlbum',
    component: CreateAlbum,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
