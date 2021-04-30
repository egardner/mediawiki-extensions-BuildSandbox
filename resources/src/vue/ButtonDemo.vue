<template>
	<div>
		<h2>WvuiButton.vue</h2>
		<wvui-button @click="clicked++">
			Default Button
		</wvui-button>

		<wvui-button :action="'progressive'" @click="clicked++">
			Progressive button
		</wvui-button>

		<wvui-button :action="'destructive'" @click="clicked--">
			Destructive button
		</wvui-button>

		<wvui-button :quiet="true" @click="clicked++">
			Quiet button
		</wvui-button>

		<pre>Clicked {{ clicked }} times.</pre>
	</div>
</template>

<script>
const wvui = require( 'wvui' );

export default {
	components: {
		'wvui-button': wvui.WvuiButton
	},
	data() {
		return {
			clicked: 0
		};
	}
};
</script>
