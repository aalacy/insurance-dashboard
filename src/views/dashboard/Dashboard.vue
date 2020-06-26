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
            <v-col>
              <v-text-field
                v-model="name"
                hide-details="auto"
                placeholder="First and Last Name"
                outlined
                :rules="[rules.required]"
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-btn
                large
                block
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
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        }
      }
    },

    computed: {
    },

    methods: {
      async getStarted () {
        this.$refs.form.validate()
          if (!this.valid) {
            return
          }
      }
    },
  }
</script>
