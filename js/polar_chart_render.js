import Request from './http.js'

const drawChart = () => {
    const barCharts = ['customer_concerns_data', 'customer_resistance_data']

    Request({
        method: 'post',
        url: '/crm/polar/customer/api',
    }).then(res => {
        const {success, data} = res.data
        if (success) {
            barCharts.forEach(item => {
                let chartData = data[item]
                let chart = document.querySelector(`[data-id=${item}]`)
                console.log('chart111', chart)
                chart.setData(chartData)
            })
        }
    })
}

drawChart()

