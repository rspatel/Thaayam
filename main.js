var canvas;
var canvasContext;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawEverything();
}

function drawEverything() {
    //black background
    colorRect(0,0,canvas.width,canvas.height,'black');
}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}
