const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

var i = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    init();
});

function init() {
    if(canvas.getContext) {
        draw();
    } else {
        //canvas não suportado
    }
}
function draw() {
    ctx.clearRect(0, 0, 800, 800); // clear canvas

    ctx.fillStyle = "rgb(200,0,0)";

    var radius = 10;
    ctx.beginPath();
    ctx.arc(i, i, 10, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(i+40, i+80, 10, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo( 125, 125);
    ctx.lineTo(i+300, i+200);
    ctx.closePath();
    ctx.stroke();

    i++;
    window.requestAnimationFrame(draw);
}

init();
