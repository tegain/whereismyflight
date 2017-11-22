<template>
  <div class="app-Results__header">
    <div>
      <div class="app-Results__from">
        <span class="app-Results__label">De</span>
        <span class="app-Results__country">France</span>
        <span class="app-Results__airport">{{ search.departure }}</span>
      </div>
      <div class="app-Results__to">
        <span class="app-Results__label">à</span>
        <span class="app-Results__country">Chine</span>
        <span class="app-Results__airport">{{ search.destination }}</span>
      </div>
      <div class="app-Results__date">
        Le {{ search.date }}
      </div>
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
  .app-Results {

    &__header {
      height: 50vh;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }

    &__from,
    &__to {
      margin-bottom: 2rem;
    }

    &__label,
    &__country,
    &__airport,
    &__date {
      display: block;
    }

    &__label {
      text-transform: capitalize;
      font-size: .9rem;
    }

    &__country {
      margin-bottom: .75rem;
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    &__airport {
      font-size: 1rem;
      text-transform: uppercase;
    }

    &__date {
      font-size: 1.25rem;
    }
  }
</style>
