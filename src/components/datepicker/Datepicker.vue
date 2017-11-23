<template>
  <div class="app-Datepicker">
    <input :id="id" :type="type" placeholder="yyyy/mm/dd" :value="date" @change="updateDate(date, tab)" v-if="mobile">
    <button :data-value="date" v-else>{{ date | moment("Do MMM") }}</button>
    <input type="hidden" :class="`${id}--raw`" :value="date">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: ''
      }
    },

    props: {
      mobile: { type: Boolean, required: true },
      tab: { type: String, required: true },
      type: { type: String, required: true },
      id: { type: String, required: true }
    },

    methods: {
      updateDate (val, tab) {
        this.$emit('updateDatepicker', val, tab)
      }
    }
  }
</script>

<style lang="scss">

</style>
