import './bootstrap';

import Vue from 'vue';

import VueRouter from 'vue-router';

import Vuex from 'vuex';


window.Vue = Vue;

window.VueRouter = VueRouter;

window.Vuex = Vuex;

Vue.use(VueRouter);

Vue.use(Vuex);


import router from './router.js';

import store from './store.js';


new Vue({
    el: '#app',
    router,
    store,
});
