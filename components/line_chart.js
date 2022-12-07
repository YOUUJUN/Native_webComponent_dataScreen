class LineChart extends HTMLParagraphElement{

    constructor() {
        super();
        const data = []

        const shadow = this.attachShadow({mode : 'open'})
        const shell = document.createElement('div')
        shell.setAttribute('class', 'chart')

        const style = document.createElement('style')

        style.textContent = `
            .chart{
                height:50rem;
                width:100%;
                color:red;
            }
        `

        const span = document.createElement('span')
        span.setAttribute('class', 'chart')
        span.innerText = 'hello'

        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }
            ]
        };


        shadow.appendChild(style)
        shadow.appendChild(shell)
        const chart = echarts.init(shell)
        chart.setOption(option)
    }

}

customElements.define('line-chart', LineChart, { extends: 'p' })
