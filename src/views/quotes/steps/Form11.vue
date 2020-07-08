<!-- eslint-disable -->
<template>
  <div
    id="Form11"
  >
    <div class="mb-4 display-2">What is your martial status?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="martials"
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
    name: 'Form7',

    data () {
      return {
        selected: [],
        valid: true,
        form: {
          martial: ''
        },
        martials: [
          {
            text: 'Married',
            value: 'Married',
            icon: 'mdi-human-male-female'
          },
          {
            text: 'Single',
            value: 'Single',
            icon: 'mdi-human-male-female'
          },
          {
            text: 'Widowed',
            value: 'Widowed',
            icon: 'mdi-human-male-female'
          },
          {
            text: 'Divorced',
            value: 'Divorced',
            icon: 'mdi-human-male-female'
          },
          {
            text: 'Domestic Partnership',
            value: 'Domestic Partnership',
            icon: 'mdi-human-male-female'
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
      ...mapState(['loading', 'error', 'driver']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*11)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form12' })
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

        this.form.martial = this.martials[this.selected].value
        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form11')
        localStorage.setItem('nextStep', 'Form12')
      }
    },
  }
</script>