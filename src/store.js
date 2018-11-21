import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-sec-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  state: {
    usuario: null,
    token: null
  },
  mutations: {
    setUsuario (state, usuario) {
      state.usuario = usuario
    },
    setToken (state, token)  {
      state.token = token
    },
    logout (state) {
      state.token = null
      state.usuario = null
    }
  },
  actions: {

  }
})
