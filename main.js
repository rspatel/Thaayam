var canvas;
var canvasContext;
var grid;
var numberOfPlayers = 4;
var playerArr = [];
var names = [];
var colors = [];
var currentPlayer;
var rollAgain = false;
var dragging = false;
var draggingPiece = null;

const WIDTH = 100;
const ROWS = 5;
const COLS = 5;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    setup();

    var framesPerSecond = 60;
    setInterval(function() {
        drawEverything();
    }, 1000/framesPerSecond);

    canvas.addEventListener('mousedown', handleMouseDown);

    canvas.addEventListener('mousemove', handleMouseMove);

    canvas.addEventListener('mouseup', handleMouseUp);

}

function handleMouseDown(evt) {
    if ( isPlayersPiece(evt) == true ) {
        dragging = true;
    }
}

function handleMouseMove(evt) {
    if ( dragging ) {
        var mouse = calculateMousePos(evt);
        draggingPiece.x = mouse.x;
        draggingPiece.y = mouse.y;
    }
}

function handleMouseUp(evt) {
    var location = whatSquare(evt);

    dragging = false;
    draggingPiece = null;
}

function isPlayersPiece(evt) {
    var mouse = calculateMousePos(evt)
    for ( var i = 0; i < playerArr[0].pieces.length; i++ ) {
        var isX = false;
        var isY = false;
        if ( (mouse.x >= playerArr[0].pieces[i].x - 10) && (mouse.x <= playerArr[0].pieces[i].x + 10) ) {
            isX = true;
        }
        if ( (mouse.y >= playerArr[0].pieces[i].y - 10) && (mouse.y <= playerArr[0].pieces[i].y + 10) ) {
            isY = true;
        }
        if ( isX && isY ) {
            draggingPiece = playerArr[0].pieces[i];
            return true;
        }
    }
    return false;
}

function whatSquare( evt ) {
    /*
    1. what square the piece is on
    2. check if that square is a possible move based on the player's moves
        a. the path for the player
        b. what grid cor the piece was originaly on
        c. what grid cor the piece is now on
        d. the avaiable moves the player has
    3. center the piece on the square
    */
    var mouse = calculateMousePos(evt);
    for ( let i = 0; i < 5; i++ ) {
        for ( let j = 0; j < 5; j++ ) {
            var isX = false;
            var isY = false;
            if ( (mouse.x >= grid[i][j].x) && (mouse.x <= grid[i][j].x + 100) ) {
                isX = true;
            }
            if ( (mouse.y >= grid[i][j].y) && (mouse.y <= grid[i][j].y + 100) ) {
                isY = true;
            }
            if ( isX && isY ) {
                return [i, j];
            }
        }
    }
}

function calculateMousePos( evt ) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

function create2DArray( rows, cols ) {
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
    grid[0][2] = new Home( grid[0][2].x,  grid[0][2].y,  grid[0][2].w );
    grid[2][0] = new Home( grid[2][0].x,  grid[2][0].y,  grid[2][0].w );
    grid[2][4] = new Home( grid[2][4].x,  grid[2][4].y,  grid[2][4].w );
    grid[4][2] = new Home( grid[4][2].x,  grid[4][2].y,  grid[4][2].w );

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

    //draw inital background
    colorRect(0,0,canvas.width,canvas.height, "#21618C" );

    //draw pieces
    for ( i = 0; i < numberOfPlayers; i++ ) {
        for ( j = 0; j < playerArr[i].pieces.length; j++ ) {
            playerArr[i].pieces[j].x = playerArr[i].home.slots[0][j][0];
            playerArr[i].pieces[j].y = playerArr[i].home.slots[0][j][1];
            playerArr[i].pieces[j].draw();
        }
    }

}

function drawEverything() {
    //background color
    //colorRect(0,0,canvas.width-200,canvas.height, "#21618C" );

    //draw tiles
    for ( i = 0; i < ROWS; i++ ) {
        for ( j = 0; j < COLS; j++ ) {
            grid[i][j].draw();
        }
    }

    //draw pieces
    for ( i = 0; i < numberOfPlayers; i++ ) {
        for ( j = 0; j < playerArr[i].pieces.length; j++ ) {
            playerArr[i].pieces[j].draw();
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

function rolling() {
    //background color
    colorRect(500,0,200,canvas.height, "#21618C" );

    currentPlayer = playerArr[0];
    var number = currentPlayer.rollDice( board.dice );
    if ( number === 8 || number === 4) {
        console.log( currentPlayer.moves );
        rollAgain = true;
    } else {
        console.log( currentPlayer.moves );
        rollAgain = false;
    }
    shouldRollAgain();

    canvasContext.fillStyle = 'black';
    canvasContext.fillText( currentPlayer.moves, 600, 200 );
}

// function whosTurn() {
//
// }

function shouldRollAgain() {
    var x = document.getElementById("rollButton");
    if ( rollAgain ) {
        x.style.display = "inline-block";
    }
    else {
        x.style.display = "none";
    }
}

function dragPiece(  ) {
    /*
    1. find mouse position
    2. on mouse down check to see if over a players pieces
    3. while mouse down redraw 60fps the entire board with the new position of the piece
    4. on mouse up check if it is a vaild title to move
        a. center on tile if true
        b. else return to original position
    */
}
