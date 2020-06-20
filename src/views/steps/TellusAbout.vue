<!-- eslint-disable -->
<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <div class="mb-3 display-2">Tell us about yourself and let's get started</div>
    <v-row
      class="mx-4"
    >
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-row>
            <v-col>
              <base-quote-text-field
                v-model="form.firstName"
                label="First Name"
                placeholder="John"
              />
            </v-col>
            <v-col>
              <base-quote-text-field
                v-model="form.lastName"
                label="Last Name"
                placeholder="Doe"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <base-quote-text-field
                v-model="form.phoneNumber"
                label="Phone Number"
                placeholder="(555)555-5555"
              />
            </v-col>
            <v-col>
              <base-quote-text-field
                v-model="form.email"
                label="Email Address"
                type="email"
                placeholder="jone@email.com"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <base-quote-text-field
                v-model="form.dob"
                label="Date of Birthday"
                placeholder="MM/DD/YYYY"
              />
            </v-col>
          </v-row>
          <div class="d-flex">
            <v-spacer></v-spacer>
            <v-btn
              large
              color="success"
              class="mr-0"
            >
              Save & Get Quote
            </v-btn>

          </div>
        </v-form>
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
        loading: false,
        valid: true,
        form: {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          dob: '',
        },
      }
    },

    computed: {
    },

    methods: {
    },
  }
</script>