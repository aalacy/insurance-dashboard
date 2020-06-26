<template>
  <v-app>
    <dashboard-core-app-bar v-model="expandOnHover" />

    <dashboard-core-drawer :expand-on-hover.sync="expandOnHover" />

    <step-core-view />
  </v-app>
</template>

<script>
  export default {
    name: 'StepIndex',

    components: {
      DashboardCoreAppBar: () => import('@/views/dashboard/components/core/AppBar'),
      DashboardCoreDrawer: () => import('@/views/dashboard/components/core/Drawer'),
      StepCoreView: () => import('./components/View'),
    },

    data: () => ({
    }),
  }
</script>
