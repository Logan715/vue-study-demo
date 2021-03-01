<template>
    <el-row :gutter="24">
        <el-col :span="8">
            <div class="div1"></div>
        </el-col>
        <el-col :span="8">
            <div class="div2">delay 5s</div>
        </el-col>
        <el-col :span="8">
            <div class="div3">how are you</div>
        </el-col>
    </el-row>
</template>
<style scoped>
.div1,
.div2,
.div3 {
    width: 100px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    transition: background-color 2s;
    -o-transition: background-color 2s;
    -ms-transition: background-color 2s;
    -moz-transition: background-color 2s;
    -webkit-transition: background-color 2s;
}
.div2 {
    transition: height 2s 5s;
    -o-transition: background-color 2s 5s;
    -ms-transition: background-color 2s 5s;
    -moz-transition: background-color 2s 5s;
    -webkit-transition: background-color 2s 5s;
    background: gray;
}
.div3 {
    transition: color 2s;
    -o-transition: color 2s;
    -ms-transition: color 2s;
    -moz-transition: color 2s;
    -webkit-transition: color 2s;
    background-color: white;
    color: gold;
}
.div1:hover {
    background-color: black;
}
.div2:hover {
    background-color: yellow;
}
.div3:hover {
    color: red;
}
</style>
