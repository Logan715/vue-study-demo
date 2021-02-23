<template>
    <div>
        sync
        <ofly-text :title.sync="title" desc="title"></ofly-text>
        <div>父节点data.title: {{ title }}</div>
        <br />
        <ofly-text
            :title="name"
            desc="name"
            @update:title="onChange"
        ></ofly-text>
        <div>父节点data.name: {{ name }}</div>
    </div>
</template>

<script>
import OflyText from "./views/OflyText";
export default {
    components: {
        "ofly-text": OflyText
    },
    data() {
        return { title: "Logan", name: "Logan" };
    },
    methods: {
        onChange(value) {
            this.$data.name = value;
        }
    }
};
</script>
