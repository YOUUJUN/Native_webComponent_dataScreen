import Request from './http.js'

//渲染转化率折线图
const draw_chart_conversion_rate = (startTime, endTime, rangeType) => {
    const chart = document.getElementById('chart_conversion_rate')

    Request({
        method: 'post',
        url : '/crm/conversion/rate/api',
        data : {
            select : rangeType,
            date_start : startTime,
            date_end : endTime
        }
    }).then(res => {
        const {success, data} = res.data
        const payload = {
            'name' : data
        }
        if(success){
            chart.setLineData(startTime, endTime, payload, rangeType)
        }
    })
}

//渲染老人签约量折线图
const draw_chart_elder_sign = (startTime, endTime, rangeType) => {
    const chart = document.getElementById('chart_elder_sign')

    Request({
        method: 'post',
        url : '/crm/consulting/signed/api',
        data : {
            select : rangeType,
            date_start : startTime,
            date_end : endTime
        }
    }).then(res => {
        const {success, data} = res.data
        console.log('data', data)
        if(success){
            const payload = {
                '客户咨询量' : data.consulting_volume,
                '客户签约量' : data.signed_quantity
            }
            chart.setLineData(startTime, endTime, payload, rangeType)
        }
    })
}



const timeComponents = [
    {
        name : 'time_conversion_rate',
        month : 'time_conversion_rate_month',
        year : 'time_conversion_rate_year',
        callback : (...params) => draw_chart_conversion_rate.apply(this, params),
        init : () => {
            const date = new Date()
            draw_chart_conversion_rate(`${date.getFullYear()}-01`, `${date.getFullYear()}-12`, 'month')
        }
    },
    {
        name : 'time_elder_sign',
        month : 'time_elder_sign_month',
        year : 'time_elder_sign_year',
        callback : (...params) => draw_chart_elder_sign.apply(this, params),
        init : () => {
            const date = new Date()
            draw_chart_elder_sign(`${date.getFullYear()}-01`, `${date.getFullYear()}-12`, 'month')
        }
    },
    {
        name : 'time_visit',
        month : 'time_visit_month',
        year : 'time_visit_year',
        callback : (...params) => {},
        init : () => {}
    }
]

//监听时间变化
timeComponents.forEach(component => {
    const {name, month, year, callback, init} = component
    genTimeRange(month, 'month', (value, date, endDate) => {
        if(!value){
            return;
        }
        let startTime = `${date.year}-${date.month}`
        let endTime = `${endDate.year}-${endDate.month}`
        callback(startTime, endTime, 'month')
    })

    genTimeRange(year, 'year', (value, date, endDate) => {
        if(!value){
            return;
        }
        let startTime = `${date.year}`
        let endTime = `${endDate.year}`
        callback(startTime, endTime, 'year')
    })

    layui.use('form', () =>{
        const form = layui.form;
        form.on(`switch(${name})`, function(data){
            if(data.elem.checked){
                document.getElementById(month).classList.remove('hide')
                document.getElementById(year).classList.add('hide')
            }else{
                document.getElementById(month).classList.add('hide')
                document.getElementById(year).classList.remove('hide')
            }
        });
    });

    init()
})

