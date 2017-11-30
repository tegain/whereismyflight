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
        <div v-for="day in days" class="app-Datepicker__weekday">
          {{ day }}
        </div>
      </div>
      <div class="app-Datepicker__days">
        <div class="app-Datepicker__day" :style="{width: (month.getWeekStart() * 40) + 'px' }"></div>
        <div class="app-Datepicker__day" v-for="day in month.getDays()" :class="{ 'selected': isSelected(day) }">
          {{ day.format('D') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Month from '../../modules/Month'
  import moment from 'moment'

  export default {
    data () {
      return {
        now: moment(new Date()),
        date: '',
        month: new Month(this.currentMonth, this.currentYear),
        days: ['L', 'M', 'M', 'J', 'V', 'S', 'D']
      }
    },

    props: ['currentMonth', 'currentYear'],

    methods: {
      isSelected (day) {
        return day.format('D') === this.now.format('D')
      }
    }
  }
</script>

<style lang="scss">
  .app-Datepicker {

    $day-width: 40px;

    &__agenda {
      position: absolute;
      background: #fff;
      top: 100%;
      right: 0;
      z-index: 5;
      width: $day-width * 7;

      color: #000;
    }

    &__header {
      padding: 1rem;
    }

    &__content {
      // padding: 1rem;
    }

    &__week {
      display: flex;
      justify-content: flex-start;
    }

    &__weekday {
      width: $day-width;
      text-align: center;
    }

    &__days {
      display: flex;
      flex-flow: row wrap;
    }

    &__day {
      flex: 0 0 auto;
      width: $day-width;
      height: $day-width;
      text-align: center;
      line-height: $day-width;
      cursor: pointer;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
</style>
