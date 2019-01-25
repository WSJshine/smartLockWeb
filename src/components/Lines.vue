<template>
  <div id="mChart" :style="{width: '600px', height: '280px'}"></div>
</template>

<script>
  // let echarts = require('echarts/lib/echarts');
  // // 引入柄状图组件
  // require('echarts/lib/chart/line');
  // // 引入提示框和title组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/title');
  import axios from 'axios'
export default {
  name: 'Lines',
  data(){
    return{
      msg:100,
      datas:[],
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    getData(){
      axios.get('',{

      })
        .then(res=>{
          if (res.data.code===200){
            this.datas=res.data.data;
          }else if(res.data.code===300){

          }
        })
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('mChart'));
      // 绘制图表
      myChart.setOption({
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['意向']
        },
        lineStyle:{
          color:"rgba(82, 115, 227, 0.75)"
        },
        areaStyle: {
              // 区域图，纵向渐变填充
          color : "rgba(82, 115, 227, 0.75)"
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['2019-01-01','2019-01-02','2019-01-03','2019-01-04','2019-01-05','2019-01-06','2019-01-07'],
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'成交',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[5, 12, 8, 4, 6, 8, 2]
          },
        ]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mChart{
    left: 10px !important;
    top: -20px !important;
  }
</style>
