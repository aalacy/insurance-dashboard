<!-- eslint-disable -->
<template>
  <div
    id="tellusabout"
  >
    <div class="mb-3 display-2">Compare auto insurance rates instantly</div>
    <div>California drivers could end up with saving money on their auto insurance!</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-row>
        <v-col>
          <v-select
            outlined
            :items="years"
            placeholder="Car Year"
          >
          </v-select>
        </v-col>
      </v-row>
      <div class="d-flex">
        <v-spacer></v-spacer>
        <v-btn
          large
          color="main"
          class="mr-0"
        >
          Save & Get Quote
        </v-btn>

      </div>
    </v-form>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'CompareAutoInsurance',

    data () {
      return {
        loading: false,
        valid: true,
        years: [
          2020,
          2019
        ],
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