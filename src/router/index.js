import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "index",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../pages/Login"),
	},
	{
		path: "/home",
		name: "home",
		component: () => import("../components/Home.vue"),
	},
];

export default new VueRouter({
	routes,
});
