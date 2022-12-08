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