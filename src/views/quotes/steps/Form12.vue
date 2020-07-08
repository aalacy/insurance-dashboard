<!-- eslint-disable -->
<template>
  <div
    id="Form12"
  >
    <div class="mb-4 display-2">How old were you when you first received your drive license?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <base-quote-text-field
            type="number"
            v-model="form.age_license"
            label=""
            placeholder="Age first licensed"
            :rules="[rules.required, rules.range15and99]"
          />
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
          age_license: ''
        },
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
          range15and99: v => {
            return v >= 15 && v <= 99 || 'Age must be from 15 to 99'
          }
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'driver']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*12)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form13' })
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

        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form12')
        localStorage.setItem('nextStep', 'Form13')
      }
    },
  }
</script>