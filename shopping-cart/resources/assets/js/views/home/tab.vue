<template>
	<div>
		<h2>Tablets Zone</h2>
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
	    <tr v-for="tablet in tablets">
	      <th>{{ tablet.name }}</th>
	      <th>{{ tablet.type }}</th>
	      <th>{{ tablet.price }}</th>
	      <th>
	      	<p v-if="count[tablet.id]">{{ count[tablet.id] }}</p>
	      	<p v-else>{{ get_cnt(tablet.id) }}</p>
	      </th>
	      <th>
	      		<a class="button is-success" @click="add(tablet)">add</a>
				<a class="button is-warning" @click="remove(tablet.id)">remove</a>
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
				tablets : [],
				selected : [],
				count : {}
			}
		},
		mounted(){
			axios.get('/api/tablets').then(({data}) => {
				this.tablets = data;
				this.selected = store.getters.getItems;
			});
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