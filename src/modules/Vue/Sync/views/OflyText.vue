<template>
    <div>
        <span>子节点props: {{ desc }}: </span>
        <span>{{ title }}</span>
        <div>
            <el-button @click="onChange">change</el-button>
        </div>
    </div>
</template>

<script>
import mockjs from "mockjs";
export default {
    props: {
        desc: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        onChange() {
            this.$emit("update:title", mockjs.mock("@cfirst@clast"));
        }
    }
};
</script>
