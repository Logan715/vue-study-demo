<template>
    <el-container>
        <el-header class="header" height="64px">
            <layout-header @onExit="onExit"></layout-header>
        </el-header>
        <el-container class="main">
            <el-aside width="10" class="aside">
                <layout-aside :menus="menus"></layout-aside>
            </el-aside>
            <el-main class="content">
                <el-container>
                    <layout-content></layout-content>
                </el-container>
                <el-footer class="footer" height="32px">
                    <layout-footer></layout-footer>
                </el-footer>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import LayoutHeader from "./views/LayoutHeader"
import LayoutAside from "./views/LayoutAside"
import LayoutContent from "./views/LayoutContent"
import LayoutFooter from "./views/LayoutFooter"
import AuthUtil from "../utils/AuthUtil"
export default {
    components: {
        "layout-header": LayoutHeader,
        "layout-aside": LayoutAside,
        "layout-content": LayoutContent,
        "layout-footer": LayoutFooter
    },
    data() {
        return {}
    },
    computed: {
        menus: function() {
            const sessionUser = AuthUtil.getSessionUser()
            if (sessionUser && sessionUser.menus) {
                return sessionUser.menus
            }
            return []
        }
    },
    methods: {
        onExit() {
            AuthUtil.removeUserSession()
            this.$router.push("/")
        }
    }
}
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
}
.footer {
    background-color: rgb(228, 228, 228);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
