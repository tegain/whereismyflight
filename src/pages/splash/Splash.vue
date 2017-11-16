<template>
  <div class="app-Page app-Page__splash">
    <p v-if="loading">
      Chargement...
    </p>
    <p>
      <router-link :to="{ name: 'Home' }" tag="button">Rechercher un vol</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true
      }
    },

    mounted () {
      this.loading = false
    }
  }
</script>
