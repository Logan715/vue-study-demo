<template>
    <el-row :gutter="24" class="drag-container">
        <el-col :span="24">
            <drag-item
                v-for="item in configList"
                :key="item.key"
                :draging="draging"
                @ondragstart="ondragstart"
                @ondragend="ondragend"
                @dragenter="dragenter"
                :config="item"
                :draging-key="dragingConfigKey"
            ></drag-item>
        </el-col>
    </el-row>
</template>
<script>
import DragItem from "./views/DragItem";
import config from "./config";
export default {
    components: {
        "drag-item": DragItem
    },
    data() {
        return {
            draging: false,
            configList: config,
            dragingConfig: null,
            originalConfigList: config
        };
    },
    computed: {
        dragingConfigKey() {
            return (this.$data.dragingConfig || {}).key;
        }
    },
    methods: {
        ondragstart(dragingConfig) {
            this.dragingConfig = dragingConfig;
            setTimeout(() => {
                this.$data.draging = true;
            });
        },
        ondragend(dragingConfig) {
            this.$data.draging = false;
        },
        dragenter(config) {
            const originalDragConfigIndex = this.configList.findIndex(
                ({ key }) => key === this.dragingConfigKey
            );
            const originalEnterDragConfigIndex = this.configList.findIndex(
                ({ key }) => key === config.key
            );
            const upper =
                originalDragConfigIndex >= originalEnterDragConfigIndex;

            const configListWithoutDragging = this.configList.filter(
                ({ key }) => key !== this.dragingConfigKey
            );
            const enterKeyIndex = configListWithoutDragging.findIndex(
                ({ key }) => config.key === key
            );

            configListWithoutDragging.splice(
                enterKeyIndex + (upper ? 0 : 1),
                0,
                this.dragingConfig
            );
            this.configList = configListWithoutDragging;
        }
    }
};
</script>
<style scoped>
.drag-container {
    background-color: white;
    height: 100%;
}
</style>
