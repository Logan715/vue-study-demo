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
                id: "0",
                icon: "el-icon-ofly-vue iconfont",
                name: "Vue Study",
                children: [
                    {
                        id: "0-0",
                        icon: "el-icon-ofly-v-model iconfont",
                        name: "自定义v-model",
                        path: "/vue/v-model"
                    },
                    {
                        id: "0-1",
                        icon: "el-icon-ofly-sync iconfont",
                        name: ".sync 修饰符",
                        path: "/vue/sync"
                    },
                    {
                        id: "0-2",
                        icon: "el-icon-ofly-slot iconfont",
                        name: "slot操作",
                        path: "/vue/slot"
                    }
                ]
            },
            {
                id: "1",
                icon: "el-icon-ofly-tools iconfont",
                name: "工具",
                children: [
                    {
                        id: "1-1",
                        icon: "el-icon-ofly-request iconfont",
                        name: "RequestUtil",
                        path: "/RequestUtil"
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
