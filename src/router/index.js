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
                path: "/echart/index",
                name: "echart-index",
                component: () => import("../modules/echart/index.vue")
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
            },
            {
                path: "/other/testAnother",
                name: "vue-slot",
                component: () => import("../modules/Other/TestAnother")
            },
            {
                path: "/other/threejs",
                name: "vue-slot",
                component: () => import("../modules/Other/Threejs")
            }
        ]
    }
];

export default new VueRouter({
    routes
});
