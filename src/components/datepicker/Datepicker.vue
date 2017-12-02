<template>
  <div class="app-Datepicker">
    <input :id="id" :type="type" placeholder="yyyy/mm/dd" min="2017-11-15" max="2017-11-30" :value="date" @change="updateDate(tab)" v-if="mobile">
    <span class="app-Datepicker__toggler" :data-value="date" v-else>{{ date | moment("Do MMM YYYY") }}</span>
    <input type="hidden" :class="`${id}--raw`" :value="date | moment('YYYY-MM-DD')">
    <datepicker-agenda :current-month="now | moment('M')" :current-year="now | moment('YYYY')"  @selectDay="updateInputDate"></datepicker-agenda>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: '',
        now: new Date()
      }
    },

    props: {
      mobile: { type: Boolean, required: true },
      tab: { type: String, required: true },
      type: { type: String, required: true },
      id: { type: String, required: true }
    },

    methods: {
      updateDate (tab) {
        this.$emit('updateSearchTab', tab)
      },

      setDate () {
        this.date = Date.now()
      },

      updateInputDate (val, tab) {
        this.date = val
        let rawDate = val.format('YYYY-MM-DD')
        console.log(this)
        this.$emit('updateDatepicker', {date: rawDate, tab: this.tab})
      }
    }
  }
</script>

<style lang="scss">
  .app-Datepicker {
    height: 100%;

    &__toggler {
      width: 100%;
      height: 100%;
      padding: .75rem;
      background: #f00;
      display: block;
      font-size: .75rem;
    }
  }
</style>
