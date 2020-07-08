<!-- eslint-disable -->
<template>
  <div
    id="Form25"
  >
    <div class="mb-4 display-2">Would you like uninsured motorists coverage?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.uninsured_cov"
            outlined
            :items="UNINSURED_COVERAGE_TYPEs"
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
    name: 'Form25',

    data () {
      return {
        valid: true,
        form: {
          uninsured_cov: ''
        },
        UNINSURED_COVERAGE_TYPEs: [
          {
            text: 'Decline Coverage',
            value: 'Decline Coverage'
          },
          {
            text: '$15,000/$30,000/$3,500 (Minimum)',
            value: 'Minimum'
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
    },

    mounted() {
      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*25)
    },

    watch: {
      vehiquotecle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form26' })
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

        await this.$store.commit('UPDATE_QUOTE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form25')
        localStorage.setItem('nextStep', 'Form26')
      }
    },
  }
</script>