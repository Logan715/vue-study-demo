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
                path: "/home1",
                name: "home1",
                component: () => import("../modules/Home1")
            },
            {
                path: "/home2",
                name: "home2",
                component: () => import("../modules/Home2")
            }
        ]
    }
];

export default new VueRouter({
    routes
});
