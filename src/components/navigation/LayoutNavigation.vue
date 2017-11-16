<template>
  <div class="app-Navigation">
    <nav>
      <ul>
        <li><router-link :to="{ name: 'Home' }" tag="a" class="app-Navigation__item">Lorem ipsum</router-link></li>
        <li><router-link :to="{ name: 'Home' }" tag="a" class="app-Navigation__item">Lorem ipsum</router-link></li>
        <li><router-link :to="{ name: 'Home' }" tag="a" class="app-Navigation__item">Lorem ipsum</router-link></li>
        <li><router-link :to="{ name: 'Home' }" tag="a" class="app-Navigation__item">Lorem ipsum</router-link></li>
        <li><router-link :to="{ name: 'Home' }" tag="a" class="app-Navigation__item">Lorem ipsum</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .app-Navigation {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
