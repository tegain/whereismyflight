<template>
  <div class="app-Content app-Content__splash">
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

    methods: {
      getLHToken () {
        this.$store.dispatch('getLHToken').then((success) => {
          console.log(success)
        })
      }
    },

    beforeCreate () {
      document.body.className = 'app-Page__splash'
    },

    mounted () {
      this.getLHToken()
      this.loading = false
    }
  }
</script>

<style lang="scss">
  .app-Page__splash {
    &:before {
      position: fixed;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("../../assets/app-bg__1000.jpg") 50% 50% no-repeat;
      background-size: cover;
    }
  }

  .app-Btn {
    margin-top: 55vh;
    border: none;
    cursor: pointer;
    padding: .75rem 2.5rem;
    border-radius: 2rem;
    background: #ff00cc;
    background: linear-gradient(to right, #773c99, #ff00cc);
    background-size: 125% 100%;
    background-position: 0 0;
    color: #fff;
    font-size: 1rem;
    letter-spacing: .1rem;
    font-family: 'Merriweather', Helvetica, Arial, sans-serif;
    box-shadow: 0 .5rem 2rem -.5rem rgba(#ff00cc, .25);
    transition-duration: .4s;

    &:hover {
      background-position: 95% 0;
      box-shadow: 0 .5rem 3rem -.5rem rgba(#ff00cc, .45);
    }
  }
</style>
