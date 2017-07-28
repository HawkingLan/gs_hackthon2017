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
            data: ['平台A', '平台B', '平台C', '平台D', '平台E', '平台F', '其他']
        },
        series: [{
            name: '投放平台分布',
            type: 'pie',
            radius: '85%',
            center: ['40%', '50%'],
            data: [{
                value: 335,
                name: '平台A'
            }, {
                value: 310,
                name: '平台B'
            }, {
                value: 234,
                name: '平台C'
            }, {
                value: 135,
                name: '平台D'
            }, {
                value: 1548,
                name: '平台E'
            }, {
                value: 1548,
                name: '平台F'
            }, {
                value: 1548,
                name: '其他'
            }],
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
