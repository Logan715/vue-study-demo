<template>
  <div class="container">
    <el-button type="primary" @click="check">确认框</el-button>
  </div>
</template>

<script>
import {
MessageBox,
} from 'element-ui';
export default {
  data () {
    return {
      text: ""
    }
  },
  methods:{
    async check() {
      await this.confirm('你确定提交?', ()=>{
        alert('提交')
      }, ()=> {
        alert('取消')
      });

      await this.confirm({title: '提示提示', message: '<span style="color:red;">heheda</span> cmz'}, ()=>{
        alert('提交')
      }, ()=> {
        alert('取消')
      });
    },
    async confirm(config, confirmFn, cancelFn) {
      let title='提示', message;
      if(typeof config === 'string') {
        message = config;
      } else if(typeof config === 'object') {
        config.title && (title = config.title);
        config.message && (message = config.message);
      } else {
        throw new Error('参数异常', config);
      }
       try {
         const a = await MessageBox({
          title: title,
          dangerouslyUseHTMLString: true,
          closeOnClickModal: false,
          message: message,
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          
        });
        confirmFn && confirmFn();
       } catch(e) {
         cancelFn && cancelFn();
       }
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