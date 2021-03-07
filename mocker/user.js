const login = function(req, res) {
    const { pwd, loginId } = req.body;
    if (pwd === "888888" && loginId === "admin") {
        return res.json({
            code: 1,
            data: {
                id: 1,
                loginId: "admin",
                sex: 6
            }
        });
    } else {
        return res.json({
            note: `账号或者密码不正确$|${loginId}`,
            code: -1
        });
    }
};

const getMenus = function(req, res) {
    return res.json({
        code: 1,
        records: [
            {
                id: "vue",
                icon: "el-icon-ofly-vue iconfont",
                name: "Vue",
                children: [
                    {
                        id: "vModal",
                        icon: "el-icon-ofly-v-model iconfont",
                        name: "自定义v-model"
                    },
                    {
                        id: "vueSync",
                        icon: "el-icon-ofly-sync iconfont",
                        name: ".sync 修饰符"
                    },
                    {
                        id: "vueSlot",
                        icon: "el-icon-ofly-slot iconfont",
                        name: "slot操作"
                    },
                    {
                        id: "vueTransition",
                        icon: "el-icon-ofly-transition iconfont",
                        name: "transition"
                    }
                ]
            },
            {
                id: "1",
                icon: "el-icon-ofly-tools iconfont",
                name: "工具",
                children: [
                    {
                        id: "requestUtil",
                        icon: "el-icon-ofly-request iconfont",
                        name: "RequestUtil"
                    }
                ]
            },
            {
                id: "2",
                icon: "el-icon-ofly-animation iconfont",
                name: "css动画",
                children: [
                    {
                        id: "animationAnimation",
                        icon: "el-icon-ofly-animation iconfont",
                        name: "动画"
                    },
                    {
                        id: "animationTransition",
                        icon: "el-icon-ofly-transition iconfont",
                        name: "渐变"
                    },
                    {
                        id: "animationTransform",
                        icon: "el-icon-ofly-transform iconfont",
                        name: "旋转"
                    }
                ]
            },
            {
                id: "3",
                icon: "el-icon-ofly-animation iconfont",
                name: "其他",
                children: [
                    {
                        id: "dragAndDrop",
                        icon: "el-icon-ofly-animation iconfont",
                        name: "拖拽"
                    }
                ]
            }
        ]
    });
};

exports.default = {
    "POST /api/user/auth": login,
    "GET /api/user/menus": getMenus
};
