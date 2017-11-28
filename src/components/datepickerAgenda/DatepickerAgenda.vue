<template>
  <div class="app-Datepicker__agenda">
    <div class="app-Datepicker__header">
      <div class="app-Datepicker__year">
        {{ now | moment("YYYY") }}
      </div>
      <div class="app-Datepicker__today">
        {{ now | moment("Do MMMM") }}
      </div>
    </div>
    <div class="app-Datepicker__content">
      <div class="app-Datepicker__week">
      <span v-for="day in days" class="app-Datepicker__weekdays">
        {{ day }}
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  import Month from '../../modules/Month'

  export default {
    data () {
      return {
        now: new Date(),
        date: '',
        month: new Month(this.currentMonth, this.currentYear),
        days: ['L', 'M', 'M', 'J', 'V', 'S', 'D']
      }
    },

    props: ['currentMonth', 'currentYear']
  }
</script>

<style lang="scss">
  .app-Datepicker {

    &__agenda {
      position: absolute;
      background: #fff;
      top: 100%;
      right: 0;
      z-index: 5;
      width: 100%;

      color: #000;
    }

    &__header {
      padding: 1rem;
    }

    &__content {
      padding: 1rem;
    }

    &__week {
      display: flex;
      justify-content: space-between;
    }

    &__weekdays {

    }
  }
</style>
