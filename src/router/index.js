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
            },
            {
                path: "/vue/slot",
                name: "vue-slot",
                component: () => import("../modules/Vue/Slot")
            },
            {
                path: "/other/clipboard",
                name: "vue-slot",
                component: () => import("../modules/Other/Clipboard")
            },
            {
                path: "/other/confirm",
                name: "vue-slot",
                component: () => import("../modules/Other/Confirm")
            },
            {
                path: "/other/treeTableSummary",
                name: "vue-slot",
                component: () => import("../modules/Other/TreeTableSummary")
            }
        ]
    }
];

export default new VueRouter({
    routes
});
