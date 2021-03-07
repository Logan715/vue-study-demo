const path = require("path");

const config = [
    {
        key: "1",
        title: "测试",
        content: "测试1111111111",
        path: path.resolve(
            __dirname,
            "src/modules/Undefined/DragAndDrop/Demo/Demo1.vue"
        )
    },
    {
        key: "2",
        title: "测试2",
        content: "测试22",
        path: path.resolve(
            __dirname,
            "src/modules/Undefined/DragAndDrop/Demo/Demo2.vue"
        )
    },
    {
        key: "3",
        title: "测试3",
        content: "测试1333333",
        path: path.resolve(
            __dirname,
            "src/modules/Undefined/DragAndDrop/Demo/Demo3.vue"
        )
    }
];

export default config;
