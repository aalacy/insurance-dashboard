<!-- eslint-disable -->
<template>
 	<v-text-field
	 	v-bind="{
	      ...$attrs,
	      ...$props,
	    }"
	    v-model="internalValue"
      hide-details="auto"
      outlined
      clearable
  	>
  	</v-text-field>
</template>

<script>
/* eslint-disable */
export default {
	name: 'QuoteTextField',

	props: ['value'],

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