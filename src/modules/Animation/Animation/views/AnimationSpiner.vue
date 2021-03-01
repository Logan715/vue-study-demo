<template>
    <el-row :gutter="24">
        <el-col :span="6">
            <i class="el-icon-s-tools spiner"></i>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-close spiner"></i>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-share spiner"></i>
        </el-col>
        <el-col :span="6">
            <i class="el-icon-sunrise spiner"></i>
        </el-col>
    </el-row>
</template>
<style scoped>
.spiner {
    font-size: 24px;
    animation: oflyRotate 1.2s linear infinite;
}
@keyframes oflyRotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
    }
}
</style>
