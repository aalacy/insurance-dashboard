<!-- eslint-disable -->
<template>
  <div
    id="Form6"
  >
    <div class="mb-4 display-2">How many miles one way to work?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.work_miles"
            outlined
            :items="workMiles"
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
  import { getCarMakes, getCarModels } from '../../../util'
  export default {
    name: 'CompareAutoInsurance',

    data () {
      return {
        valid: true,
        form: {
          work_miles: ''
        },
        workMiles: [
          {
            text: '0-5',
            value: '05'
          },
          {
            text: '5-10',
            value: '510'
          },
          {
            text: '10-15',
            value: '1015'
          },
          {
            text: '15-20',
            value: '1520'
          },
          {
            text: '20-30',
            value: '2030'
          },
          {
            text: '30+',
            value: '30g'
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

      carMakes () {
        return getCarMakes()
      }, 
      carModels () {
        return getCarModels(this.form.make)
      }
    },

    mounted() {
      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*6)
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form7' })
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

        await this.$store.commit('UPDATE_VEHICLE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form6')
        localStorage.setItem('nextStep', 'Form7')
      }
    },
  }
</script>