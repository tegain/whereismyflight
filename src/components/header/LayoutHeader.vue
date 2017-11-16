<template>
  <header class="app-Header">
    <button v-if="menuOpen !== null" class="app-Header__navigationBtn" :class="{ 'app-Header__navigationBtn--isToggled': menuOpen }" @click.prevent="toggleMenu">
      <span></span>
    </button>

    <span>Vue.js PWA</span>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        menuOpen: false
      }
    },

    methods: {
      toggleMenu () {
        this.menuOpen = !this.menuOpen
      },

      openMenu () {
        this.menuOpen = true
      },

      closeMenu () {
        this.menuOpen = false
      }
    }
  }
</script>

<style lang="scss">
  .app-Header {
    position: relative;
    text-align: center;

    &__navigationBtn {
      position: absolute;
      z-index: 2;
      left: .75rem;
      top: .75rem;
      height: 2rem;
      width: 2rem;
    }
  }
</style>
