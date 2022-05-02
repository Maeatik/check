import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import RssList from "./views/RssList";
import RssEdit from "./views/RssEdit";




Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				{ path: "/app", name: "app", component: RssList},
				{ path: "/:id", name: "edit", component: RssEdit },
		]},
	]
});
