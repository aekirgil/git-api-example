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
        <Empty :text="error" />
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Box from '@/components/Box'
import List from '@/components/List'

import { fnSort, ASC } from '@/utilities'
import constants from '@/utilities/constants'

export default {
  components: { Hero, Box, List },
  asyncData ({ params, $axios }) {
    return $axios.$get(constants.homeUrl)
      .then((data) => {
        data = data.length ? fnSort(ASC, constants.sortkey, data).slice(0, constants.limit).reduce((ac, cur) => ([...ac, { name: cur.name, fullname: cur.full_name, id: cur.id }]), []) : []
        return { data }
      })
      .catch((e) => {
        return { error: 'Repository not found' }
      })
  },
  data () {
    return {
      headline: 'Repository List',
      data: [],
      hero: {
        image: '/headerimg.png',
        headline: 'Welcome',
        buttonText: 'Go to Workflow ',
        buttonUrl: 'workflow'
      }
    }
  }
}
</script>
