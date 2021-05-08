<template>
	<div id="demo">
		<p>You are using this demo in {{ config.mode }} mode.</p>
		<button-demo></button-demo>
		<typeahead-demo></typeahead-demo>
	</div>
</template>

<script>
import ButtonDemo from './ButtonDemo.vue';
import TypeaheadDemo from './TypeaheadDemo.vue';
export default {
	name: 'WvuiDemo',
	components: {
		ButtonDemo,
		TypeaheadDemo
	},
	props: {
		config: {
			type: Object,
			default: () => {}
		}
	}
};
</script>
