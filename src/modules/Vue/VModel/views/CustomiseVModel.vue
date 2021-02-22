<template>
    <div>
        <label>自定义model: </label>
        <input :value="custom" />
        <button @click="onClick">click me</button>
    </div>
</template>
<script>
export default {
    model: {
        prop: "custom",
        event: "click1"
    },
    props: {
        custom: {
            type: Number,
            default: 0
        }
    },
    methods: {
        onClick(event) {
            this.$emit("click1", this.custom + 1);
        }
    }
};
</script>
