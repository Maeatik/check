import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';
new Vue({
	router,
	store,
	el: "#app",
	render: h => h("router-view")
});
