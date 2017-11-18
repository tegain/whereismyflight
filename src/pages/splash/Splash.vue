<template>
  <div class="app-Page app-Content__splash">
    <transition name="loadSplash">
      <div v-if="loading">
        Chargement...
      </div>
      <div v-else>
        <router-link :to="{ name: 'Home' }" tag="button" class="app-Btn">Rechercher un vol</router-link>
      </div>
    </transition>
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

<style lang="scss">
  .app-Btn {
    border: none;
    cursor: pointer;
    padding: .75rem 2.5rem;
    border-radius: 2rem;
    background: #ff00cc;
    background: linear-gradient(to top, #773c99, #ff00cc);
    background-size: 125% 100%;
    background-position: 0 0;
    color: #fff;
    font-size: 1rem;
    letter-spacing: .1rem;
    font-family: 'Merriweather', Helvetica, Arial, sans-serif;
    box-shadow: 0 1rem 2rem -.5rem rgba(#ff00cc, .25);
    transition-duration: .4s;

    &:hover {
      background-position: 95% 0;
    }
  }
</style>
