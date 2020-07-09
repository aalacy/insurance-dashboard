<!-- eslint-disable -->
<template>
  <div
    id="Form27"
  >
    <div class="mb-0 display-2">Miike, We've selected these customized rates for you</div>
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
        },
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
      this.$store.commit('SET_STEP', 100/27*27)
    },

    watch: {
      address: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form28' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        // await this.$store.commit('UPDATE_QUOTE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form27')
        localStorage.setItem('nextStep', 'Form28')
      }
    },
  }
</script>