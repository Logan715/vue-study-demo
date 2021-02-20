<template>
    <div :style="{ width: width }">
        <layout-aside-menu-toggle
            :expanded="expanded"
            @onToggle="onToggle"
        ></layout-aside-menu-toggle>
        <layout-aside-menu
            :menus="menus"
            :expanded="expanded"
        ></layout-aside-menu>
    </div>
</template>
<script>
import LayoutAsideMenu from "./LayoutAsideMenu"
import LayoutAsideMenuToggle from "./LayoutAsideMenuToggle"
export default {
    components: {
        "layout-aside-menu": LayoutAsideMenu,
        "layout-aside-menu-toggle": LayoutAsideMenuToggle
    },
    props: {
        menus: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            width: "200px",
            expanded: true
        }
    },
    computed: {
        menusStr() {
            return JSON.stringify(this.menus)
        }
    },
    methods: {
        onToggle(expanded) {
            this.$data.expanded = expanded
            this.$data.width = expanded ? "200px" : "65px"
        }
    }
}
</script>
