import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
        },
      ],
    },
    {
      path: '/quote',
      component: () => import('@/views/quotes/steps/Index'),
      children: [
        {
          name: 'TellusAbout',
          path: 'tellus-about',
          component: () => import('@/views/quotes/steps/TellusAbout'),
        },
        {
          name: 'CompareAutoInsurance',
          path: 'compare-auto-insurance',
          component: () => import('@/views/quotes/steps/CompareAutoInsurance'),
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
