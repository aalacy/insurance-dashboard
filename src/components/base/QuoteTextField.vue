<!-- eslint-disable -->
<template>
 	<v-text-field
	 	v-bind="{
	      ...$attrs,
	      ...$props,
	    }"
	    v-model="content"
        hide-details="auto"
        outlined
        @input="updateData"
  	>
  	</v-text-field>
</template>

<script>
/* eslint-disable */
export default {
	name: 'QuoteTextField',

	props: ['value'],

	data () {
	    return {
	      content: this.value
	    }
  	},

	methods: {
		updateData() {
			this.$emit('input', this.content)
		}
	}
}
</script>