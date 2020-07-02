<!-- eslint-disable -->
<template>
  <div
    id="Form4"
  >
    <div class="mb-3 display-2">Tell us about your vehicle</div>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.make"
            outlined
            :items="carMakes"
            :rules="[rules.required]"
            label="Make"
            :loading="loading"
            @input="changeMake"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row v-if="form.make">
        <v-col>
          <v-select
            v-model="form.model"
            outlined
            :items="carModels"
            :rules="[rules.required]"
            label="Model"
            :loading="loading"
          >
          </v-select>
        </v-col>
      </v-row>
      <div class="d-flex">
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
          make: '',
          model: ''
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
      this.$store.commit('SET_STEP', 100/27*4)
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
        localStorage.setItem('lastStep', 'Form4')
        localStorage.setItem('nextStep', 'Form5')

        // go to Form 5
        this.$router.push({ name: 'Form5' })
      }
    },
  }
</script>