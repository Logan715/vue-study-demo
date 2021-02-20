<script>
const renderMenus = (createElement, menus = []) => {
    const list = menus.map(menu => {
        const { id, children, path, icon, name } = menu
        if (children && children.length) {
            return createElement("el-submenu", { props: { index: id } }, [
                createElement("template", { slot: "title" }, [
                    createElement("i", { class: "el-icon-location" }),
                    createElement("span", {
                        slot: "title",
                        domProps: {
                            innerHTML: name
                        }
                    })
                ]),
                ...renderMenus(createElement, children)
            ])
        } else {
            return createElement(
                "el-menu-item",
                {
                    props: {
                        index: path,
                        route: {
                            path: path
                        }
                    }
                },
                [
                    createElement("i", {
                        class: "el-icon-setting"
                    }),
                    createElement("span", {
                        slot: "title",
                        domProps: {
                            innerHTML: name
                        }
                    })
                ]
            )
        }
    })
    return list
}
export default {
    props: {
        menus: {
            type: Array,
            required: true
        },
        expanded: {
            type: Boolean,
            required: true
        }
    },
    render(createElement) {
        return createElement(
            "el-menu",
            {
                class: "menus",
                props: {
                    collapse: !this.expanded,
                    router: true
                }
            },
            renderMenus(createElement, this.menus)
        )
    }
}
</script>
<style scoped>
.menus {
    height: calc(100vh - 87px);
}
</style>
