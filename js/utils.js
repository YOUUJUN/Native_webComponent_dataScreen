//控制rem
function flexible() {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;
    function setRemUnit() {
        var rem = docEl.clientWidth / 192;
        docEl.style.fontSize = rem + "px";
    }
    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener("resize", setRemUnit);
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            setRemUnit();
        }
    });
}

/**
 *
 * @param startTime
 * @param endTime
 * @param rangType
 */
function genDateRange(startTime, endTime, rangType = 'month'){
    let arr = []
    const startArr = startTime.split('-').map(item => Number(item))
    const endArr = endTime.split('-').map(item => Number(item))
    switch (rangType){
        case 'month':
            arr = getMonthBetween(startTime, endTime)
            break;
        case 'year':
            arr = Array(endArr[0] - startArr[0] + 1).fill().map((item, index) => startArr[0] + index)
            break;
    }


    return arr;
}

function getMonthBetween(start, end) {
    var result = [];
    var s = start.split("-");
    var e = end.split("-");
    var min = new Date();
    var max = new Date();
    min.setFullYear(s[0], s[1]);
    max.setFullYear(e[0], e[1]);
    var curr = min;
    while (curr <= max) {
        var month = curr.getMonth();
        var str = curr.getFullYear() + "-" + (month);
        var s = curr.getFullYear() + "-0";
        if (str == s) {
            str = curr.getFullYear() + "-12";
        }
        result.push(str);
        curr.setMonth(month + 1);
    }
    console.log('result', result)
    return result;
}