<!-- eslint-disable -->
<template>
  <div
    id="Form7"
  >
    <div class="mb-4 display-2">How many miles do you drive per year in your {{form.make}} {{form.model}}?</div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.year_miles"
            outlined
            :items="yearMiles"
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
    name: 'Form7',

    data () {
      return {
        valid: true,
        form: {
          year: '',
          make: '',
          model: '',
          use_type: '',
          work_miles: ''
        },
        yearMiles: [
          {
            text: '5,000',
            value: '5000'
          },
          {
            text: '12,000',
            value: '12000'
          },
          {
            text: '15,000',
            value: '15000'
          },
          {
            text: '25,000+',
            value: '25000'
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
      ...mapState(['loading', 'error', 'quote']),

      carMakes () {
        return getCarMakes()
      }, 
      carModels () {
        return getCarModels(this.form.make)
      }
    },

    mounted() {
      // get the latest form data from state
      this.form = this.quote.quotes[0].vehicles[0]

      this.$store.commit('SET_STEP', 100/27*7)
    },

    methods: {
      changeMake () {
        this.form.model = ''
      },
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        const payload = this.quote
        payload.quotes[0].vehicles[0] = this.form

        await this.$store.commit('UPDATE_QUOTE', payload)

        // Save the current state
        localStorage.setItem('shell_id', this.quote.id)
        localStorage.setItem('lastStep', 'Form7')
        localStorage.setItem('nextStep', 'Form8')

        // go to Form 6
      }
    },
  }
</script>