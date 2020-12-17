<template>
  <div class="list">
    <h3 class="list__title">
      {{ headline }}
    </h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    headline: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 100%;

  &__title {
    margin-bottom: 20px;
  }
}
</style>
