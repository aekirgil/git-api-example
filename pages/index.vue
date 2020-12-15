<template>
  <main class="welcome">
    <div> {{ data }}</div>
    <nuxt-link :to="`repos/${ data[0].fullname }`">
      detail
    </nuxt-link>
  </main>
</template>

<script>

import { fnSort, ASC } from '@/utilities'

export default {
  async asyncData ({ params, $axios }) {
    const limit = 3; const sortkey = 'stargazers_count'; const url = '/users/homeday-de/repos'
    let data = await $axios.$get(url)
    data = data.length ? fnSort(ASC, sortkey, data).slice(0, limit).reduce((ac, cur) => ([...ac, { name: cur.name, fullname: cur.full_name, id: cur.id }]), []) : []
    return { data }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
