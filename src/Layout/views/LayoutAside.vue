<template>
    <layout-aside-menu
        :menus="menus"
        :expanded="expanded"
        :menu-active-key="menuActiveKey"
    ></layout-aside-menu>
</template>
<script>
import LayoutAsideMenu from "./LayoutAsideMenu";
// import gsap from "gsap";
export default {
    components: {
        "layout-aside-menu": LayoutAsideMenu
    },
    props: {
        menus: {
            type: Array,
            required: true
        },
        menuActiveKey: {
            type: String,
            required: true
        },
        expanded: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            width: "200px",
            transition: "toggle"
        };
    }
};
</script>
