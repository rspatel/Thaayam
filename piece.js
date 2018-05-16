function Piece(color, startPosition) {
    this.color = color;
    this.position = startPosition;

    this.move = function(numSpaces) {
        checkValidMove();
        moveToSpace();
    }

    function checkValidMove(here, there) {
        var path = Board.path;
        
    }
}
