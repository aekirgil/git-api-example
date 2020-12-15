<template>
  <main class="worflow">
    <section>
      <h1>Workflow</h1>
      <h3>Please fill the form and get your top 3 repository</h3>
    </section>
    <section class="form">
      <form @submit.prevent="formSubmit">
        <fieldset>
          <label for="username">User Name:</label>
          <input id="username" v-model="$v.form.username.$model" type="text" autocomplete="name">
          <p v-if="formsubmited && !$v.form.username.required" class="error">
            Please fill the username input
          </p>
        </fieldset>
        <fieldset>
          <label for="email">E-mail:</label>
          <input id="email" v-model="$v.form.email.$model" type="email" autocomplete="email">
          <p v-if="formsubmited && !$v.form.email.required" class="error">
            Please fill the email input
          </p>
          <p v-if="!$v.form.email.email" class="error">
            Please type correct email address
          </p>
        </fieldset>
        <fieldset>
          <input id="aggrement" v-model="$v.form.aggrement.$model" type="checkbox" name="aggrement">
          <label for="aggrement">Agree with terms and service</label>
          <p v-if="formsubmited && !$v.form.aggrement.sameAs" class="error">
            Please check the agreement input
          </p>
        </fieldset>
        <fieldset>
          <button>Get Repositories</button>
        </fieldset>
      </form>
    </section>
    <section v-if="repos.length">
      <div
        v-for="repo in repos"
        :key="repo.id"
      >
        <nuxt-link :to="`repos/${ repo.fullname }`">
          View Repository
        </nuxt-link>
      </div>
    </section>
    <section v-else>
      Cannot find any repository by the given information
    </section>
  </main>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

import { fnSort, ASC } from '@/utilities'

export default {
  data () {
    return {
      repos: [],
      form: {
        username: '',
        email: '',
        aggrement: false
      },
      formsubmited: false
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      email: {
        required,
        email
      },
      aggrement: {
        required,
        sameAs: sameAs(() => true)
      }
    }
  },
  methods: {
    async formSubmit () {
      this.formsubmited = true
      if (!this.$v.form.$invalid) {
        const formData = {
          username: this.$v.form.username.$model,
          email: this.$v.form.email.$model,
          aggrement: this.$v.form.aggrement.$model
        }
        this.repos = await this.getData(formData.username)
        this.formReset()
      }
    },
    async getData (user) {
      const limit = 3
      const sortkey = 'stargazers_count'
      const url = `/users/${user}/repos`

      try {
        const data = await this.$axios.$get(url)
        return data.length ? fnSort(ASC, sortkey, data).slice(0, limit).reduce((ac, cur) => ([...ac, { name: cur.name, fullname: cur.full_name, id: cur.id }]), []) : []
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Fetch error in "workflow" page. Error: ${error}`)
      }
    },
    formReset () {
      this.formsubmited = false
      this.form.username = ''
      this.form.email = ''
      this.form.aggrement = false
    }
  }
}
</script>

<style>
</style>
