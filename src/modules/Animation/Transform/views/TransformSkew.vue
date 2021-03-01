<template>
    <el-row :gutter="24">
        <el-col :span="6" class="mb">
            <div class="origin">original</div>
        </el-col>
        <el-col :span="6" class="mb">
            <div class="origin skew-45">x->45deg</div>
        </el-col>
        <el-col :span="6" class="mb">
            <div class="origin skew-30-30">x->30deg,y->30deg</div>
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
.skew-45 {
    transform: skewX(45deg);
}
.skew-30-30 {
    transform: skew(30deg, 30deg);
}
</style>
