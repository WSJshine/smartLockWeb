<template>
  <div id="myCharts" :style="{width: '330px', height: '300px'}"></div>
</template>

<script>
  // let echarts = require('echarts/lib/echarts');
  // // 引入柄状图组件
  // require('echarts/lib/chart/pie');
  // // 引入提示框和title组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/title');
export default {
  name: 'Pies',
  data(){
    return{
      msg:100,
    }
  },
  mounted(){
    this.drawPies();
  },
  methods: {
    drawPies() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myCharts'));
      // 绘制图表
      myChart.setOption({
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient : 'vertical',
          x : 'right',
          data:['防撬报警','低电量报警','劫持报警','假锁报警','离线状态']
        },
        calculable : true,
        series : [
          {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            itemStyle : {
              normal : {
                label : {
                  show : false
                },
                labelLine : {
                  show : false
                }
                }
              },
            data:[
              {value:335, name:'防撬报警',itemStyle:{
                  color:'#a1b7ff'
                }},
              {value:310, name:'低电量报警',itemStyle:{
                  color:'#ff9191'
                }},
              {value:234, name:'劫持报警',itemStyle:{
                  color:'#ffd491'
                }},
              {value:135, name:'假锁报警',itemStyle:{
                  color:'#91dcff'
                }},
              {value:1548, name:'离线状态',itemStyle:{
                  color:'#91ffdc'
                }}
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
</style>
