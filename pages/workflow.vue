<template>
  <main class="worflow">
    <div class="container">
      <section>
        <h1>Workflow</h1>
        <h3>Please fill the form and get your top {{ limit }} repositories</h3>
      </section>
      <section class="form">
        <form class="row column" @submit.prevent="formSubmit">
          <fieldset class="col-12 col-sm-6">
            <label for="username">User Name:</label>
            <input id="username" v-model="$v.form.username.$model" type="text" autocomplete="name">
            <p v-if="isFormSubmitted && !$v.form.username.required" class="form__error">
              Please fill the username input
            </p>
          </fieldset>
          <fieldset class="col-12 col-sm-6">
            <label for="email">E-mail:</label>
            <input id="email" v-model="$v.form.email.$model" type="email" autocomplete="email">
            <p v-if="isFormSubmitted && !$v.form.email.required" class="form__error">
              Please fill the email input
            </p>
            <p v-if="!$v.form.email.email" class="form__error">
              Please type correct email address
            </p>
          </fieldset>
          <fieldset class="col-12 col-sm-6">
            <div class="flex f-row">
              <input id="aggrement" v-model="$v.form.aggrement.$model" type="checkbox" name="aggrement">
              <label for="aggrement">Agree with terms and service</label>
            </div>
            <p v-if="isFormSubmitted && !$v.form.aggrement.sameAs" class="form__error">
              Please check the agreement input
            </p>
          </fieldset>
          <fieldset class="col-12 col-sm-3">
            <button id="form-submit-button">
              Get Repositories
            </button>
          </fieldset>
        </form>
      </section>
      <section v-if="repos.length">
        <List :headline="headline">
          <div class="row">
            <div
              v-for="repo in repos"
              :key="repo.id"
              class="col-12 col-sm-12 col-md-4"
            >
              <Box :title="repo.name">
                <nuxt-link :to="`repos/${ repo.fullname }`">
                  <button>
                    View Repository
                  </button>
                </nuxt-link>
              </Box>
            </div>
          </div>
        </List>
      </section>
      <section v-else-if="error">
        <Empty :text="error" />
      </section>
    </div>
  </main>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'

import List from '@/components/List'
import Box from '@/components/Box'
import Empty from '@/components/Empty'

import { fnSort, ASC } from '@/utilities'
import constants from '@/utilities/constants'

export default {
  components: { Box, List, Empty },
  data () {
    return {
      headline: 'Repository List',
      limit: constants.limit,
      repos: [],
      error: '',
      form: {
        username: '',
        email: '',
        aggrement: false
      },
      isFormSubmitted: false
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
      this.isFormSubmitted = true
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
      const url = `/users/${user}/repos`
      try {
        const data = await this.$axios.$get(url)

        if (!data.length) {
          this.error = 'Cannot find any repository by the given information'
          return []
        }
        return fnSort(ASC, constants.sortKey, data).slice(0, constants.limit).reduce((ac, cur) => ([...ac, { name: cur.name, fullname: cur.full_name, id: cur.id }]), [])
      } catch (error) {
        this.error = 'Repository not found'
        return error
      }
    },
    formReset () {
      this.isFormSubmitted = false
      this.form.username = ''
      this.form.email = ''
      this.form.aggrement = false
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  fieldset {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: none;

    label {
      font-weight: 700;
    }

    input[type="text"],
    input[type="email"] {
      margin-top: 10px;
      height: 40px;
      border: 1px solid black;
      padding-left: 10px;
      font-size: 14px;
    }
    input[type="checkbox"] {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }
  }

  &__error {
    color: red;
    margin-top: 10px;
  }
}
</style>
