<template>
  <div class="app-Datepicker">
    datepicker : {{ date }}
  </div>
</template>

<script>
  export default {
    props: {
      date: { type: String, required: true }
    }
  }
</script>

<style lang="scss">

</style>
