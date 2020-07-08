<!-- eslint-disable -->
<template>
  <div
    id="Form8"
  >
    <div class="mb-4 display-2">Would you like Full Coverage or Liability Only?</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <base-card-group
        v-model="selected"
        :items="coverageTypes"
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
          coverage_type: ''
        },
        coverageTypes: [
          {
            text: 'Full Coverage',
            value: 'Full Coverage',
            icon: 'mdi-car'
          },
          {
            text: 'Liability Only',
            value: 'Liability Only',
            icon: 'mdi-car'
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
      ...mapState(['loading', 'error', 'vehicle']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*8)
    },

    watch: {
      vehicle: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form9' })
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

        this.form.coverage_type = this.coverageTypes[this.selected].value
        await this.$store.commit('UPDATE_VEHICLE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form8')
        localStorage.setItem('nextStep', 'Form9')
      }
    },
  }
</script>