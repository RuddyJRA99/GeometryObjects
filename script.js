const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let width = undefined
let height = undefined

//const cube = new Pyramid()
const cube = new Cube()
//const cube = new Octahedron()
//const cube = new Tetrahedron()

const deep = 500;


resizeCanvas()
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    width = canvas.parentNode.clientHeight
    height = width

    canvas.width = width
    canvas.height = height
    ctx.translate(width/2, height/2)
    render();
}

function deepFactor(value) {
    if(deep === 0){
        return 1
    }
  return ((value + deep) / deep);
}

function to2D(point) {
    return point.map(i => i*deepFactor(point[2]))
}

function drawLine(pointA, pointB, color){
    const [aX, aY] = to2D(pointA)
    const [bX, bY]  = to2D(pointB)

    ctx.beginPath();
    ctx.moveTo(aX, aY)
    ctx.lineTo(bX, bY)
    ctx.strokeStyle = color
    ctx.stroke()
}

function render(){
    ctx.clearRect(-(width / 2), -(height / 2), width, height);

    let figure = cube.GetFigure()
    
    figure.forEach(edge => {
        drawLine(edge[0], edge[1], '#ffffff')
    });
}

render()
/*
setInterval(() => {
    cube.SetRotation({x: -0.5, y: -0.5, z: 0.5})
    render()
}, 100)
*/
document.querySelector('#axisX').addEventListener('input', event => {
    angleX = event.target.value
    rotateFigure()
    render()
})
document.querySelector('#axisY').addEventListener('input', event => {
    angleY = event.target.value
    rotateFigure()
    render()
})
document.querySelector('#axisZ').addEventListener('input', event => {
    angleZ = event.target.value
    rotateFigure()
    render()
})
document.querySelector('#scala').addEventListener('input', event => {
    scalar = event.target.value
    render()
})
