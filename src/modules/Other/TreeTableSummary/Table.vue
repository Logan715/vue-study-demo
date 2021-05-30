<template>
  <div>
    <el-table
      class="nb-table"
      size="mini"
      stripe
      border
      element-loading-text="数据加载中..."
      element-loading-spinner="el-icon-loading"
      :highlight-current-row="true"
      :header-cell-style="{ background: '#eff4ff',color: 'rgba(0,0,0,.85)','font-weight': 700 }"
      :data="dataSource"
      :span-method="spanMethod"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-for="column in columns"
        :key="'nb_table_column_' + column.prop"
        v-bind="column"
      >
        <template v-if="column.slotName" #default="slotProps">
          <slot :name="column.slotName" v-bind="slotProps">
            {{ slotProps.row[column.prop] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
    <template v-if="showPagination">
      <el-pagination
        class="pagination"
        layout="total, sizes, prev, pager, next, jumper"
        background
        hide-on-single-page
        :current-page="pagination.current"
        :page-size="pagination.size"
        :total="pagination.total"
        @size-change="sizeChange"
        @current-change="currentChange"
        @prevClick="prevClick"
        @nextClick="nextClick"
      >
      </el-pagination>
    </template>
  </div>
</template>

<script >
import Vue from "vue";

export default Vue.extend({
  name: "nb-table",
  components: {},

  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      },
    },
    pagination: {
      type: Object,
      default(){return {}}
    },
    spanMethod: {
      type: Function,
      default(){}
    },
    summaryMethod: {
      type: Function,
      default(){}
    },
  },
   data() {
    return {};
  },
  computed: {
    showPagination() {
      return !!this.pagination;
    },
    showSummary() {
      return !!this.summaryMethod;
    },
  },
  methods: {
    sizeChange(size) {
      this.$emit(
        "paginationChange",
        Object.assign(this.pagination, {
          size,
        })
      );
    },
    currentChange(current) {
      this.$emit(
        "paginationChange",
        Object.assign(this.pagination, { current })
      );
    },
    prevClick(current) {
      this.$emit(
        "paginationChange",
        Object.assign(this.pagination, {
          current,
        })
      );
    },
    nextClick(current) {
      this.$emit(
        "paginationChange",
        Object.assign(this.pagination, {
          current,
        })
      );
    },
    handleSelectionChange(val) {
      // console.log(val)
      this.$emit("handleSelectionChange", val);
    },
  },
 
});
</script>

<style  scoped>
.pagination {
  text-align: right;
  margin-top: 4px;
}

.nb-table /deep/ .el-table__fixed-right{
  height: 100% !important;
}
.nb-table /deep/ .el-table__fixed{
 height: 100% !important;
}

</style>

