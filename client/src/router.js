import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import MyBooks from '@/components/MyBooks'
import AddCustomBook from '@/components/AddCustomBook'
import Search from '@/components/Search'
import ViewBook from '@/components/ViewBook'
import EditBook from '@/components/EditBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/mybooks/:bookId',
      name: 'book',
      component: ViewBook
    },
    {
      path: '/mybooks/add',
      name: 'book-create',
      component: AddCustomBook
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/mybooks/:bookId/edit',
      name: 'edit',
      component: EditBook
    }
  ]
})
