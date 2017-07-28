import moment from 'moment';

let generateAxisSeries = (industries, startDate, endDate) => {
    let xAxis = [];
    let start = moment(startDate);
    let end = moment(endDate);

    while (start.diff(end, 'day') < 0) {
        xAxis.push(start.format('YYYY/MM/DD'));
        start = start.add(1, 'day');
    }

    let yAxis = [];
    industries.forEach(item => {
        yAxis.push(item, '');
    });

    return {
        xAxis,
        yAxis
    };
};

let generateDataSeries = (industries, startDate, endDate) => {
    let start = moment(startDate);
    let end = moment(endDate);
    let number = end.diff(start, 'day');
    let data = [];

    for (let i = 0; i < industries * 2 - 1; i++) {
        for (let j = 0; j < number; j++) {
            let val = i % 2 ? '-' : Math.round(Math.random() * 10000);
            data.push([j, i, val]);
        }
    }

    return data;
};

let getOption = (industries, startDate, endDate) => {
    let axisData = generateAxisSeries(industries, startDate, endDate);
    let datas = generateDataSeries(industries.length, startDate, endDate);
    let option = {
        tooltip: {
            show: true,
            formatter: '{a}<br />{b0}: {c0}'
        },
        grid: {
            top: '10%',
            left: '12%',
            right: '5%'
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
            data: axisData.xAxis
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
            data: axisData.yAxis
        },
        visualMap: {
            min: 0,
            max: 10000,
            calculable: true,
            orient: 'vertical',
            left: '2%',
            top: 'middle'
        },
        series: [{
            name: '广告投放',
            type: 'heatmap',
            data: datas,
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

export {
    generateAxisSeries as getAxisData,
    generateDataSeries as getData,
    getOption
};
