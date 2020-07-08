<!-- eslint-disable -->
<template>
  <div
    id="Form10"
  >
    <div class="mb-4 display-2">What is your gender?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="genders"
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
          gender: ''
        },
        genders: [
          {
            text: 'Male',
            value: 'Male',
            icon: 'mdi-human-male'
          },
          {
            text: 'Female',
            value: 'Female',
            icon: 'mdi-human-female'
          },
          {
            text: 'Nonbinary',
            value: 'Nonbinary',
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
      this.$store.commit('SET_STEP', 100/27*10)
    },

    watch: {
      driver: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form11' })
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

        this.form.gender = this.genders[this.selected].value
        await this.$store.commit('UPDATE_DRIVER', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form10')
        localStorage.setItem('nextStep', 'Form11')
      }
    },
  }
</script>