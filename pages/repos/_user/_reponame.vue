<template>
  <main class="detail">
    {{ repo }}
  </main>
</template>

<script>
export default {
  async asyncData ({ params, $axios }) {
    const { user, reponame } = params
    const url = `/repos/${user}/${reponame}`
    const repo = await $axios.$get(url)
    return { repo }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
