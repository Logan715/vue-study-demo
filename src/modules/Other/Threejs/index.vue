<template>
  <div>
    <el-tabs
      :value="activeName"
      type="border-card"
    >
    <el-tab-pane name="base" label="入门">
      <three-base />
    </el-tab-pane>  
    <el-tab-pane name="line" label="Line">
      <three-line />
    </el-tab-pane>   
    <el-tab-pane name="ThreeGLTFLoader" label="ThreeGLTFLoader">
      <three-g-l-t-f-loader />
    </el-tab-pane>
    <el-tab-pane name="ThreeGLTFLoader2" label="ThreeGLTFLoader2">
      <three-g-l-t-f-loader2 />
    </el-tab-pane>
</el-tabs>
  </div>
</template>
<script>
import ThreeBase from './ThreeBase.vue'
import ThreeLine from './ThreeLine.vue'
import ThreeGLTFLoader from './ThreeGLTFLoader.vue'
import ThreeGLTFLoader2 from './ThreeGLTFLoader2.vue'

export default {
  components: {
    ThreeBase,
    ThreeLine,
    ThreeGLTFLoader,
    ThreeGLTFLoader2,
  },
  data() {
    return {
      activeName: 'base'

    }
  },
}
</script>