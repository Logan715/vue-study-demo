<template>
    <div class="tablePage">
        <el-button @click="clickMe">测试debounce1</el-button>
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            :header-cell-class-name="headerCrossRow"
            :span-method="moreRowsToOneRow"
        >
            <el-table-column
                header-align="center"
                label="辅导班学生汇总期末考试表"
            >
                <el-table-column
                    header-align="center"
                    align="center"
                    type="index"
                    label="标识"
                ></el-table-column>
                <el-table-column
                    header-align="center"
                    align="center"
                    prop="studentNo"
                    label="学号"
                ></el-table-column>
                <el-table-column
                    header-align="center"
                    align="center"
                    label="学生信息"
                >
                    <el-table-column
                        header-align="center"
                        align="center"
                        prop="schoolName"
                        label="所属学校"
                    ></el-table-column>
                    <el-table-column header-align="center" label="基本信息">
                        <el-table-column
                            header-align="center"
                            align="center"
                            prop="studentName"
                            label="姓名"
                        ></el-table-column>
                        <el-table-column
                            header-align="center"
                            align="center"
                            prop="studentAge"
                            label="年龄"
                        ></el-table-column>
                    </el-table-column>
                </el-table-column>
                <el-table-column header-align="center" label="考试结果">
                    <el-table-column header-align="center" align="center">
                        <el-table-column
                            header-align="center"
                            align="center"
                            prop="studentScore"
                            label="成绩"
                        ></el-table-column>
                    </el-table-column>
                    <!-- <el-table-column header-align="center" align="center" prop="testLevel" label="等级"></el-table-column> -->
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
let me;
import lodash from 'lodash'
export default {
    data() {
        return {
            lodash,
            tableData: [
                {
                    schoolName: "A小学",
                    studentNo: "2018001",
                    studentName: "Jack",
                    studentScore: 92,
                    testLevel: "优秀",
                    studentAge: 17
                },
                {
                    schoolName: "A小学",
                    studentNo: "2018002",
                    studentName: "Lily",
                    studentScore: 99,
                    testLevel: "优秀",
                    studentAge: 16
                },
                {
                    schoolName: "A小学",
                    studentNo: "2018003",
                    studentName: "Sony",
                    studentScore: 58,
                    testLevel: "不及格",
                    studentAge: 18
                },
                {
                    schoolName: "B小学",
                    studentNo: "2018004",
                    studentName: "Tom",
                    studentScore: 74,
                    testLevel: "良好",
                    studentAge: 16
                },
                {
                    schoolName: "B小学",
                    studentNo: "2018005",
                    studentName: "Jackie",
                    studentScore: 92,
                    testLevel: "优秀",
                    studentAge: 16
                },
                {
                    schoolName: "B小学",
                    studentNo: "2018006",
                    studentName: "Joe",
                    studentScore: 99,
                    testLevel: "优秀",
                    studentAge: 16
                },
                {
                    schoolName: "B小学",
                    studentNo: "2018007",
                    studentName: "Kobe",
                    studentScore: 58,
                    testLevel: "不及格",
                    studentAge: 17
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018008",
                    studentName: "Tomcat",
                    studentScore: 74,
                    testLevel: "良好",
                    studentAge: 17
                },
                {
                    schoolName: "B小学",
                    studentNo: "2018009",
                    studentName: "Trump",
                    studentScore: 92,
                    testLevel: "优秀",
                    studentAge: 18
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018010",
                    studentName: "Lily",
                    studentScore: 49,
                    testLevel: "不及格",
                    studentAge: 17
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018011",
                    studentName: "Sony",
                    studentScore: 58,
                    testLevel: "不及格",
                    studentAge: 17
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018012",
                    studentName: "Tom",
                    studentScore: 74,
                    testLevel: "良好",
                    studentAge: 17
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018013",
                    studentName: "Jack",
                    studentScore: 52,
                    testLevel: "不及格",
                    studentAge: 17
                },
                {
                    schoolName: "C小学",
                    studentNo: "2018014",
                    studentName: "Lily",
                    studentScore: 99,
                    testLevel: "优秀",
                    studentAge: 17
                }
            ]
        };
    },
    mounted() {
        me = this;
        var timer = setInterval(() => {
            console.log("计时器10ms执行一次，一旦找到目标节点即停止");
            var setCrossRowDom1 = document.getElementsByClassName(
                "setCrossRow1"
            );
            var setCrossRowDom2 = document.getElementsByClassName(
                "setCrossRow2"
            );
            var setCrossColDom1 = document.getElementsByClassName(
                "setCrossCol1"
            );
            var setCrossColDom2 = document.getElementsByClassName(
                "setCrossCol2"
            );
            if (
                setCrossRowDom1.length > 0 &&
                setCrossRowDom2.length > 0 &&
                setCrossColDom1.length > 0 &&
                setCrossColDom2.length > 0
            ) {
                setCrossRowDom1[0].setAttribute("rowspan", 2);
                setCrossRowDom2[0].setAttribute("style", "display: none;");
                setCrossColDom1[0].setAttribute("colspan", 2);
                setCrossColDom2[0].setAttribute("style", "display: none;");
                clearInterval(timer);
                timer = null;
            }
        }, 10);
    },
    methods: {
         handleClick() {
             console.count("handleClick");
             return lodash.debounce(this.clickMe(), 1000)
      
    },
    clickMe: lodash.debounce(function(){
        console.count("clickMe");
    },3000),
        // 一加载就给表头设置class，通过js设置表头里的单元格合并
        headerCrossRow({ rowIndex, column }) {
            if (rowIndex === 1 && column.label === "考试结果") {
                return "setCrossRow1";
            } else if (rowIndex === 2 && !column.label) {
                return "setCrossRow2";
            } else if (column.label === "标识") {
                return "setCrossCol1";
            } else if (column.label === "学号") {
                return "setCrossCol2";
            }
        },
        moreRowsToOneRow({ rowIndex, columnIndex }) {
            // 学校是不同学生可能共同拥有的属性，所以需要合并。
            // 其他属性不应该合并，比如成绩，即使成绩相等，也不应该合并为同一个单元格
            if (columnIndex === 2) {
                // 遍历各行  看是要合并行、合并几行，还是隐藏
                // 比如第7行开始要合并3行，那么第8行和第9行就得隐藏，要不然会右移占用其他单元格
                for (var i of Array.from(me.tableData.keys())) {
                    if (rowIndex === i) {
                        return me.heBingRowOfColumn2(i); //计算{colspan: X, rowspan: Y}的值
                    }
                }
            }
        },
        heBingRowOfColumn2(i) {
            var itemList = me.tableData.map(item => {
                return item.schoolName;
            });
            // 先拿到学校列表，本示例中拿到的数组为：
            // ["A小学", "A小学", "A小学", "B小学", "B小学", "B小学", "B小学", "C小学", "B小学", "C小学", "C小学", "C小学", "C小学", "C小学"]
            // 第一行，没有上一行，所以要单独处理下
            var returnObj = null;
            if (i == 0) {
                console.log(
                    `${itemList[i]}从下标${i}开始出现了${countShowTimes(
                        itemList,
                        i
                    )}次`
                );
                returnObj = {
                    colspan: 1,
                    rowspan: countShowTimes(itemList, i)
                };
            } else if (i >= 1) {
                // 第二行开始：
                if (itemList[i] == itemList[i - 1]) {
                    // 如果和上面一行值相等，就隐藏
                    returnObj = { colspan: 0, rowspan: 0 };
                } else {
                    // 如果和上面一行值不相等
                    console.log(
                        `${itemList[i]}从第${i}开始出现了${countShowTimes(
                            itemList,
                            i
                        )}次`
                    );
                    returnObj = {
                        colspan: 1,
                        rowspan: countShowTimes(itemList, i)
                    };
                }
            }
            return returnObj; //把合并的列数 行数返回给span-method的方法

            // 计算连续出现的次数，然后合并
            // 一旦有不同的值，则需要重新计数
            function countShowTimes(itemList, i) {
                var count = 1;
                // 如果一进来就是最后一个元素，那肯定只能出现一次，直接return
                if (i == itemList.length - 1) {
                    return 1;
                }
                for (var n = i + 1; n < itemList.length; n++) {
                    // 从i之后的那个元素开始遍历，一直到最后一个元素
                    if (itemList[n] === itemList[n - 1]) {
                        // 判断是否和前一个值相等，顺便处理一下边界值
                        count++;
                        if (n == itemList.length - 1) {
                            //如果此时已经判断的是最后一个元素了，就可以return了
                            return count;
                        }
                    } else {
                        // 如果出现不同的值了。或者如果到最后一个，再往后就没元素了，可以直接返回count了
                        return count;
                    }
                }
            }
        }
    }
};
</script>
<style scoped>
.tablePage {
    width: 100vw;
    height: 100vh;
    overflow: auto;
}
</style>
