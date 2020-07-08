<!-- eslint-disable -->
<template>
  <div
    id="Form5"
  >
    <div class="mb-4 display-2">I primarily use my {{vehicle.make}} {{vehicle.model}} for:</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="vechicleUses"
        height="150"
        :errorMessage="errorMessage"
      />

      <div class="d-flex mt-3">
        <v-spacer></v-spacer>
        <v-btn
          large
          color="blue"
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
    name: 'CompareAutoInsurance',

    data () {
      return {
        selected: [],
        valid: true,
        form: {
          use_type: ''
        },
        done: false,
        errorMessage: '',
        vechicleUses: [
          {
            text: 'Commute',
            value: 'Commute',
            icon: 'mdi-car'
          },
          {
            text: 'Pleasure',
            value: 'Pleasure',
            icon: 'mdi-image-area'
          },
          {
            text: 'Business',
            value: 'Business',
            icon: 'mdi-bag-personal'
          },
          {
            text: 'Uber/Lyft',
            value: 'Uber/Lyft',
            icon: 'mdi-account-group'
          }
        ],
        rules: {
          required: value => {
            return this.selected.length > 0 || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'vehicle']),
    },

    mounted() {
      // update the progress bar
      this.$store.commit('SET_STEP', 100/27*5)

      this.$store.commit('GET_VEHICLE')
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          if (this.done) {
            this.$router.push({ name: 'Form6' })
          }
        }
      },
      selected () {
        this.validate()
      }
    },

    methods: {
      changeMake () {
        this.form.model = ''
      },
      validate () {
        if (this.selected && this.selected.length == 0) {
          this.errorMessage = 'Please select an option'
          this.valid = false
        } else {
          this.errorMessage = ''
          this.valid = true
        }
        return this.valid
      },
      async saveAndGetQuote () {
        if (!this.validate()) {
          return
        }

        this.done = true
        this.form.use_type = this.vechicleUses[this.selected].value

        await this.$store.commit('UPDATE_VEHICLE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form5')
        localStorage.setItem('nextStep', 'Form6')
      }
    },
  }
</script>