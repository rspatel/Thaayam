var canvas;
var canvasContext;
var grid;
const WIDTH = 100;
const ROWS = 5;
const COLS = 5;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setup();
    drawEverything();
}

function create2DArray(rows, cols) {
    var arr = new Array( rows );
    for ( i = 0; i < arr.length; i++ ) {
        arr[i] = new Array( cols );
    }
    return arr;
}

function setup() {
    grid = create2DArray( ROWS, COLS );
    for ( i = 0; i < ROWS; i++ ) {
        for ( j = 0; j < COLS; j++ ) {
            grid[i][j] = new Tile( i*WIDTH, j*WIDTH, WIDTH );
        }
    }
}

function drawEverything() {
    //black background
    colorRect( 0, 0, canvas.width, canvas.height, 'red' );

    //draw tiles
    for ( i = 0; i < ROWS; i++ ) {
        for ( j = 0; j < COLS; j++ ) {
            grid[i][j].show();
        }
    }
}

function colorRect( leftX, topY, width, height, drawColor ) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect( leftX, topY, width, height );
}
