import Request from './http.js'

const drawChart = () => {
    const pieCharts = ['cons_mode_data', 'cons_object_data', 'occ_mode_data', 'occ_room_data', 'payer_data', 'occ_state_data', 'children_data', 'source_elder_data']
    const roseCharts = ['form_data', 'nursing_type_data', 'expense_scope_data']

    Request({
        method: 'post',
        url: '/crm/pie/category/api',
    }).then(res => {
        const {success, data} = res.data
        if (success) {

            pieCharts.forEach(item => {
                let chartData = data[item]
                let chart = document.querySelector(`[data-id=${item}]`)
                chart.setData(chartData)
            })

            roseCharts.forEach(item => {
                let chartData = data[item]
                let chart = document.querySelector(`[data-id=${item}]`)
                chart.setData(chartData)
            })

        }
    })
}

drawChart()