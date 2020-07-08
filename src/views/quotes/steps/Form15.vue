<!-- eslint-disable -->
<template>
  <div
    id="Form15"
  >
    <div class="mb-4 display-2">Do you require SR-22?</div>
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
    name: 'Form7',

    data () {
      return {
        selected: 0,
        valid: true,
        form: {
          sr22: ''
        },
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'driver']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*15)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form16' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        this.form.sr22 = this.selected == 0 ? 'Yes' : 'No'
        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form15')
        localStorage.setItem('nextStep', 'Form16')
      }
    },
  }
</script>