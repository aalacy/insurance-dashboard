<!-- eslint-disable -->
<template>
  <div
    id="Form7"
  >
    <div class="mb-4 display-2">How many miles do you drive per year in your {{vehicle.make}} {{vehicle.model}}?</div>
    <v-form
      ref="form"
      v-model="valid"
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
        done: false,
        form: {
          year_miles: ''
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
      ...mapState(['loading', 'error', 'vehicle']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*7)

      this.$store.commit('GET_VEHICLE')
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          if (this.done) {
            this.$router.push({ name: 'Form8' })
          }
        }
      }
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

        this.done = true
        await this.$store.commit('UPDATE_VEHICLE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form7')
        localStorage.setItem('nextStep', 'Form8')
      }
    },
  }
</script>