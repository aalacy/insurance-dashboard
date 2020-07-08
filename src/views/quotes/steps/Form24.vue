<!-- eslint-disable -->
<template>
  <div
    id="Form24"
  >
    <div class="mb-4 display-2">What liability limits are you interested in?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            v-model="form.limit"
            outlined
            :items="limits"
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
    name: 'Form24',

    data () {
      return {
        valid: true,
        form: {
          limit: ''
        },
        limits: [
          {
            text: '$15,000/$30,000/$10,000 (Minimum)',
            value: 'Minimum'
          },
          {
            text: '$25,000/$50,000/$25,000 (Good)',
            value: 'Good'
          },
          {
            text: '$50,000/$100,000/$25,000 (Better)',
            value: 'Better'
          },
          {
            text: '$100,000/$300,000/$50,000 (Best)',
            value: 'Best'
          },
          {
            text: '$100,000/$300,000/$50,000 (Superior)',
            value: 'Superior'
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
      this.$store.commit('SET_STEP', 100/27*24)
    },

    watch: {
      vehiquotecle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form25' })
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
        localStorage.setItem('lastStep', 'Form24')
        localStorage.setItem('nextStep', 'Form25')
      }
    },
  }
</script>