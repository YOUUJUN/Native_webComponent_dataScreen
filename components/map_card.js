class MapCard extends HTMLElement {
    shell = null
    map = null

    constructor() {
        super();
        this.shell = this.render()
        const style = this.css()
        this.setupShadow(this.shell, style)

        this.map = this.drawMap()
        this.pointElders()
    }

    render() {
        const shell = document.createElement('div')
        shell.setAttribute('class', 'map-wrap')
        const map = document.createElement('div')
        map.setAttribute('class', 'map')
        map.setAttribute('id', 'map')

        const searchWrap = document.createElement('div')
        searchWrap.classList.add('search')
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.addEventListener('click', () => {
            this.searchElder()
        })
        button.innerText = "搜索"
        searchWrap.appendChild(input)
        searchWrap.appendChild(button)

        shell.appendChild(map)
        shell.appendChild(searchWrap)

        return shell
    }

    drawMap(options) {
        const map = new BMap.Map(this.shell.querySelector('#map'), {enableMapClick: false})
        // map.centerAndZoom("合肥",15)
        map.enableScrollWheelZoom()

        return map
    }

    pointInstitution() {
        let point = new BMap.Point(116.404, 39.915);
        this.map.centerAndZoom(point, 15);
        let icon = new BMap.Icon('imgs/institution.png', new BMap.Size(50, 50))
        let marker = new BMap.Marker(point, {
            icon: icon
        });  // 创建标注
        this.map.addOverlay(marker);
    }

    pointElders() {
        let point = new BMap.Point(110.404, 39.915);
        this.map.centerAndZoom(point, 15);
        let icon = new BMap.Icon('imgs/elder.png', new BMap.Size(50, 50))
        let marker = new BMap.Marker(point, {
            icon: icon
        });  // 创建标注
        this.map.addOverlay(marker);
    }

    searchElder() {

    }

    setupShadow(shell, style) {
        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(style)
        shadow.appendChild(shell)
    }

    css() {
        const style = document.createElement('style')

        style.textContent = `
            .map-wrap{
                position:relative;
                height:50rem;
                width:100%;
            }
            
            .map{
                height:100%;
                width:100%;
            }
            
            .search{
                position:absolute;
                top:2rem;
                right: 1.5rem;
                display:flex;
                align-item:center;
            }
            
            .search input{
                width : 18rem;
                height:3.5rem;
                font-size : 1.8rem;
                color:rgba(0,0,0,0.5);
                padding: 0 .8rem;
                margin-right:1rem;
                border: 1px solid #ddd;
                border-radius: .5rem
            }
            
            .search button{
                background-color: #009688;
                color: #fff;
                border: 1px solid transparent;
                padding: 0 18px;
            }
        `
        return style
    }

}

customElements.define('map-card', MapCard)
