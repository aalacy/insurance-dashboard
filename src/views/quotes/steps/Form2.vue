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
        <v-col cols="12" md="6">
          <base-quote-text-field
            v-model="formData.first_name"
            label="First Name"
            placeholder="John"
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="12" md="6">
          <base-quote-text-field
            v-model="formData.last_name"
            label="Last Name"
            placeholder="Doe"
            :rules="[rules.required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <base-quote-text-field
            v-model="formData.phone"
            type="tel"
            label="Phone Number"
            placeholder="(555)555-5555"
            v-mask="'(###)###-####'" 
            :rules="[rules.required]"
          />
        </v-col>
        <v-col cols="12" md="6">
          <base-quote-text-field
            v-model="formData.email"
            label="Email Address"
            type="email"
            placeholder="jone"
            suffix="@hosting.com"
            :rules="[rules.required, rules.email]"
            :loading="loading"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <base-quote-text-field
            v-model="formData.dob"
            label="Date of Birthday"
            placeholder="MM/DD/YYYY"
            :rules="[rules.required]"
            v-mask="'##/##/####'" 
            type="tel"
            :loading="loading"
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
          :loading="loading"
          :disabled="loading || !valid"
        >
          Save & Get Quote
        </v-btn>

      </div>
    </v-form>
  </div>
</template>

<script>
/* eslint-disable */
import {mask} from 'vue-the-mask'
  import {
    mapState,
  } from 'vuex'
  export default {
    name: 'TellusAbout',

    data () {
      return {
        valid: true,
        formData: {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          dob: '',
        },
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
          min3: value => (value && value.length >= 3) || 'Min 3 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value+'@hosting.com') || 'Invalid e-mail.'
          },
        }
      }
    },

    directives: {mask},

    computed: {
      ...mapState(['loading', 'error', 'quote_shell', 'quote', 'name'])
    },

    watch: {
      quote: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form3' })
        }
      }
    },

    mounted () {
      if (this.name) {
        this.formData.first_name = this.name.split(' ')[0]
        this.formData.last_name = this.name.split(' ')[1]
      }

      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*2)
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        await this.$store.commit('CREATE_DRIVER', this.formData)

        localStorage.setItem('lastStep', 'Form2')
        localStorage.setItem('nextStep', 'Form3')
      }
    },
  }
</script>