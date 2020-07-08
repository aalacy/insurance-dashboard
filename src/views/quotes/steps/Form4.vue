<!-- eslint-disable -->
<template>
  <div
    id="Form4"
  >
    <div class="mb-3 display-2">Tell us about your vehicle</div>
    <v-form
      ref="form"
      v-model="valid"
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
      ...mapState(['loading', 'error', 'vehicle']),

      carMakes () {
        return getCarMakes()
      }, 
      carModels () {
        return getCarModels(this.form.make)
      }
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form5' })
        }
      }
    },

    mounted() {
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

        await this.$store.commit('UPDATE_VEHICLE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form4')
        localStorage.setItem('nextStep', 'Form5')
      }
    },
  }
</script>