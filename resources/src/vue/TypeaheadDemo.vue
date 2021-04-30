<template>
	<div>
		<h2>TypeaheadSearch.vue</h2>
		<wvui-typeahead-search
			:id="'demo-search'"
			:button-label="'search'"
			:form-action="'#'"
			:footer-search-text="'footer text'"
			:suggestions-label="'suggestions'"
		></wvui-typeahead-search>
	</div>
</template>

<script>
const wvui = require( 'wvui' );

export default {
	name: 'TypeaheadDemo',
	components: {
		'wvui-typeahead-search': wvui.WvuiTypeaheadSearch
	}
};
</script>
