<!-- eslint-disable -->
<template>
  <div
    id="Form22"
  >
    <div class="mb-4 display-2">Tell us more about your home</div>
    <div>Do you own your home?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-yes-no-group  v-model="selected" /> 
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
    name: 'Form22',

    data () {
      return {
        selected: 0,
        valid: true,
        form: {
          homeowner: ''
        },
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*22)
    },

    watch: {
      quote: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form23' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.form.homeowner = this.selected == 0 ? 'Yes' : 'No'
        await this.$store.commit('UPDATE_QUOTE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form22')
        localStorage.setItem('nextStep', 'Form23')
      }
    },
  }
</script>