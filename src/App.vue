<template>
  <div id="app" class="app">
    <div class="app-Container">
      <layout-header></layout-header>

      <main>
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
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    // background: #242138;
    background: #0f0c29;
  }

  .app {
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    font-family: 'Merriweather', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;

    &-Content {
      position: relative;
      z-index: 1;
    }
  }

  .app-Container {
    position: relative;
    height: 100%;
    z-index: 1;
  }

  main {
    text-align: center;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    color: #fff;
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
