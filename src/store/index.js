import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
  }
})
