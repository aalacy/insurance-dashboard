<!-- eslint-disable -->
<template>
  <div
    id="Form5"
  >
    <div class="mb-4 display-2">I primarily use my {{form.make}} {{form.model}} for:</div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-btn-toggle
          v-model="form.use_type"
          :rules="[rules.required]"
          background-color="white"
          active-class="success"
          class="d-flex flex-wrap justify-space-between v-window"
          dark
          mandatory
        >
          <v-btn class="mb-2" :value="item.value" v-for="item in vechicleUses">
            {{item.text}}
          </v-btn>

          
        </v-btn-toggle>
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
  import { getCarMakes, getCarModels } from '../../../util'
  export default {
    name: 'CompareAutoInsurance',

    data () {
      return {
        valid: true,
        form: {
          year: '',
          make: '',
          model: '',
          use_type: ''
        },
        text: '',
        toggle_exclusive: 2,
        toggle_multiple: [],
        vechicleUses: [
          {
            text: 'Commute',
            value: 'Commute'
          },
          {
            text: 'Pleasure',
            value: 'Pleasure'
          },
          {
            text: 'Business',
            value: 'Business'
          },
          {
            text: 'Uber/Lyft',
            value: 'Uber/Lyft'
          }
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
      
      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*5)
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
        localStorage.setItem('lastStep', 'Form5')
        localStorage.setItem('nextStep', 'Form6')

        // go to Form 6
        this.$router.push({ name: 'Form6' })
      }
    },
  }
</script>