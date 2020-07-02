/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          component: () => import('@/views/pages/Lock'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login'),
        },
        {
          name: 'Pricing',
          path: 'pricing',
          component: () => import('@/views/pages/Pricing'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/quotes/Index'),
      children: [
        // Home
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/quotes/Home'),
          meta: {
            read: false
          }
        },
      ],
    },
    {
      path: '/quote',
      component: () => import('@/views/quotes/steps/Index'),
      children: [
        {
          name: 'Form2',
          path: 'form2',
          component: () => import('@/views/quotes/steps/Form2'),
          meta: {
            read: false
          }
        },
        {
          name: 'Form3',
          path: 'form3',
          component: () => import('@/views/quotes/steps/Form3'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form4',
          path: 'form4',
          component: () => import('@/views/quotes/steps/Form4'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form5',
          path: 'form5',
          component: () => import('@/views/quotes/steps/Form5'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form6',
          path: 'form6',
          component: () => import('@/views/quotes/steps/Form6'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form7',
          path: 'form7',
          component: () => import('@/views/quotes/steps/Form7'),
          meta: {
            read: true
          }
        },
      ],
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  console.log('to', to, from)
  if(to.matched.some(record => record.meta.read)) {
    const id = localStorage.getItem('shell_id')
    const lastStep = localStorage.getItem('lastStep')
    const nextStep = localStorage.getItem('nextStep')
    if (id) {
      if (store.state.quote.id == undefined && to > 'Form2') {
        store.commit('GET_QUOTE', {id})
      }
      next()
    } 

    if (to.name <= nextStep) {
      next()
    }
  } else {
    next()
  }
})


export default router