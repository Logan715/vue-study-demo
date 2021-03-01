<template>
    <el-row :gutter="24">
        <el-col :span="24" class="mb">
            <el-alert :closable="false" type="success">
                transition-ptoperty: css 的属性 <br />
                transition-duration: 渐变持续时间<br />
                transition-delay: 渐变延迟时间<br />
            </el-alert>
        </el-col>
        <el-col :span="24" class="mb">
            <el-alert :closable="false">
                【hover】transition 宽｜高 渐变
            </el-alert>
        </el-col>
        <el-col :span="24" class="mb">
            <transition-position></transition-position>
        </el-col>
        <el-col :span="24" class="mb">
            <el-alert :closable="false">
                【hover】transition 颜色 渐变
            </el-alert>
        </el-col>
        <el-col :span="24" class="mb">
            <transition-color></transition-color>
        </el-col>
    </el-row>
</template>

<script>
import TransitionPosition from "./views/TransitionPosition";
import TransitionColor from "./views/TransitionColor";

export default {
    components: {
        "transition-position": TransitionPosition,
        "transition-color": TransitionColor
    }
};
</script>
<style scoped>
.mb {
    margin-bottom: 12px;
}
</style>
