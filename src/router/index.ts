import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MessageList from '../components/MessageList.vue'
import LoginComponent from '../components/LoginComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rooms/:roomId/messages',
    name: 'MessageList',
    component: MessageList
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/users',
    name: 'Users',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Users.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
