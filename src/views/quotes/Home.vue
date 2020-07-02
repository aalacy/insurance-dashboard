<!-- eslint-disable -->
<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row
      class="mx-4"
    >
      <v-col cols="12" md="6">
        <v-form
          ref="form"
          v-model="valid"
        >
          <div class="display-4">
            Auto Quote
          </div>
          <div class="mb-3">Compare rates from the top rated carriers in less than 3 minutes.</div>
          <v-select
            v-model="type"
            :items="types"
            outlined
            label="Type of Insurance"
            :rules="[rules.required]"
          >
          </v-select>
          <v-row justify="space-around">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                hide-details="auto"
                placeholder="First and Last Name"
                outlined
                :rules="[rules.required, rules.name]"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                large
                block
                :loading="loading"
                :disabled="loading || !valid"
                color="success"
                @click="getStarted"
              >
                Get Started
                <v-icon right>mdi-menu-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div><v-icon>mdi-lock</v-icon> Your information is safe & secure</div>
        </v-form>
      </v-col>
      <v-col cols="12" md="6">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'AutoQuote',

    data () {
      return {
        type: '',
        name: '',
        valid: true,
        types: [
          'Auto',
          'Renters'
        ],
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
          name: value => {
            return value.split(' ').length >= 2 || 'Invalid name.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote'])
    },

    mounted () {
      this.$store.commit('SET_UUID', '')
    },

    created() {
      localStorage.removeItem('shell_id')
      localStorage.removeItem('lastStep')
      localStorage.removeItem('nextStep')
    },

    methods: {
      async getStarted () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }
        this.$store.commit('SET_NAME', this.name)

        // save the laststep
        localStorage.setItem('lastStep', 'Form1')
        localStorage.setItem('nextStep', 'Form2')

        // move to Form2
        this.$router.push({ name: 'Form2' })
      }
    },
  }
</script>
