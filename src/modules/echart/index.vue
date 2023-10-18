<template>
    <div>
        <div style="width: 1000px;height:700px" id="echart"></div>
    </div>
</template>
<script>
import * as echarts from "echarts";
import response from "./response.json";
export default {
    data() {
        return {
            response
        };
    },
    computed: {
        data() {
          //this.response.dataList
          return this.response.dataList.map(cityData=> {
            const sum = {label: '累计数', value: cityData.data.map(({value})=>value).reduce((a,b)=>a+b)}
            return {
              name: cityData.name,
              data: [...cityData.data, sum]
            }
          })
        },
        option() {
            const _option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: this.yAxisData,
                    top: "25px"
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: "category",
                        data: this.xAxisData
                    }
                ],
                yAxis: {
                    type: "value",
                    data: this.yAxisData,
                    interval: 1,
                    max: 13
                },
                series: this.series
            };
            console.log("series", this.series);
            return _option;
        },
        xAxisData() {
            return this.data.map(item => item.name);
        },
        yAxisData() {
            return this.data[0].data.map((_, index) => index);
        },
        series() {
            return this.yAxisData.map((_, index) => {
                return {
                    name: index,
                    type: "bar",
                    stack: "total",
                    label: {
                    show: true,
                    formatter: (value)=> {
                      const { name, seriesIndex } = value
                      return this.getValue(name, seriesIndex);
                    }
                },
                emphasis: {
                    focus: 'series'
                },
                    data: this.xAxisData.map(date => 1)
                };
            });
            // return this.data.map(item=> {
            //     return {
            //       name: item.name,
            //       type: 'bar',
            //       stack: 'total',
            //       data:item.data.map(date=>1)
            //     }
            // return item.data.map(date=>{
            //   return [item.name, date.label]
            // })
            // })
        }
    },
    mounted() {
        const _id = document.getElementById("echart");
        const echart = echarts.init(_id);
        echart.setOption(this.option);
    },
    methods: {
      getValue(name, date) {
        const a = this.data.find((item)=>item.name ===name);
        return a.data[date].value
      }
    }
};
</script>
