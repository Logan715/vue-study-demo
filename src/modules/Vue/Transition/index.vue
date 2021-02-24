<template>
    <div>
        <el-row>
            <el-col :span="24" class="mb">
                <el-button-group>
                    <el-button @click="show1 = !show1">transition1</el-button>
                    <el-button @click="show2 = !show2">transition2</el-button>
                </el-button-group>
            </el-col>
            <el-col :span="24" class="mb">
                <transition name="fade">
                    <div v-if="show1" class="transition1">1</div>
                </transition>
            </el-col>
            <el-col :span="24" class="mb">
                <transition name="slide-fade">
                    <div v-if="show2" class="transition2">2</div>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return { show1: true, show2: true };
    }
};
</script>
<style scoped>
.mb {
    margin-bottom: 12px;
}
.transition1,
.transition2 {
    height: 80px;
    width: 80px;
    background-color: rebeccapurple;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.transition2 {
    background-color: rgb(151, 233, 130);
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>
