<template>
    <el-row :gutter="24">
        <el-col :span="8">
            <div class="div1"></div>
        </el-col>
        <el-col :span="8">
            <div class="div2"></div>
        </el-col>
        <el-col :span="8">
            <div class="div3"></div>
        </el-col>
    </el-row>
</template>
<style scoped>
.div1,
.div2,
.div3 {
    width: 50px;
    height: 50px;
    transition: width 2s;
    -o-transition: width 2s;
    -ms-transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    background-color: blue;
}
.div2 {
    transition: height 2s;
    -o-transition: height 2s;
    -ms-transition: height 2s;
    -moz-transition: height 2s;
    -webkit-transition: height 2s;
    background: gray;
}
.div3 {
    transition: width 2s, height 4s;
    -o-transition: width 2s, height 4s;
    -ms-transition: width 2s, height 4s;
    -moz-transition: width 2s, height 4s;
    -webkit-transition: width 2s, height 4s;
    background-color: gold;
}
.div1:hover {
    width: 200px;
}
.div2:hover {
    height: 200px;
}
.div3:hover {
    width: 200px;
    height: 200px;
}
</style>
