class PieChart extends HTMLParagraphElement{
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
        this.chart = chart
        return chart
    }

    drawPie(){
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: (params) =>{
                    let tips = `${params.name}<br />${params.marker} 占比：${params.percent}%<br />${params.marker} 数量：${params.value}`
                    return tips

                }
            },
            legend: {
                left: 'left',
                top: '4%',
                orient : 'vertical',
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '90%'],
                    center : ['67%', '50%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 5,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ]
                }
            ]
        }

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
                height:20rem;
                width:100%;
                color:red;
            }
        `
        return style
    }

}

customElements.define('pie-chart', PieChart, { extends: 'p' })
