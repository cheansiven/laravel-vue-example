<template>
	<div>
		<h2>Mobile Zone</h2>
		<table class="table">
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>type</th>
	      <th>price</th>
	      <th>count</th>
	      <th>add/remove</th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr v-for="mobile in mobiles">
	      <th>{{ mobile.name }}</th>
	      <th>{{ mobile.type }}</th>
	      <th>{{ mobile.price }}</th>
	      <th>
	      	<p v-if="count[mobile.id]">{{ count[mobile.id] }}</p>
	      	<p v-else>{{ get_cnt(mobile.id) }}</p>
	      </th>
	      <th>
	      		<a class="button is-success" @click="add(mobile)">add</a>
				<a class="button is-warning" @click="remove(mobile.id)">remove</a>
			</th>
	    </tr>
	</tbody>
	</table>

	</div>
</template>


<script>
	import store from '../../store.js';

	export default{
		data(){
			return{
				mobiles : [],
				selected : [],
				count : {}
			}
		},
		created(){
			axios.get('/api/mobiles').then(({data}) => this.mobiles = data);
			this.selected = store.getters.getItems;
		},
		methods:{
			add(item){
				store.commit('add',item);
				Vue.set(this.count, item.id, this.selected[item.id].count);
			},
			remove(itemID){
				store.commit('remove',itemID);
				if(this.selected[itemID] && this.selected[itemID].count > 1)
					Vue.set(this.count, itemID, this.selected[itemID].count);
				else
					Vue.set(this.count, itemID, 0);
			},
			get_cnt(itemID){
				if(this.selected[itemID])
					return this.selected[itemID].count;
				else
					return 0;
			}
		}
	}
</script>