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
        class="mx-4"
      >
        <v-col  cols="12" md="6">
          <router-view />
        </v-col>
        <v-col  cols="12" md="6">
          right
        </v-col>
      </v-row>
    </v-container>

    <dashboard-core-footer />
  </v-main>
</template>

<script>
  export default {
    name: 'StepCoreView',

    components: {
      DashboardCoreFooter: () => import('../../components/core/Footer'),
    },
  }
</script>
