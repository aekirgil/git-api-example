<template>
  <div class="box">
    <div class="box__info">
      <h4 class="box__title" :title="title">
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
  $parent: &;
  border-radius: 5px;
  position: relative;
  box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  background-color: white;
  margin-bottom: 30px;

  &__info {
    width: 100%;
    padding: 20px;

    #{$parent}__title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 15px;
    }
  }
}
</style>
