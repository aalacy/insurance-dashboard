<!-- eslint-disable -->
<template>
  <div
    id="Form21"
  >
    <div class="mb-4 display-2">What type of residence is your home?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="residenceTypes"
      />
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
    name: 'Form16',

    data () {
      return {
        selected: [],
        valid: true,
        form: {
          residence_type: ''
        },
        residenceTypes: [
          {
            text: 'Single Family Home',
            value: 'Single Family Home',
            icon: 'mdi-home'
          },
          {
            text: 'Condominuim',
            value: 'Condominuim',
            icon: 'mdi-home-city'
          },
          {
            text: 'Mobile Home',
            value: 'Mobile Home',
            icon: 'mdi-home'
          },
          {
            text: 'Apartment',
            value: 'Apartment',
            icon: 'mdi-home'
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
      ...mapState(['loading', 'error', 'address']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*21)
    },

    watch: {
      address: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form22' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        this.form.residence_type = this.residenceTypes[this.selected].value
        await this.$store.commit('UPDATE_ADDRESS', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form21')
        localStorage.setItem('nextStep', 'Form22')
      }
    },
  }
</script>