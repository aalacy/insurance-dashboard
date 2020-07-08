<!-- eslint-disable -->
<template>
  <div>
    <v-item-group
      v-model="internalValue"
      v-bind="{
        ...$attrs,
        ...$props,
      }"
      mandatory
    >
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.value"
          cols="12"
          :sm="sm"
          :md="md"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'success' : 'white'"
              class="d-flex align-center text--primary pa-2"
              :height="height"
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
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
    <div v-if="errorMessage" class="primary--text">{{ errorMessage }}</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'CardGroup',

    props: ['value'],

    props: {
      items: {
        type: Array,
        default: []
      },
      sm: {
        type: String,
        default: '3'
      },
      md: {
        type: String,
        default: '3'
      },
      height: {
        type: String,
        default: '150'
      },
      errorMessage: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        selected: [],
	  }
	},

	computed: {
    internalValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>