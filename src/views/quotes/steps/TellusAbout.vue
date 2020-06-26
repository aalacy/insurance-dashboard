<!-- eslint-disable -->
<template>
  <div
    id="tellusabout"
  >
    <div class="mb-3 display-2">Tell us about yourself and let's get started</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <base-quote-text-field
            v-model="form.firstName"
            label="First Name"
            placeholder="John"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col>
          <base-quote-text-field
            v-model="form.lastName"
            label="Last Name"
            placeholder="Doe"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <base-quote-text-field
            v-model="form.phoneNumber"
            type="number"
            label="Phone Number"
            placeholder="(555)555-5555"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col>
          <base-quote-text-field
            v-model="form.email"
            label="Email Address"
            type="email"
            placeholder="jone"
            suffix="@hosting.com"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <base-quote-text-field
            v-model="form.dob"
            label="Date of Birthday"
            placeholder="MM/DD/YYYY"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <div class="d-flex">
        <v-spacer></v-spacer>
        <v-btn
          large
          color="main"
          class="mr-0"
          @click="saveAndGetQuote"
        >
          Save & Get Quote
        </v-btn>

      </div>
    </v-form>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'TellusAbout',

    data () {
      return {
        loading: false,
        valid: true,
        form: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          dob: '',
        },
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
      async saveAndGetQuote () {
        this.$refs.form.validate()
          if (!this.valid) {
            return
          }
      }
    },
  }
</script>