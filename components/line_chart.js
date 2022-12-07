class LineChart extends HTMLParagraphElement{
    hello = 'hello'
    shell = null
    chart = null
    constructor() {
        super();
        const data = []
        this.shell = this.render()
        const style = this.css()
        this.setupShadow(this.shell, style)
        this.chart = this.setupChart(this.shell)
    }

    render(){
        const shell = document.createElement('div')
        shell.setAttribute('class', 'chart')
        return shell
    }

    setupChart(shell){
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
        const chart = echarts.init(shell)
        chart.setOption(option)

        return chart
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
