<template>
  <div
    class="hero"
    role="img"
    aria-label="Image Description"
    :style="`background-image: url(${heroSource.image})`"
  >
    <h1>
      {{ heroSource.headline }}
    </h1>
    <nuxt-link v-if="heroSource.buttonText" id="heroBtn" exact :to="heroSource.buttonUrl">
      <button>{{ heroSource.buttonText }}</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    heroSource: {
      type: Object,
      default: () => ({
        image: {
          type: String,
          default: ''
        },
        headline: {
          type: String,
          default: ''
        },
        buttonText: {
          type: String,
          default: ''
        },
        buttonUrl: {
          type: String,
          default: 'asd'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 40vh;
  overflow: hidden;
  background: no-repeat 50% scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
}
</style>
