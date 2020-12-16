<template>
  <div class="list">
    <h3>{{ headline }}</h3>
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

  h3 {
    margin-bottom: 20px;
  }
}
</style>
