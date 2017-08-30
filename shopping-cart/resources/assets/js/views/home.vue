<template>
<div>
	<header_home></header_home>

	<div class="section">
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
	</div>
</template>


<script>

import header_home from '../components/header_home.vue';

export default{
	data(){
		return{

		}
	},
	components: {
		header_home
	}
}

</script>