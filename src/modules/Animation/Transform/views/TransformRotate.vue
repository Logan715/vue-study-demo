<template>
    <el-row :gutter="24">
        <el-col :span="6" class="mb">
            <div class="origin">original</div>
        </el-col>
        <el-col :span="6" class="mb">
            <div class="origin rotate-45">45 deg</div>
        </el-col>
        <el-col :span="6" class="mb">
            <div class="origin rotate-180">180 deg</div>
        </el-col>
    </el-row>
</template>

<style scoped>
.origin {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
}
.rotate-45 {
    transform: rotate(45deg);
}
.rotate-180 {
    transform: rotate(180deg);
}
</style>
