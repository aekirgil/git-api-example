<template>
  <div class="box">
    <div class="box-info">
      <h4 :title="title">
        {{ title }}
      </h4>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border-radius: 5px;
  position: relative;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  background-color: white;
  margin-bottom: 30px;
}

.box-info {
  width: 100%;
  padding: 20px;

  *:not(:last-child) {
    margin-bottom: 15px;
  }

  h4 {
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
