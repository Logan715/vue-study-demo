<template>
    <el-container>
        <el-header class="header" height="64px">
            <layout-header
                @onExit="onExit"
                :expanded.sync="expanded"
            ></layout-header>
        </el-header>
        <el-container class="main">
            <el-aside width="10" class="aside">
                <layout-aside
                    :expanded="expanded"
                    :menus="menus"
                    :menu-active-key="menuActiveKey"
                    @select="select"
                ></layout-aside>
            </el-aside>
            <el-main class="content">
                <el-container>
                    <layout-content
                        :tabs="tabs"
                        v-model="menuActiveKey"
                        @tab-remove="tabRemove"
                    ></layout-content>
                </el-container>
                <el-footer class="footer" height="32px">
                    <layout-footer></layout-footer>
                </el-footer>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import LayoutHeader from "./views/LayoutHeader";
import LayoutAside from "./views/LayoutAside";
import LayoutContent from "./views/LayoutContent.vue";
import LayoutFooter from "./views/LayoutFooter";
import AuthUtil from "../utils/AuthUtil";
import { findMenu } from "./layout";
import modulesX from "../modules/index";
export default {
    components: {
        "layout-header": LayoutHeader,
        "layout-aside": LayoutAside,
        "layout-content": LayoutContent,
        "layout-footer": LayoutFooter
    },
    data() {
        return {
            menuActiveKey: "",
            expanded: true,
            tabs: []
        };
    },

    computed: {
        menus: function() {
            const sessionUser = AuthUtil.getSessionUser();
            if (sessionUser && sessionUser.menus) {
                return sessionUser.menus;
            }
            return [];
        }
    },
    created() {
        // const { menus } = AuthUtil.getSessionUser();
        // const menuActiveKey = findActiveMenuKey(menus, this.$route.path);
        // this.$data.menuActiveKey = menuActiveKey;
    },
    methods: {
        onExit() {
            AuthUtil.removeUserSession();
            this.$router.push("/login");
        },
        select(id) {
            const menu = findMenu(this.menus, id);
            const tabMenu = this.tabs.find(tab => tab.id === id);
            if (!tabMenu) {
                if (modulesX[id] && menu) {
                    this.tabs.push({
                        ...menu,
                        component: modulesX[id]
                    });
                    this.menuActiveKey = id;
                }
            } else {
                this.menuActiveKey = id;
            }
        },
        tabRemove(id) {
            const index = this.tabs.findIndex(tab => tab.id === id);
            const tab = this.tabs[index];
            // this.tabs.splice(index, 1);
            const nextTabs = this.tabs.filter(tab => tab.id !== id);
            // 定位 menuActiveKey
            if (tab.id === id) {
                if (index > 0) {
                    this.menuActiveKey = this.tabs[index - 1].id;
                } else if (this.tabs.length > 1) {
                    this.menuActiveKey = this.tabs[index + 1].id;
                }
            }
            this.tabs = nextTabs;
            if (nextTabs.length === 0) {
                this.menuActiveKey = "";
            }
        }
    },
    beforeRouteUpdate(to, from, next) {
        const { menus } = AuthUtil.getSessionUser();
        const menuActiveKey = findActiveMenuKey(menus, to.path);
        this.$data.menuActiveKey = menuActiveKey;
        next();
    }
};
</script>
<style scoped>
.header {
    background-color: #2196f3;
    display: flex;
    align-items: center;
}
.aside {
    background-color: white;
}
.main {
    height: calc(100vh - 64px);
}
.content {
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: rgb(228, 228, 228);
    overflow-x: hidden;
}
.footer {
    background-color: rgb(228, 228, 228);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
