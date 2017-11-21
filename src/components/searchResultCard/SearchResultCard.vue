<template>
  <div class="app-Card">
    <div class="app-Card__schedule">
      <span class="app-Card__schedule--dep">{{ flight.Departure.ScheduledTimeLocal.DateTime }}</span>
      <span class="app-Card__schedule--dest">{{ flight.Arrival.ScheduledTimeLocal.DateTime }}</span>
    </div>
    <div class="app-Card__route">
      <span class="app-Card__route--from">
        <span class="app-Card__route--airport">{{ flight.Departure.AirportCode }}</span>
        <span class="app-Card__route--terminal">{{ flight.Departure.Terminal.Name }}</span>
        <span class="app-Card__route--gate">{{ flight.Departure.Terminal.Gate }}</span>
      </span>
      <span class="app-Card__route--to">
        <span class="app-Card__route--airport">{{ flight.Arrival.AirportCode }}</span>
        <span class="app-Card__route--terminal">{{ flight.Arrival.Terminal.Name }}</span>
        <span class="app-Card__route--gate">{{ flight.Arrival.Terminal.Gate }}</span>
      </span>
    </div>
    <div class="app-Card__flight">
      <span class="app-Card__flight--company">{{ flight.MarketingCarrier.AirlineID }}</span>
      <span class="app-Card__flight--number">{{ flight.MarketingCarrier.FlightNumber }}</span>
      <span class="app-Card__flight--aircraft">{{ flight.Equipment.AircraftCode }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      flight: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">

</style>
