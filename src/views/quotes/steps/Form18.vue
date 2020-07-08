<!-- eslint-disable -->
<template>
  <div
    id="Form18"
  >
    <div class="mb-4 display-2">Have you had any incidents in the last 3 years?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-yes-no-group  v-model="selected" /> 
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
    name: 'Form18',

    data () {
      return {
        selected: 0,
        valid: true,
        form: {
          incident_status3: ''
        },
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
      this.$store.commit('SET_STEP', 100/27*18)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form19' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        this.form.incident_status3 = this.selected == 0 ? 'Yes' : 'No'
        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form18')
        localStorage.setItem('nextStep', 'Form19')
      }
    },
  }
</script>