const LEGEND = ['平台A', '平台B', '平台C', '平台D', '平台E', '平台F', '其他'];

let generateDataSeries = (legend) => {
    let data = [];
    legend.forEach(item => {
        data.push({
            name: item,
            value: Math.round(Math.random() * 1000)
        });
    });

    return data;
};

let getOption = () => {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: '10%',
            top: 'middle',
            data: LEGEND
        },
        series: [{
            name: '投放平台分布',
            type: 'pie',
            radius: '85%',
            center: ['40%', '50%'],
            data: generateDataSeries(LEGEND),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    return option;
};

export {
    getOption
};
