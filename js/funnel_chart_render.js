import Request from './http.js'

const drawChart = () => {
    Request({
        method: 'post',
        url: '/crm/funnel/elder/api',
    }).then(res => {
        const {success, data} = res.data
        if (success) {
            let chart = document.querySelector("[data-id='chart_transform_analyze']")
            chart.setData(data)
        }
    })
}

drawChart()