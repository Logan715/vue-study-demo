import Vue from "vue"
import App from "./App.vue"
import ElementUI from "element-ui"
import router from "./router/index.js"
import store from "./store"
Vue.config.productionTip = false
import AuthUtil from "./utils/AuthUtil"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/iconfont/iconfont.css"
Vue.use(ElementUI)

// TODO 打印路由信息  回头去掉
router.beforeEach((to, from, next) => {
    console.log(to, from)
    const { path } = to
    if (!["/", "/login"].includes(path) && !AuthUtil.getSessionUser()) {
        next("/login")
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
