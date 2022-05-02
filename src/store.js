import Vue from 'vue';
import Vuex from 'vuex';
import RssApi from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		parse: [],
		alertText: ""
	},
	getters: {

	},
	mutations: {
		'SET_RSS_ITEMS'(state, rssItems) {
			state.parse = rssItems;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		},
		'ADD_RSS_ITEM'(state, rssItem) {
			state.parse.push(rssItem);
		},
		'EDIT_RSS_ITEM'(state, rssItem) {
			const item = state.parse.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'REMOVE_RSS_ITEM'(state, rssItem) {
			const index = state.parse.findIndex(item => item.id === rssItem.id);
			state.parse.splice(index, 1);
		},
	},
	actions: {
		async initialize(context) {
			try {
				const response = await RssApi.parse.getAll();
				context.commit('SET_RSS_ITEMS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async addItem(context, item) {
			try {
				const response = await RssApi.parse.add(item);
				context.commit('ADD_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem(context, item) {
			try {
				const response = await RssApi.parse.edit(item.id, item);
				context.commit('EDIT_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem(context, id) {
			try {
				const response = await RssApi.parse.delete(id);
				context.commit('REMOVE_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
	}
});
