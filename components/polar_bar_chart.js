class PolarBarChart extends HTMLElement{
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
            title: {
                text: '客户关注点',
                left : 'center',
                top: '20'
            },
            tooltip: {
                trigger: 'axis',
            },
            angleAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            radiusAxis: {},
            polar: {},
            series: [
                {
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [2, 4, 6, 1, 3, 2, 1],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
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

customElements.define('polar-bar-chart', PolarBarChart)
