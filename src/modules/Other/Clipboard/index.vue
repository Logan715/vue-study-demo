<template>
  <div class="container">
    <el-input v-model="text"></el-input>
    <br>
    <div @click="clipboardCopy" class="text"> {{ text }}</div>
  </div>
</template>

<script>
import copy from 'clipboard-copy'
export default {
  data () {
    return {
      text: ""
    }
  },
  methods:{
    async clipboardCopy(){
      await copy(this.text);
      this.$message.success('拷贝完成')
    }
  }
}
</script>
<style scoped>
.container {
  background: rgb(208, 205, 205);
  color: blue;
  cursor:copy;
}
.text {
  min-height: 100px;
  background: #cbdbb8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>