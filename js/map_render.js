import Request from './http.js'

const map = document.getElementById('map')
// const searchBtn = document.getElementById('table_search')
// const searchInput = document.getElementById('tableReload')
//
// searchBtn.addEventListener('click', () => {
//     console.log('searchInput', searchInput)
//     let elderName = searchInput.value;
//     console.log('elderName', elderName)
//     // map.searchElder(elderName)
// })

const drawMap = () => {
    Request({
        method: 'post',
        url: '/crm/map/data/api',
    }).then(res => {
        const {success, data} = res.data
        if (success) {
            const {elders, institution} = data
            map.pointElders(elders)
            map.pointInstitution(institution)
        }
    })
}

drawMap()