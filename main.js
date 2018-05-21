var canvas;
var canvasContext;
var grid;
var numberOfPlayers = 4;
var playerArr = [];
var names = [];
var colors = [];
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

    //create tiles
    grid = create2DArray( ROWS, COLS );
    for ( i = 0; i < ROWS; i++ ) {
        for ( j = 0; j < COLS; j++ ) {
            grid[i][j] = new Tile( j*WIDTH, i*WIDTH, WIDTH );
        }
    }

    //Set the home tiles
    grid[0][2] = new Home( grid[0][2].x,  grid[0][2].y,  grid[0][2].w);
    grid[2][0] = new Home( grid[2][0].x,  grid[2][0].y,  grid[2][0].w);
    grid[2][4] = new Home( grid[2][4].x,  grid[2][4].y,  grid[2][4].w);
    grid[4][2] = new Home( grid[4][2].x,  grid[4][2].y,  grid[4][2].w);

    //make home tiles different color
    grid[0][2].color = "yellow";
    grid[2][0].color = "red";
    grid[2][4].color = "green";
    grid[4][2].color = "blue";

    grid[2][2] = new Objective( grid[2][2].x, grid[2][2].y, grid[2][2].w );

    //objective tile color
    grid[2][2].color = "black";

    names = [
        "Ravi",
        "Shivam",
        "Payal",
        "Radhika"
    ];

    colors = [
        "black",
        "black",
        "black",
        "black"
    ];

    //create Players
    for ( i = 0; i < numberOfPlayers; i++ ) {
        playerArr[i] = new Player( names[i], colors[i] );
    }

    //assign each player a home
    for ( i = 0; i < numberOfPlayers; i++ ) {
        if ( i === 0 ) {
            playerArr[i].home = grid[4][2];
        }
        else if ( i === 1 ) {
            playerArr[i].home = grid[0][2];
        }
        else if ( i === 2 ) {
            playerArr[i].home = grid[2][4];
        }
        else if ( i === 3 ) {
            playerArr[i].home = grid[2][0];
        }
    }

}

function drawEverything() {
    //black background
    colorRect(0,0,canvas.width,canvas.height,'grey');

    //draw tiles
    for ( i = 0; i < ROWS; i++ ) {
        for ( j = 0; j < COLS; j++ ) {
            grid[i][j].draw();
        }
    }

    //draw pieces
    for ( i = 0; i < numberOfPlayers; i++ ) {
        for ( j = 0; j < playerArr[i].pieces.length; j++) {
            playerArr[i].pieces[j].draw( playerArr[i].home.slots[0][j][0],  playerArr[i].home.slots[0][j][1] );
        }
    }

}

function colorRect( leftX, topY, width, height, drawColor ) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect( leftX, topY, width, height );
}

function colorCircle(centerX,centerY,radius,color) {
        canvasContext.fillStyle = color;
        canvasContext.beginPath();
        canvasContext.arc(centerX,centerY,radius,0,Math.PI*2, true);
        canvasContext.fill();
}
