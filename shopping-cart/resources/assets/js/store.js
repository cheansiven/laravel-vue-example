import Vuex from 'vuex';
import Vue from 'vue';

window.Vue = Vue;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items : {}
  },
  mutations: {
    add (state, item) {
      if(state.items[item.id]){
      	state.items[item.id].count++;
      }
      else{
        state.items[item.id] = item;
        state.items[item.id].count = 1;
      }
    },
    remove(state, itemID){
      if(state.items[itemID]){
      	state.items[itemID].count--;
      	if(state.items[itemID].count === 0){
      		delete state.items[itemID];
      	}
      }	
    }
  },
  getters:{
    getItems : state =>{
      return state.items;
    },
    getItemCnt : (state,id) =>{
      if(state.items[id])
        return state.items[id].count;
      return 0;
    }
  }
});