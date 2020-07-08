<!-- eslint-disable -->
<template>
  <div
    id="Form13"
  >
    <div class="mb-4 display-2">What is your occupation?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.occupation"
            outlined
            :items="occupations"
            :rules="[rules.required]"
            :loading="loading"
          >
          </v-select>
        </v-col>
      </v-row>
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
    name: 'Form13',

    data () {
      return {
        valid: true,
        form: {
          occupation: ''
        },
        occupations: [
          {
            text: 'Administrative Clerical',
            value: 'Administrative Clerical'
          },
          {
            text: 'Architect',
            value: 'Architect'
          },
          {
            text: 'Business Owner',
            value: 'Business Owner'
          },
          {
            text: 'Certified Public Accountant',
            value: 'Certified Public Accountant'
          },
          {
            text: 'Clergy',
            value: 'Clergy'
          },
          {
            text: 'Construction Trades',
            value: 'Construction Trades'
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
      this.$store.commit('SET_STEP', 100/27*13)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form14' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form13')
        localStorage.setItem('nextStep', 'Form14')
      }
    },
  }
</script>