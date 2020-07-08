<!-- eslint-disable -->
<template>
  <div
    id="Form19"
  >
    <div class="mb-4 display-2">Do you want to save up to 25% by adding another driver?</div>
    <div class="d-flex mt-3">
      <v-btn
        large
        color="dark"
        elevation=4
        class="mr-0"
        @click="addNew"
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
    name: 'Form19',

    data () {
      return {
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote']),
    },

    mounted() {
      // get the latest form data from state
      this.$store.commit('SET_STEP', 100/27*19)
    },

    methods: {
      addNew () {
        // Save the current state
        localStorage.setItem('lastStep', 'Form19')
        localStorage.setItem('nextStep', 'Form10')

        // go to Form 9
        this.$router.push({ name: 'Form10' })
      },
      skip () {
        localStorage.setItem('lastStep', 'Form19')
        localStorage.setItem('nextStep', 'Form20')
        this.$router.push({ name: 'Form20' })
      }
    },
  }
</script>