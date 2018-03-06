<template>
	<div>
		<h2>Laptop Products</h2>
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
	    <tr v-for="laptop in laptops">
	      <th>{{ laptop.name }}</th>
	      <th>{{ laptop.type }}</th>
	      <th>{{ laptop.price }}</th>
	      <th>
	      	<p v-if="count[laptop.id]">{{ count[laptop.id] }}</p>
	      	<p v-else>{{ get_cnt(laptop.id) }}</p>
	      </th>
	      <th>
	      		<a class="button is-success" @click="add(laptop)">add</a>
				<a class="button is-warning" @click="remove(laptop.id)">remove</a>
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
				laptops : [],
				selected : [],
				count : {}
			}
		},
		created(){
			axios.get('/api/laptops').then(({data}) => this.laptops = data);
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
				if(this.selected[itemID]){
					return this.selected[itemID].count;
				}
				else{
					return 0;
				}
			}
		}
	}
</script>
