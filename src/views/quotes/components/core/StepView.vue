<!-- eslint-disable -->
<template>
  <v-main
    style="min-height: 100vh;"
  >
    <v-container
      id="dashboard"
      fluid
      tag="section"
    >
      <v-row
        class="mx-4 mb-7"
      >
        <v-col>
          <v-progress-linear height=20 color="blue" :value="step"></v-progress-linear>
        </v-col>
      </v-row>
      <v-row
        class="mx-4"
      >
        <v-col cols="12" md="8">
          <router-view />
        </v-col>
        <v-col v-if="false"  cols="12" md="4">
          right
        </v-col>
      </v-row>
    </v-container>

    <!-- <dashboard-core-footer /> -->
  </v-main>
</template>

<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'StepCoreView',

    data () {
      return {
      }
    },

    computed: {
      ...mapState(['step']),
    },

    components: {
      // DashboardCoreFooter: () => import('../../components/core/Footer'),
    },
  }
</script>
