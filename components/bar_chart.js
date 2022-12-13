class BarChart extends HTMLElement{
    shell = null
    chart = null
    constructor() {
        super();
        const data = []
        this.shell = this.render()
        const style = this.css()
        this.setupShadow(this.shell, style)

        this.drawPie()
    }

    render(){
        const shell = document.createElement('div')
        shell.setAttribute('class', 'chart')
        return shell
    }

    setupChart(shell, option){
        const chart = echarts.init(shell)
        chart.setOption(option)
        setTimeout(() => {
            chart.resize();
        }, 100)
        window.addEventListener("resize", function () {
            setTimeout(() => {
                chart.resize();
            }, 100)
        })
        this.chart = chart
        return chart
    }

    drawPie(){
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
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
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
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

customElements.define('bar-chart', BarChart)
