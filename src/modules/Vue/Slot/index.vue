<template>
    <el-row :gutter="24">
        <el-col :span="6">
            基础slot
        </el-col>
        <el-col :span="18" class="mb">
            <ofly-slot-base>基础slot</ofly-slot-base>
            <ofly-slot-base></ofly-slot-base>
        </el-col>
        <el-col :span="6">
            具名插槽
        </el-col>
        <el-col :span="18">
            <ofly-slot-special>
                <div>我是特殊slot default 1</div>
                <template v-slot:header>
                    header
                </template>
                <div>我是特殊slot default 2</div>
                <template #footer>
                    footer v-solt 缩写
                </template>
            </ofly-slot-special>
        </el-col>
        <el-col :span="24">
            <el-alert :closable="false">
                作用域插槽: 自 2.6.0 起有所更新。已废弃的使用 slot-scope
            </el-alert>
        </el-col>
        <el-col :span="6">
            作用域插槽
        </el-col>
        <el-col :span="18" class="mb">
            <ofly-slot-scope> </ofly-slot-scope>
            <ofly-slot-scope v-slot:default="slotProps">
                {{ slotProps.user.firstName }}
            </ofly-slot-scope>

            <ofly-slot-scope>
                <template #default="slotProps">
                    {{ slotProps.user.firstName }}
                </template>
            </ofly-slot-scope>
            <ofly-slot-scope v-slot="slotProps">
                {{ slotProps.user.firstName }}
            </ofly-slot-scope>
            <ofly-slot-scope>
                <template v-slot="slotProps">
                    {{ slotProps.user.firstName }}
                </template>
                <template v-slot:footer="footerProps">
                    {{ footerProps.lastName }}
                </template>
            </ofly-slot-scope>
        </el-col>
        <el-col :span="6">
            解构插槽 Prop
        </el-col>
        <el-col :span="18">
            <ofly-slot-scope v-slot="{ user }">
                {{ user.firstName }}
            </ofly-slot-scope>
        </el-col>
    </el-row>
</template>

<script>
import SlotBase from "./views/SlotBase";
import SlotSpecial from "./views/SlotSpecial";
import SlotScope from "./views/SlotScope";
export default {
    components: {
        "ofly-slot-base": SlotBase,
        "ofly-slot-special": SlotSpecial,
        "ofly-slot-scope": SlotScope
    }
};
</script>
<style scoped>
.mb {
    margin-bottom: 24px;
}
</style>
