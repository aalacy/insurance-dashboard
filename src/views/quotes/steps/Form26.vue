<!-- eslint-disable -->
<template>
  <div
    id="Form26"
  >
    <div class="mb-0 display-2">Let's save you money... Select all discounts that apply.</div>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-item-group
        v-model="selected"
        multiple
      >
        <v-row>
          <v-col
            v-for="item in discounts"
            :key="item.value"
            cols="12"
            sm="4"
          >
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'success' : 'white'"
                class="d-flex text--primary pa-2"
                height="200"
                @click="toggle"
              >
                <v-scroll-y-transition>
                  <div 
                    class="flex-grow-1 text-center pt-4" 
                  > 
                    <v-icon class="mb-4" x-large>{{ item.icon }}</v-icon>
                    <div
                      class="display-1 font-weight-bold mb-2"
                    >
                      {{ item.text }}
                    </div>
                    <div
                    >
                      {{ item.sub }}
                    </div>
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
      <div class="d-flex mt-3">
        <v-spacer></v-spacer>
        <v-btn
          large
          color="main"
          class="mr-0"
          :disabled="loading || !valid"
          :loading="loading"
          @click="saveAndGetQuote"
        >
          Save & Get Quote
        </v-btn>

      </div>
    </v-form>
  </div>
</template>
<script>
/* eslint-disable */
  import {
    mapState,
  } from 'vuex'
  export default {
    name: 'Form16',

    data () {
      return {
        selected: [],
        valid: true,
        form: {
          professional_discount: false,
          student_discount: false,
          military_discount: false
        },
        discounts: [
          {
            text: 'Professional Discount',
            sub: 'Save up to 5%!',
            value: 'Professional Discount',
            icon: 'mdi-account'
          },
          {
            text: 'Good Student Discount',
            sub: 'Full time, GPA 3.0, Save up to 5%!',
            value: 'Student Discount',
            icon: 'mdi-account'
          },
          {
            text: 'Military Discount',
            sub: 'Save up to 5%!',
            value: 'Military Discount',
            icon: 'mdi-account'
          },
        ],
        rules: {
          required: value => {
            return !!value || 'This field is required.'
          },
        }
      }
    },

    computed: {
      ...mapState(['loading', 'error', 'quote']),
    },

    mounted() {
      this.$store.commit('SET_STEP', 100/27*21)
    },

    watch: {
      quote: {
        deep: true,
        handler () {
          this.$router.push({ name: 'Form27' })
        }
      }
    },

    methods: {
      async saveAndGetQuote () {
        this.$refs.form.validate()
        if (!this.valid) {
          return
        }

        console.log(this.selected)

        this.selected.map(idx => {
          if (idx == 0) {
            this.form.professional_discount = true
          } else if (idx == 1) {
            this.form.student_discount = true
          } else if (idx == 2) {
            this.form.military_discount = true
          }
        })
        await this.$store.commit('UPDATE_QUOTE', this.form)

        // Save the current state
        localStorage.setItem('lastStep', 'Form26')
        localStorage.setItem('nextStep', 'Form27')
      }
    },
  }
</script>