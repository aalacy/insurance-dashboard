<!-- eslint-disable -->
<template>
  <div
    id="CompareAutoInsurance"
  >
    <div class="mb-3 display-2">Compare auto insurance rates instantly</div>
    <div>California drivers could end up with saving money on their auto insurance!</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.year"
            outlined
            :items="modelYears"
            :rules="[rules.required]"
            placeholder="Car Year"
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
          :loading="loading"
          @click="saveAndGetQuote"
          :disabled="loading || !valid"
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
  import { getModelYears } from '../../../util'
  export default {
    name: 'CompareAutoInsurance',

    data () {
      return {
        valid: true,
        form: {
          year: ''
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

      modelYears () {
        return getModelYears()
      }
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form4' })
        }
      }
    },

    mounted() {
      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*3)
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        await this.$store.commit('CREATE_VEHICLE', this.form)

        localStorage.setItem('lastStep', 'Form3')
        localStorage.setItem('nextStep', 'Form4')
      }
    },
  }
</script>