<template>
  <div id="myChart" :style="{width: '300px', height: '100%'}"></div>
</template>

<script>
  // let echarts = require('echarts/lib/echarts');
  // // 引入柄状图组件
  // require('echarts/lib/chart/pie');
  // // 引入提示框和title组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/title');
export default {
  name: 'Pie',
  data(){
    return{
      msg:100,
    }
  },
  mounted(){
    this.drawPie();
  },
  methods: {
    drawPie() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          data:['故障设备','正常设备',]
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[
              {value:this.msg, name:'故障设备',
                itemStyle:{
                color:'rgba(82, 115, 227, 0.75)'
                }},
              {value:310, name:'正常设备',
                itemStyle:{
                  color:'rgb(88, 189, 255)'
                }},
            ]
          }
        ]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*#myChart{*/
    /*left: -22px !important;*/
    /*top: 14px !important;*/
  /*}*/
</style>
