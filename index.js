let canvas = document.getElementById('canvas')

let c = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth

let z = 0;
let x = 0.1;
let y = 0;
let sig = 10
let ro = 28;
let beta = 8/3
let color = ""
let r = g = b = 50;
let change = 0.5;

function move(){
    let dx = 0.01 * (sig * (y - x))
    let dy = 0.01 * (x * (ro - z) - y);
    let dz = 0.01 * (x * y - beta * z)
    c.lineWidth = 3
    c.beginPath()
    //c.rect(x * 10 + canvas.width / 2, 10 *y + canvas.height / 2, 1, 1)
    color = `rgba(${r}, ${g}, ${b}, 1)`
    if(r <= 254){
        r += change
        b += 0
        g += 0
    }
    if(r >= 254 && g <= 254){
        g += change
        r += 0
        b += 0
    }
    else if(r <= 253){
        r += change
        g += 0
        b += 0
    }
    if(g >= 254){
        g += 0
        r += 0
        b += change
    }
    if(b >= 254){
        b = g = r = 50
    }
    c.strokeStyle = color
    c.moveTo(x * 10 + canvas.width / 2, 10 *y + canvas.height / 2)
    x += dx
    y += dy
    z += dz
    c.lineTo(x * 10 + canvas.width / 2, 10 *y + canvas.height / 2)
    c.stroke()
    console.log(`x: ${x} y: ${y} z: ${z} r: ${r} r: ${g}r: ${b}`)
}

setInterval(move, 10)