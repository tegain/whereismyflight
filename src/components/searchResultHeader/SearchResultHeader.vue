<template>
  <div class="app-Results__header">
    <div>
      From {{ search.departure }} <br>
      To {{ search.destination }}  <br>
      {{ search.date }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      search: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">

</style>
