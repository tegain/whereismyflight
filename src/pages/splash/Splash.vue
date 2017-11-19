<template>
  <div class="app-Content app-Content__splash">
    <transition name="loadsplash" mode="in-out">
      <div class="app-Splash__loader" v-if="loading" key="loader">
        <span class="app-Splash__loader--msg">Chargement...</span>
      </div>
      <div class="app-Splash__content" v-else key="content">
        <router-link :to="{ name: 'Home' }" tag="button" class="app-Btn">Rechercher un vol</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        loading: true
      }
    },

    computed: {
      ...mapGetters([
        'getApiToken'
      ])
    },

    methods: {
      initApp () {
        if (this.getApiToken === null) {
          this.$store.dispatch('getLHToken').then((success) => {
            console.log(success)
            this.loading = false
          })
        } else {
          this.loading = false
        }
      }
    },

    beforeCreate () {
      document.body.className = 'app-Page__splash'
    },

    mounted () {
      this.initApp()
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

  .app-Splash {
    &__loader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: rgba(#0f0c29, .4);

      &--msg {
        background: #fff;
        padding: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 3px;
        box-shadow: 0 1rem 4rem -.25rem rgba(#0f0c29, .6);
        color: #0f0c29;
        font-size: .75rem;
        transform: translate(-50%, -50%);
      }
    }

    &__content {
      margin-top: 55vh;
    }
  }

  .app-Btn {
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

  // Transitions
  .loadsplash-enter,
  .loadsplash-leave-to {
    opacity: 0;
    transition: opacity .4s;
  }

  .loadsplash-enter-to,
  .loadsplash-leave {
    opacity: 1;
  }
</style>
