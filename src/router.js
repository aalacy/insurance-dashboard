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
        {
          name: 'Form8',
          path: 'form8',
          component: () => import('@/views/quotes/steps/Form8'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form9',
          path: 'form9',
          component: () => import('@/views/quotes/steps/Form9'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form10',
          path: 'form10',
          component: () => import('@/views/quotes/steps/Form10'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form11',
          path: 'form11',
          component: () => import('@/views/quotes/steps/Form11'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form12',
          path: 'form12',
          component: () => import('@/views/quotes/steps/Form12'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form13',
          path: 'form13',
          component: () => import('@/views/quotes/steps/Form13'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form14',
          path: 'form14',
          component: () => import('@/views/quotes/steps/Form14'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form15',
          path: 'form15',
          component: () => import('@/views/quotes/steps/Form15'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form16',
          path: 'form16',
          component: () => import('@/views/quotes/steps/Form16'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form17',
          path: 'form17',
          component: () => import('@/views/quotes/steps/Form17'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form18',
          path: 'form18',
          component: () => import('@/views/quotes/steps/Form18'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form19',
          path: 'form19',
          component: () => import('@/views/quotes/steps/Form19'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form20',
          path: 'form20',
          component: () => import('@/views/quotes/steps/Form20'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form21',
          path: 'form21',
          component: () => import('@/views/quotes/steps/Form21'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form22',
          path: 'form22',
          component: () => import('@/views/quotes/steps/Form22'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form23',
          path: 'form23',
          component: () => import('@/views/quotes/steps/Form23'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form24',
          path: 'form24',
          component: () => import('@/views/quotes/steps/Form24'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form25',
          path: 'form25',
          component: () => import('@/views/quotes/steps/Form25'),
          meta: {
            read: true
          }
        },
        {
          name: 'Form26',
          path: 'form26',
          component: () => import('@/views/quotes/steps/Form26'),
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
  if(to.matched.some(record => record.meta.read)) {
    const id = localStorage.getItem('shell_id')
    const lastStep = localStorage.getItem('lastStep')
    const nextStep = localStorage.getItem('nextStep')
    if (id) {
      // if (store.state.quote_shell == {} && to > 'Form2') {
      //   store.commit('GET_QUOTE_SHELL', {id})
      // }
      next()
    } 

    // if (to.name <= nextStep) {
      next()
    // }
  } else {
    next()
  }
})


export default router