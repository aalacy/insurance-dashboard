<!-- eslint-disable -->
<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row
      class="mx-4"
    >
      <v-col>
        <div class="display-4">
          Auto Quote
        </div>
        <div class="mb-3">Compare rates from the top rated carriers in less than 3 minutes.</div>
        <v-select
          v-model="type"
          :items="types"
          outlined
          label="Type of Insurance"
        >
        </v-select>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              hide-details="auto"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-btn
              large
              color="success"
            >
              Get Started
              <v-icon right>mdi-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <div><v-icon>mdi-lock</v-icon> Your information is safe & secure</div>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        type: '',
        name: '',
        types: [
          'Auto',
          'Renters'
        ]
      }
    },

    computed: {
    },

    methods: {
    },
  }
</script>
