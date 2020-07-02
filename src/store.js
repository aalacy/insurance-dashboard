/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'

import { createQuote, updateQuote, getQuote } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
    drawer: null,
    loading: false,
    error: null,
    quote: {},
    name: '',
    uuid: localStorage.getItem('uuid') || '',
    step: 0
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SET_SCRIM (state, payload) {
      state.barColor = payload
    },
    SET_UUID (state, payload) {
      state.uuid = payload
    },
    SET_NAME (state, payload) {
      state.name = payload
    },
    async CREATE_QUOTE(state, payload) {
      await createQuote(state, payload)
    },
    async UPDATE_QUOTE(state, payload) {
      await updateQuote(state, payload)
    },
    async GET_QUOTE(state, payload) {
      await getQuote(state, payload)
    },
    SET_STEP (state, payload) {
      state.step = payload
    }
  },
  actions: {

  },
})
