<template>
<div>
	<header_cart></header_cart>
<div class="section">
<div class="container">
	<table class="table">
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>type</th>
	      <th>count</th>
	      <th>price</th>
	      <th>Total</th>
	    </tr>
	  </thead>
	    <tfoot>
	    <tr>
	      <th>TOTAL</th>
	      <th></th>
	      <th></th>
	      <th></th>
	      <th>{{total}}</th>
	    </tr>
	  </tfoot>
	  <tbody>
	    <tr v-for="item in items">
	      <th>{{ item.name }}</th>
	      <th>{{ item.type }}</th>
	      <th>{{ item.count }}</th>
	      <th>{{ item.price }}</th>
	      <th>{{ total_item(item.price,item.count) }}</th>
	    </tr>
	</tbody>
	</table>
	</div>
</div>
</div>
</template>

<script>
	import header_cart from '../components/header_cart.vue';
	import store from '../store.js';

	Vue.filter('pluckSum', function (list, key1, key2) {
    	return list.reduce(function(total, item) {
	    	    return total + item[key1] * item[key2]
	    	}, 0)
	});

	export default{
		components : {
			header_cart,
		},
		data(){
			return{
				items : [],
				total : 0
			}
		},
		methods:{
			total_item(pr,cnt){
				return pr*cnt;
			}
		},
		mounted(){
			this.items = store.getters.getItems;
			var res = 0;
			for(var key in this.items){
				res += this.items[key].price*this.items[key].count;
			}
			this.total = res;		
		},
	}
</script>