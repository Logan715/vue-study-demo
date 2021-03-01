<template>
    <el-row :gutter="24">
        <el-col :span="24" class="mb">
            <el-alert :closable="false" type="success">
                【rotate】参数angle表示元素相对于中心原点旋转的度数，单位为deg。如果度数为正，则表示顺时针旋转；如果度数为负，则表示逆时针旋转。
            </el-alert>
        </el-col>
        <el-col :span="24">
            <transform-rotate></transform-rotate>
        </el-col>
        <el-col :span="24" class="mb">
            <el-alert :closable="false" type="success">
                【skew】倾斜角度 可以向x轴倾斜， 也可以向y轴倾斜，也可以同时倾斜
            </el-alert>
        </el-col>
        <el-col :span="24">
            <transform-skew></transform-skew>
        </el-col>
    </el-row>
</template>

<script>
import TransformRotate from "./views/TransformRotate";
import TransformSkew from "./views/TransformSkew";
export default {
    components: {
        "transform-rotate": TransformRotate,
        "transform-skew": TransformSkew
    }
};
</script>
<style scoped></style>
