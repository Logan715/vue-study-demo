<template>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-alert :closable="false">
                css typing
            </el-alert>
            <animation-typing></animation-typing>
        </el-col>
        <el-col :span="24">
            <el-alert :closable="false">
                css spiner
            </el-alert>
            <animation-spiner></animation-spiner>
        </el-col>
    </el-row>
</template>

<script>
import Animation from "./views/AnimationTypeing";
import AnimationSpiner from "./views/AnimationSpiner";
export default {
    components: {
        "animation-typing": Animation,
        "animation-spiner": AnimationSpiner
    }
};
</script>
<style scoped></style>
