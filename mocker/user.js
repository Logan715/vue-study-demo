const login = function(req, res) {
    const { pwd, loginId } = req.body
    if (pwd === "888888" && loginId === "admin") {
        return res.json({
            code: 1,
            data: {
                id: 1,
                loginId: "admin",
                sex: 6
            }
        })
    } else {
        return res.json({
            note: `账号或者密码不正确$|${loginId}`,
            code: -1
        })
    }
}

const getMenus = function(req, res) {
    return res.json({
        code: 1,
        records: [
            {
                id: "1",
                icon: "xxx",
                name: "版本管理",
                children: [
                    {
                        id: "1-1",
                        icon: "xxx",
                        name: "原生管理",
                        path: "/home"
                    },
                    {
                        id: "1-2",
                        icon: "xxx",
                        name: "RN管理",
                        path: "/home1"
                    },
                    {
                        id: "1-3",
                        icon: "xxx",
                        name: "H5管理",
                        path: "/home2"
                    }
                ]
            }
        ]
    })
}

exports.default = {
    "POST /api/user/auth": login,
    "GET /api/user/menus": getMenus
}
