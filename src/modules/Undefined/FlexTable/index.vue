<template>
    <div class="flex-table">
        <div :style="{ height: height + 'px' }" class="block-1">
            <el-button-group>
                <el-button type="primary" @click="height += 30">+</el-button>
                <el-button type="primary" @click="height -= 30">-</el-button>
            </el-button-group>
        </div>
        <div class="block-2">
         <div style="flex:1;overflow-y: auto;">
            <el-table 
            size="mini"
            border 
            :data="dataSource" 
            stripe
          >
            <el-table-column
              prop="name"
              label="姓名"
              >
            </el-table-column>
             <el-table-column
              prop="age"
              label="年龄"
              >
            </el-table-column>
          </el-table>
         </div>
          <div class="footer">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
              >
            </el-pagination>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { 
          height: 40,
          dataSource: [
            {name: '张三', age: 28},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            {name: '李四', age: 38},
            
          ]
        };
    },
};
</script>
<style scoped>
.flex-table {
    height: calc(100vh - 190px);
    display: flex;
    flex-direction: column;
}
.block-1 {
    background-color: antiquewhite;
    width: 100%;
    text-align: center;
}
.block-2 {
    background-color: gray;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
.footer {
    width: 100%;
    text-align: right;
    background-color: white;
    /* position: fixed;
    z-index: 1;
    bottom: 50px;
    right: 20px;
    text-align: right;
    width: 100%; */
}
</style>