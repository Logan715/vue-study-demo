<template>
    <div class="drag-item">
        <div
            :class="[
                'drag-item-head',
                draging && config.key === dragingKey
                    ? 'drag-item-head-active'
                    : ''
            ]"
            :draggable="true"
            @dragstart="dragstart"
            @dragend="dragend"
            @dragenter="dragenter"
            @dragleave="dragleave"
        >
            <div>{{ config.title }}</div>
            <div>
                <i class="el-icon-ofly-ellipsis-v iconfont operation"></i>
            </div>
        </div>
        <div v-show="!draging" class="drag-item-content">
            {{ config.content }}
        </div>
        <div v-show="!draging" class="drag-item-content">
            <lazy-component></lazy-component>
        </div>
    </div>
</template>

<script>
import LazyComponent from "./LazyComponent.vue";
export default {
    components: {
        "lazy-component": LazyComponent
    },
    props: {
        draging: {
            type: Boolean,
            required: true
        },
        config: {
            type: Object,
            required: true
        },
        dragingKey: {
            type: String || Number,
            default: ""
        }
    },
    computed: {
        notDrag() {
            return !this.draging;
        }
    },
    methods: {
        dragstart() {
            this.$emit("ondragstart", this.config);
        },
        dragend() {
            this.$emit("ondragend", this.config);
        },
        dragenter(e) {
            if (this.config.key !== this.dragingKey) {
                this.$emit("dragenter", this.config);
            }
        },
        dragleave() {
            this.$emit("dragleave", this.config);
        }
    }
};
</script>

<style scoped>
.drag-container {
    height: 200px;
    background-color: antiquewhite;
}
.drag-item {
    margin: 12px;
    background-color: azure;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%);
}
.drag-item-head {
    cursor: move;
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    border-radius: 4px;
}
.drag-item-content {
    padding: 8px 12px;
}
.drag-item-head-active {
    background-color: gray;
}
.operation {
    color: #a6aab8;
    font-size: 18px;
}
</style>
