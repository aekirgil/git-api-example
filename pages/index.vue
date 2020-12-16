<template>
  <main class="welcome">
    <div class="container">
      <section>
        <Hero :hero-source="hero" />
      </section>
      <section v-if="data.length">
        <List :headline="headline">
          <div class="row">
            <div
              v-for="repo in data"
              :key="repo.id"
              class="col-12 col-sm-12 col-md-4"
            >
              <Box :title="repo.name">
                <nuxt-link :to="`repos/${ repo.fullname }`">
                  <button>
                    See Repository
                  </button>
                </nuxt-link>
              </Box>
            </div>
          </div>
        </List>
      </section>
      <section v-else>
        <Empty text="Cannot find any repository by the given information" />
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Box from '@/components/Box'
import List from '@/components/List'

import { fnSort, ASC } from '@/utilities'

export default {
  components: { Hero, Box, List },
  async asyncData ({ params, $axios }) {
    const limit = 3; const sortkey = 'stargazers_count'; const url = '/users/homeday-de/repos'
    let data = await $axios.$get(url)
    data = data.length ? fnSort(ASC, sortkey, data).slice(0, limit).reduce((ac, cur) => ([...ac, { name: cur.name, fullname: cur.full_name, id: cur.id }]), []) : []
    return { data }
  },
  data () {
    return {
      headline: 'Repository List',
      hero: {
        image: '/headerimg.png',
        headline: 'Welcome',
        buttonText: 'Go to Workflow ',
        buttonUrl: '/workflow'
      }
    }
  }
}
</script>

<style>
</style>
