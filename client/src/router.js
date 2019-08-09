import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import MyBooks from '@/components/MyBooks'
import AddCustomBook from '@/components/AddCustomBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mybooks',
      name: 'mybooks',
      component: MyBooks
    },
    {
      path: '/mybooks/add',
      name: 'book-create',
      component: AddCustomBook
    }
  ]
})
