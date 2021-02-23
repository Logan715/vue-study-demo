import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "index",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../modules/Login")
    },
    {
        path: "*",
        name: "home",
        component: () => import("../Layout"),
        children: [
            {
                path: "/RequestUtil",
                name: "home",
                component: () => import("../modules/RequestUtil")
            },
            {
                path: "/vue/v-model",
                name: "vue-v-model",
                component: () => import("../modules/Vue/VModel")
            },
            {
                path: "/vue/sync",
                name: "vue-sync",
                component: () => import("../modules/Vue/Sync")
            }
        ]
    }
];

export default new VueRouter({
    routes
});
