
const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// document.getElementById("stop").addEventListener("click",stopChangingColor)

let intervelId;
const startChangingColor = function () {
    if (!intervelId) {
        intervelId = setInterval(changeBgColor, 1000)

    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()

    }
}
const stopChangingColor = function () {
    clearInterval(intervelId)
    intervelId = null;


}
document.getElementById("start").addEventListener("click", startChangingColor)
document.getElementById("stop").addEventListener("click", stopChangingColor)

