<template>
  <div id="app" class="app">
    <layout-navigation></layout-navigation>

    <div class="app-Container">
      <layout-header></layout-header>

      <main>
        <img src="./assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background: #242138;
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  .app-Container {
    position: relative;
    z-index: 1;
    background: #242138;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
