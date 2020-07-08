<template>
  <v-main
    style="min-height: 100vh;"
  >
    <router-view />

    <!-- <dashboard-core-footer /> -->
  </v-main>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      // DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>
