function getDynamicPixelSize() {
    var pxViewHeight = window.innerHeight;
    var pxViewWidth = window.innerWidth;

    var scale = Math.min((pxViewHeight / pxViewWidth), (pxViewWidth / pxViewHeight));

    var unit = (pxViewHeight / 10) * (pxViewWidth / 10);
    unit /= ((pxViewHeight + pxViewWidth) / 9);

    var dynamicPixelSize = Math.max(8, (unit * scale));

    console.log(scale);
    console.log(pxViewHeight / pxViewWidth);
    console.log(pxViewWidth / pxViewHeight);
    console.log("-----")
    return dynamicPixelSize + "px";
}

var dynamicPixelView = document.getElementById("dynamic-pixel");
    dynamicPixelView.style.fontSize = getDynamicPixelSize(dynamicPixelView);

function updateDynamicPixelSize() {
    var dynamicPixelView = document.getElementById("dynamic-pixel");
    dynamicPixelView.style.fontSize = getDynamicPixelSize(dynamicPixelView);
}

window.addEventListener('resize', updateDynamicPixelSize);