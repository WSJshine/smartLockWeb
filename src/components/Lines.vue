<template>
  <div id="mChart" :style="{width: '600px', height: '280px'}"></div>
</template>

<script>
export default {
  name: 'Lines',
  props: [
    //时间
    'alarmDateList',
    //报警数
    'alarmNumberList'
  ],
  data(){
    return{
      msg:100,
      DateList:this.alarmDateList,
      NumberList:this.alarmNumberList
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
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
            data :this.DateList
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'报警数',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:this.NumberList
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
