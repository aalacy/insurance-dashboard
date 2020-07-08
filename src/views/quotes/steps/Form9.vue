<!-- eslint-disable -->
<template>
  <div
    id="Form9"
  >
    <div class="mb-4 display-2">Would you like to save up to 25% by adding another vehicle?</div>
    <div class="d-flex mt-3">
      <v-btn
        large
        color="dark"
        elevation=4
        class="mr-0"
        @click="addNewVehicle"
        outlined 
      >
        Yes
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        large
        outlined 
        color="dark"
        elevation=4
        class="mr-0"
        @click="skip"
      >
        No, Continue
      </v-btn>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'
  export default {
    name: 'Form9',

    data () {
      return {
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote']),
    },

    mounted() {
      // get the latest form data from state
      this.$store.commit('SET_STEP', 100/27*9)
    },

    methods: {
      addNewVehicle () {
        // Save the current state
        localStorage.setItem('lastStep', 'Form9')
        localStorage.setItem('nextStep', 'Form4')

        // go to Form 9
        this.$router.push({ name: 'Form3' })
      },
      skip () {
        localStorage.setItem('lastStep', 'Form9')
        localStorage.setItem('nextStep', 'Form10')
        this.$router.push({ name: 'Form10' })
      }
    },
  }
</script>