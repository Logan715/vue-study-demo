const path = require("path");

const config = [
    {
        key: "1",
        title: "测试",
        content: "测试1111111111",
        component: () => import(/* webpackChunkName: "Demo1" */ "./Demo/Demo1")
    },
    {
        key: "2",
        title: "测试2",
        content: "测试22",
        component: () => import(/* webpackChunkName: "Demo2" */ "./Demo/Demo2")
    },
    {
        key: "3",
        title: "测试3",
        content: "测试1333333",
        component: () => import(/* webpackChunkName: "Demo3" */ "./Demo/Demo3")
    }
];

export default config;
