const GEO = ['北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江', '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西', '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海', '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'];

let generateData = () => {
    let data = [];
    GEO.forEach(geo => {
        data.push({
            name: geo,
            value: Math.round(Math.random() * 1000)
        });
    });

    return data;
};

let getOption = () => {
    return {
        color: ['#2f528f', '#3960a7', '#406dbb', '#6d89cb', '#9eadd8', '#c0c9e4', '#e5eaf9'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'center',
            data: ['地域投放']
        },
        visualMap: {
            min: 0,
            max: 2500,
            right: '10%',
            top: 'middle',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#e5eaf9', '#0033cc']
            }
        },
        series: [{
            name: '地域投放',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: generateData()
        }]
    };
};

export {
    getOption
};
