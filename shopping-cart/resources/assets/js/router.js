import VueRouter from 'vue-router';


let routes = [
	{
		path : '/',
		component : require('./views/home.vue'),
		children:[
			{
				path: '',
				name : 'home',
				component: require('./views/home/laptop.vue')
			},
			{
				path: 'laptop',
				name : 'laptop',
				component: require('./views/home/laptop.vue')
			},
			{
				path: 'mobile',
				name : 'mobile',
				component: require('./views/home/mobile.vue')
			},
			{
				path: 'tab',
				name : 'tab',
				component: require('./views/home/tab.vue')
			}
		]
	},

	{
		path : '/my-cart',
		component : require('./views/my_cart')
	}
];


export default new VueRouter({
	routes,
	linkActiveClass : 'is-active'
});