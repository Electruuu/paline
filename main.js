const can = document.getElementById("can")
const ctx = can.getContext("2d")

let c = {
    number: 6,
    spacing: 20
}

let ctrls = document.getElementsByClassName("ctrl")
for (let i = 0; i < ctrls.length; i++) {
    ctrls[i].addEventListener("input", e => {
        console.log(e.target.value)
        c[e.target.getAttribute("name")] = e.target.value
        draw()
    })
}

draw()

function draw() {
    ctx.clearRect(0, 0, can.width, can.height)
    for (let i = 1; i <= c.number; i++) {
        ctx.fillRect(0, i*c.spacing, can.width, c.width)
        // ctx.beginPath()
        // ctx.moveTo(0, i*c.spacing)
        // ctx.lineTo(can.width, i*c.spacing)
        // ctx.stroke()
    }
}
