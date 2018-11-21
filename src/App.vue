<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/">Home</router-link> | 
      <router-link to="/anotacoes">Anotações</router-link> | 
      <a v-if="usuario" @click="logout">Logout</a> 
      <router-link v-if="!usuario" to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {
    ...mapMutations([
      'logout'
    ])
  }
}
</script>
