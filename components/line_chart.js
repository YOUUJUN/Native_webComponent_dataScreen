class LineChart extends HTMLParagraphElement{
    shell = null
    chart = null
    constructor() {
        super();
        const data = []
        this.shell = this.render()
        const style = this.css()
        this.setupShadow(this.shell, style)
    }

    render(){
        const shell = document.createElement('div')
        shell.setAttribute('class', 'chart')
        return shell
    }

    setupChart(shell, option){
        const chart = echarts.init(shell)
        chart.setOption(option)
        this.chart = chart
        return chart
    }

    drawSimpleLine(){
        const option = {
            tooltip: {
                trigger: 'axis'
            },
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
        }

        this.setupChart(this.shell, option)
    }

    drawMultipleLine() {
        const option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'left',
                top: '4%',
                data: ['客户咨询量', '客户签约量'],
                orient : 'vertical',
            },
            grid: {
                left: '120',
                right: '4%',
                bottom: '3%',
                top : '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '客户咨询量',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '客户签约量',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },

            ]
        };

        this.setupChart(this.shell, option)
    }


    setupShadow(shell, style){
        const shadow = this.attachShadow({mode : 'open'})
        shadow.appendChild(style)
        shadow.appendChild(shell)
    }

    css(){
        const style = document.createElement('style')

        style.textContent = `
            .chart{
                height:50rem;
                width:100%;
                color:red;
            }
        `
        return style
    }

}

customElements.define('line-chart', LineChart, { extends: 'p' })
