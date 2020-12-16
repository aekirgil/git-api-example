<template>
  <main class="detail">
    <div class="container">
      <h1>{{ headline }}</h1>
      <section>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6">
            <p><span>Full Name:</span> {{ repo.full_name }}</p>
            <p><span>Description:</span> {{ repo.description }}</p>
            <p><span>Stars:</span> {{ repo.stargazers_count }}</p>
            <p><span>Watchers:</span> {{ repo.watchers_count }}</p>
            <a :href="repo.html_url" target="_blank">Go to Repository</a>
          </div>
        </div>
      </section>
    </div>
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
      headline: 'Repository Detail'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 20px;

  span {
    font-weight: 700;
  }
}

a {
  display: inline-block;
  margin-top: 20px;
}
</style>
