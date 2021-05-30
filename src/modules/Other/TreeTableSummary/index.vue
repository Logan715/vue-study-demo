<template>
    <nb-table :columns="columns" :data-source="list">
        <template v-slot:[slotName]="{row}">
            {{ row.age }} {{ slotName }}
        </template>
    </nb-table>
</template>
<script>
import NbTable from "./Table.vue";
export default {
    components: { NbTable },
    data() {
        return {
            slotName:"xxx",
            columns: [
                {
                    prop: "name",
                    label: "姓名",
                    align: "center",
                    width: "100px",
                    slotName: "xx"
                },
                {
                    prop: "age",
                    label: "年龄",
                    align: "center",
                    width: "100px",
                    slotName: "xxx"
                },
               
            ],
            list: [
                {
                    name: "张三",
                    age: "10",
                },
                {
                    name: "里斯",
                    age: "20",
                },
            ]
        };
    }
};
</script>
