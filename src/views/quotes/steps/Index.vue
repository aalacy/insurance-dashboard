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
      DashboardCoreAppBar: () => import('../components/core/AppBar'),
      DashboardCoreDrawer: () => import('../components/core/Drawer'),
      StepCoreView: () => import('../components/core/StepView'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
