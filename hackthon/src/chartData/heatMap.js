import moment from 'moment';

let xAxis = [];
let yAxis = [];

let generateAxisSeries = (yAxisData, startDate, endDate) => {
    xAxis = [];
    let start = moment(startDate);
    let end = moment(endDate);

    while (start.diff(end, 'day') < 0) {
        xAxis.push(start.format('YYYY/MM/DD'));
        start = start.add(1, 'day');
    }

    yAxis = [];
    yAxisData.forEach(item => {
        yAxis.push(item, '');
    });
};

let generateDataSeries = () => {
    let data = [];

    for (let i = 0; i < yAxis.length - 1; i++) {
        for (let j = 0; j < xAxis.length; j++) {
            let val = i % 2 ? '-' : Math.round(Math.random() * 10000);
            data.push([j, i, val]);
        }
    }

    return data;
};

let getOption = (lastDrill, startDate, endDate) => {
    generateAxisSeries(lastDrill.childCategories, startDate, endDate);
    let option = {
        tooltip: {
            show: true,
            formatter: '{a}<br />{b0}: {c0}'
        },
        grid: {
            top: '10%',
            left: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            position: 'top',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: xAxis
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 30,
                textStyle: {
                    fontSize: 14
                }
            },
            axisTick: {
                show: false
            },
            data: yAxis
        },
        visualMap: {
            min: 0,
            max: 10000,
            calculable: true,
            orient: 'vertical',
            right: '2%',
            top: 'middle',
            text: ['高', '低'],
            inRange: {
                color: ['#e5eaf9', '#0033cc']
            }
        },
        series: [{
            name: lastDrill.key,
            type: 'heatmap',
            data: generateDataSeries(startDate, endDate),
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    return option;
};

let getOneData = (param) => {
    let coord = param.value;

    return {
        key: yAxis[coord[1]],
        date: xAxis[coord[0]],
        value: coord[2]
    };
};

export {
    generateAxisSeries as getAxisData,
    generateDataSeries as getData,
    getOption,
    getOneData
};
