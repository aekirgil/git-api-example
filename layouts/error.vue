<template>
  <main class="404">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 v-if="error.statusCode === 404">
              {{ error.statusCode }} {{ error.message }}
            </h1>
            <h1 v-else>
              {{ error.message }}
            </h1>
            <NuxtLink to="/">
              Home page
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
