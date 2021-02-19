import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router/index.js";
Vue.config.productionTip = false;

import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// TODO 打印路由信息  回头去掉
router.beforeEach((to, from, next) => {
	console.log(to, from);
	next();
});

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
