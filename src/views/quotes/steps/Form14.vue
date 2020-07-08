<!-- eslint-disable -->
<template>
  <div
    id="Form14"
  >
    <div class="mb-4 display-2">What is your driver's license status?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="license_status_types"
      />
      <div class="d-flex mt-3">
        <v-spacer></v-spacer>
        <v-btn
          large
          color="main"
          class="mr-0"
          :disabled="loading || !valid"
          :loading="loading"
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
  import {
    mapState,
  } from 'vuex'
  export default {
    name: 'Form7',

    data () {
      return {
        selected: [],
        valid: true,
        form: {
          license_status: ''
        },
        license_status_types: [
          {
            text: 'Active',
            value: 'Active',
            icon: 'mdi-image-area'
          },
          {
            text: 'Permit',
            value: 'Permit',
            icon: 'mdi-clipboard-file'
          },
          {
            text: 'Expired',
            value: 'Expired',
            icon: 'mdi-timer'
          },
          {
            text: 'Suspened',
            value: 'Suspened',
            icon: 'mdi-account-alert'
          },
          {
            text: 'Foreign',
            value: 'Foreign',
            icon: 'mdi-image-area'
          },
        ],
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'driver']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*14)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form15' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        this.form.license_status = this.license_status_types[this.selected].value
        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form14')
        localStorage.setItem('nextStep', 'Form15')
      }
    },
  }
</script>