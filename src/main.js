import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router/index.js";
import store from "./store";
import AuthUtil from "./utils/AuthUtil";
import 'canvas-datagrid';
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";
import "./assets/global.css";
import RequestUtil from "./utils/RequestUtil";
import "./directives/index";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.config.ignoredElements = ['canvas-datagrid']; // Suppresses warnings about unknown tags in Vue.
router.beforeEach((to, from, next) => {
    const { path } = to;
    if (!["/", "/login"].includes(path) && !AuthUtil.getSessionUser()) {
        next("/login");
    } else {
        next();
    }
});

RequestUtil.httpStatusErrorListener(response => {
    console.log("response", response);
    if (response.status === 403) {
        setTimeout(() => router.push("/login"));
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
