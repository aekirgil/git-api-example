<template>
  <div class="empty">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'anythings...'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  background-color: white;
}
</style>
