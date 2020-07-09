<!-- eslint-disable -->
<template>
  <div
    id="Form23"
  >
    <div class="mb-4 display-2">Have you been continously insured for the past 6 months?</div>
    <v-form
      ref="form"
      v-model="valid"
    > 
      <base-yes-no-group v-model="selected" /> 
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
    name: 'Form23',

    data () {
      return {
        valid: true,
        selected: [],
        form: {
          prior_insurance: ''
        },
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*23)
    },

    watch: {
      quote: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form24' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.form.prior_insurance = this.selected == 0 ? 'Yes' : 'No'
        await this.$store.commit('UPDATE_QUOTE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form23')
        localStorage.setItem('nextStep', 'Form24')
      }
    },
  }
</script>