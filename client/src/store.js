import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: !!localStorage.getItem('token')
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
        localStorage.setItem('token', token)
      } else {
        state.isUserLoggedIn = false
        localStorage.removeItem('token', token)
      }
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    }
  }
})
