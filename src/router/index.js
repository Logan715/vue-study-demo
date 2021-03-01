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
                path: "/vue/transition",
                name: "vue-transition",
                component: () => import("../modules/Vue/Transition")
            },
            {
                path: "/animation/animation",
                name: "animation-animation",
                component: () => import("../modules/Animation/Animation")
            },
            {
                path: "/animation/transition",
                name: "animation-transition",
                component: () => import("../modules/Animation/Transition")
            },
            {
                path: "/animation/transform",
                name: "animation-transform",
                component: () => import("../modules/Animation/Transform")
            }
        ]
    }
];

export default new VueRouter({
    routes
});
