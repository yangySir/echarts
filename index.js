window.addEventListener('load',function () {
    let main=document.querySelectorAll('.main');
    var myChart = echarts.init(main[0]);
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myChart.setOption(option);
var myChart1 = echarts.init(main[1]);
option1 = {
    title: {
        text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
myChart1.setOption(option1);
    var myChart2 = echarts.init(main[2]);
    option2 = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(main[3]);
    option3 = {
        backgroundColor: '#2c343c',

        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        series : [
            {
                name: '豆瓣评分分析图',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data:[],
            }
            ]
    };
    let arr=[];
    for(let i=0;i<categories.length;i++){
         if(i==0){
             continue;
         }
         let name=categories[i];
         let value=data.filter(ele=>ele[4].includes(name)).length;
         arr.push({value,name});
    }
    option3.series[0].data=arr;
    myChart3.setOption(option3);



//散点图
    var myChart4 = echarts.init(main[4]);
    let series=[];
    let selected={};
    for(let i=0;i<categories.length;i++){
        let name1=categories[i];
        let movies=[];
        if(name1=='全部'){
            selected[name1]=true;
            movies=data;
        }else{
            selected[name1]=false;
            movies=data.filter(ele=>ele[4].includes(name1));
        }
        // console.log(movies);
        let obj={
            name: name1,
            data: movies,
            type: 'scatter',
            symbolSize: function (data) {
                return Math.ceil(data[1]/2);
            },
            label: {
                emphasis: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                    shadowOffsetY: 5,
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: 'rgb(251, 118, 123)'
                    }, {
                        offset: 1,
                        color: 'rgb(204, 46, 72)'
                    }])
                }
            }
        }
        series.push(obj)
    }
    console.log(series);
    option4 = {
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            offset: 0,
            color: '#f7f8fa'
        }, {
            offset: 1,
            color: '#99D54F'
        }]),
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                let data=params.data;
                return`
                评分：${data[1]}<br/>
                片名：${data[3]}<br/>
                `
            },
        },
        title: {
            text: '豆瓣电影'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 0,
            top: 20,
            bottom: 80,
            data: categories, //所有分类
            selected,
            selectedMode:'single',
        },
        xAxis: {
            name:'评论量',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name:'豆瓣评分',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            scale: true
        },
        series
    };
    myChart4.setOption(option4);
});
