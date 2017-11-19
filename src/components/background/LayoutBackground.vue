<template>
  <div class="app-Background"></div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .app-Background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 2.5rem);
    z-index: 0;
    pointer-events: none;
    user-select: none;
    background: url("../../assets/app-bg__1900.jpg") 50% 0% no-repeat;
    background-size: cover;
    transform: translateY(-2rem);
    transition: transform .8s;
  }
</style>
