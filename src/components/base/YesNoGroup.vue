<!-- eslint-disable -->
<template>
  <base-card-group 
    v-model="internalValue"
    v-bind="{
      ...$attrs,
      ...$props,
    }"
    :items="YES_NO_OPTION"
  />
</template>

<script>
/* eslint-disable */
export default {
  name: 'YesNoGroup',

  props: ['value'],

  data () {
    return {
      YES_NO_OPTION: [
        {
          text: 'Yes',
          value: 'Yes',
          icon: 'mdi-thumb-up'
        },
        {
          text: 'No',
          value: 'No',
          icon: 'mdi-thumb-down'
        },
      ],
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